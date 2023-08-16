//action
// export const addTodoAction = {
//   type: 'todoList/addTodo',
//   payload: {},
// };

export const addTodo = (data) => {
  return {
    type: 'todoList/addTodo',
    payload: data,
  };
};
