import React,{Component} from 'react';
import SubHeader from '../components/SubHeader/subHeader'
import Table from 'react-bootstrap/Table'
import './driver.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {getDrivers} from '../components/Api/DriversData'


class Driver extends Component {

    data = []
    state = {
        drivers:[],
        filteredData: []
    }

    componentDidMount = () =>{
        getDrivers().then(response =>{
            this.setState({
                filteredData:response.data,
                drivers:response.data
            });
            console.log(this.state.filteredData,"this.state.drivers")
          })
          .catch(error =>{
            console.log(error)
          });
          
      }

      _handleSearchChange = e => {
        const { value } = e.target;
        const lowercasedValue = value.toLowerCase();
    
        this.setState(prevState => {
            const filteredData  = prevState.drivers.filter((item) => {
                return Object.keys(item).some(key => item[key].toString().toLowerCase().search(lowercasedValue) !== -1);
            });

        
    
          return { filteredData };
        });
      };


    render(){
        const { filteredData } = this.state;
        return (
            <div className="page" >
               <SubHeader  page="Drivers"/>
                <div className="main-content">
                    <div className="search"><input type="text" placeholder="Search" onChange={this._handleSearchChange} /></div>
                    <Table responsive> 
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Mobile Number</th>
                                <th>State</th>
                                <th>Service Area</th>
                                <th>Vehicle</th>
                                <th>Equipment</th>
                                <th>Availability</th>
                                <th>Platform</th>
                                <th>Service Provider.</th>
                            </tr>
                        </thead>
                        <tbody>
                        

                        {filteredData.map((item, i) => (
                            <tr key={i} >
                                <td>{item.Id}</td>
                                <td>{item.Name}</td>
                                <td>{item.MobileNumber}</td>
                                <td>{item.State}</td>
                                <td>{item.ServiceArea}</td>
                                <td>{item.Vehicle}</td>
                                <td>{item.Equipment}</td>
                                <td>{item.Availability}</td>
                                <td>{item.Platform}</td>
                                <td>{item.ServiceProvider}</td>
                            </tr>
                        ))}
                    
                    </tbody>
                    </Table>
            </div>
            </div>
          );
    }

}

export default Driver;
