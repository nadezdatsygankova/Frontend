
import './App.css';
//useState hook
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState();

  const apiURL = ' https://api.hatchways.io/assessment/students';


  const fetchData = async () => {
    const response = await axios.get(apiURL);

    setData(response.data);
  }
  return (
    <div className="App">
      <h1>Data</h1>
      {/* Fetch data from an API */}
      <div>
        <button className='fetch-button' onClick={fetchData}
      </div>
    </div>
  );
}

export default App;
