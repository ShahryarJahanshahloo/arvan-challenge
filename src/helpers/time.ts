import moment from 'moment'

export function formatTableDate(date: string | Date): string {
  const res = moment(date).format('LL')
  return res
}
