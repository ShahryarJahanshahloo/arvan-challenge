import SidebarNavLink from './SidebarNavLink'

const strings = {
  title: 'Post',
  all: 'All Articles',
  new: 'New Article',
}

const Sidebar = () => {
  return (
    <div className='w-[250px] bg-blue-1 text-white flex flex-col text-lg flex-shrink-0'>
      <div className='text-[22px] pl-5 py-[13px]'>{strings.title}</div>
      <SidebarNavLink title={strings.all} to='/articles' />
      <SidebarNavLink title={strings.new} to='/articles/create' />
    </div>
  )
}

export default Sidebar