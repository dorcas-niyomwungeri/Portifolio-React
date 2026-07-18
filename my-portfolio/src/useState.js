import {useState} from 'react';
import Nav from "./Nav";
import String from "./String";
import Indexed from'./Indexed';
function App(){
    const [count,setCount] = useState(0);
    return(
        <div>
            <Nav />

            <button onClick={() => setCount(count + 1)}>Increment</button>
            <h1>{count}</h1>
            <button onClick={() =>{
              if(count>0){
                setCount(count - 1)
              }
            }}>Decrement</button>
            <p> <u>Change one 1<String /></u> </p>
            <p> <u>Change one 2<Indexed /> </u> </p>
        </div>
    )
}
export default App;