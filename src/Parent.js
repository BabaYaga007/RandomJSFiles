import {Component} from 'react'
import Student from './Student'

class Parent extends Component{
    render(){
        return(
            <div aling="left" className="myStudentDiv">
                <h2>This is <span className="mySpan"><u>Parent</u></span> Component</h2><br />
                <Student name="Gaurang Bhardwaj" rollno={23}/>
            </div>
        )
    }
}

export default Parent