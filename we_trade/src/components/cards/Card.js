import styles from './Card.module.scss';

function Card(props) {
    return (
        <div className={styles.card}>
            <div style={{ display: "flex" }}>
                <img style={{ marginRight: "16px" }} src={props.props.avatar_image} height={115} width={115} />
                <div>
                    <div className={styles.name}>{props.props.name}<img src="icons/Star.svg" style={{ marginLeft: "4px" }} height={18} width={18} /></div>
                    <span className={styles.badge}>
                        <img src="icons/person_add_alt.svg" height={10} width={10} />
                        {props.props.followers_cta}</span>
                    <span  className={styles.badge}>
                        <img src="icons/icon_dollar.svg" height={10} width={10} />
                        {props.props.exchange_cta}
                    </span>
                    <div className={styles.tradeContainer}><span>Trade Style <div>{props.props.trade_style}</div></span>
                        <span>Type <div>{props.props.type}</div></span></div>
                </div>

            </div>
            <div className={styles.innerContainer}>
                <div className={styles.title}>30D ROI 
                <div className={styles.titleValue}>
                    {props.props.roi}</div></div>
                <div className={styles.title}>30D PNL<div className={styles.titleValue} >{props.props.pnl}</div></div>
                <div className={styles.title}>AUM<div className={styles.titleValue}>{props.props.aum} </div></div>
                <div className={styles.title}>Balance<div className={styles.titleValue}>{props.props.balance} </div></div>
            </div>
            <button className={styles.followButton}>Follow</button>
        </div>


    );
}


export default Card;