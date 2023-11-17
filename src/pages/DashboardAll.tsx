import DashboardTitle from '../components/DashboardTitle'
import ArticlesTable from '../components/ArticlesTable'
import { useParams } from 'react-router-dom'
import { useMemo } from 'react'

const strings = {
  title: 'All Posts',
}

const DashboardAll = () => {
  const { slug } = useParams()

  const initialPage = useMemo(() => {
    if (slug === undefined) return 1
    if (isNaN(+slug) === false) return +slug
    return 1
  }, [slug])

  return (
    <>
      <DashboardTitle title={strings.title} />
      <ArticlesTable initialPage={initialPage} />
    </>
  )
}

export default DashboardAll
