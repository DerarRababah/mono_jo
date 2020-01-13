import React,{Component} from 'react';
import './menu.css'
import logo from '../../img/logo-inverse.png'
import {Link} from 'react-router-dom'


class Menu extends Component {

    state = {
        tap_active : ""
    }

  
    toggleActiveClass(){
        if(this.state.tap_active == ""){

            this.setState({
                tap_active: "active"
            })

        }else{

            this.setState({
                tap_active: ""
            })
        }
       
    }

    render(){
        return (
            <div className="main-menu">
                  <div className="header">
                      <div className="logo">
                          <Link to="/">
                            <img src={logo} />
                          </Link>
                          
                      </div>
                  </div>
                  <div className="menu-items">

                        <Link to="/dashboard"  className="item">
                            <div className="icon">
                                 <i class="fas fa-car"></i>
                            </div>
                            <div className="text">
                            	Dashboard
                            </div>
                        </Link >

                      <Link to="/drivers"  className="item">
                            <div className="icon">
                                 <i class="fas fa-car"></i>
                            </div>
                            <div className="text">
                            	Drivers
                            </div>
                      </Link >

                      <Link to="/clints"  className="item">
                            <div className="icon">
                                <i class="fas fa-user-check"></i>
                            </div>
                            <div className="text">
                            	Clients
                            </div>
                      </Link>

                      <div className="item" onClick={this.toggleActiveClass.bind(this)} className= {" item " + this.state.tap_active}>
                            <div className="icon">

                                <i class="fas fa-caret-down arrow" aria-hidden="true"></i>
                                <i class="far fa-copy"></i>
                                
                            </div>
                            <div className="text">
                                <span>
                                    Reports
                                </span>
                               
                            </div>

                            <div className="sub-items">
                                <Link to="/report/1" className="item">
                                    <div className="icon">
                                        <i class="far fa-sticky-note"></i>
                                    </div>
                                    <div  className="text">
                                        <span>
                                            Report 1
                                        </span>
                                        <span className="new">
                                            new
                                        </span>
                                    </div>
                                </Link>

                                <Link to="/report/2" className="item">
                                    <div className="icon">
                                        <i class="far fa-sticky-note"></i>
                                    </div>
                                    <div className="text">
                                        <span>
                                            Report 2
                                        </span>
                                    </div>
                                </Link>


                            </div>
                      </div>


                  </div>
            </div>
          );
    }

}

export default Menu;
