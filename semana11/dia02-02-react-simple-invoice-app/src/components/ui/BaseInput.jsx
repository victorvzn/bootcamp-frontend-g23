export const BaseInput = ({
  type='text',
  name,
  classx,
  label,
  value,
  placeholder,
  onChange
}) => {
  return (
    <label className={`text-white flex flex-col gap-2 mb-4 ${classx}`}>
      <span>{label}</span>
      <input
        className="w-full py-4 px-5 rounded-lg bg-slate-800"
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={event => onChange(event)}
      />
    </label>
  )
}
