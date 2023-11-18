import type { Meta, StoryObj } from '@storybook/react'

import ArticlesTablePagination from '../components/ArticlesTablePagination'
import usePagination from '../hooks/usePagination'

const meta = {
  title: 'Table/Pagination',
  component: ArticlesTablePagination,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ArticlesTablePagination>

export default meta
type Story = StoryObj<typeof meta>

const PaginationWithHook = () => {
  const { currentPage, nextPage, prevPage, selectPage, totalPages } =
    usePagination(1, 5)

  return (
    <ArticlesTablePagination
      active={currentPage}
      next={nextPage}
      prev={prevPage}
      selectPage={selectPage}
      total={totalPages}
    />
  )
}

export const Base = {
  render: () => <PaginationWithHook />,
}
