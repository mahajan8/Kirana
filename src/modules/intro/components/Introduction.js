import React, {useState, useRef} from 'react';
import {View, Text, Dimensions} from 'react-native';
import SafeArea from '../../commons/components/SafeArea';
import {styles} from '../styles/introStyle';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Actions} from 'react-native-router-flux';
import Intro1 from '../../../assets/images/intro1.svg';
import Intro2 from '../../../assets/images/intro2.svg';
import Intro3 from '../../../assets/images/intro3.svg';
import {Strings} from '../../../utils/values/Strings';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import Button from '../../commons/components/Button';
import {commonStyles} from '../../commons/styles/commonStyles';

let pages = [
  {title: Strings.introTitle1, subText: Strings.introSubText1},
  {title: Strings.introTitle2, subText: Strings.introSubText2},
  {title: Strings.introTitle3, subText: Strings.introSubText3},
];

let deviceWidth = Dimensions.get('window').width;

const Onboarding = () => {
  const [active, setactive] = useState(0);
  const carousel = useRef(null);

  const renderItem = ({item, index}) => {
    return (
      <View style={styles.carouselContainer}>
        <View style={styles.introImageBackground}>
          {index == 0 ? (
            <Intro1
              width={EStyleSheet.value('250rem')}
              height={EStyleSheet.value('170vrem')}
            />
          ) : index == 1 ? (
            <Intro2
              width={EStyleSheet.value('250rem')}
              height={EStyleSheet.value('153vrem')}
            />
          ) : (
            <Intro3
              width={EStyleSheet.value('264rem')}
              height={EStyleSheet.value('170vrem')}
            />
          )}
        </View>

        <Text style={styles.introTitle}>{item.title}</Text>
        <Text style={[styles.introSubText]}>{item.subText}</Text>
      </View>
    );
  };

  return (
    <SafeArea>
      <View>
        <Carousel
          data={pages}
          ref={carousel}
          renderItem={renderItem}
          sliderWidth={deviceWidth}
          itemWidth={deviceWidth}
          onSnapToItem={(index) => setactive(index)}
        />

        <Pagination
          dotsLength={pages.length}
          activeDotIndex={active}
          containerStyle={styles.paginationContainer}
          dotContainerStyle={{marginRight: 0}}
          dotStyle={styles.activeDotStyle}
          inactiveDotOpacity={0.2}
          inactiveDotScale={1}
        />
      </View>

      <View style={commonStyles.buttonBottomContainer}>
        <Button
          label={Strings.continuePhoneNumber}
          onPress={() => {
            // if (active != pages.length - 1) {
            //   carousel.current.snapToNext();
            // } else {
            Actions.selectLanguage();
            // }
          }}
        />
      </View>
    </SafeArea>
  );
};

export default Onboarding;