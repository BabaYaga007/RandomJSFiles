import { Component } from "react";
import './App.css'
import './NavigationBar.css'
export default class Home extends Component{
    render(){
        return(
            <div className="myNavDivData">
                <p>Welcome to my Website!</p>
                <p>Nice to meet you.</p>
                <p>
                    <div>This was created by Gaurang Bhardwaj</div>
                </p>
                <div>Welcome to the world of React</div>
            </div>
        )
    }
}

