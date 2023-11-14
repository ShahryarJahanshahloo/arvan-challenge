import ArticleForm from '../components/ArticleForm'
import DashboardTitle from '../components/DashboardTitle'

const strings = {
  title: 'New Article',
}

const DashboardNew = () => {
  return (
    <>
      <DashboardTitle title={strings.title} />
      <ArticleForm />
    </>
  )
}

export default DashboardNew
