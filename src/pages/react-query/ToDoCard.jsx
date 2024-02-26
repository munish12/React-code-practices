import { useState } from "react";
export default function TodoCard({ todo }) {
  const [checked, setChecked] = useState(todo.completed);

  return (
    <li>
      {todo.title}
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    </li>
  );
}