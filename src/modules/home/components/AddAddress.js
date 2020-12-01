import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Strings} from '../../../utils/values/Strings';
import Button from '../../commons/components/Button';
import {Actions} from 'react-native-router-flux';
import SafeArea from '../../commons/components/SafeArea';
import Header from '../../commons/components/Header';
import {styles} from '../styles/addAddressStyles';
import Input from '../../commons/components/Input';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import CustomMarker from '../../../assets/images/address_map_marker.svg';
import {setAddress} from '../HomeActions';
import {connect} from 'react-redux';

const AddAddress = (props) => {
  const [houseNumber, setHouseNumber] = useState('');
  const [landmark, setLandMark] = useState('');
  const [addressType, setAddressType] = useState(null);

  let {lat, lng, formatted_address} = props.location;

  return (
    <SafeArea>
      <KeyboardAvoidingView
        style={{flexGrow: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        enabled
        keyboardVerticalOffset={20}>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          bounces={false}
          keyboardShouldPersistTaps="handled">
          <Header title={Strings.addresses} type={1} />
          <View style={styles.mapView}>
            <MapView
              provider={PROVIDER_GOOGLE}
              style={styles.map}
              region={{
                latitude: lat,
                longitude: lng,
                latitudeDelta: 0.03,
                longitudeDelta: 0.03,
              }}
              // onRegionChange={(region) => setRegion(region)}
              scrollEnabled={false}>
              <Marker coordinate={{latitude: lat, longitude: lng}}>
                <CustomMarker
                  style={styles.marker}
                  width={EStyleSheet.value('42rem')}
                  height={EStyleSheet.value('42rem')}
                />
              </Marker>
            </MapView>
          </View>

          <Input
            value={formatted_address}
            edit={false}
            label={Strings.location}
            multiline
          />

          <Input
            value={houseNumber}
            onChange={setHouseNumber}
            label={Strings.addressLine}
          />

          <Input
            value={landmark}
            onChange={setLandMark}
            label={Strings.landmark}
          />
          <View style={styles.saveAddressContainer}>
            <Text style={styles.saveAddressText}>{Strings.saveAddressAs}</Text>
            <View style={styles.buttonsContainer}>
              <Button
                label={Strings.home}
                bordered
                Style={[
                  styles.buttonStyle,
                  addressType === 0 && styles.selectedButton,
                ]}
                labelStyle={[
                  styles.buttonLabel,
                  addressType !== 0 && styles.unSelectedLabel,
                ]}
                onPress={() => setAddressType(0)}
              />

              <Button
                label={Strings.work}
                bordered
                Style={[
                  styles.buttonStyle,
                  addressType === 1 && styles.selectedButton,
                ]}
                labelStyle={[
                  styles.buttonLabel,
                  addressType !== 1 && styles.unSelectedLabel,
                ]}
                onPress={() => setAddressType(1)}
              />

              <Button
                label={Strings.other}
                bordered
                Style={[
                  styles.buttonStyle,
                  addressType === 2 && styles.selectedButton,
                ]}
                labelStyle={[
                  styles.buttonLabel,
                  addressType !== 2 && styles.unSelectedLabel,
                ]}
                onPress={() => setAddressType(2)}
              />
            </View>
          </View>
          <Button
            label={Strings.save}
            onPress={() => {
              props.setAddress({
                location: props.location,
                houseNumber,
                landmark,
                addressType,
              });
              Actions.reset('drawer');
            }}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeArea>
  );
};

const mapStateToProps = (state) => ({
  loading: state.authReducer.loading,
});

const mapDispatchToProps = {
  setAddress,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddAddress);
