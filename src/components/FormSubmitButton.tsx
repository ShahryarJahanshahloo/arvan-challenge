type Props = {
  label: string
  disabled?: boolean
  loading?: boolean
  inputClassName?: string
}

const FormSubmitButton: React.FC<Props> = ({
  label,
  disabled = false,
  loading = false,
  inputClassName,
}) => {
  return loading ? (
    <div
      className={`${inputClassName} h-10 text-white rounded cursor-pointer flex justify-center items-center bg-blue-1 ${
        disabled && 'bg-opacity-70'
      }`}
    >
      <img src='/loading.svg' />
    </div>
  ) : (
    <input
      type='submit'
      value={label}
      className={`${inputClassName} h-10 text-white rounded cursor-pointer bg-blue-1 ${
        disabled && 'bg-opacity-70'
      }`}
      disabled={disabled}
    />
  )
}

export default FormSubmitButton
