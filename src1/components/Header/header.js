import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import './header.css'


class Header extends Component  {
    render(){
        return (

            <header class="header">
                <div class="right-section">
                    <div class="tab">
                        <i class="fas fa-folder-open"></i>
                        <span>Issues History</span>
                        <i class="fas fa-caret-down"></i>
                    </div>
                    <div class="tab">
                        <i class="fas fa-database"></i>
                        <span>Project Management</span>
                        <i class="fas fa-caret-down"></i>
                    </div>
                   <div className="tab input">
                        <i class="fas fa-search"></i>
                       <input className="search" type="text"></input>
                   </div>
                </div>
                <div class="left-section">
                    <div className="item">
                        <span>En</span>
                        <i class="fas fa-caret-down"></i>
                    </div>
                    <div className="item">
                        <span><i class="fas fa-home"></i></span>
                        <i class="fas fa-caret-down"></i>
                    </div>
                    <div className="item profile">
                          <i class="far fa-user"></i>
                    </div>
                </div>
            </header>
            
            );
    }
  
}

export default Header;
