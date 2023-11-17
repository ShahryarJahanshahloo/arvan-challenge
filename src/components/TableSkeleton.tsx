const TableSkeleton = () => {
  return (
    <>
      {/* desktop skeleton */}
      <tr className='hidden w-full h-16 md:table-row'>
        <td className='px-4'>
          <div className='w-16 h-6 rounded-full bg-neutral-300 animate-pulse'></div>
        </td>
        <td className='px-4'>
          <div className='h-6 rounded-full w-72 bg-neutral-300 animate-pulse'></div>
        </td>
        <td className='px-4 '>
          <div className='w-32 h-6 rounded-full bg-neutral-300 animate-pulse'></div>
        </td>
        <td className='px-4'>
          <div className='w-32 h-6 rounded-full bg-neutral-300 animate-pulse'></div>
        </td>
        <td className='px-4'>
          <div className='w-32 h-6 rounded-full bg-neutral-300 animate-pulse'></div>
        </td>
        <td className='px-4'>
          <div className='w-32 h-6 rounded-full bg-neutral-300 animate-pulse'></div>
        </td>
      </tr>
      {/* mobile skeleton */}
      <tr className='table-row w-full h-16 md:hidden'>
        <td className='px-4'>
          <div className='w-48 h-6 rounded-full bg-neutral-300 animate-pulse'></div>
        </td>
        <td className='px-4'>
          <div className='float-right w-32 h-6 rounded-full bg-neutral-300 animate-pulse'></div>
        </td>
      </tr>
    </>
  )
}

export default TableSkeleton
