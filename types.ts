export interface Social {
  name: string
  icon?: string
  link: string
}

export interface Github {
  name: string
  repositories?: string[]
  link?: string
}

export interface Resume {
  title?: string
  introduce?: string
  avatar?: string
  github: Github
  social?: Social[]
  occupation?: string[]
  tags?: string[]
}

export interface GithubConent {
  _links: Links
  content: string
  download_url: string
  encoding: string
  git_url: string
  html_url: string
  name: string
  path: string
  sha: string
  size: number
  type: string
  url: string
}

export interface Links {
  git: string
  html: string
  self: string
}
