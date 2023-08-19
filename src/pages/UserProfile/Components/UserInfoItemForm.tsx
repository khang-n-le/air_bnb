import React from 'react'
import {
    TextInput,
    UserInfoForm,
    UserInfoFormButton,
} from './styled'
import { Form } from 'antd'

type Props = {
    formName?: string,
    formItemName?: string,
    children?: any,
    onSubmit?: (values: any) => void,
    form?: any,
    name?: string
    rules?: any
}

const UserInfoItemForm = (props: Props) => {
    return (
        <UserInfoForm
            name={props.formName}
            onFinish={props.onSubmit}
            form={props.form}>
            <Form.Item
                name={props.formItemName}
                rules={props.rules}
            >
                {props.children}
            </Form.Item>
            <Form.Item>
                <UserInfoFormButton htmlType='submit' size='large'>Lưu</UserInfoFormButton>
            </Form.Item>
        </UserInfoForm>
    )
}

export default UserInfoItemForm