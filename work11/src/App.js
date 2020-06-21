import React from 'react';
import './App.css';
import SetFile from './component/setfile/setfile.component'
import {storage} from './firebase/firebase.utils'



class App extends React.Component {
  constructor(){
    super()

    this.file = React.createRef()
    this.storageRef = storage.ref()

    this.state={
      list:[],
      text:'',
      file:'',
      url:''
    }

  }

  // stateにurl:''を加え、そこに対する参照を画像を表示させたい部分にthis.state.urlと書く。
  // そしてsetStateでurlを更新してrender()を呼び出すと画像が表示される
  // test(){
  //   this.storageRef.child('images/IMG_4660.PNG').getDownloadURL()
  //   .then(url=>{
  //     this.setState({url:url})
  //   })
  // }

  test2(file){
    this.storageRef.put(file).then(snapshot=> console.log('成功').catch(error => console.log(error)))
  }

  componentDidMount(){
    localStorage.clear()
    console.log(localStorage.getItem('data'))
    const newObj = JSON.parse(localStorage.getItem('data'))
    if (newObj === null){
      console.log('nullだったのでsetstateしませんでした')
      return
    } 

    this.setState({list:this.state.list.concat(newObj)})

  }

  handleSubmit = async (e) =>{
    e.preventDefault()
    if (!this.state.text && this.file.current.files.length < 1){
      alert('テキストを入力し、ファイルを選択して下さい')
      return
    }　else if(!this.state.text) {
      alert('テキストを入力して下さい')
      return  
    }  else if (this.file.current.files.length < 1) {
      alert('ファイルを選択して下さい')
      return  
    }    

    const fileName = window.URL.createObjectURL(this.file.current.files[0])
    const text = this.state.text
    const obj = {text:text,file:fileName}
    const preList =this.state.list

    this.setState(state => ({
      file:fileName
    }))

    await this.setState((state) => ({
      list:preList.concat(obj)
    }))

    this.setState({text:''})

    const postList = this.state.list
    console.log(postList)
    localStorage.setItem('data',JSON.stringify(postList))

    // this.test2(this.file.current[0])
    
    const file = new File(this.file.current.files,'.png',{type:'image/png'})
    console.log(file)
    this.storageRef.child('images/images3').put(file).then(snapshot=> console.log('成功')).catch(error => console.log(error))


  }
  

  handleChange = (e) => {
    e.preventDefault()
    const {value} = e.target
    this.setState({text:value})
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
          <h1>柴犬写真投稿サイト</h1>
          <div className='test-image'><img src={this.state.url} alt='test'/> 
          </div>
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
