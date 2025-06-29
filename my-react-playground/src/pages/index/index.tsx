// MainPage.tsx
import { useState, useEffect } from 'react';
import { useImageStore } from '../../store/useImagegStore';
import { Link } from 'react-router-dom';
import styles from './styles/index.module.scss'

// components
import CommonHeader from '../../components/common/header/CommonHeader';
import CommonSerachBar from '../../components/common/searchBar/CommonSerachBar';
import CommonNav from '../../components/common/navigation/CommonNav';
import CommonFooter from '../../components/common/footer/CommonFooter';
import Card from './components/card/Card';
import CommonDialog from '../../components/common/dialog/CommonDialog';

// types
import type { CardDTO } from './types/card';


function MainPage() {
	// 상태 관리 훅을 사용하여 이미지 데이터를 가져옵니다.
	const [search, setSearch] = useState('Korea')
	const [page, setPage] = useState(1)
	const { images, loading, error, fetchImages } = useImageStore()
	const [imgData, setImgData] = useState<CardDTO | null>(null)
	const [open, setOpen] = useState<boolean>(false)

	const CARD_LIST = images.map((card: CardDTO) => {
		return <Card data={card} key={card.id} handleDialog={setOpen} handleSetData={setImgData} />
	})


	useEffect(() => {
		fetchImages(search, page)
	}, [search, page, fetchImages])


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
					{CARD_LIST}
				</div>
			</div>
			{/* 공통 푸터 UI 부분 */}
			<CommonFooter />
			{open && <CommonDialog data={imgData} handleDialog={setOpen} />}
		</div>
	)
}

export default MainPage