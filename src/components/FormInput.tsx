type Props = {
  label: string
  onChange: (args: unknown) => unknown
  value: any
  id: string
  type: string
  error?: string
  autcomplete?: string
}

const FormInput: React.FC<Props> = ({
  label,
  id,
  onChange,
  type,
  value,
  error,
  autcomplete,
}) => {
  return (
    <div className='flex flex-col mb-7'>
      <label className={`mb-[10px] pl-1 ${error && 'text-red-1'}`}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        className={`outline-none h-10 px-3 border rounded border-grey-2 ${
          error && 'border-red-1'
        }`}
        onChange={onChange}
        value={value}
        autoComplete={autcomplete}
      />
      {error ? <div className='text-red-1'>{error}</div> : null}
    </div>
  )
}

export default FormInput
