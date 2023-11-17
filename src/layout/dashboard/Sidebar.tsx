import SidebarNavLink from './SidebarNavLink'

const strings = {
  title: 'Post',
  all: 'All Articles',
  new: 'New Article',
}

type Props = {
  isOpen: boolean
  closeSidebar: () => void
}

const Sidebar: React.FC<Props> = ({ isOpen, closeSidebar }) => {
  return (
    <>
      {/* desktop sidebar */}
      <div className='w-[250px] bg-blue-1 text-white flex-col text-lg flex-shrink-0 hidden md:flex'>
        <div className='text-[22px] pl-5 py-[13px]'>{strings.title}</div>
        <SidebarNavLink title={strings.all} to='/articles' />
        <SidebarNavLink title={strings.new} to='/articles/create' />
      </div>

      {/* mobile sidebar */}
      <div
        className={`${
          isOpen ? 'bg-opacity-40' : 'pointer-events-none bg-opacity-0'
        } fixed top-15 left-0 z-10 h-screen w-full overflow-hidden bg-neutral-900 transition-all duration-300`}
        onClick={() => closeSidebar()}
      >
        <div
          onClick={e => {
            e.stopPropagation()
          }}
          className={`${
            !isOpen && '-translate-x-full'
          } absolute left-0 top-0 flex flex-col h-full w-64 bg-neutral-800 text-white bg-opacity-100 transition-all duration-500 sm:w-80`}
        >
          <div className='text-[22px] pl-5 py-[13px]'>{strings.title}</div>
          <SidebarNavLink
            title={strings.all}
            to='/articles'
            callback={closeSidebar}
          />
          <SidebarNavLink
            title={strings.new}
            to='/articles/create'
            callback={closeSidebar}
          />
        </div>
      </div>
    </>
  )
}

export default Sidebar
