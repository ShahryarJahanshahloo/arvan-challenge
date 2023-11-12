const strings = {
  title: 'Post',
  all: 'All Articles',
  new: 'New Article',
}

const Sidebar = () => {
  return (
    <div className='w-[250px] bg-blue-1 text-white flex flex-col text-lg flex-shrink-0'>
      <div className='text-[22px] pl-5 py-[13px]'>{strings.title}</div>
      <div className='pl-[34px] py-[11px]'>{strings.all}</div>
      <div className='pl-[34px] py-[11px]'>{strings.new}</div>
    </div>
  )
}

export default Sidebar
