import styles from './GenericOtp.module.scss'
function GenericOtp({totalNumber,resendText}){
    console.log(totalNumber)
return(
    <>
    <div className={styles.inputContainer}>
    {[...Array(totalNumber)].map((index) => <input key={index}/>)}
    </div>
    <div className={styles.resendLabel}>{resendText}</div>
    </>
    

)
}
export default GenericOtp;