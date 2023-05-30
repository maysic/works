export interface IInitialState  {
  name: string | null,
  email: string | null,
  photo: string | null
}

export interface IIcon {
  className: string
}

export type TUser = {
  displayName: string
  email: string
  photoURL: string
}

export interface INavMenu {
  userName: string
  userPhoto: string
}


export interface IMovies {
  backgroundImg: string
  cardImg: string
  description: string
  id: string
  subTitle: string
  title: string
  titleImg: string
  type?: string
}