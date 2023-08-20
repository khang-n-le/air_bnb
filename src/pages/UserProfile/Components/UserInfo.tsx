import React from 'react';
import {
  DatePickerInput,
  SelectInput,
  TextInput,
  UserInfoContainer,
  UserInfoForm,
  UserInfoList,
  UserInfoSectionTitle,
  UserInfoSectionTitleBox,
} from './styled';

import UserInfoItem from './UserInfoItem';
import UserInfoItemForm from './UserInfoItemForm';
import { useAppSelector } from 'app/hooks';
import { selectUser } from 'slice';
import { Form, Select } from 'antd';
import dayjs from 'dayjs';

type Props = {};

const UserInfo = (props: Props) => {
  const { user } = useAppSelector(selectUser);
  const [isUpdatingName, setIsUpdatingName] = React.useState(false);
  const [isUpdatingEmail, setIsUpdatingEmail] = React.useState(false);
  const [isUpdatingPhone, setIsUpdatingPhone] = React.useState(false);
  const [isUpdatingBirthday, setIsUpdatingBirthday] = React.useState(false);
  const [isUpdatingGender, setIsUpdatingGender] = React.useState(false);
  const [isItemDisabled, setIsItemDisabled] = React.useState(false);

  const [form] = Form.useForm();
  const dateFormat = 'DD/MM/YYYY';
  const birthDayFormat = dayjs(user?.birthday, dateFormat);
  const { Option } = Select;

  const changeUpdateStateHandler = (event: any) => {
    if (event.target.offsetParent.id === 'legalName') {
      setIsUpdatingName(!isUpdatingName);
      setIsItemDisabled(!isItemDisabled);
    } else if (event.target.offsetParent.id === 'email') {
      setIsUpdatingEmail(!isUpdatingEmail);
      setIsItemDisabled(!isItemDisabled);
    } else if (event.target.offsetParent.id === 'phone') {
      setIsUpdatingPhone(!isUpdatingPhone);
      setIsItemDisabled(!isItemDisabled);
    } else if (event.target.offsetParent.id === 'birthday') {
      setIsUpdatingBirthday(!isUpdatingBirthday);
      setIsItemDisabled(!isItemDisabled);
    } else if (event.target.offsetParent.id === 'gender') {
      setIsUpdatingGender(!isUpdatingGender);
      setIsItemDisabled(!isItemDisabled);
    }
  };

  const submitHandler = (values: any) => {
    console.log(values);
  };

  React.useEffect(() => {
    console.log('data1', user);
    form.setFieldValue('legalName', 'Khang le');
  }, [user]);

  return (
    <UserInfoContainer>
      <UserInfoSectionTitleBox>
        <UserInfoSectionTitle>Thông tin cá nhân</UserInfoSectionTitle>
      </UserInfoSectionTitleBox>
      <UserInfoList>
        <UserInfoItem
          id="legalName"
          title="Tên pháp lý"
          subtitle={
            user?.name === 'string' || user?.name?.length == 0
              ? 'Chưa được cung cấp'
              : user?.name
          }
          isUpdating={isUpdatingName}
          onChangeUpdateState={changeUpdateStateHandler}
          disabled={isItemDisabled && !isUpdatingName}
        >
          {isUpdatingName && (
            <UserInfoItemForm
              form={form}
              formName="legalName"
              formItemName="legalName"
              onSubmit={submitHandler}
            >
              <TextInput
                name="legalName"
                placeholder="Họ tên"
                // defaultValue={user?.name}
                size="large"
              />
            </UserInfoItemForm>
          )}
        </UserInfoItem>
        <UserInfoItem
          id="email"
          title="Địa chỉ email"
          subtitle={
            user?.email === 'string' || user?.email.length == 0
              ? 'Chưa được cung cấp'
              : user?.email
          }
          isUpdating={isUpdatingEmail}
          onChangeUpdateState={changeUpdateStateHandler}
          disabled={isItemDisabled && !isUpdatingEmail}
        >
          {isUpdatingEmail && (
            <UserInfoItemForm
              formName="email"
              formItemName="email"
              onSubmit={submitHandler}
              form={form}
              rules={[
                {
                  type: 'email',
                  message: 'E-mail không hợp lệ!',
                },
              ]}
            >
              <TextInput
                name="email"
                placeholder="Email"
                defaultValue={user?.email}
                size="large"
              />
            </UserInfoItemForm>
          )}
        </UserInfoItem>
        <UserInfoItem
          id="phone"
          title="Số điện thoại"
          subtitle={
            user?.phone === 'string' || user?.phone.length == 0
              ? 'Chưa được cung cấp'
              : user?.phone
          }
          isUpdating={isUpdatingPhone}
          onChangeUpdateState={changeUpdateStateHandler}
          disabled={isItemDisabled && !isUpdatingPhone}
        >
          {isUpdatingPhone && (
            <UserInfoItemForm
              formItemName="phone"
              formName="phone"
              onSubmit={submitHandler}
              form={form}
            >
              <TextInput
                name="phone"
                placeholder="Số điện thoại"
                defaultValue={user?.phone}
                size="large"
              />
            </UserInfoItemForm>
          )}
        </UserInfoItem>
        <UserInfoItem
          id="birthday"
          title="Ngày sinh"
          subtitle={
            user?.birthday === 'string' || user?.birthday.length == 0
              ? 'Chưa được cung cấp'
              : user?.birthday
          }
          isUpdating={isUpdatingBirthday}
          onChangeUpdateState={changeUpdateStateHandler}
          disabled={isItemDisabled && !isUpdatingBirthday}
        >
          {isUpdatingBirthday && (
            <UserInfoItemForm
              formItemName="birthday"
              formName="birthday"
              onSubmit={submitHandler}
              form={form}
            >
              <DatePickerInput
                size="large"
                placeholder="Lựa chọn ngày sinh"
                format={dateFormat}
                defaultValue={
                  user?.birthday === 'string' || user?.birthday.length == 0
                    ? undefined
                    : birthDayFormat
                }
                name="birthday"
              />
            </UserInfoItemForm>
          )}
        </UserInfoItem>
        <UserInfoItem
          id="gender"
          title="Giới tính"
          subtitle={user?.gender === true ? 'Nam' : 'Nữ'}
          isUpdating={isUpdatingGender}
          onChangeUpdateState={changeUpdateStateHandler}
          disabled={isItemDisabled && !isUpdatingGender}
        >
          {isUpdatingGender && (
            <UserInfoItemForm
              formItemName="gender"
              formName="gender"
              onSubmit={submitHandler}
              form={form}
            >
              <SelectInput
                size="large"
                placeholder="Lựa chọn giới tính"
                defaultValue={user?.gender === true ? 'Nam' : 'Nữ'}
              >
                <Option value="male">Nam</Option>
                <Option value="female">Nữ</Option>
              </SelectInput>
            </UserInfoItemForm>
          )}
        </UserInfoItem>
      </UserInfoList>
    </UserInfoContainer>
  );
};

export default UserInfo;
