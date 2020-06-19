import React from 'react';
import logo from './logo.svg';
import './App.css';
import SetFile from './component/setfile/setfile.component'

class App extends React.Component {
  constructor(){
    super()

    this.file = React.createRef();
    this.state={
      file:logo
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const fileName = window.URL.createObjectURL(this.file.current.files[0])
    this.setState({file:fileName})
    // this.setState({file:fileName})
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={this.state.file} className="App-logo" alt="logo" />
          <form method='post' onSubmit={this.handleSubmit}>
            <SetFile
              ref={this.file}
            />
            <button type='submit'>表示</button>
          </form>
        </header>
      </div>
    );
  }


}

export default App;
