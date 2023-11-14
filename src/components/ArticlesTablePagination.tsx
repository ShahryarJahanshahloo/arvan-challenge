type Props = {
  total: number
  active: number
  next: () => void
  prev: () => void
  selectPage: (newPage: number) => void
}

const ArticlesTablePagination: React.FC<Props> = ({
  total,
  active,
  next,
  prev,
  selectPage,
}) => {
  return (
    <div className='flex border rounded text-grey-6 border-grey-2 w-fit'>
      <div
        onClick={() => prev()}
        className='flex items-center justify-center w-10 h-10 border-r cursor-pointer border-grey-2'
      >
        <span className=''>{'<'}</span>
      </div>
      <div className='flex'>
        {Array.from({ length: total }, (v, i) => i + 1).map(index => {
          return (
            <div
              onClick={() => selectPage(index)}
              className={`flex items-center cursor-pointer justify-center w-10 h-10 border-r border-grey-2 ${
                index === active ? 'bg-grey-2' : 'bg-white'
              }`}
              key={index}
            >
              <span>{index}</span>
            </div>
          )
        })}
      </div>
      <div
        onClick={() => next()}
        className='flex items-center justify-center w-10 h-10 cursor-pointer'
      >
        <span className=''>{'>'}</span>
      </div>
    </div>
  )
}

export default ArticlesTablePagination
