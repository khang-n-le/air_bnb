import { GetBookedRoom } from './common';
import { airBnbService } from './services/index';

const pathname = '/dat-phong'

export const bookingApi = {
    getRoomsByUser: async (userId: GetBookedRoom) => {
        let url = `${pathname}/lay-theo-nguoi-dung/${userId.id}`

        try {
            const response = await airBnbService.get(url)

            return response
        } catch (error) {
            throw error
        }
    }
};
