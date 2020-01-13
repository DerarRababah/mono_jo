import React,{Component} from 'react';
import SubHeader from '../components/SubHeader/subHeader'

class Report extends Component {

    

    render(){
        return (
            <div className="page" >
                <SubHeader  page={"Report "+this.props.match.params.id} />
            </div>
          );
    }

}

export default Report;
