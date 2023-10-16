import styles from './Spotlight.module.scss';
import data from '../../dummy_data.json';
import Card from '../cards/Card';
import GenericInput from '../../shared_components/GenericInput/GenericInput';
function SpotLight() {
    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
            <div ><p className={styles.heading}>Spotlight</p> <p className={styles.heading2}>Top Portfolios by 30 Day PNL</p></div>
            <div > 
            <GenericInput placeholderText="Search by portifolio name" leftIcon="icons/Search.svg" heightVal="40px" inputTypel="text" />
                <button>Explore More <img src="icons/right_Arrow.svg"/> </button>
            </div>
            </div>
            <div className={styles.cardList}>
                {data.user_data.map((item) => <Card props={item} />)}
            </div>

        </div>

    )
}
export default SpotLight;