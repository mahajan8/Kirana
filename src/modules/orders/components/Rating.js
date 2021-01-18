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

let stars = [1, 2, 3, 4, 5];

const Rating = (props) => {
  const [groceryStars, setGroceryStars] = useState(0);
  const [deliveryStars, setDeliveryStars] = useState(0);
  const [groceryReason, setGroceryReason] = useState('');
  const [deliveryReason, setDeliveryReason] = useState('');

  const submitRating = () => {
    let pars = {
      order_id: '',
      store_rating: groceryStars,
      store_feedback: groceryReason,
      delivery_rating: deliveryStars,
      delivery_feedback: deliveryReason,
    };

    props.submitOrderRating(pars);
  };

  return (
    <SafeArea>
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps={'handled'}
        style={commonStyles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>
            {Strings.ratingHeading} {"The Baker's Dozen"}
          </Text>
          <HeaderImage />
        </View>

        <View style={styles.container}>
          <Text style={styles.ratingTitle}>{Strings.rateGrocery}</Text>
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
      <BottomButton label={Strings.submitFeedback} disabled />
    </SafeArea>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  submitOrderRating,
};

export default connect(mapStateToProps, mapDispatchToProps)(Rating);
