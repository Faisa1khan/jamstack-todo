import React, { useState } from "react";
import axios from "axios";
import styles from "./from.module.css";

const Form = ({ reloadTodos }) => {
  const [text, setText] = useState("");
  const handleSubmit = async event => {
    event.preventDefault();

    if (text === "") return;

    await axios.post("/api/create-todo", { text });

    setText("");
    reloadTodos();
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <lable className={styles.label}>
        Add a Todo
        <input
          type="text"
          className={styles.input}
          value={text}
          onChange={event => setText(event.target.value)}
        />
      </lable>
      <button className={styles.button}>Save Todo</button>
    </form>
  );
};

export default Form;
