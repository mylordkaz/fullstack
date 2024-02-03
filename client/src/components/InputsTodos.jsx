import { useState } from 'react';

const InputTodo = () => {
  const [description, setDescription] = useState('');

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      await fetch('https://fullstack-todo-webapp.onrender.com/todos', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(body),
      });
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <>
      <h3 className="mt-5">todos input</h3>
      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button>Add to the list</button>
      </form>
    </>
  );
};

export default InputTodo;
