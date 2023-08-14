import React from 'react'
import { CustomModal, Title } from './styled'
import { FormLogin } from 'components/Form'
import FormSignup from 'components/Form/FormSignup'


type Props = {
    open?: boolean,
    onCancel?: () => void,
    onOk: () => void,
    title?: string,
}

const Modal = (props: Props) => {
    const [isLogIn, setIsLogIn] = React.useState<boolean>()

    React.useEffect(() => {
        if (props.title === 'Đăng nhập') {
            setIsLogIn(true)
        } else {
            setIsLogIn(false)
        }
    }, [props.title])

    const changeFormHanđler = () => {
        setIsLogIn(!isLogIn)
    }

    return (
        <CustomModal
            title={props.title}
            open={props.open}
            onCancel={props.onCancel}
            footer={null}
            destroyOnClose={true}
            centered={true}
            bodyStyle={{ maxHeight: 'calc(100vh - 200px)', overflowY: 'auto', paddingRight: '0' }}

        >
            <Title>Chào mừng bạn đến với Airbnb</Title>
            {isLogIn ? <FormLogin onOk={props.onOk} onChangeForm={changeFormHanđler}></FormLogin> : <FormSignup onOk={props.onOk} onChangeForm={changeFormHanđler}></FormSignup>}
        </CustomModal>
    )
}

export default Modal