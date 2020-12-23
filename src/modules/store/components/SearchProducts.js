import React, {useRef, useEffect, useState} from 'react';
import SafeArea from '../../commons/components/SafeArea';
import CartHeader from '../../commons/components/CartHeader';

const SearchProducts = () => {
  let input = useRef(null);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    input.current.focus();
  });

  return (
    <SafeArea>
      <CartHeader
        search
        onSearchChange={setSearchInput}
        searchValue={searchInput}
        inputRef={input}
      />
    </SafeArea>
  );
};

export default SearchProducts;
