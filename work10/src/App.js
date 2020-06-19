import React from 'react';
// import ReactDOM from 'react-dom'
import './App.css';
import Input from './component/input/input.component'
import Button from './component/button/button.component'
import ToDo from './component/todo/todo.component'

class App extends React.Component {
  constructor(props){
    super(props)

    this.state={
      todos:[],
      text:''
    }

  }

  handleSubmit = (e) => {
    e.preventDefault();
    const text = this.state.text
    this.setState({todos:this.state.todos.concat(text)})
    this.setState({text:''})
    
  }

  handleChange = (e) => {
    const {value} = e.target
    this.setState({text:value})
  }

  handleClick = (e) => {
    const todos = this.state.todos.slice()
    const index = parseInt(e.target.parentNode.id)
    todos.splice(index,1)
    this.setState({todos:todos})      
  }

  render() {
    const todoList = this.state.todos.map((todo,id) => <ToDo key={id} id={id} text={todo} handleClick={this.handleClick}/> )
    
    return (
      <div className="App">
          <form onSubmit={this.handleSubmit}>
            <Input
              handleChange={this.handleChange}
              type='text'
              value={this.state.text}
            />
            <Button
              children='追加'
            />
          </form>
          <div id='todoList'>
              {todoList}
          </div>
      </div>
    );
  }

}

// ToDo

export default App;
