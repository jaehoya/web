import styles from './CommonFooter.module.scss';
import { useImageStore } from '../../../store/useImagegStore';


function CommonFooter() {
   const setPage = useImageStore(state => state.setPage);
   const page = useImageStore(state => state.page);

   // 페이지가 1보다 작아지지 않도록 방지
   const handlePageChange = (newPage: number) => {
      if (newPage < 1) return;
      setPage(newPage);
   };
   
   return (
      <footer className={styles.footer}>
         <div className={styles.pagination}>
            <button className={styles.pagination__button}>
               <img src="src\assets\icons\icon-arrowLeft.svg" alt=" " onClick={() => handlePageChange(page - 1)} />
            </button>
            {/* 변경될 UI 부분 */}
            <span>{page}</span>
            <button className={styles.pagination__button}>
               <img src="src\assets\icons\icon-arrowRight.svg" alt=" " onClick={() => handlePageChange(page + 1)} />
            </button>
         </div>
      </footer>
   )
}

export default CommonFooter