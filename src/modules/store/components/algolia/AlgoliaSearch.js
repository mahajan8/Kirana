// Foundations
import React from 'react';
import {View, Text, StatusBar} from 'react-native';

// Constants
import {AppConfig} from '../../../../config/AppConfig';
import {environment} from '../../../../config/EnvConfig';

// Hooks
import {Configure, InstantSearch} from 'react-instantsearch-native';

// Components
import SafeArea from '../../../commons/components/SafeArea';
import SearchBox from './SearchBox';
import InfiniteHits from './InfiniteHits';
import algoliasearch from 'algoliasearch/lite';

/**
 * Render & config component for Algolia-driven Search
 * @param {String} storeId Current ID of store
 */
const AlgoliaSearch = ({storeId}) => {
  const searchClient = algoliasearch(
    AppConfig[environment].algoliaShortKey,
    AppConfig[environment].algoliaLongKey,
  );

  return (
    <SafeArea>
      <InstantSearch
        searchClient={searchClient}
        indexName={AppConfig[environment].algoliaIndexName}>
        <SearchBox />
        {storeId && <Configure filters={`store_id:${storeId}`} />}
        <InfiniteHits />
      </InstantSearch>
    </SafeArea>
  );
};

export default AlgoliaSearch;
