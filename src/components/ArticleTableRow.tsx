import { formatTableDate } from '../helpers/time'
import ArticleTableRowTags from './ArticleTableRowTags'
import ArticleTableRowButton from './ArticleTableRowButton'

type Props = {
  row: number
  title: string
  author: string
  tags: string[]
  excerpt: string
  created: string
  slug: string
  onDelete: (slug: string) => void
}

const ArticlesTableRow: React.FC<Props> = ({
  author,
  created,
  excerpt,
  row,
  tags,
  title,
  slug,
  onDelete,
}) => {
  return (
    <tr className='w-full h-16 border-b text-grey-6 border-grey-2'>
      <td className='hidden px-4 md:table-cell'>{row}</td>
      <td className='max-w-[160px] md:max-w-xs pl-2 overflow-hidden text-ellipsis whitespace-nowrap md:pl-0'>
        {title}
      </td>
      <td className='hidden px-2 md:table-cell'>{author}</td>
      <td className='hidden md:table-cell'>
        <ArticleTableRowTags tags={tags} />
      </td>
      <td className='hidden md:table-cell'>
        {excerpt.substring(0, 20) + '...'}
      </td>
      <td>
        <div className='flex items-center justify-end w-full pr-2 md:justify-between md:pr-0'>
          <span className='hidden pr-2 md:block'>
            {formatTableDate(created)}
          </span>
          <ArticleTableRowButton onDelete={onDelete} slug={slug} />
        </div>
      </td>
    </tr>
  )
}

export default ArticlesTableRow
