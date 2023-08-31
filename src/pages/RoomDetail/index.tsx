import { CUSTOMER_TYPE, DEVICES } from 'utils';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { selectAppDevice } from 'slice/appDeviceSlice';
import Desktop from './Desktop';
import Mobile from './Mobile';
import React from 'react';
import { getOneRoom } from 'slice/roomSilce';
import { useLocation } from 'react-router-dom';
import { bookingRoom, selectAccount } from 'slice';

const RoomDetail = ({ match }: { match?: string }) => {
  const appDevice = useAppSelector(selectAppDevice);
  const [roomDetail, setRoomDetail] = React.useState({});
  const [adults, setAdults] = React.useState(1);
  const [children, setChildren] = React.useState(0);
  const [babies, setBabies] = React.useState(0);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [pets, setPets] = React.useState(0);
  const location = useLocation();
  const account = useAppSelector(selectAccount);
  const dispatch = useAppDispatch();

  const handleChangeCustomer = (
    isPlus: boolean,
    customerType: CUSTOMER_TYPE
  ) => {
    if (customerType == CUSTOMER_TYPE.ADULTS) {
      if (isPlus) {
        setAdults(adults + 1);
      } else if (adults > 0) {
        setAdults(adults - 1);
      }
    } else if (customerType == CUSTOMER_TYPE.CHILDREN) {
      if (isPlus) {
        setChildren(children + 1);
      } else if (children > 0) {
        setChildren(children - 1);
      }
    } else if (customerType == CUSTOMER_TYPE.BABIES) {
      if (isPlus) {
        setBabies(babies + 1);
      } else if (babies > 0) {
        setBabies(babies - 1);
      }
    } else {
      if (isPlus) {
        setPets(pets + 1);
      } else if (pets > 0) {
        setPets(pets - 1);
      }
    }
  };

  const handleOrder = async (startDay: string, endDay: string) => {
    try {
      if (account?.account?.user?.id && location.pathname.split('/')[2]) {
        await dispatch(
          bookingRoom({
            maNguoiDung: account.account.user.id,
            soLuongKhach: adults + babies + children,
            maPhong: location.pathname.split('/')[2],
            startDay: startDay,
            endDay: endDay,
          })
        ).unwrap();

        setIsSuccess(true);
        setPets(0);
        setAdults(1);
        setChildren(0);
        setBabies(0);
      }
    } catch (e) {
      console.log(e);
      setIsSuccess(false);
    }
  };

  React.useEffect(() => {
    const getDetail = async () => {
      const data = await dispatch(
        getOneRoom({ id: location.pathname.split('/')[2] })
      ).unwrap();
      setRoomDetail((data as any).content);
    };

    if (location.pathname?.split('/')[2]) {
      getDetail();
    }
  }, [location.pathname?.split('/')[2]]);

  React.useEffect(() => {
    let timer: any;

    if (isSuccess) {
      timer = setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }

    return () => timer && clearTimeout(timer);
  }, [isSuccess]);

  const RenderElement = {
    [DEVICES.DESKTOP]: (
      <Desktop
        handleChangeCustomer={handleChangeCustomer}
        data={roomDetail}
        adults={adults}
        babies={babies}
        children={children}
        pets={pets}
        handleOrder={handleOrder}
        isSuccess={isSuccess}
      ></Desktop>
    ),
    [DEVICES.TABLET]: <Mobile></Mobile>,
    [DEVICES.MOBILE]: <Mobile></Mobile>,
  };

  return RenderElement[appDevice.device];
};

export default RoomDetail;
