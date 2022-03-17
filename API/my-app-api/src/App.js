
import './App.css';
import { React, useState, useEffect } from "react";
import axios from "axios";
import Search from './Component/Search'


function App() {


  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [inputText, setInputText] = useState("");





  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          ` https://api.hatchways.io/assessment/students`
        );
        let responseDataArray = response.data.students;
        console.log(responseDataArray);
        setData(responseDataArray);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);


  return (
    <div className="main">
      {/* <h1></h1> */}
      <div className="search">
      </div>
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <h1> hi there</h1>
      <Search details={data} />
    </div>
  );
}

export default App;

