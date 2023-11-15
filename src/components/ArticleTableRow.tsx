import { Popover } from '@headlessui/react'
import { formatTableDate } from '../helpers/time'
import { FaCaretDown as CaretIcon } from 'react-icons/fa'
import ArticleTableRowTags from './ArticleTableRowTags'
import { useNavigate } from 'react-router-dom'

type Props = {
  row: number
  title: string
  author: string
  tags: string[]
  excerpt: string
  created: string
  slug: string
  onDelete: (slug: string) => void
}

const ArticlesTableRow: React.FC<Props> = ({
  author,
  created,
  excerpt,
  row,
  tags,
  title,
  slug,
  onDelete,
}) => {
  const navigate = useNavigate()

  const handleEdit = () => {
    navigate('/articles/edit/' + slug)
  }

  return (
    <div className='flex items-center h-16 border-b text-grey-6 border-grey-2'>
      <div className='flex items-center flex-grow pl-4'>
        <span className='w-7'>{row}</span>
        <div className='flex items-center justify-between flex-grow pr-4'>
          <span className='flex-grow max-w-[380px] pl-1 pr-4 overflow-hidden'>
            {title}
          </span>
          <span className='max-w-[120px] overflow-hidden'>{author}</span>
          <ArticleTableRowTags tags={tags} />
          <span className='w-56 pl-2'>{excerpt.substring(0, 20) + '...'}</span>
        </div>
        <span className='pr-4 text-end'>{formatTableDate(created)}</span>
      </div>

      <Popover className='relative pt-3'>
        <Popover.Button className='flex w-16 h-10 text-white rounded outline-none bg-blue-2'>
          <div className='px-[10px] pt-2'>…</div>
          <div className='w-[30px] flex items-center justify-center'>
            <CaretIcon className='text-xs' />
          </div>
        </Popover.Button>
        <Popover.Panel className='absolute right-0 z-30 top-10'>
          <div
            className={`flex flex-col rounded text-grey-6 border border-grey-2 bg-white`}
          >
            <button
              className='py-2 pl-4 border-b w-44 border-grey-2 text-start'
              onClick={handleEdit}
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(slug)}
              className='py-[10px] pl-4 w-44 text-start'
            >
              Delete
            </button>
          </div>
        </Popover.Panel>
      </Popover>
    </div>
  )
}

export default ArticlesTableRow
