import React, { useState,useEffect,useContext } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import { ListContext } from '../../context/listContext.js';
import './todo.scss';
import { SettingContext } from '../../context/settingsContext.js';

function ToDo(props) {

  const listContext = useContext(ListContext);
  const settingContext = useContext(SettingContext);

  const [state, setState] = useState([])

  useEffect(()=>{
    let localSettings = localStorage.getItem('settings') === true;
    if(localSettings){
      localSettings = JSON.parse(localStorage.getItem('settings'))
      settingContext.setSettings(localSettings.items,localSettings.view);
    }
  },[])
  

  return (
    <>
      <div className="formHeader">
        <h2>
          To Do List Manager ( {listContext.list.filter(item => !item.complete).length} )
        </h2>
      </div>

      <section className="todo">

        <div>
          <TodoForm

            />
        </div>

        <div>
          <TodoList
            list={state}

          />
        </div>
      </section>
    </>
  );
}


export default ToDo;