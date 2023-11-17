import { Dialog } from '@headlessui/react'
import { ImCross as CrossIcon } from 'react-icons/im'

type Props = {
  isOpen: boolean
  close: () => void
  onSuccess: () => void
  onReject: () => void
}

const DeleteArticleModal: React.FC<Props> = ({
  close,
  isOpen,
  onReject,
  onSuccess,
}) => {
  return (
    <Dialog
      open={isOpen}
      onClose={() => close()}
      className='fixed top-0 left-0 z-10 flex items-center justify-center w-screen h-screen overflow-hidden bg-black bg-opacity-25'
    >
      <Dialog.Panel className='flex flex-col justify-center overflow-y-auto bg-white border rounded border-grey-3 w-[500px] text-grey-6'>
        <div className='h-[62px] flex items-center px-4 border-b border-grey-2 justify-between'>
          <span className='text-xl font-bold'>Delete Article</span>
          <CrossIcon
            className='text-[#818a91] cursor-pointer'
            onClick={() => close()}
          />
        </div>
        <p className='pt-4 pl-5 border-b border-grey-2 h-[88px]'>
          Are you sure to delete Article?
        </p>
        <div className='flex justify-end gap-4 px-4 py-4'>
          <button
            className='h-10 px-6 border rounded border-grey-2'
            onClick={() => onReject()}
          >
            No
          </button>
          <button
            className='h-10 px-6 text-white border rounded border-[#d9534f] bg-[#cb2e25]'
            onClick={() => onSuccess()}
          >
            Yes
          </button>
        </div>
      </Dialog.Panel>
    </Dialog>
  )
}

export default DeleteArticleModal
