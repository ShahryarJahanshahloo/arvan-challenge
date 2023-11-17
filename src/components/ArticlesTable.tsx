import { useCallback, useEffect, useState } from 'react'
import {
  apiDeleteArticle,
  getUserArticles,
} from '../services/article/article.api'
import { setArticles, selectArticles } from '../store/article/articleSlice'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import ArticlesTableRow from './ArticleTableRow'
import ArticlesTablePagination from './ArticlesTablePagination'
import { useSelector } from 'react-redux'
import { selectUsername } from '../store/user/userSlice'
import DeleteArticleModal from './DeleteArticleModal'
import TableSkeleton from './TableSkeleton'
import { Toast } from '../store/toast/toast.thunks'
import { ArticleDeletionToast } from './SuccessToast'
import usePagination from '../hooks/usePagination'

const ArticlesTable = () => {
  const dispatch = useAppDispatch()
  const articles = useAppSelector(selectArticles)
  const username = useSelector(selectUsername)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [articleToDelete, setArticleToDelete] = useState<string>()
  const {
    currentPage,
    nextPage,
    prevPage,
    selectPage,
    totalPages,
    offset,
    setTotalPages,
  } = usePagination()

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
      <div className='w-full min-h-[680px]'>
        <table className='w-full'>
          <tr className='w-full h-10 font-bold bg-grey-1 text-grey-5'>
            <th className='hidden pl-4 text-start md:table-cell'>#</th>
            <th className='pl-2 text-start md:pl-0'>Title</th>
            <th className='hidden text-start md:table-cell'>Author</th>
            <th className='hidden text-start md:table-cell'>Tags</th>
            <th className='hidden text-start md:table-cell'>Excerpt</th>
            <th className='pr-7 text-end'>Created</th>
          </tr>
          {articles
            ? articles.map((item, index) => {
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
            : Array.from({ length: 10 }, (v, i) => i + 1).map(index => {
                return <TableSkeleton key={index} />
              })}
        </table>
      </div>

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

      <div className='flex items-center justify-center w-full mt-14'>
        <ArticlesTablePagination
          total={totalPages}
          active={currentPage}
          next={nextPage}
          prev={prevPage}
          selectPage={selectPage}
        />
      </div>
    </div>
  )
}

export default ArticlesTable
