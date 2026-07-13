import { Link } from "react-router-dom";
import Nav from "./Nav"
import Button from "./Button";
import Input from "./Input";
import "./Contact.css";

export default function Contact(){
    return (
        <div>
            <Nav></Nav>
            <h1>For more information, please contact us: by filling this form</h1>
            <Input type="text" placeholder="username"></Input>
            <Input type="email" placeholder="email"></Input>
            <Input type="text" placeholder="subject"></Input>
            <textarea placeholder="message"></textarea>
            <Button title="Submit" onClick={()=>{alert('Submitted!!!')}}></Button>
        </div>
    )
}