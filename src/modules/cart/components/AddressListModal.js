import React from 'react';
import {View, Text, Pressable, FlatList} from 'react-native';
import {Strings} from '../../../utils/values/Strings';
import ModalContainer from '../../commons/components/ModalContainer';
import Cross from '../../../assets/images/cross.svg';
import RadioSelected from '../../../assets/images/filter_radio_selected.svg';
import RadioUnSelected from '../../../assets/images/filter_radio_unselected.svg';
import {connect} from 'react-redux';
import {addressTypes} from '../../../utils/values/Values';
import {getKeyByValue, ripple} from '../../../utils/utility/Utils';
import {Actions} from 'react-native-router-flux';
import {styles} from '../styles/addressListModalStyles';
import {setCartLocation} from '../CartActions';
import {commonStyles} from '../../commons/styles/commonStyles';

const AddressListModal = (props) => {
  let {visible, setVisible, cartLocation, addresses} = props;

  //Address Box Layout
  const renderAddress = (item) => {
    let {id, type, block_address, landmark} = item;
    return (
      <Pressable
        style={styles.addressContainer}
        onPress={() => {
          props.setCartLocation({...item.location, id, type});
          setVisible(false);
        }}
        android_ripple={ripple}>
        {cartLocation && cartLocation.id === id ? (
          <RadioSelected style={styles.radio} />
        ) : (
          <RadioUnSelected style={styles.radio} />
        )}
        <View style={styles.addressDetails}>
          <Text style={styles.addressType}>
            {getKeyByValue(addressTypes, type)}
          </Text>
          <Text style={styles.address}>
            {block_address} {landmark}
          </Text>
        </View>

        <Text
          style={styles.editContainer}
          onPress={() => {
            setVisible(false);
            Actions.addAddress({id, location: item.location, item});
          }}>
          Edit
        </Text>
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
          <Pressable
            onPress={() => setVisible(false)}
            hitSlop={commonStyles.hitSlop}>
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
          }}
          style={styles.addAddressButton}
          android_ripple={ripple}>
          <Text style={styles.addNewAddress}>{Strings.addNewAddress}</Text>
        </Pressable>
      </Pressable>
    </ModalContainer>
  );
};

const mapStateToProps = (state) => ({
  addresses: state.navigationReducer.addresses,
  cartLocation: state.cartReducer.cartLocation,
});

const mapDispatchToProps = {
  setCartLocation,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddressListModal);
