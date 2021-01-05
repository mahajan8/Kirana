import React, {useState} from 'react';
import {
  View,
  Text,
  Pressable,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Header from '../../commons/components/Header';
import SafeArea from '../../commons/components/SafeArea';
import {styles} from '../styles/ratingStyles';
import HeaderImage from '../../../assets/images/rating_header_image.svg';
import Star from '../../../assets/images/star.svg';
import StarSelected from '../../../assets/images/star_filled.svg';
import {Strings} from '../../../utils/values/Strings';
import Input from '../../commons/components/Input';
import Button from '../../commons/components/Button';

let stars = [1, 2, 3, 4, 5];

const Rating = () => {
  const [groceryStars, setGroceryStars] = useState(0);
  const [deliveryStars, setDeliveryStars] = useState(0);
  const [groceryReason, setGroceryReason] = useState('');
  const [deliveryReason, setDeliveryReason] = useState('');

  return (
    <SafeArea>
      <KeyboardAvoidingView
        style={{flexGrow: 1}}
        contentContainerStyle={{flexGrow: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 50 : 20}>
        <ScrollView
          contentContainerStyle={{flexGrow: 1}}
          bounces={false}
          keyboardShouldPersistTaps="handled">
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
              />
            )}
          </View>

          <Button
            label={Strings.submitFeedback}
            Style={styles.button}
            disabled
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeArea>
  );
};

export default Rating;
