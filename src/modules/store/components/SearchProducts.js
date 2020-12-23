import React, {useRef, useEffect, useState} from 'react';
import SafeArea from '../../commons/components/SafeArea';
import CartHeader from '../../commons/components/CartHeader';
import {debounce} from '../../../utils/utility/Utils';
import {connect} from 'react-redux';
import {searchStoreProducts} from '../Api';
import {FlatList, View} from 'react-native';
import ProductBox from './ProductBox';
import {Actions} from 'react-native-router-flux';
import Loader from '../../commons/components/Loader';
import {styles} from '../styles/productSubStyles';
import {clearProducts} from '../StoreActions';

const SearchProducts = (props) => {
  let input = useRef(null);
  const [searchInput, setSearchInput] = useState('');
  const [endReachCallable, setEndReachCallable] = useState(true);
  const {storeDetails, products, totalProductCount} = props.storeReducer;
  let debounceTimer = useRef(null);

  useEffect(() => {
    input.current.focus();
    // props.clearProducts();
  });

  let searchProducts = (query, start = 0) => {
    let pars = {
      start,
      limit: 10,
      sorts: [],
      conditions: [
        {
          key: 'SEARCH_BY_STORE_ID',
          value: storeDetails.id,
          context: null,
        },
        {
          key: 'SEARCH_BY_TEXT',
          value: query,
          context: null,
        },
      ],
    };
    props.clearProducts();
    props.searchStoreProducts(pars);
  };

  const test = debounce(() => console.log(searchInput), 3000);

  const onChangeSearchText = (query) => {
    // debounceTimer.current = null;
    // clearTimeout(debounceTimer.current);
    // debounceTimer.current = setTimeout(() => {
    //   searchProducts(query);
    // }, 500);
    test();
    setSearchInput(query);
  };

  return (
    <SafeArea>
      <CartHeader
        search
        onSearchChange={onChangeSearchText}
        searchValue={searchInput}
        inputRef={input}
      />
      <FlatList
        data={products}
        renderItem={({item, index}) => (
          <ProductBox
            key={`product${item + index}`}
            vertical
            onPress={() => Actions.productDetails({subCategoryName: '', item})}
            item={item}
          />
        )}
        keyExtractor={(item, index) => `product${index}`}
        numColumns={2}
        contentContainerStyle={[styles.listContainer]}
        onMomentumScrollBegin={() => setEndReachCallable(false)}
        onEndReachedThreshold={0.1}
        onEndReached={() => {
          if (!endReachCallable && products.length < totalProductCount) {
            searchProducts(searchInput, products.length);
            setEndReachCallable(true);
          }
        }}
        ListFooterComponent={
          <View style={styles.listLoaderContainer}>
            <Loader show={products.length ? props.loading : false} />
          </View>
        }
      />
    </SafeArea>
  );
};

const mapStateToProps = (state) => ({
  loading: state.authReducer.loading,
  storeReducer: state.storeReducer,
});

const mapDispatchToProps = {
  searchStoreProducts,
  clearProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchProducts);
