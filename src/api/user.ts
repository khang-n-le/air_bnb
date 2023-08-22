import { Account, GetUser } from './common';
import { uploadService, airBnbService } from './services/index';

const pathname = '/users';

export const userApi = {
    getUserById: async (option: GetUser) => {
        let url = `${pathname}/${option.id}`;

        try {
            const response = await airBnbService.get(url);

            return response;
        } catch (error) {
            throw error;
        }
    },

    updateUserById: async (option: Account['user']) => {
        let url = `${pathname}/${option.id}`;

        try {
            const response = await uploadService.put(url, option);

            return response;
        } catch (error) {
            throw error;
        }
    },

    uploadUserAvatar: async (image: any) => {
        let url = `${pathname}/upload-avatar`

        try {
            const response = await uploadService.post(url, image);

            return response;
        } catch (error) {
            throw error;
        }
    },
};
