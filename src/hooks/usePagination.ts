import { useMemo, useState } from 'react'

const usePagination = () => {
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

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

  const handleSetTotalPages = (total: number) => {
    setTotalPages(total)
  }

  return {
    currentPage: page,
    totalPages,
    nextPage,
    prevPage,
    selectPage,
    offset,
    setTotalPages: handleSetTotalPages,
  }
}

export default usePagination
