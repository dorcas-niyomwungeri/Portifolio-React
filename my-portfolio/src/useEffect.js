import { useEffect } from "react";
import Nav from "./Nav";

function App(){
const names =["dorcas","kevin","betty"]
return(
    <div>
        <Nav></Nav>
    {names.map((name)=>(
       <h2 key={name}>{name}</h2>
    ))}
    </div>
)
}

export default App;