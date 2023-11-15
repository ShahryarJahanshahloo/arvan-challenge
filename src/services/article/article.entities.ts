type AuthorType = {
  username: string
  image: string
  following: boolean
  bio: string | null
}

export type ArticleType = {
  title: string
  slug: string
  favorited: boolean
  author: AuthorType
  favoritesCount: number
  createdAt: string
  updatedAt: string
  description: string
  body: string
  tagList: string[]
}
