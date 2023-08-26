import { airBnbService } from './services/index';
import { serialize } from './common';

const pathname = '/phong-thue';

export const roomApi = {
  getOne: async (option: GetOneRoomType) => {
    let url = `${pathname}/${option.id}`;

    try {
      const response = await airBnbService.get(url);

      return response;
    } catch (error) {

      throw error;
    }
  },
  getRoomsByLocation: async (option: GetRooms) => {
    let url = `${pathname}/lay-phong-theo-vi-tri`;
    const query = serialize(option);
    url += query;

    try {
      const response = await airBnbService.get(url)

      return response
    } catch (error) {
      throw error
    }
  },
  getAllRooms: async () => {
    let url = pathname;

    try {
      const response = await airBnbService.get(url);

      return response
    }
    catch (error) {

      throw error
    }
  },
};

export interface GetRooms {
  maViTri?: string
}

export type GetOneRoomType = {
  id: string;
};