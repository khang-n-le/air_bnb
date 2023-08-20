
import { Account, GetUser } from './common';
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
    },

    updateUserById: async (option: Account['user']) => {
        let url = `${pathname}/${option.id}`;

        try {
            const response = await airBnbService.put(url, option)

            return response
        } catch (error) {
            throw error
        }
    }
};

