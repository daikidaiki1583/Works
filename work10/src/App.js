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
    console.log(this.state.text) 
    this.setState({
      todo:this.state.todo.concat(this.state.text)
    })

  }

  handleChange = (e) => {
    const { value } = e.target
    this.setState({text:value})

  }

  render() {
    console.log(this.state.todo)
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

          </div>
      </div>
    );
  }

}

// ToDo

export default App;
