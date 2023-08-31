import { GetBookedRoom } from './common';
import { airBnbService } from './services/index';

const pathname = '/dat-phong';

export const bookingApi = {
  getRoomsByUser: async (userId: GetBookedRoom) => {
    let url = `${pathname}/lay-theo-nguoi-dung/${userId.id}`;

    try {
      const response = await airBnbService.get(url);

      return response;
    } catch (error) {
      throw error;
    }
  },
  bookingRoom: async (data: BookingRoomType) => {
    let url = `${pathname}`;

    try {
      const response = await airBnbService.post(url, data);

      return response;
    } catch (error) {
      throw error;
    }
  },
};

export interface BookingRoomType {
  maPhong: string;
  startDay: string;
  endDay: string;
  soLuongKhach: number;
  maNguoiDung?: string;
}
