// Foundations
import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import PropTypes from 'prop-types';
import {styles} from '../../styles/productSubStyles';

// Hooks
import {connectInfiniteHits} from 'react-instantsearch-native';
import {Actions} from 'react-native-router-flux';

// Components
import ProductBox from '../ProductBox';

const InfiniteHits = ({hits, hasMore, refine}) => {
  return (
    <FlatList
      data={hits}
      onEndReached={() => hasMore && refine()}
      renderItem={({item, index}) => {
        return (
          <ProductBox
            key={item._id}
            vertical
            onPress={() => Actions.productDetails({subCategoryName: '', item})}
            item={item}
          />
          // <View style={styles.item}>
          //   <View>
          //     <Text style={styles.name} numberOfLines={1}>
          //       {item.product_name}
          //     </Text>
          //     <Text>{item.product_quantity}</Text>
          //   </View>
          //   <View>
          //     <Text style={styles.price}>₹ {item.product_price}</Text>
          //   </View>
          // </View>
        );
      }}
      numColumns={2}
      keyExtractor={(item) => item._id}
      contentContainerStyle={[styles.listContainer]}
    />
  );
};

InfiniteHits.propTypes = {
  hits: PropTypes.arrayOf(PropTypes.object).isRequired,
  hasMore: PropTypes.bool.isRequired,
  refine: PropTypes.func.isRequired,
};

export default connectInfiniteHits(InfiniteHits);
