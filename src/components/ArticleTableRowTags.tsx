type Props = {
  tags: string[]
}

const ArticleTableRowTags: React.FC<Props> = ({ tags }) => {
  return (
    <div className='flex-wrap w-[180px] gap-2 pl-2 max-h-[48px] overflow-hidden hidden md:flex'>
      {tags.map(tag => {
        return (
          <span className='px-1 text-sm rounded bg-green-2' key={tag}>
            {tag}
          </span>
        )
      })}
    </div>
  )
}

export default ArticleTableRowTags
