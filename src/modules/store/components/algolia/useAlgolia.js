import algoliasearch from 'algoliasearch/lite';

const useAlgolia = () => {
  // Algolia configuration
  const searchClient = algoliasearch(
    '2BRKLSMSWI',
    'fce1b4320fd83ddc7af437d46b6fb93d',
  );
  return searchClient;
};

export default useAlgolia;
