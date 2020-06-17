import React from 'react';
import ReactDOM from 'react-dom'
import './App.css';
import Input from './component/input/input.component'
import Button from './component/button/button.component'
import ToDo from './component/todo/todo.component'

class App extends React.Component {
  constructor(props){
    super(props)

    this.state={
      todo:[],
      text:''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      todo:this.state.todo.concat(this.state.text)
    })

  }

  handleChange = (e) => {
    const { value } = e.target
    this.setState({text:value})

  }

  render() {
    return (
      <div className="App">
          <form onSubmit={this.handleSubmit}>
            <Input
              type='text'
              name='text'
              handleChange={this.handleChange}
              value={this.state.text}
            />
            <Button
              children='追加'
            />
          </form>
          <div id='todoList'>
            {this.state.todo.map((todolist,idx)=>{
              return(
                <ToDo
                text={todolist}
                id={idx}
              />)
            })}
          </div>
      </div>
    );
  }

}

// ToDo

export default App;
