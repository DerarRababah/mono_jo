import React,{Component} from 'react';
import SubHeader from '../components/SubHeader/subHeader'
import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination';
import PageItem from 'react-bootstrap/PageItem'
import 'bootstrap/dist/css/bootstrap.min.css';
import {getDrivers} from '../components/Api/DriversData';
import './driver.css'


class Driver extends Component {

    data = []
    state = {
        drivers:[],
        filteredData: [],
        lastSorting:'',
        active : 1
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
        this.setState({
            active : 1
          })
          
        const { value } = e.target;
        const lowercasedValue = value.toLowerCase();
    
        this.setState(prevState => {
            const filteredData  = prevState.drivers.filter((item) => {
                return Object.keys(item).some(key => item[key].toString().toLowerCase().search(lowercasedValue) !== -1);
            });
          return { filteredData };
        });
      };

      clickSort = (value) => {
        
        let filteredData ;
        if(this.state.lastSorting == value || value == "Id"){
            this.setState({
                lastSorting:"Id"
            })
            this.setState(prevState => {
                 filteredData  = prevState.drivers.sort((a,b)=> (a.Id>b.Id)*2-1)
                return { filteredData };
            });
            return { filteredData };
        }else{
            this.setState({
                lastSorting:value
            })
            this.setState(prevState => {
                 filteredData  = prevState.drivers.sort(function(a,b){
                    return a[value].localeCompare(b[value]);
                })
                return { filteredData };
            });
        }
      
    }

    clickPagination = (value) =>{
        this.setState({
            active : value
        })
    }
    /*****Start Pagination */

  
    /*****End Pagination */
    render(){
        const { filteredData } = this.state;
       
        let items = [];
        for (let number = 1; number <= filteredData.length / 10; number++) {
        items.push(
            <Pagination.Item key={number}  active={number === this.state.active} onClick={() => this.clickPagination(number)} >
            {number}
            </Pagination.Item>,
        );
        }
        return (
            <div className="page" >
               <SubHeader  page="Drivers"/>
                <div className="main-content ">
                    <div className="table-page">
                        <div className="container-header-table">
                            <div className="title">Table</div>
                            <div className="search"><input type="text" placeholder="Search" onChange={this._handleSearchChange} /></div>
                        </div>
                        
                        <Table responsive> 
                        <thead>
                            <tr>
                                <th>ID <i onClick={() => this.clickSort("Id")} class="fas fa-sort"></i></th>
                                <th>Name <i onClick={() => this.clickSort("Name")} class="fas fa-sort"></i></th>
                                <th>Mobile Number <i onClick={() => this.clickSort("MobileNumber")} class="fas fa-sort"></i></th>
                                <th>State <i onClick={() => this.clickSort("State")} class="fas fa-sort"></i></th>
                                <th>Service Area <i onClick={() => this.clickSort("ServiceArea")} class="fas fa-sort"></i></th>
                                <th>Vehicle <i onClick={() => this.clickSort("Vehicle")} class="fas fa-sort"></i></th>
                                <th>Equipment <i onClick={() => this.clickSort("Equipment")} class="fas fa-sort"></i></th>
                                <th>Availability <i onClick={() => this.clickSort("Availability")} class="fas fa-sort"></i></th>
                                <th>Platform <i onClick={() => this.clickSort("Platform")} class="fas fa-sort"></i></th>
                                <th>Service Provider <i onClick={() => this.clickSort("ServiceProvider")} class="fas fa-sort"></i></th>
                                <th>Action <i class="fas fa-sort"></i></th>
                            </tr>
                        </thead>
                        <tbody>
                        

                        {filteredData.map((item, i) => (
                             i < ((10 * this.state.active) -1) && i >= ((10 * this.state.active) - 11 )?
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
                                <td><button><i class="fas fa-pen"></i> View</button><button><i class="fas fa-times"></i> Remove</button></td>
                            </tr>
:""
                           
                        ))}
                    
                    </tbody>
                    </Table>
                    <div>
                            <Pagination>{items}</Pagination>
                            

                        </div>
                    </div>
            </div>
            </div>
          );
    }

}

export default Driver;
