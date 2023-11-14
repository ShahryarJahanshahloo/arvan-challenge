import { useEffect, useState } from 'react'
import ArticleForm from '../components/ArticleForm'
import DashboardTitle from '../components/DashboardTitle'
import { apiGetArticle } from '../services/article/article.api'
import { useParams } from 'react-router-dom'
import { ArticleType } from '../services/article/article.entities'

const strings = {
  title: 'Edit Article',
}

const DashboardEdit = () => {
  const { slug } = useParams()
  const [initialValues, setInitialValues] = useState<ArticleType>()

  useEffect(() => {
    if (slug === undefined) return
    apiGetArticle(slug).then(article => {
      setInitialValues(article)
    })
  }, [slug])

  return (
    <>
      <DashboardTitle title={strings.title} />
      {initialValues && <ArticleForm initialValuesToUpdate={initialValues} />}
    </>
  )
}

export default DashboardEdit
