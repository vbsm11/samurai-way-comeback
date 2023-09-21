import * as axios from 'axios';

const instance = axios.default.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'c6c4cf97-dba7-4d47-a853-30591c45efd6'
    }
})

export const usersAPI = {
    getUsers: (pageNumber: number, pageSize: number) => {
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`)
            .then(response => response.data)
    },
    unfollowRequest: (id: number) => {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    },
    followRequest: (id: number) => {
        return instance.post(`follow/${id}`)
            .then(response => response.data)
    }
}


export const authAPI = {
  auth: () => instance.get('auth/me')
      .then(response => response.data)
}

export const profileAPI = {
    getProfile: (id: number) => instance.get(`profile/${id}`)
        .then(response => response.data)
}
