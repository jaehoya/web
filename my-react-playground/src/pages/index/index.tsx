// MainPage.tsx
import { useState, useEffect } from 'react';
import { useImageStore } from '../../store/useImagegStore';
import { Link } from 'react-router-dom';
import styles from './styles/index.module.scss'
import axios from 'axios';

// components
import CommonHeader from '../../components/common/header/CommonHeader';
import CommonSerachBar from '../../components/common/searchBar/CommonSerachBar';
import CommonNav from '../../components/common/navigation/CommonNav';
import CommonFooter from '../../components/common/footer/CommonFooter';
import Card from './components/card/Card';

// types
import type { CardDTO } from './types/card';


function MainPage() {
	const [imgUrls, setImgUrls] = useState<CardDTO[]>([]);

	const [search, setSearch] = useState('Korea')
	const [page, setPage] = useState(1)
	const { images, loading, error, fetchImages } = useImageStore()

	const cardList = images.map((card: CardDTO) => {
		return (
			<Card data={card} key={card.id} />
		);
	})

	useEffect(() => {
		fetchImages(search, page)
	}, [search, page, fetchImages])



	//지금 develope-zustand 브랜치를 새롭게 만들었고 여기서 개발할다가 안 되면 돌아갈 예정.



	return (
		<div className={styles.page}>
			{/* 공통 헤더 UI 부분  */}
			<CommonHeader />
			{/* 공통 네비게이션 UI 부분 */}
			<CommonNav />
			<div className={styles.page__contents}>
				<div className={styles.page__contents__introBox}>
					<div className={styles.wrapper}>
						<span className={styles.wrapper__title}>PhotoSplash</span>
						<span className={styles.wrapper__desc}>
							인터넷의 시각 자료 출처입니다. <br />
							모든 지역에 있는 크리에이터들의 지원을 받습니다.
						</span>
						{/* 검색창 UI 부분 */}
						<CommonSerachBar />
						<nav>
							<Link to="/counter">Counter</Link> |{" "}
							<Link to="/calculater">Calculater</Link>
						</nav>
					</div>
				</div>
				<div className={styles.page__contents__imageBox}>
					{loading && <div>로딩중...</div>}
					{error && <div>에러: {error}</div>}
					{images.map((card: CardDTO) => (
						<Card data={card} key={card.id} />
					))}
				</div>
			</div>
			{/* 공통 푸터 UI 부분 */}
			<CommonFooter />
		</div>
	)
}

export default MainPage