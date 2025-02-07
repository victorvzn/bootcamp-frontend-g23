const TodoHeader = ({ title, color }) => {
  return (
    <header>
      <h1 className={`text-xl font-bold underline ${color}`}>
        {title}
      </h1>
    </header>
  )
}

export default TodoHeader