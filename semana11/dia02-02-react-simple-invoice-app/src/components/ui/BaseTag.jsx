const BaseTag = ({ label, bgColorClass, textColorClass }) => {
  return (
    <div
      className={`py-3 rounded-md min-w-[120px] text-center capitalize font-extrabold ${bgColorClass} ${textColorClass}`}
    >
      <span className="text-3xl leading-3 mr-2">•</span>
      {label}
    </div>
  )
}

export default BaseTag