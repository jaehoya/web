import styles from './CommonHeader.module.scss'

function CommonHeader() {
	return (
		<div className={styles.header}>
			<div className={styles.header_logoox}>
				<img src="" alt="" />
				<span className={styles.header_logoBox__title}>PhotoSplash</span>
			</div>
			<div className={styles.header__profileBox}>
				<button className={styles.header__profileBox__button}>사진 제출</button>
				<button className={styles.header__profileBox__button}>북마크</button>
				<span className={styles.header__profileBox__userName}>이재호 ㅣ@jaeho_instagram</span>
			</div>
		</div>
	)
}

export default CommonHeader