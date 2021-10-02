import { useState } from "react";
import './TwoWay.css'
function TwoWay(){
    let [pTitle,changeTitle] = useState('Mouse')
    function handleChange(e){
        changeTitle(e.target.value)
    }
    return(
        <div className="twoWayDiv">
            <p>Two Way Functional Data Binding</p>
            <input type="text" value={pTitle} onChange={(e)=>handleChange(e)} />
            <p class="twoWayP">{pTitle}</p>
            <p>
                <div>Created by Gaurang, alumni of MUJ</div>
                <div>Working in Accenture</div>
            </p>
        </div>
    )
}

export default TwoWay
