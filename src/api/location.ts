import { airBnbService } from './services/index';
import { FindOptions, serialize } from './common';

const pathname = '/vi-tri';

export const locationApi = {
  findAll: async (option: FindOptions) => {
    let url = pathname;
    const query = serialize(option);
    url += query;

    try {
      const response = await airBnbService.get(url);

      return response;
    } catch (error) {
      throw error;
    }
  },
};
