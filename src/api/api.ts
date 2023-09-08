import * as axios from 'axios';

export const getUsers = (pageNumber: number, pageSize: number) => {
  return axios.default(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${pageSize}`, {
      withCredentials: true
  })
}
