type Props = {
  label: string
  checked: boolean
  uid?: string
  onChange: (tag: { label: string; checked: boolean; uid?: string }) => unknown
}

const FormCheckbox: React.FC<Props> = ({ checked, label, onChange, uid }) => {
  return (
    <div className='flex items-center gap-2'>
      <input
        className='accent-blue-1'
        type='checkbox'
        defaultChecked={checked}
        onChange={() => {
          onChange({ checked, label, uid })
        }}
      />
      <label className=''>{label}</label>
    </div>
  )
}

export default FormCheckbox
