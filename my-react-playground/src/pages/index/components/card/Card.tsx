import styles from './Card.module.scss';
import type { CardDTO } from '../../types/card';

interface Props {
   data: CardDTO
   handleDialog: (eventValue: boolean) => void;
   handleSetData: (eventValue: CardDTO) => void;
}

function Card({ data, handleDialog, handleSetData }: Props) {
   const openDialog = () => {
      console.log('Card clicked:', data);
      handleDialog(true);
      handleSetData(data);
   }
   return (
      <div className={styles.card} onClick={openDialog}>
         <img src={data.urls?.small ?? ''} alt={data.alt_description ?? ''} className={styles.card__image} />
      </div>
   )
}

export default Card;