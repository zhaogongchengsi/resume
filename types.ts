export interface Social {
  name: string
  icon?: string
  link: string
}

export interface Resume {
  title?: string
  introduce?: string
  avatar?: string
  github?: string
  social?: Social[]
}
