const Todo = ({ todo }) => {
  return (
    <li className="task">
      <span>{todo.data}</span>
      <span className="icon">
        <i className="fas fa-trash" />
      </span>
      <span className="icon">
        <i className="fas fa-pen" />
      </span>
    </li>
  );
};
export default Todo;
