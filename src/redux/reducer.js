const initState = {
  filter: {
    search: '', // giá trị input để filter
    status: 'All', // trạng thái hiện tại của todo gồm All - Completed -To do
    priority: [], //  độ ưu tiên
  },
  todoList: [
    {
      id: 1,
      todo: 'Learn Yoga', // việc cần làm
      completed: false, // đã hoàn thành hay chưa boolean
      priority: 'Medium', // độ ưu tiên
    },
    { id: 2, todo: 'Learn Redux', completed: true, priority: 'Hight' },
    { id: 3, todo: 'Learn JavaScript', completed: false, priority: 'Low' },
  ],
};
const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case 'todoList/addTodo': {
      return {
        ...state,
        todoList: [
          ...state.todoList, //
          { id: 5, todo: 'Learn Football', completed: false, priority: 'Low' },
        ],
      };
    }
    default:
      return state;
  }
};
export default rootReducer;
