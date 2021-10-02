import {Component} from 'react'
import './Student.css'

class Student extends Component{
    myLayout = null;
    array = ['A','B','C','D','F']
    arrayItems = this.array.map((a,id)=><li key={id}>{a} - {id}</li>)
    constructor(){
        super();
        this.state = {
            marks: 65
        }
    }
    modifyMarks = (e) => {
        if(this.state.marks+5 >100){
            this.myLayout = <h6 className="myHeading">Marks cannot be greater than 100</h6>
            alert("Marks cannot be greate than 100")
        }
        else{
            this.setState({
                marks: this.state.marks+5
            })
            this.myLayout = <h6 className="myHeading">Marks value modified</h6>
        }
    }
    render(){
        return(
            <div className="myStudentDiv">
                <h3>This is <span className="mySpan"><u>Student</u></span> Component</h3><br />
                <div className="myDataDiv">
                <p>Name = {this.props.name}</p>
                <p>Roll No = {this.props.rollno}</p>
                <p>Marks = {this.state.marks}</p>
                <p>List of Grades:</p>
                <ul>{this.arrayItems}</ul>
                </div>
                <p><button className="btn btn-primary myButton" onClick={this.modifyMarks}>Modify Marks</button></p>
                {this.myLayout}
            </div>
        )   
    }
}

export default Student