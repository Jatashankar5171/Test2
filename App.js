
import { useState } from 'react';
import './App.css';

function App() {

  const styleBlue = {
    backgroundColor: "blue"
  }
  const styleRed = {
    backgroundColor: "red"
  }

  const init = [
    {id:0,style:styleBlue},
    {id:1,style:styleBlue},
    {id:2,style:styleBlue},
    {id:3,style:styleBlue},
    {id:4,style:styleBlue},
    {id:5,style:styleBlue},
    {id:6,style:styleBlue},
    {id:7,style:styleBlue},
    {id:8,style:styleBlue},
    {id:9,style:styleBlue},
    {id:10,style:styleBlue},
    {id:11,style:styleBlue},
    {id:12,style:styleBlue},
    {id:13,style:styleBlue},
    {id:14,style:styleBlue},
    {id:15,style:styleBlue},
  ]
  const [record,setRecord] = useState([-1,-2]);
  const [state,setState] = useState(init);
  const changeColor = (id) => {
    record.unshift(id)
    let r = record.pop()
    let temp = state.map((cur)=>{
      if(cur.id===id){
        return {id:cur.id,style:styleRed}
      }
      if(cur.id===r){
        return {id:r,style:styleBlue}
      }
      return cur;
    })
    setRecord(record)
    setState(temp)
  }
  return (
    <div className="App">
     <div className='Matrix-game'>
        {
         state.map((cur)=>{
           return <ColorBox key={cur.id} changeColor = {changeColor} style = {state[cur.id].style} id={cur.id}/>
         })
        }
     </div>
    </div>
  );
}

export default App;

function ColorBox(props){

  const id = props.id; 
  const style = props.style;
  const changeColor = (id) => props.changeColor(id)
  return(<>

    <div className='Color-box' onClick={()=>changeColor(id)} style={style}>
     
    </div>

  </>)
}