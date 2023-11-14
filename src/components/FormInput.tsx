type Props = {
  label: string
  onChange: ((args: unknown) => unknown) | ((e: React.ChangeEvent<any>) => void)
  value: any
  id?: string
  type?: string
  error?: string
  autcomplete?: string
  placeholder?: string
  textarea?: boolean
  resize?: 'none' | 'vertical' | 'horizontal' | 'both'
  containerClassName?: string
  inputClassName?: string
}

const resizeClassName = {
  none: 'resize-none',
  vertical: 'resize-y',
  horizontal: 'resize-x',
  both: 'resize',
}

const FormInput: React.FC<Props> = ({
  label,
  id,
  onChange,
  type = 'text',
  value,
  error,
  autcomplete,
  placeholder,
  textarea = false,
  resize = 'none',
  containerClassName,
  inputClassName,
}) => {
  return (
    <div className={`${containerClassName} flex flex-col mb-7`}>
      <label className={`mb-[10px] pl-1 ${error && 'text-red-1'}`}>
        {label}
      </label>
      {textarea ? (
        <textarea
          id={id}
          className={`${inputClassName} outline-none h-10 px-3 border rounded border-grey-2 ${
            error && 'border-red-1'
          } ${resizeClassName[resize]}`}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
        />
      ) : (
        <input
          id={id}
          type={type}
          className={`${inputClassName} outline-none h-10 px-3 border rounded border-grey-2 ${
            error && 'border-red-1'
          }`}
          onChange={onChange}
          value={value}
          autoComplete={autcomplete}
          placeholder={placeholder}
        />
      )}
      {error ? <div className='text-red-1'>{error}</div> : null}
    </div>
  )
}

export default FormInput
