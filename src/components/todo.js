import React, { useEffect, useState } from 'react';
import Form from './form';
import List from './list';
import { v4 as uuid } from 'uuid';
import "@blueprintjs/core/lib/css/blueprint.css";
import axios from 'axios';

const todoAPI = 'https://api-js401.herokuapp.com/api/v1/todo';
let config = {
  headers: {
    mode: 'cors',
    cache: 'no-cache',
    'Content-Type': 'application/json',
  },
};
const ToDo = () => {

  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);

  function addItem(item) {
    item.due = new Date();
    fetch(todoAPI, {
      method: 'post',
      mode: 'cors',
      cache: 'no-cache',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item)
    })
      .then(response => response.json())
      .then(savedItem => {
        setList([...list, savedItem])
      })
      .catch(console.error);
  }

  // function deleteItem(id) {
  //   const items = list.filter( item => item.id !== id );
  //   setList(items);
  // }

  function toggleComplete(id) {

    let item = list.filter(i => i._id === id)[0] || {};

    if (item._id) {

      item.complete = !item.complete;

      let url = `${todoAPI}/${id}`;

      fetch(url, {
        method: 'put',
        mode: 'cors',
        cache: 'no-cache',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item)
      })
        .then(response => response.json())
        .then(savedItem => {
          setList(list.map(listItem => listItem._id === item._id ? savedItem : listItem));
        })
        .catch(console.error);
    }
  }

  const getTodoItems = () => {
    fetch(todoAPI, {
      method: 'get',
      mode: 'cors',
    })
      .then(data => data.json())
      .then(data => setList(data.results))
      .catch(console.error);
  };


  const handleDelete = async (id) => {
    let url = `${todoAPI}/${id}`;
    const method = 'delete';

				const results = await axios[method](url, config);
				setList(
					list.filter(
						(listItem) => listItem._id !== results.data._id,
					),
				);
  }
  useEffect(getTodoItems, []);


  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  }, [list]);

  return (
    <>
      <h1 style={{color:'white', padding:'10px'}}>To Do List: {incomplete} items pending</h1>
      <Form addItem={addItem} />
      <List list={list} toggleComplete={toggleComplete}  handleDelete={handleDelete} />
    </>
  );
};

export default ToDo;