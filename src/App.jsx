import { useState } from "react";
import text from './data'
const App = () => {

  const [count,setCount] = useState(1);
  const [data,setData] = useState(text.slice(0,1))
  console.log('text is : ',text);

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(count);
    let newData = text.slice(0,count);
    setData(newData);
  }
  return <form className='lorem-form' style={{display : 'grid'}} onSubmit={handleSubmit}>
    <h3 className="title" style={{margin :'2rem auto'}}>TIRED OF BORING LOREM IPSUM?</h3>
    <div className="input" style={{margin :'2rem auto'}}>
      <label htmlFor="count">Pragraphs : </label>
      <input type="number" name="count" id="count" min = '1' max = '8' step = '1' value={count} onChange={(e)=>setCount(e.target.value)}></input>
    <button className="btn" type="submit" style={{marginLeft : '2rem'}}>Generate</button>
    </div>
    <article className='lorem-text' style={{margin : '5rem'}}>{data.map((obj)=>{return(
      <p>{obj}</p>
    )})}</article>
  </form>;
};
export default App;
