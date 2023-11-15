import { useEffect, useState } from 'react'
import ArticleForm from '../components/ArticleForm'
import DashboardTitle from '../components/DashboardTitle'
import { apiGetArticle } from '../services/article/article.api'
import { useParams } from 'react-router-dom'
import { Formik } from 'formik'
import { validate } from '../components/ArticleFormValidation'
import { UpdateArticle } from '../services/article/article.thunks'
import { ArticleUpdateToast } from '../components/SuccessToast'
import { useAppDispatch } from '../store/hooks'
import { useNavigate } from 'react-router-dom'
import { FormValues } from '../components/ArticleFormValidation'
import { nanoid } from 'nanoid'

const strings = {
  title: 'Edit Article',
}

const DashboardEdit = () => {
  const { slug } = useParams()
  const [initialValues, setInitialValues] = useState<FormValues>()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (slug === undefined) return
    apiGetArticle(slug).then(article => {
      const formData: FormValues = {
        body: article.body,
        description: article.description,
        title: article.title,
      }
      formData.tags = article.tagList.map(tag => {
        return {
          checked: true,
          label: tag,
          uid: nanoid(),
        }
      })
      setInitialValues(formData)
    })
  }, [slug])

  return (
    <>
      <DashboardTitle title={strings.title} />
      {initialValues && (
        <Formik
          initialValues={initialValues}
          validate={validate}
          onSubmit={(values, { setSubmitting }) => {
            if (slug === undefined) return
            setSubmitting(true)
            //TODO: add schema validation
            const checkedTags: string[] = []
            values.tags?.forEach(item => {
              if (item.checked === true) checkedTags.push(item.label)
            })
            dispatch(
              UpdateArticle(
                slug,
                { ...values, tagList: checkedTags },
                navigate,
                ArticleUpdateToast,
                () => {
                  setSubmitting(false)
                }
              )
            )
          }}
        >
          <ArticleForm />
        </Formik>
      )}
    </>
  )
}

export default DashboardEdit
