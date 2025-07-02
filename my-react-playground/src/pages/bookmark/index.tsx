import { useEffect, useState } from 'react'
import CommonHeader from '../../components/common/header/CommonHeader'
import Card from '../bookmark/components/Card'
// CSS
import styles from '../bookmark/styles/index.module.scss'
// Types
import type { CardDTO } from '../index/types/card'

function BookmarkPage() {
    const [data, setData] = useState([])
    const getData = () => {
        const bookmarkString = localStorage.getItem('bookmark')
        const getLocalStorage = bookmarkString ? JSON.parse(bookmarkString) : []

        if (getLocalStorage) setData(getLocalStorage)
        else setData([])
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className={styles.page}>
            {/* 공통 헤터 UI 부분 */}
            <CommonHeader />
            <main className={styles.page__contents}>
                {data.map((item: CardDTO) => {
                    return <Card prop={item} key={item.id} />
                })}
            </main>
        </div>
    )
}

export default BookmarkPage