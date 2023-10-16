import styles from './GenericInput.module.scss'
function GenericInput(props){
    const {placeholderText,leftIcon,rightIcon,heightVal,inputTypel}=props;
return(
    <div className={styles.outer}>
<img src={leftIcon} className={styles.lock}/><input style={{height:heightVal?heightVal:'60px'}} type={inputTypel} placeholder={placeholderText}/>
{rightIcon &&<img src={rightIcon}/>}
    </div>
)
}
export default GenericInput;