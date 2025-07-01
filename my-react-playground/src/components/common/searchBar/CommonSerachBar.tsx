import styles from './CommonSerachBar.module.scss';
import { useImageStore } from '../../../store/useImagegStore';
import { useState } from 'react';

function CommonSerachBar() {
   const [value, setValue] = useState('');
   const setSearchValue = useImageStore(state => state.setSearchValue);

   const handleSearch = () => {
      if (!value.trim()) return;
      setSearchValue(value);
      setValue('');
   };

   const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
         handleSearch();
      }
   };

   return (
      <div className={styles.searchBar}>
         <div className={styles.searchBar__search}>
            <input
               type="text"
               placeholder='찾으실 이미지를 검색하세요'
               className={styles.searchBar__search__input}
               value={value}
               onChange={(e) => setValue(e.target.value)}
               onKeyDown={handleKeyDown}
            />
            <img src="src/assets/icons/icon-search.svg" alt="" onClick={handleSearch} />
         </div>
      </div>
   );
}

export default CommonSerachBar