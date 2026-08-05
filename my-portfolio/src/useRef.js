import { useRef } from "react";
import Nav from "./Nav";


 function App() {

    const inputRef = useRef(null);

    function focusInput() {
        inputRef.current.focus();
    }           

    return (
        
        <div>
            <Nav></Nav>
            <p>This is a simple example of using useRef</p>
            <input ref={inputRef} type="text"/>
            <button onClick={focusInput}>
                Focus Input
            </button>
        </div>
    );
}
                            
export default App;