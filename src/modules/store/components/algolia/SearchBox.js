// Foundations
import React from 'react';
import {View, TextInput, Pressable} from 'react-native';
import PropTypes from 'prop-types';

// import {Actions} from 'react-native-router-flux';
// import Filter from '../../../../assets/images/filter.svg';
// import {ripple} from '../../../../utils/utility/Utils';
// import {styles} from '../../styles/productSubStyles';

// Hooks
import {connectSearchBox} from 'react-instantsearch-native';

// Components
import CartHeader from '../../../commons/components/CartHeader';

const SearchBox = ({currentRefinement, refine}) => {
  return (
    <View>
      <CartHeader
        search
        onSearchChange={(value) => refine(value)}
        searchValue={currentRefinement}
        onCrossPress={() => refine('')}
        // headerRight={
        //   <Pressable
        //     style={styles.filterIcon}
        //     android_ripple={ripple}
        //     // TODO: make filetrs
        //     onPress={() =>
        //       alert(
        //         'No filters available yet, sorry! This feature is on its way. Email support@kiranakart.app for more info.',
        //       )
        //     }>
        //     <Filter />
        //   </Pressable>
        // }
      />
      {/* <TextInput
        onChangeText={(value) => refine(value)}
        value={currentRefinement}
        placeholder=""
      /> */}
    </View>
  );
};

SearchBox.propTypes = {
  currentRefinement: PropTypes.string.isRequired,
  refine: PropTypes.func.isRequired,
};

export default connectSearchBox(SearchBox);
