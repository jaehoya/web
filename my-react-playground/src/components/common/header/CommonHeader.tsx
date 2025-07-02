import styles from './CommonHeader.module.scss'
import { useNavigate } from 'react-router-dom';

function CommonHeader() {
    const navigate = useNavigate()
    // 북마크 페이지로 이동
    const moveToPage = (filter: string) => {
        if (filter === 'main') {
            navigate('/')
        } else {
            navigate('/bookmark')
        }
    }
    return (
        <header className={styles.header}>
            <div className={styles.header__logoBox}>
                <img src="src\assets\images\image-logo.JPG" alt="" className={styles.header__logoBox__logo} onClick={() => moveToPage('main')} />
                <span className={styles.header__logoBox__title}>PhotoSplash</span>
            </div>
            <div className={styles.header__profileBox}>
                <button className={styles.header__profileBox__button}>사진제출</button>
                <button className={styles.header__profileBox__button} onClick={() => moveToPage('bookmark')}>
                    북마크
                </button>
                <span className={styles.header__profileBox__userName}>이재호 | _jaeh_o @instagram</span>
            </div>
        </header>
    )
}

export default CommonHeader