import { airBnbService } from './services/index';
import { FindOptions, serialize } from './common';

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
};

export type GetOneRoomType = {
  id: string;
};
