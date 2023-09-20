import {ActionType} from './redux-store';

export type FriendsType = {
  id: string
  name: string
  imgUrl: string
}

export type SidebarType = {
  firstFriends: Array<FriendsType>
}

export type SidebarActionType = {
  type: ''
}

const initialState: SidebarType = {
  firstFriends: [
    {
      id: '1',
      name: 'Georgiy',
      imgUrl: 'https://photobooth.cdn.sports.ru/preset/tags/3/0f/30307db7744fab81b692c9d06c5c2.png'
    },
    {
      id: '2',
      name: 'Quincy',
      imgUrl: 'https://photobooth.cdn.sports.ru/preset/tags/e/bc/ccdcf399f4b07bb1f82f57c70ae3d.png'
    },
    {
      id: '3',
      name: 'Roman',
      imgUrl: 'https://photobooth.cdn.sports.ru/preset/tags/c/75/dc582a330418694ed5f5a1e0fe1fe.png'
    }
  ]
}

export const sidebarReducer = (state: SidebarType = initialState, action: ActionType): SidebarType => {
  return state
}