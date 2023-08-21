import React from 'react'
import { CustomModal, Logo, LogoBox, Title } from './styled'
import { FormLogin } from 'components/Form'
import FormSignup from 'components/Form/FormSignup'
import { useAppDispatch, useAppSelector } from 'app/hooks'
import { selectAccount, setAuthTitle, setIsLogInForm } from 'slice'


type Props = {
    open?: boolean,
    onCancel?: () => void,
    onOk: () => void,
    title?: string,
}

const Modal = (props: Props) => {
    const { isLogInForm, authTitle } = useAppSelector(selectAccount)
    const dispatch = useAppDispatch()

    React.useEffect(() => {
        if (authTitle === 'Đăng nhập') {
            dispatch(setIsLogInForm(true))
        } else {
            dispatch(setIsLogInForm(false))
        }
    }, [authTitle])

    const changeFormHandler = () => {
        if (isLogInForm) {
            dispatch(setAuthTitle('Đăng ký'))
        } else {
            dispatch(setAuthTitle('Đăng nhập'))
        }
        dispatch(setIsLogInForm(!isLogInForm))
    }

    return (
        <CustomModal
            title={authTitle}
            open={props.open}
            onCancel={props.onCancel}
            footer={null}
            destroyOnClose={true}
            centered={true}
            bodyStyle={{ maxHeight: 'calc(100vh - 200px)', overflowY: 'auto', paddingRight: '0' }}

        >
            <LogoBox>
                <Logo src='/AirbnbLogo.png' alt="" />
            </LogoBox>
            <Title>Chào mừng bạn đến với Airbnb</Title>
            {isLogInForm ? <FormLogin onOk={props.onOk} onChangeForm={changeFormHandler}></FormLogin> : <FormSignup onOk={props.onOk} onChangeForm={changeFormHandler}></FormSignup>}
        </CustomModal>
    )
}

export default Modal