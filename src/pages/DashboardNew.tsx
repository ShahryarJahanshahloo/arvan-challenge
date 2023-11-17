import ArticleForm from '../components/ArticleForm'
import DashboardTitle from '../components/DashboardTitle'
import { Formik } from 'formik'
import { initialValues, validate } from '../components/ArticleFormValidation'
import { CreateArticle } from '../store/article/article.thunks'
import { ArticleCreationToast } from '../components/SuccessToast'
import { useAppDispatch } from '../store/hooks'
import { useNavigate } from 'react-router-dom'

const strings = {
  title: 'New Article',
}

const DashboardNew = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  return (
    <>
      <DashboardTitle title={strings.title} />
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true)
          const checkedTags: string[] = []
          values.tags?.forEach(item => {
            if (item.checked === true) checkedTags.push(item.label)
          })
          dispatch(
            CreateArticle(
              { ...values, tagList: checkedTags },
              navigate,
              ArticleCreationToast
            )
          ).finally(() => setSubmitting(false))
        }}
      >
        <ArticleForm />
      </Formik>
    </>
  )
}

export default DashboardNew
