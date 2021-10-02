import {Component} from 'react'
import {FaHome} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import './NavigationBar.css'

export default class NavigationBar extends Component{
    render(){
        return(
            <div className="myNavDiv">
                <Link className="linkClass" to='/'><FaHome /></Link><span> | </span>
                <Link className="linkClass" to='/Home'>Home</Link><span> | </span>
                <Link className="linkClass" to='/Product'>Product</Link><span> | </span>
                <Link className="linkClass" to='/AboutUs'>About Us</Link> 
            </div>
        )
    }
}