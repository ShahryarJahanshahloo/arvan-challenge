type Props = {
  isOpen: boolean
  onClick: () => void
}

const MenuIcon: React.FC<Props> = ({ isOpen, onClick }) => {
  return (
    <button className='relative flex items-center' onClick={onClick}>
      <div
        className={`rounded-fulltransition-all relative inline-flex h-[30px] w-[30px] transform items-center justify-center overflow-hidden duration-200`}
      >
        <div className='flex h-[20px] w-[24px] origin-center transform flex-col justify-between overflow-hidden transition-all duration-300'>
          <div
            className={`h-[2px] w-7 origin-left transform  transition-all duration-300 bg-slate-300 ${
              isOpen ? 'translate-x-10' : ''
            }`}
          ></div>
          <div
            className={`h-[2px] w-7 transform rounded  transition-all delay-75 duration-300 bg-slate-300 ${
              isOpen ? 'translate-x-10' : ''
            }`}
          ></div>
          <div
            className={`h-[2px] w-7 origin-left transform  transition-all delay-150 duration-300 bg-slate-300 ${
              isOpen ? 'translate-x-10' : ''
            }`}
          ></div>

          <div
            className={`absolute top-2.5 flex transform items-center justify-between transition-all duration-500 ${
              isOpen ? 'w-12 translate-x-0' : 'w-0 -translate-x-10'
            }`}
          >
            <div
              className={`absolute h-[2px] w-5 transform  transition-all delay-300 duration-500 bg-slate-300 ${
                isOpen ? 'rotate-45' : 'rotate-0'
              }`}
            ></div>
            <div
              className={`absolute h-[2px] w-5 transform  transition-all delay-300 duration-500 bg-slate-300 ${
                isOpen ? '-rotate-45' : '-rotate-0'
              }`}
            ></div>
          </div>
        </div>
      </div>
    </button>
  )
}

export default MenuIcon
