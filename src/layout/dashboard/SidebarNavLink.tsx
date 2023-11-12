import { NavLink, useMatch, useResolvedPath } from 'react-router-dom'

type Props = {
  to: string
  title: string
}

const SidebarNavLink: React.FC<Props> = ({ to, title }) => {
  const resolved = useResolvedPath(to)
  const match = useMatch({ path: resolved.pathname, end: true })

  const handleClassName = ({
    isActive,
  }: {
    isActive: boolean
  }): string | undefined => {
    return isActive && match
      ? 'pl-[34px] py-[11px] bg-white bg-opacity-[15%]'
      : 'pl-[34px] py-[11px]'
  }

  return (
    <NavLink to={to} className={handleClassName}>
      {title}
    </NavLink>
  )
}

export default SidebarNavLink
