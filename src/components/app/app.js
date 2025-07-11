import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';



class  App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
              {name: 'Олександр', salary: 2000, increase: true, like: true, id: 1},
              {name: 'Наталі', salary: 3000, increase: false, like: false, id: 2},
              {name: 'Невідомий', salary: 200, increase: false, like: false, id: 3}
            ]
    }
  }
   deleteItem = (id) => {
    this.setState(({data}) => {
      return {
        data: data.filter(item => item.id !== id)
      }
    })
   }

   addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      like: false,
      increase: false,
      id: Date.now()
    };
    this.setState(({data}) => ({
      data: [...data, newItem]
    }));
   }

   onToggleProp = (id, prop) => {
      this.setState(({data}) => ({
        data: data.map(item => {
          if (item.id === id) {
            return {...item, [prop]: !item[prop]}
            }
            return item;
        })
      }))

    }

 

 render() {


    const employees = this.state.data.length;
    const increased = this.state.data.filter(item => item.increase).length;

   return (
    <div className="app">
        <AppInfo employees={employees} increased={increased} />

        <div className="search-panel">
            <SearchPanel/>
            <AppFilter/>
        </div>
        
        <EmployeesList 
          data={this.state.data}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}

          />
        <EmployeesAddForm
        onAdd={this.addItem}
          />
    </div>
  );
 }
}

export default App;
