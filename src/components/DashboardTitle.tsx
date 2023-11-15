type Props = {
  title: string
}

const DashboardTitle: React.FC<Props> = ({ title }) => {
  return (
    <div>
      <span className='md:text-[40px] md:pl-0 pl-4 text-3xl'>{title}</span>
    </div>
  )
}

export default DashboardTitle
