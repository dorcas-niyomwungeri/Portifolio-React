import {useState} from 'react';

function App(){
    const [Name , setName] = useState("Dorcas");
    return(
        <div>
            <button onClick={() => setName("perla")}>Change Name</button>
            <h1>{Name}</h1>
            <button onClick={() => setName("Dorcas")}>Return to Current Name</button>
        </div>
    )
}

export default App;