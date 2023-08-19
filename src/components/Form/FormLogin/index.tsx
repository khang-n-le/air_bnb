import React from 'react'
import { AlertBox, AlertText, CFormLogin, CInput, CInputPassword, RegisterNav, RegisterNavButton, SubmitButton } from './styled'
import { Form } from 'antd';
import { authApi } from 'api/auth';
import { DangerAlertIcon } from 'components/Icons/DangerAlertIcon';
import { setLocalStorage } from 'utils/localStorage';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { login, selectAccount } from 'slice';
import { useNavigate } from 'react-router-dom';

type Props = {
    onOk: () => void,
    onChangeForm: () => void
}

const FormLogin = (props: Props) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate()
    const { account, error, isAuthenticated } = useAppSelector(selectAccount);

    const onFinish = (values: any) => {
        const loginAction = async (values: any) => {
            await dispatch(login(values))
        }

        loginAction(values)
    };

    React.useEffect(() => {
        if (isAuthenticated) {
            setTimeout(() => {
                navigate("/")
                props.onOk()
            }, 500);
        }
    }, [isAuthenticated])

    return (
        <CFormLogin
            name="normal_login"
            layout={'vertical'}
            style={{ maxWidth: '100%' }}
            onFinish={onFinish}
            requiredMark={false}
        >
            {error &&
                <AlertBox>
                    <DangerAlertIcon width={20} height={20} />
                    <AlertText>{error}</AlertText>
                </AlertBox>}

            <Form.Item
                name="email"
                label="E-mail"
                rules={[
                    {
                        type: 'email',
                        message: 'E-mail không hợp lệ!',
                    },
                    {
                        required: true,
                        message: 'Vui lòng nhập E-mail!',
                    },
                ]}
            >
                <CInput size="large" placeholder='name@company.com' defaultValue={account?.user.email} />
            </Form.Item>

            <Form.Item
                name="password"
                label="Mật khẩu"
                rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
            >
                <CInputPassword size="large" placeholder='••••••••' defaultValue={account?.user.password} />
            </Form.Item>

            <Form.Item>
                <SubmitButton size='large' type="primary" htmlType="submit">Đăng nhập</SubmitButton>
                <RegisterNav>
                    Bạn chưa có mật khẩu? <RegisterNavButton onClick={props.onChangeForm}>Đăng ký</RegisterNavButton>
                </RegisterNav>
            </Form.Item>
        </CFormLogin>
    )
}

export default FormLogin