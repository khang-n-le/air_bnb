import React from 'react'
import { AlertBox, AlertText, CDatePicker, CFormSignup, CInput, CInputPassword, CSelect, LoginNav, LoginNavButton, SubmitButton } from './styled'
import { Form, Select } from 'antd'
import { useAppDispatch, useAppSelector } from 'app/hooks'
import { selectAccount, signUp } from 'slice'
import { useNavigate } from 'react-router-dom'
import { DangerAlertIcon } from 'components/Icons'
import { Account } from 'api/common'

type Props = {
    onOk: () => void,
    onChangeForm: () => void
}

const FormSignup = (props: Props) => {
    const { isAuthenticated, error } = useAppSelector(selectAccount)
    const navigate = useNavigate()
    const [form] = Form.useForm();
    const dateFormat = 'DD/MM/YYYY';
    const dispatch = useAppDispatch()

    React.useEffect(() => {
        if (isAuthenticated) {
            setTimeout(() => {
                navigate("/")
                props.onOk()
            }, 500);
        }
    }, [isAuthenticated])

    const submitHandler = (values: any) => {
        const account: Account['user'] = {
            name: values.name,
            email: values.email,
            phone: values.phone,
            gender: values.gender === 'male' ? true : false,
            birthday: values.birthday,
            password: values.password,
        }
        const signUpAction = async () => {
            await dispatch(signUp(account))
        }

        signUpAction()
    };

    const { Option } = Select;

    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select style={{ width: 70 }}>
                <Option value="84">+84</Option>
                <Option value="85">+85</Option>
            </Select>
        </Form.Item>
    );

    return (
        <CFormSignup
            name='register'
            layout={'vertical'}
            form={form}
            onFinish={submitHandler}
            requiredMark={false}
            initialValues={{ prefix: '84' }}
            scrollToFirstError={true}
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
                <CInput size="large" placeholder='name@company.com' />
            </Form.Item>
            <Form.Item
                name="password"
                label="Mật khẩu"
                rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
                hasFeedback
            >
                <CInputPassword size="large" placeholder='••••••••' />
            </Form.Item>

            <Form.Item
                name="confirm"
                label="Xác nhận mật khẩu"
                dependencies={['password']}
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: 'Vui lòng xác nhận mật khẩu!',
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error('Mật khẩu không khớp!'));
                        },
                    }),
                ]}
            >
                <CInputPassword size="large" placeholder='••••••••' />
            </Form.Item>

            <Form.Item
                name="name"
                label="Họ tên"
                rules={[{ required: true, message: 'Vui lòng nhập họ tên!', whitespace: true }]}
            >
                <CInput size='large' />
            </Form.Item>

            <Form.Item
                name="birthday"
                label="Ngày sinh"
                rules={[{ required: true, message: 'Vui lòng chọn ngày sinh!' }]}
            >
                <CDatePicker size='large' placeholder='Chọn ngày' format={dateFormat}></CDatePicker>
            </Form.Item>

            <Form.Item
                name="phone"
                label="Số điện thoại"
                rules={[{ required: true, message: 'Vui lòng nhập số điện thoại!' }]}
            >
                <CInput addonBefore={prefixSelector} size='large' />
            </Form.Item>

            <Form.Item
                name="gender"
                label="Giới tính"
                rules={[{ required: true, message: 'Vui lòng lựa chọn giới tính!' }]}
            >
                <CSelect placeholder="lựa chọn giới tính của bạn" size='large'>
                    <Option value="male">Nam</Option>
                    <Option value="female">Nữ</Option>
                </CSelect>
            </Form.Item>

            <Form.Item>
                <SubmitButton size='large' type="primary" htmlType="submit">Đăng ký</SubmitButton>
                <LoginNav>
                    Bạn dã có mật khẩu? <LoginNavButton onClick={props.onChangeForm}>Đăng nhập</LoginNavButton>
                </LoginNav>
            </Form.Item>
        </CFormSignup>
    )
}

export default FormSignup