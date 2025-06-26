// MainPage.tsx
import { useState,useEffect } from 'react';
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
	
	const getData = async () => {
		// 데이터 가져오는 함수
		const API_URL = 'https://api.unsplash.com/search/photos'; // 예시 API URL
		const API_KEY = 'kAZ7kFJXaXh8ahSJkjW0ryRcBNJYnjtvkZsExSsSozs'; // Unsplash API 키
		const PER_PAGE = 20; // 페이지당 이미지 수

		const searchValue = 'Korea'; // 검색어, 실제로는 사용자 입력값을 사용
		const pageValue = 100; // 페이지 번호, 실제로는 사용자 입력값을 사용
		try {
			const res = await axios.get(`${API_URL}?query=${searchValue}&client_id=${API_KEY}&page=${pageValue}&per_page=${PER_PAGE}`);
			if (res.status === 200) {
				// CardDTO 타입에 맞게 변환
				const cards: CardDTO[] = res.data.results.map((item: any) => ({
					...item,
					urls: item.urls ?? { small: '' },
					alt_description: item.alt_description ?? '',
				}));
				setImgUrls(cards);
			} else {
				console.error('이미지 URL을 가져오는 데 실패했습니다.');
			}
		} catch (error) {
			console.error('API 요청 실패:', error);
		}
	}
	
	const cardList = imgUrls.map((card: CardDTO) => {
		return (
			<Card data={card} key={card.id}/>
		);
	})

	useEffect(() => {
		console.log('useEffect 실행');
		getData();
	}, []);

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
				<div className={styles.page__contents__imageBox}>{cardList}</div>
			</div>
			{/* 공통 푸터 UI 부분 */}
			<CommonFooter/>
		</div>
	)
}

export default MainPage