import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import SafeArea from '../../commons/components/SafeArea';
import {styles} from '../styles/ratingStyles';
import HeaderImage from '../../../assets/images/rating_header_image.svg';
import Star from '../../../assets/images/star.svg';
import StarSelected from '../../../assets/images/star_filled.svg';
import {Strings} from '../../../utils/values/Strings';
import Input from '../../commons/components/Input';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import BottomButton from '../../commons/components/BottomButton';
import {commonStyles} from '../../commons/styles/commonStyles';
import {submitOrderRating} from '../Api';
import {connect} from 'react-redux';
import LoaderError from '../../commons/components/LoaderError';

let stars = [1, 2, 3, 4, 5];

const Rating = (props) => {
  const [groceryStars, setGroceryStars] = useState(0);
  const [deliveryStars, setDeliveryStars] = useState(0);
  const [groceryReason, setGroceryReason] = useState('');
  const [deliveryReason, setDeliveryReason] = useState('');

  let {order_id, store_name} = props.order;

  const submitRating = () => {
    let pars = {
      order_id: order_id,
      store_rating: groceryStars,
      store_feedback: groceryReason,
      delivery_rating: deliveryStars,
      delivery_feedback: deliveryReason,
    };

    props.submitOrderRating(pars);
  };

  const getDisabled = () => {
    if (groceryStars < 5 || deliveryStars < 5) {
      if (groceryStars < 5 && !groceryReason) {
        return true;
      } else if (deliveryStars < 5 && !deliveryReason) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };

  return (
    <SafeArea>
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps={'handled'}
        style={commonStyles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>
            {Strings.ratingHeading} {store_name}
          </Text>
          <HeaderImage />
        </View>

        <View style={styles.container}>
          <Text style={styles.ratingTitle}>{Strings.rateGrocery}</Text>

          {/* Show stars for grocery rating */}
          <View style={styles.starsContainer}>
            {stars.map((item, index) => (
              <Pressable
                onPress={() => setGroceryStars(index + 1)}
                key={`groceryStar${index}`}>
                {index < groceryStars ? (
                  <StarSelected style={styles.star} />
                ) : (
                  <Star style={styles.star} />
                )}
              </Pressable>
            ))}
          </View>

          {/* Show Input if grocery stars less than 5 */}
          {groceryStars > 0 && groceryStars < 5 && (
            <Input
              value={groceryReason}
              onChange={setGroceryReason}
              containerStyle={styles.inputContainer}
              label={Strings.reason}
              multiline
            />
          )}

          <Text style={styles.ratingTitle}>{Strings.rateDelivery}</Text>

          {/* Show stars for delivery rating */}
          <View style={styles.starsContainer}>
            {stars.map((item, index) => (
              <Pressable
                onPress={() => setDeliveryStars(index + 1)}
                key={`deliveryStar${index}`}>
                {index < deliveryStars ? (
                  <StarSelected style={styles.star} />
                ) : (
                  <Star style={styles.star} />
                )}
              </Pressable>
            ))}
          </View>

          {/* Show Input if delivery stars less than 5 */}
          {deliveryStars > 0 && deliveryStars < 5 && (
            <Input
              value={deliveryReason}
              onChange={setDeliveryReason}
              containerStyle={styles.inputDelivery}
              label={Strings.reason}
              multiline
            />
          )}
        </View>
      </KeyboardAwareScrollView>
      <BottomButton
        label={Strings.submitFeedback}
        disabled={getDisabled()}
        onPress={submitRating}
      />
      <LoaderError retry={submitRating} />
    </SafeArea>
  );
};

const mapStateToProps = (state) => ({
  loading: state.authReducer.loading,
});

const mapDispatchToProps = {
  submitOrderRating,
};

export default connect(mapStateToProps, mapDispatchToProps)(Rating);
