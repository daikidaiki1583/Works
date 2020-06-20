import React from 'react';
import './App.css';
import SetFile from './component/setfile/setfile.component'

class App extends React.Component {
  constructor(){
    super()

    this.file = React.createRef();
    this.state={
      list:[],
      // post:{text:'',file:''},
      text:'',
      file:''  
    }
  }

  handleSubmit = (e) =>{
    e.preventDefault()
    const fileName = window.URL.createObjectURL(this.file.current.files[0])
    const text = this.state.text
    const obj = {text:text,file:fileName}
    const preList =this.state.list

    this.setState(state => ({
      file:fileName
    }))

    this.setState(state => ({
      list:preList.concat(obj)
    }))

    this.setState(state => ({
      text:''      
    }))

    // window.URL.revokeObjectURL(fileName)

    // this.setState(state => ({
    //   post:obj
    // }))    
    //this.state.postにtext,fileの値をいれたい
    //this.state.postをlist配列にいれてその結果をレンダリングしたい
    console.log(this.state)
  }

    handleChange = (e) => {
    e.preventDefault()
    const {value} = e.target
    this.setState({text:value})
    console.log(this.state)

  }

  render(){
  const post = this.state.list.map((list,index) => {  
    return(
      <div className='post-item' key={index}>
        <p className='post-text'>{list.text}</p>
        <div className='post-image'><img src={list.file} alt={list.text}/></div>
      </div>
    )
  })
    return (
      <div className="App">
        <header className="App-header">
          <form method='post' onSubmit={this.handleSubmit}>
            <textarea 
              onChange={this.handleChange}
              value={this.state.text}
              type='text'
              placeholder='文章を入力してください'
            />
            <div className='option'>
              <SetFile
                ref={this.file}

              />
              <button type='submit'>投稿</button>
            </div> 
          </form>
        </header>
        <div className='post-area'>
          {post}
        </div>
      </div>
    );
  }


}

export default App;
