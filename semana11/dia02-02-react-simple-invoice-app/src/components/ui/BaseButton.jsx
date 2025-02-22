export const BaseButton = ({
  children,
  type='button',
  label,
  bgColor,
  textColor = 'text-white',
  classx,
  onClick
}) => {
  return (
    <button
      type={type}
      className={`rounded-full px-5 py-4 font-semibold min-w-[100px] ${bgColor} ${textColor} ${classx}`}
    >
      { label ? label : children }
    </button>
  )
}
