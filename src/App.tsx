import { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [toDoList, setToDoList] = useState<string[]>([]);
  const [newActivity, setNewActivity] = useState<string>("");

  useEffect(() => {
    // @ts-ignore
    const items = JSON.parse(localStorage.getItem('items'));
    if (items) {
      setToDoList(items);
      console.log(items);
    }
  }, []);

  const addFunction = () => {
    if (newActivity === "") return;
    let tempArray = toDoList;
    tempArray.push(newActivity);
    setToDoList(tempArray);
    localStorage.setItem('items', JSON.stringify(tempArray));
    console.log(tempArray);
    setNewActivity("");
  }

  const deleteFunction = (index: number) => {
    let tempArray = toDoList;
    tempArray.splice(index, 1);
    localStorage.setItem('items', JSON.stringify(tempArray));
    setToDoList(tempArray);
    // @ts-ignore
    const items = JSON.parse(localStorage.getItem('items'));
    if (items) {
      setToDoList(items);
      console.log(items);
    }
  }

  const alterTextFunction = (text: string, index:number) => {
    let tempArray = toDoList;
    tempArray[index] = text;
    localStorage.setItem('items', JSON.stringify(tempArray));
    setToDoList(tempArray);
    // @ts-ignore
    const items = JSON.parse(localStorage.getItem('items'));
    if (items) {
      setToDoList(items);
      console.log(items);
    }
  }

  return (
    <div>
      <div className='header'>
        <label className='-label'>
          Enter the task title:
          <input
            className='textbox'
            name='addToDo'
            value={newActivity}
            onChange={e => setNewActivity(e.target.value)} 
          />
        </label>
        <button onClick={() => addFunction()} className='button'>
          Add to the list
        </button>
      </div>

      <div className='main'>
        {toDoList.length < 1
          ? <span className='noToDo'>No todos found</span>
          :
          <div>
            <h1>To-Do List</h1>
            <div className='list'>
            {toDoList.map((item, index) => {
              return (
                <div className='list-item'>
                  <input
                    className='list-text'
                    name='addToDo'
                    value={item}
                    onChange={e => alterTextFunction(e.target.value, index)} 
                  />
                  <button
                    className='delete'
                    onClick={() => deleteFunction(index)}
                  >
                    Delete
                  </button>
                </div>
              )
            })}
          </div>
        </div>}
      </div>
    </div>
  )
}

export default App;

//