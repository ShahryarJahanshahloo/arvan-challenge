type Props = {
  label: string
  disabled?: boolean
  loading?: boolean
}

//TODO: full width option
//TODO: height option

const FormSubmitButton: React.FC<Props> = ({
  label,
  disabled = false,
  loading = false,
}) => {
  return loading ? (
    <div
      className={`h-10 text-white rounded cursor-pointer flex justify-center items-center bg-blue-1 ${
        disabled && 'bg-opacity-70'
      }`}
    >
      <img src='/loading.svg' />
    </div>
  ) : (
    <input
      type='submit'
      value={label}
      className={`h-10 text-white rounded cursor-pointer bg-blue-1 ${
        disabled && 'bg-opacity-70'
      }`}
      disabled={disabled}
    />
  )
}

export default FormSubmitButton
