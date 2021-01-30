import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, StatusBar} from 'react-native';
import SearchBox from './SearchBox';
import {AppConfig} from '../../../../config/AppConfig';
import {environment} from '../../../../config/EnvConfig';
import InfiniteHits from './InfiniteHits';
import algoliasearch from 'algoliasearch/lite';
import {Configure, InstantSearch} from 'react-instantsearch-native';

const AlgoliaSearch = ({storeId}) => {
  const searchClient = algoliasearch(
    AppConfig[environment].algoliaShortKey,
    AppConfig[environment].algoliaLongKey,
  );

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <InstantSearch
          searchClient={searchClient}
          indexName={AppConfig[environment].algoliaIndexName}>
          <SearchBox />
          <Configure filters={`store_id:${storeId}`} />
          <InfiniteHits />
        </InstantSearch>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#252b33',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});

export default AlgoliaSearch;
