const TableSkeleton = () => {
  return (
    <>
      {/* desktop skeleton */}
      <div className='hidden gap-6 md:flex'>
        <div className='w-10 h-6 bg-neutral-300 animate-pulse'></div>
        <div className='w-32 h-6 bg-neutral-300 animate-pulse'></div>
        <div className='flex-grow h-6 bg-neutral-300 animate-pulse'></div>
        <div className='flex-grow h-6 bg-neutral-300 animate-pulse'></div>
        <div className='w-20 h-6 bg-neutral-300 animate-pulse'></div>
      </div>
      {/* mobile skeleton */}
      <div className='block h-6 mx-6 md:hidden bg-neutral-300 animate-pulse'></div>
    </>
  )
}

export default TableSkeleton
