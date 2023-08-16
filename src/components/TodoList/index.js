import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/action';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { todoListSelector } from '../../redux/seletors';
export default function TodoList() {
  const [todoName, setTodoName] = useState('');
  const [priority, setPriority] = useState('MEDIUM');
  // const todoList = useSelector(state =>state.todoList);
  const todoList = useSelector(todoListSelector);

  // dùng custom hook của redux để dispatch action
  const dispatch = useDispatch();
  const handleAddBtnClick = () => {
    dispatch(
      addTodo({
        id: uuidv4(),
        name: todoName,
        priority: '',
        completed: false,
      }),
    );
  };
  const handleInputChange = (e) => {
    setTodoName(e.target.value);
  };
  const handlePriorityChange = (value) => {
    setPriority(value);
  };
  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {todoList.map((todo) => {
          <Todo
            value={todo.name}
            onChange={handleInputChange}
            priority={todo.priority}
          />;
        })}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input />
          <Select defaultValue="Medium">
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary">Add</Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
