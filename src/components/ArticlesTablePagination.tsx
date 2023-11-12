import { useState } from 'react'

type Props = {
  total: number
}

const ArticlesTablePagination: React.FC<Props> = ({ total }) => {
  const [active, setActive] = useState(1)

  const next = () => {
    if (active === 5) return

    setActive(active + 1)
  }

  const prev = () => {
    if (active === 1) return

    setActive(active - 1)
  }

  return (
    <div className='flex border rounded text-grey-6 border-grey-2 w-fit'>
      <div className='flex items-center justify-center w-10 h-10 border-r border-grey-2'>
        <span>{'<'}</span>
      </div>
      <div className='flex'>
        {Array.from({ length: total }, (v, i) => i + 1).map(index => {
          return (
            <div
              className='flex items-center justify-center w-10 h-10 border-r border-grey-2'
              key={index}
            >
              <span>{index}</span>
            </div>
          )
        })}
      </div>
      <div className='flex items-center justify-center w-10 h-10'>
        <span>{'>'}</span>
      </div>
    </div>
  )
}

export default ArticlesTablePagination
