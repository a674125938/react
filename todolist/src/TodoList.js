import React ,{Component , Fragment} from 'react';



class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputVal:'112',
      list:['121','1321']
    }
  }
  render(){
    return (
      <Fragment>
        <div>
          <input value = { this.state.inputVal } onChange={this.handleInputChange.bind(this)}/>
          <button onClick={this.handleClick.bind(this)}>提交</button>
        </div>
        <ul>
          <li>{
            this.state.list.map((item , index) => {
              return <li>{item}</li>
            })
          }</li>
        </ul> 
      </Fragment>
       
    )
  }
  handleInputChange(e){
    this.setState({
      inputVal:e.target.value
    })
  }
  handleClick(){
    this.setState({
      list:[...this.state.list,this.state.inputVal]
    })
   // this.state.list.push(this.state.inputVal)
  }
}

export default TodoList;
