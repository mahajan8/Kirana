import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import PropTypes from 'prop-types';
import {connectInfiniteHits} from 'react-instantsearch-native';

const styles = StyleSheet.create({
  separator: {
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  item: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleText: {
    fontWeight: 'bold',
  },
  name: {
    fontSize: 18,
  },
  price: {
    fontWeight: '600',
  },
});

const InfiniteHits = ({hits, hasMore, refine}) => {
  console.log(hits);
  return (
    <FlatList
      data={hits}
      keyExtractor={(item) => item.objectID}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      onEndReached={() => hasMore && refine()}
      renderItem={({item}) => (
        <View style={styles.item}>
          <View>
            <Text style={styles.name} numberOfLines={1}>
              {item.product_name}
            </Text>
            <Text>{item.product_quantity}</Text>
          </View>
          <View>
            <Text style={styles.price}>₹ {item.product_price}</Text>
          </View>
        </View>
      )}
    />
  );
};

InfiniteHits.propTypes = {
  hits: PropTypes.arrayOf(PropTypes.object).isRequired,
  hasMore: PropTypes.bool.isRequired,
  refine: PropTypes.func.isRequired,
};

export default connectInfiniteHits(InfiniteHits);
