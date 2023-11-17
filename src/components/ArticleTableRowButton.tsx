import { FaCaretDown as CaretIcon } from 'react-icons/fa'
import { Popover } from '@headlessui/react'
import { useNavigate } from 'react-router-dom'

type Props = {
  slug: string
  onDelete: (slug: string) => void
}

const ArticleTableRowButton: React.FC<Props> = ({ onDelete, slug }) => {
  const navigate = useNavigate()

  const handleEdit = () => {
    navigate('/articles/edit/' + slug)
  }

  return (
    <Popover className='relative pt-3'>
      <Popover.Button className='flex w-16 h-10 text-white rounded outline-none bg-blue-2'>
        <div className='px-[10px] pt-2'>…</div>
        <div className='w-[30px] flex items-center justify-center h-full'>
          <CaretIcon className='text-xs' />
        </div>
      </Popover.Button>
      <Popover.Panel className='absolute right-0 z-30 top-10'>
        <div
          className={`flex flex-col rounded text-grey-6 border border-grey-2 bg-white`}
        >
          <button
            className='py-[10px] pl-4 border-b w-44 border-grey-2 text-start'
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
  )
}

export default ArticleTableRowButton
