import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {

  return (
    <div>
      <h1 className='text-black font-bold text-3xl mt-10 text-center'>Redux Toolkit Todo List</h1>
      <AddTodo />
      <Todos />
    </div>
  )
}

export default App