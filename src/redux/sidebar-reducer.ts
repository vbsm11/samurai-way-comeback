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
      imgUrl: 'https://pictures.sports.ru/NkyqqQSzzxQxqdz2ZOkG_Xw2tvjqW58GyH-E9nM_f00/fill/150/150/no/1/czM6Ly9zdGF0X3BpY3R1cmUvUExBWUVSL2F2YXRhci9nZW9yZ2lfZHpoaWtpeWEucG5n.png'
    },
    {
      id: '2',
      name: 'Quincy',
      imgUrl: 'https://pictures.sports.ru/nqCrRC97O7ntFiQu0HuWC68cr2GPLkndIvflv8vwIXU/fill/150/150/no/1/czM6Ly9zdGF0X3BpY3R1cmUvUExBWUVSL2F2YXRhci9xdWluY3lfcHJvbWVzLnBuZw.png'
    },
    {
      id: '3',
      name: 'Roman',
      imgUrl: 'https://pictures.sports.ru/PJnwDEG50OgJKHtHle2aSqObd02fXZD-OuvtP_uzsfo/fill/150/150/no/1/czM6Ly9zdGF0X3BpY3R1cmUvUExBWUVSL2F2YXRhci9yb21hbl96b2JuaW4ucG5n.png'
    }
  ]
}

export const sidebarReducer = (state: SidebarType = initialState, action: ActionType): SidebarType => {
  return state
}