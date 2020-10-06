import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shoes: [{ brand_name: 'Nike'}, { brand_name: 'Vans'}]
    }
  }
  componentDidMount(){
    fetch('http://localhost:8000/shoe').then(res => res.json())
    .then(data => this.setState({shoes: data}));
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.shoes.map((data) => (
            <li>
              Size: {data.size}<br></br>
              Brand: {data.brand_name}<br></br>
              Manufacturer: {data.manufacturer}<br></br>
              Color: {data.color}<br></br>
              Material: {data.material}<br></br>
              Shoe Type: {data.shoe_type}<br></br>
              Fasten Type: {data.fasten_type}<br></br>
              <br></br>
            </li>
            
          ))}
        </ul>
      </div>
    )
  }
}

export default App;
