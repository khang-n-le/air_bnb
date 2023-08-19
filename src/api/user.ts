import { GetUser } from './common';
import { airBnbService } from './services/index';

const pathname = '/users'

export const userApi = {
    getUserById: async (option: GetUser) => {
        let url = `${pathname}/${option.id}`;

        try {
            const response = await airBnbService.get(url)

            return response
        } catch (error) {
            throw error
        }
    }
};

