import React,{Component} from 'react';
import './subHeader.css'
class SubHeader extends Component {

    

    render(){
        return (
            <div className="sub-header">
                   <a> Menu </a>  <span>.</span>  <a className="active"> {this.props.page} </a> 
            </div>
          );
    }

}

export default SubHeader;
