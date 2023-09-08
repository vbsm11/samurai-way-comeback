import * as axios from 'axios';

export const getUsers = (pageNumber: number, pageSize: number) => {
  return axios.default(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${pageSize}`, {
      withCredentials: true
  }).then(response => response.data)
}

export const unfollowRequest = (id: number) => {
    return axios.default.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {
        withCredentials: true
    }).then(response => response.data)
}

export const followRequest = (id: number) => {
    return axios.default.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {}, {
        withCredentials: true
    }).then(response => response.data)
}

export const auth = () => {
    return axios.default('https://social-network.samuraijs.com/api/1.0/auth/me', {
        withCredentials: true
    })
        .then(response => response.data)
}
