import { AxiosResponse } from 'axios';
import { airBnbService } from './services/index';

const pathname = '/auth'

export const authApi = {
    login: async (account: PostAccount) => {
        let url = `${pathname}/signin`

        try {
            const response = await airBnbService.post(url, account)

            return response
        } catch (error) {
            throw error
        }
    },

    signUp: async (account: Account) => {
        let url = `${pathname}/signup`

        try {
            const response = await airBnbService.post(url, account)

            return response
        } catch (error) {
            throw error
        }
    }
};

export interface PostAccount {
    email: string,
    password: string,
}

export interface Account {
    id: number,
    avatar: string,
    password: string,
    role: string,
    name: string,
    email: string,
    phone: string,
    birthday: string,
    gender: boolean
}