import React from 'react';
import {View, Text, Pressable, FlatList} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Colors} from '../../../utils/values/Colors';
import {Fonts} from '../../../utils/values/Fonts';
import {Strings} from '../../../utils/values/Strings';
import ModalContainer from '../../commons/components/ModalContainer';
import Cross from '../../../assets/images/cross.svg';
import RadioSelected from '../../../assets/images/filter_radio_selected.svg';
import RadioUnSelected from '../../../assets/images/filter_radio_unselected.svg';
import {connect} from 'react-redux';
import {addressTypes} from '../../../utils/values/Values';
import {getKeyByValue} from '../../../utils/utility/Utils';
import {Actions} from 'react-native-router-flux';

const AddressListModal = (props) => {
  let {visible, setVisible, location, addresses} = props;

  const renderAddress = (item) => {
    let {id, type, block_address, landmark} = item;
    return (
      <Pressable
        style={styles.addressContainer}
        onPress={() => {
          props.setLocation({...item.location, id, type});
          setVisible(false);
        }}>
        {location.id === id ? (
          <RadioSelected style={styles.radio} />
        ) : (
          <RadioUnSelected style={styles.radio} />
        )}
        <View>
          <Text style={styles.addressType}>
            {getKeyByValue(addressTypes, type)}
          </Text>
          <Text style={styles.address}>
            {block_address} {landmark}
          </Text>
        </View>
      </Pressable>
    );
  };

  return (
    <ModalContainer
      visible={visible}
      setVisible={setVisible}
      containerStyle={styles.container}>
      <Pressable style={styles.innerContainer}>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>{Strings.selectDeliveryAddress}</Text>
          <Pressable onPress={() => setVisible(false)}>
            <Cross />
          </Pressable>
        </View>

        <FlatList
          data={addresses}
          renderItem={({item}) => renderAddress(item)}
          keyExtractor={(item, index) => `Address${index}`}
          contentContainerStyle={styles.list}
        />

        <Pressable
          onPress={() => {
            setVisible(false);
            Actions.addressSearch();
          }}>
          <Text style={styles.addNewAddress}>{Strings.addNewAddress}</Text>
        </Pressable>
      </Pressable>
    </ModalContainer>
  );
};

const styles = EStyleSheet.create({
  container: {
    justifyContent: 'flex-end',
  },
  innerContainer: {
    height: '90%',
    backgroundColor: Colors.white,
    borderTopLeftRadius: '15rem',
    borderTopRightRadius: '15rem',
    overflow: 'hidden',
  },
  headingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: '14vrem',
    paddingHorizontal: '20rem',
    backgroundColor: Colors.lightGreen,
    justifyContent: 'space-between',
  },
  heading: {
    fontSize: '16rem',
    fontFamily: Fonts.medium,
    lineHeight: '24rem',
    color: Colors.darkGreen,
  },
  addressContainer: {
    paddingHorizontal: '20rem',
    marginTop: '30vrem',
    flexDirection: 'row',
  },
  radio: {
    marginRight: '10rem',
  },
  addressType: {
    fontSize: '14rem',
    fontFamily: Fonts.medium,
    color: Colors.black2,
    textTransform: 'uppercase',
  },
  address: {
    marginTop: '2rem',
    fontSize: '12rem',
    fontFamily: Fonts.regular,
    lineHeight: '20rem',
    letterSpacing: '0.2rem',
    color: Colors.darkGray,
  },
  addNewAddress: {
    fontSize: '14rem',
    fontFamily: Fonts.semiBold,
    color: Colors.themeGreen,
    marginVertical: '24vrem',
    marginLeft: '20rem',
  },
  list: {
    // paddingBottom: '20vrem',
  },
});

const mapStateToProps = (state) => ({
  addresses: state.navigationReducer.addresses,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AddressListModal);
