import React, { useState } from "react";

import { useAppDispatch } from "../../app/hooks";

import { useSelector } from "react-redux";

import {
  addTodo,
  toggleComplete,
  deleteTodo,
  clearComplete,
} from "../../features/todos/todos-slice";
import { toggle } from "../../features/theme/theme-slice";

import darkBackground from "../../images/bg-desktop-dark.jpg";
import lightBackground from "../../images/bg-desktop-light.jpg";

import { ReactComponent as Moon } from "../../images/icon-moon.svg";
import { ReactComponent as Sun } from "../../images/icon-sun.svg";

import {
  HomeContainer,
  ImageContainer,
  TodoContainer,
  Header,
  InputContainer,
  ListContainer,
  Round,
  Form,
  TodoInput,
  StatusBar,
  Counts,
  Tabs,
  ClearCompleted,
  Tab,
} from "./Home.styles";

import Todo from "../../components/todo/Todo";

let id = 0;

const Home = () => {
  const todos = useSelector((state) => state.todos.value);
  const theme = useSelector((state) => state.theme.value);

  const [todo, setTodo] = useState("");
  const [copyTodos, setCopyTodos] = useState(todos);

  const [all, setAll] = useState(true);
  const [active, setActive] = useState(false);
  const [completed, setCompleted] = useState(false);

  const dispatch = useAppDispatch();

  const handleThemeToggle = () => {
    dispatch(toggle());
  };

  const handleInput = (e) => setTodo(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    id++;
    setCopyTodos([...copyTodos, { id, todo, isCompleted: false }]);
    dispatch(addTodo({ id, todo, isCompleted: false }));
  };

  const handleCheckboxChange = (id) => {
    let tempTodos = JSON.parse(JSON.stringify(todos));
    tempTodos = tempTodos.map((todo) => {
      if (todo.id !== id) {
        return todo;
      }
      return { id: todo.id, todo: todo.todo, isCompleted: !todo.isCompleted };
    });
    setCopyTodos(tempTodos);
    dispatch(toggleComplete(tempTodos));
  };

  const handleDelete = (id) => {
    let tempTodos = JSON.parse(JSON.stringify(todos));
    tempTodos = tempTodos.filter((todo) => todo.id !== id);
    setCopyTodos(tempTodos);
    dispatch(deleteTodo(tempTodos));
  };

  const handleClearCompleted = () => {
    let tempTodos = JSON.parse(JSON.stringify(todos));
    tempTodos = tempTodos.filter((todo) => todo.isCompleted !== true);
    setCopyTodos(tempTodos);
    dispatch(clearComplete(tempTodos));
  };

  const toggleActiveClass = (type) => {
    if (type === "all") {
      setCopyTodos(todos);
      setAll(true);
      setActive(false);
      setCompleted(false);
    } else if (type === "active") {
      let active = todos.filter((todo) => todo.isCompleted === false);
      setCopyTodos(active);
      setAll(false);
      setActive(true);
      setCompleted(false);
    } else if (type === "completed") {
      let completed = todos.filter((todo) => todo.isCompleted === true);
      setCopyTodos(completed);
      setAll(false);
      setActive(false);
      setCompleted(true);
    }
  };

  return (
    <HomeContainer thememode={theme}>
      <ImageContainer>
        <img
          src={theme === "dark" ? darkBackground : lightBackground}
          alt="background"
        />
      </ImageContainer>
      <TodoContainer>
        <Header>
          <h1>TODO</h1>
          {theme === "dark" ? (
            <Sun onClick={handleThemeToggle} />
          ) : (
            <Moon onClick={handleThemeToggle} />
          )}
        </Header>
        <InputContainer thememode={theme}>
          <Round thememode={theme} />
          <Form onSubmit={(e) => handleSubmit(e)}>
            <TodoInput
              type="text"
              placeholder="Create a new todo..."
              name="todo"
              onChange={(e) => handleInput(e)}
            />
          </Form>
        </InputContainer>
        <ListContainer thememode={theme}>
          {copyTodos.map((todoItem, index) => (
            <Todo
              thememode={theme}
              key={index}
              todoItem={todoItem}
              handleChange={handleCheckboxChange}
              handleDelete={handleDelete}
              active={todoItem.isCompleted}
            />
          ))}
          <StatusBar thememode={theme}>
            <Counts>
              {todos.length} {todos.length < 2 ? "item" : "items"} left
            </Counts>
            <Tabs>
              <Tab
                thememode={theme}
                className={all && "active"}
                onClick={() => toggleActiveClass("all")}
              >
                All
              </Tab>
              <Tab
                thememode={theme}
                className={active && "active"}
                onClick={() => toggleActiveClass("active")}
              >
                Active
              </Tab>
              <Tab
                thememode={theme}
                className={completed && "active"}
                onClick={() => toggleActiveClass("completed")}
              >
                Completed
              </Tab>
            </Tabs>
            <ClearCompleted onClick={handleClearCompleted}>
              Clear Completed
            </ClearCompleted>
          </StatusBar>
        </ListContainer>
      </TodoContainer>
    </HomeContainer>
  );
};

export default Home;
