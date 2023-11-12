import DashboardTitle from '../components/DashboardTitle'
import ArticlesTable from '../components/ArticlesTable'

const strings = {
  title: 'All Posts',
}

const DashboardAll = () => {
  return (
    <>
      <DashboardTitle title={strings.title} />
      <ArticlesTable />
    </>
  )
}

export default DashboardAll
