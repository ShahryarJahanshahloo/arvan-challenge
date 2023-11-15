const TableSkeleton = () => {
  return (
    <div className='flex gap-6'>
      <div className='w-10 h-6 bg-neutral-300 animate-pulse'></div>
      <div className='w-32 h-6 bg-neutral-300 animate-pulse'></div>
      <div className='flex-grow h-6 bg-neutral-300 animate-pulse'></div>
      <div className='flex-grow h-6 bg-neutral-300 animate-pulse'></div>
      <div className='w-20 h-6 bg-neutral-300 animate-pulse'></div>
    </div>
  )
}

export default TableSkeleton
