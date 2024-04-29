import './App.css';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={todo} onChange={(e) => setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={(e) => {
          setTodos([...todos, { id: Date.now(), text: todo, status: false }]);
        }} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {
          todos.map((todo) => {
            return (
              <div className="todo" key={todo.id}>
                <div className="left">
                  <input  onChange={(e) => {
                    setTodos(todos.filter((obj2)=>{
                      if (obj2.id === todo.id) {
                        obj2.status = e.target.checked;
                      }
                      console.log(obj2);
                      return obj2;
                    }))
                  }} value={todo.status}  type="checkbox" name="" id="" />
                  <p>{todo.text}</p>
                </div>
                <div className="right">
                  <i className="fas fa-times"  onClick={()=>{
                    setTodos(todos.filter((obj)=>{
                      if(obj.id !== todo.id){
                        return obj;
                      }
                      return null;
                    }))
                  }}></i>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
