type Props = {
  title: string
}

const DashboardTitle: React.FC<Props> = ({ title }) => {
  return (
    <div>
      <span className='text-[40px]'>{title}</span>
    </div>
  )
}

export default DashboardTitle
