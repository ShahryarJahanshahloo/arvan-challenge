import { useCallback, useEffect, useMemo, useState } from 'react'
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
import TableSkeleton from './TableSkeleton'
import { Toast } from '../services/toast/toast.thunks'
import { ArticleDeletionToast } from './SuccessToast'

const ArticlesTable = () => {
  const dispatch = useAppDispatch()
  const articles = useAppSelector(selectArticles)
  const username = useSelector(selectUsername)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [articleToDelete, setArticleToDelete] = useState<string>()
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(5)

  const offset = useMemo(() => {
    return (page - 1) * 10
  }, [page])

  const nextPage = () => {
    if (page === totalPages) return
    setPage(page + 1)
  }

  const prevPage = () => {
    if (page === 1) return
    setPage(page - 1)
  }

  const selectPage = (newPage: number) => {
    setPage(newPage)
  }

  useEffect(() => {
    if (!username) return
    getUserArticles(username, 10, offset).then(res => {
      setTotalPages(Math.ceil(res.articlesCount / 10))
      dispatch(setArticles(res.articles))
    })
  }, [username, offset])

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
              if (username)
                getUserArticles(username, 10, offset).then(res => {
                  setTotalPages(Math.ceil(res.articlesCount / 10))
                  dispatch(setArticles(res.articles))
                })
              dispatch(Toast(ArticleDeletionToast, 'top-20 right-[30px]'))
            })
            setIsModalOpen(false)
          }}
        />
      </div>

      <div className='flex items-center justify-center w-full pt-14'>
        <ArticlesTablePagination
          total={totalPages}
          active={page}
          next={nextPage}
          prev={prevPage}
          selectPage={selectPage}
        />
      </div>
    </div>
  )
}

export default ArticlesTable
