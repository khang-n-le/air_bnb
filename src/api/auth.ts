import { AxiosResponse } from 'axios';
import { airBnbService } from './services/index';
import { Stringifier } from 'styled-components/dist/types';

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

    signUp: async (account: Account['user']) => {
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
    user: {
        id?: string,
        avatar?: string,
        name?: string,
        email?: string,
        password?: string,
        phone?: string,
        birthday?: string,
        gender?: boolean,
    },
    token?: string
}