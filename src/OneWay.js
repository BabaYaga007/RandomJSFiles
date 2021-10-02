import {Component} from 'react'
import './OneWay.css'
class OneWay extends Component{
    constructor(){
        super();
        this.state={
            iValue: 'Mouse'
        }
    }
    handleChange = (e) => {
        this.setState({
            iValue: e.target.value
        })
    }
    render(){
        return(
            <div className="oneWayDiv">
                <p>Two Way Class Data Binding</p>
                <input type="text" value={this.state.iValue} onChange={this.handleChange}/>
                <p class="oneWayP">{this.state.iValue}</p>
            </div>
        )
    }
}
export default OneWay