import ArticleForm from '../components/ArticleForm'
import DashboardTitle from '../components/DashboardTitle'
import { Formik } from 'formik'
import { initialValues, validate } from '../components/ArticleFormValidation'
import { CreateArticle } from '../services/article/article.thunks'
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
          //TODO: add schema validation
          const checkedTags: string[] = []
          values.tags?.forEach(item => {
            if (item.checked === true) checkedTags.push(item.label)
          })
          dispatch(
            CreateArticle(
              { ...values, tagList: checkedTags },
              navigate,
              ArticleCreationToast,
              () => {
                setSubmitting(false)
              }
            )
          )
        }}
      >
        <ArticleForm />
      </Formik>
    </>
  )
}

export default DashboardNew
