import { useCallback, useEffect, useState } from 'react'
import {
  apiDeleteArticle,
  getUserArticles,
} from '../services/article/article.api'
import { setArticles, selectArticles } from '../store/articleSlice'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import ArticlesTableRow from './ArticleTableRow'
import ArticlesTablePagination from './ArticlesTablePagination'
import { useSelector } from 'react-redux'
import { selectUsername } from '../store/userSlice'
import DeleteArticleModal from './DeleteArticleModal'
import { useNavigate } from 'react-router-dom'
import TableSkeleton from './TableSkeleton'

const ArticlesTable = () => {
  const dispatch = useAppDispatch()
  const articles = useAppSelector(selectArticles)
  const navigate = useNavigate()
  const username = useSelector(selectUsername)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [articleToDelete, setArticleToDelete] = useState<string>()

  useEffect(() => {
    if (!username) return
    getUserArticles(username, 10, 1).then(articles => {
      dispatch(setArticles(articles))
    })
  }, [username])

  const handleArticleOnDelete = useCallback((slug: string) => {
    setArticleToDelete(slug)
    setIsModalOpen(true)
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
        {articles ? (
          articles.map((item, index) => {
            return (
              <ArticlesTableRow
                key={item.title}
                author={item.author.username}
                created={item.createdAt}
                excerpt={item.body}
                row={index + 1}
                tags={item.tagList}
                title={item.title}
                slug={item.slug}
                onDelete={handleArticleOnDelete}
              />
            )
          })
        ) : (
          <div className='flex flex-col gap-8 pt-6'>
            {Array.from({ length: 10 }, (v, i) => i + 1).map(index => {
              return <TableSkeleton key={index} />
            })}
          </div>
        )}

        <DeleteArticleModal
          isOpen={isModalOpen}
          close={() => {
            setIsModalOpen(false)
          }}
          onReject={() => {
            setArticleToDelete(undefined)
            setIsModalOpen(false)
          }}
          onSuccess={() => {
            if (articleToDelete === undefined) return
            apiDeleteArticle(articleToDelete).then(() => {
              navigate(0)
            })
            setIsModalOpen(false)
          }}
        />
      </div>

      <div className='flex items-center justify-center w-full pt-14'>
        <ArticlesTablePagination total={5} />
      </div>
    </div>
  )
}

export default ArticlesTable
