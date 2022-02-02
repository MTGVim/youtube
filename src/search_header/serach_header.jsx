import styles from './search_header.module.css';
import React, { memo, useRef } from 'react';

const SearchHeader = memo(({ onSearch }) => {
  console.log('rendered');
  const inputRef = useRef();

  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };
  const onClick = () => {
    handleSearch();
  };
  const onKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.img} src="/images/logo.png" alt="logo" />
        <h1 className={styles.title}>YouTube</h1>
      </div>
      <input
        className={styles.input}
        type="search"
        placeholder="Search..."
        onKeyPress={onKeyPress}
        ref={inputRef}
      ></input>
      <button className={styles.button} type="submit" onClick={onClick}>
        <img
          className={styles.buttonImg}
          src="/images/search.png"
          alt="search"
        ></img>
      </button>
    </header>
  );
});

SearchHeader.displayName = 'SearchHeader';
export default SearchHeader;
