import React from 'react'

type Props = {
  children: React.ReactNode
  isOpen: boolean
  close: () => void
}

const Modal: React.FC<Props> = ({ children, isOpen, close }) => {
  const handleClick = (e: any) => {
    e.stopPropagation()
  }

  return (
    <div
      className={`flex items-center justify-center fixed z-10 left-0 top-0 w-screen h-screen overflow-auto ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 hidden'
      }`}
      onClick={close}
    >
      <div
        className={`relative bg-white w-full h-full overflow-y-auto flex flex-col justify-center items-center transition-opacity duration-500 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 hidden'
        }`}
        onClick={e => handleClick(e)}
      >
        {children}
      </div>
    </div>
  )
}

export default Modal
