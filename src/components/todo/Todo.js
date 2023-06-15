import React, { useState } from "react";

import { TodoContainer, TodoText } from "./Todo.styles";
import { Round } from "../../pages/home/Home.styles";

import { ReactComponent as Check } from "../../images/icon-check.svg";
import { ReactComponent as Close } from "../../images/icon-cross.svg";

const Todo = ({ todoItem, ...rest }) => {
  const { id, todo, isCompleted } = todoItem;
  const {
    thememode,
    index,
    handleChange,
    handleDelete,
    dragStart,
    dragEnter,
    dropItem,
  } = {
    ...rest,
  };
  const [hover, setHover] = useState(false);

  const handleHover = () => setHover((prevState) => !prevState);

  return (
    <TodoContainer
      thememode={thememode}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      onDragStart={(e) => dragStart(e, index)}
      onDragEnter={(e) => dragEnter(e, index)}
      onDragEnd={dropItem}
      draggable
    >
      <Round onClick={() => handleChange(id)} active={isCompleted}>
        {isCompleted && <Check />}
      </Round>
      <TodoText active={isCompleted} thememode={thememode}>
        {todo}
      </TodoText>
      {hover && (
        <Close
          style={{ marginLeft: "auto", cursor: "pointer" }}
          onClick={() => handleDelete(id)}
        />
      )}
    </TodoContainer>
  );
};

export default Todo;
