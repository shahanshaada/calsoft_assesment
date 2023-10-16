import { useState } from "react";
import GenericInput from "../../shared_components/GenericInput/GenericInput";
import GenericOtp from "../../shared_components/GenericOTP/GenericOtp";
import SharedModal from "../../shared_components/Modal/Modal";
import styles from './ResetPassword.module.scss'

function ResetPassword() {
    const [show, setShow] = useState(false);
    const screenOneData = { title: "Reset Password", description: '', modalButton: [{ label: "Cancel", proceed: false }, { label: "Create", proceed: true }] }
    const screenTwoData = { title: "Recover Password", description: "An email containing link to recover your password will be sent to the below mentioned mail address", modalButton: [{ label: "Cancel", proceed: false }, { label: "Proceed", proceed: true }] }
    const screenThreeData = { title: "Your Password has been updated succesfully", description: '', modalButton: [{ label: "Okay", proceed: false }] }

    const [screen, setScreen] = useState('one')
    // function handleChangeScreen(){
    //     screen == 'one'?
    //     setScreen('two'):setScreen('three')
    // }
    // console.log(screen)
    return (
        <div className="App">
            <button className="btn btn-info btn-sm" onClick={() => {
                setScreen('one')
                setShow(true)
            }}>Open Modal </button>
            <hr />

            <SharedModal
                show={show}
                handleChangeScreen={() => screen == 'one' ?
                    setScreen('two') : setScreen('three')}
                handleClose={() => setShow(false)}
                handleShow={() => setShow(true)}
                modalTitle={screen == 'one' ? screenOneData.title : screen == 'two' ? screenTwoData.title : screenThreeData.title}
                modalDescription={screen == 'one' ? screenOneData.description : screen == 'two' ? screenTwoData.description : screenThreeData.description}
                modalButtonItems={screen == 'one' ? screenOneData.modalButton : screen == 'two' ? screenTwoData.modalButton : screenThreeData.modalButton}
            >
                <div className={styles.container}>
                    {screen == 'one' ?
                        <>
                            <GenericInput placeholderText="Enter New Password" leftIcon="icons/lock_icon.svg" rightIcon="icons/blind_eye.svg" inputTypel="password" />
                            <GenericInput placeholderText="Re-enter New Password" leftIcon="icons/lock_icon.svg" rightIcon="icons/blind_eye.svg" inputTypel="password"  />
                        </>
                        : screen == 'two' ? <div className={styles.otp}><GenericOtp totalNumber={6} resendText='Request a new code' />
                        <div className={styles.screenTwoInfo}>After 5 unsuccessful login attempts, your account will be locked for 2 hours</div></div> : <div style={{ textAlign: "center" }}><img src="password_success.png" /></div>
                    }
                </div>


            </SharedModal>

        </div>
    );
}
export default ResetPassword