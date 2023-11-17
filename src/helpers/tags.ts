export function sortTags(
  tags?: { label: string; checked: boolean; uid: string }[]
) {
  return tags?.sort((a, b) => {
    const textA = a.label.toUpperCase()
    const textB = b.label.toUpperCase()
    return textA < textB ? -1 : textA > textB ? 1 : 0
  })
}
