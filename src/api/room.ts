
import { FindOptions, serialize } from './common';
import { airBnbService } from './services/index';

const pathname = '/phong-thue/lay-phong-theo-vi-tri'

export const roomApi = {
    getRoomsByLocation: async (option: GetRooms) => {
        let url = pathname;
        const query = serialize(option);
        url += query;

        try {
            const response = await airBnbService.get(url)

            return response
        } catch (error) {
            throw error
        }
    }
};

export interface GetRooms {
    maViTri?: string
}