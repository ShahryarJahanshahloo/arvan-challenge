import { useEffect } from 'react'
import { getAllArticles } from '../services/article/article.api'
import { setArticles, selectArticles } from '../store/articleSlice'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import ArticlesTableRow from './ArticleTableRow'
import ArticlesTablePagination from './ArticlesTablePagination'

const ArticlesTable = () => {
  const dispatch = useAppDispatch()
  const articles = useAppSelector(selectArticles)

  useEffect(() => {
    getAllArticles().then(articles => {
      dispatch(setArticles(articles))
    })
  }, [])

  return (
    <div className='py-[30px]'>
      <div className='flex items-center justify-between w-full h-10 gap-4 px-4 font-bold bg-grey-1 text-grey-5'>
        <span className=''>#</span>
        <span className='flex-grow max-w-md'>Title</span>
        <span className='w-[120px]'>Author</span>
        <span className='w-[180px]'>Tags</span>
        <span className=''>Excerpt</span>
        <span className='text-end'>Created</span>
      </div>

      <div>
        {articles?.map((item, index) => {
          return (
            <ArticlesTableRow
              key={item.title}
              author={item.author.username}
              created={item.createdAt}
              excerpt={item.body}
              row={index + 1}
              tags={item.tagList}
              title={item.title}
            />
          )
        })}
      </div>

      <div className='flex items-center justify-center w-full pt-14'>
        <ArticlesTablePagination total={5} />
      </div>
    </div>
  )
}

export default ArticlesTable
