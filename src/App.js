// import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
 const [main,setMain]=useState([{ name:'nency',guj:95,hindi:86,eng:90}])
 const [val1,setVal1]=useState()
 const [val2,setVal2]=useState()
 const [val3,setVal3]=useState()
 const [val4,setVal4]=useState()
 const [ad,setAd]=useState(-1)
 const [val5,setVal5]=useState()
 const [val6,setVal6]=useState()
 const [val7,setVal7]=useState()
 const [val8,setVal8]=useState()

let addhandler=()=>{
  if(val1){
    setVal5('')
  }
  else{
    setVal5('enter name')
  }
  if(val2){
    setVal6('')
  }
  else{
    setVal6('enter guj')
  }
  if(val3){
    setVal7('')
  }
  else{
    setVal7('enter hindi')
  }
  if(val4){
    setVal8('')
  }
  else{
    setVal8('enter eng')
  }
  if(ad >=0){
    
    if(val1 && val2 && val3 && val4){
      let copyMain2=[...main]
      copyMain2.splice(ad,1,{name:val1,guj:val2,hindi:val3,eng:val4})
      setMain(copyMain2)
      setVal1('')
      setVal2('')
      setVal3('')
      setVal4('')
      setAd(-1) 
    }
  }
  else{
 
  if(val1 && val2 && val3 && val4){
    let copyMain=[...main]
    copyMain.push({name:val1,guj:val2,hindi:val3,eng:val4})
    setMain(copyMain)
    setVal1('')
    setVal2('')
    setVal3('')
    setVal4('')
    setVal5('')
    setVal6('')
    setVal7('')
    setVal8('')
  }
}}

let edithandler1=(aa)=>{
   setVal1(aa.target.value)
}
let edithandler2=(aa)=>{
  setVal2(aa.target.value)
}
let edithandler3=(aa)=>{
  setVal3(aa.target.value)
}
let edithandler4=(aa)=>{
  setVal4(aa.target.value)
}
let deletehandler=(i)=>{
  let copyMain=[...main]
  copyMain.splice(i,1)
  setMain(copyMain)
}
const edithandler=(aa,i)=>{
  setVal1(aa.name)
  setVal2(aa.guj)
  setVal3(aa.hindi)
  setVal4(aa.eng)
  setAd(i)
}

const edithandler5=()=>{

}
const edithandler6=()=>{
  
}
const edithandler7=()=>{
  
}
const edithandler8=()=>{
   
}
return(
  <>
  <div className='App'>

  <div className='nn'>
    <input onChange={edithandler1} value={val1} id="ap" placeholder='enter name'type="text"/>
    <input onChange={edithandler2} value={val2}  placeholder='enter guj'type="text"/>
    <input onChange={edithandler3} value={val3}  placeholder='enter hindi'type="text"/>
    <input onChange={edithandler4} value={val4}  placeholder='enter eng'type="text"/>
    <button onClick={addhandler}>submit</button>
  </div>

  <div className='mmm'>
    <p onChange={edithandler5} className='yy'>{val5}</p>
    <p onChange={edithandler6} className='yy'>{val6}</p>
    <p onChange={edithandler7} className='yy'>{val7}</p>
    <p onChange={edithandler8} className='yy'>{val8}</p>
  </div>
  <table>
    <tr>
      <th>name</th> 
      <th>guj</th>
      <th>hindi</th>
      <th>eng</th>
      <th>delete</th>
      <th>edit</th> 
    </tr>

    {main.map((aa,index)=>(
      
       <tr>
                <td>{aa.name}</td>
                <td>{aa.guj}</td>
                <td>{aa.hindi}</td>
                <td>{aa.eng}</td>
                <td><button onClick={()=>deletehandler(index)}>delete</button></td>
                <td><button onClick={()=>edithandler(aa,index)}>edit</button></td>
        </tr>  
    ))
}
  </table>
  </div>

  </>
);
 }
 export default App;

