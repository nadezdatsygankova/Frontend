
import './App.css';
import Posts from './Component/Posts';

import { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          ` https://api.hatchways.io/assessment/students`
        );

        // console.log(response.data);
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
    <div className="App">
      <h1>API Posts</h1>
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}

      {data &&
        data.map(({ id, lastName, email, company, skill, grades }) => (
          <div key={id}>
            <h3> {lastName}</h3>
            <p>Email: {email}</p>
            <p>Company: {company}</p>
            <p>Skill: {skill}</p>
            <Posts average={grades} />
            {/* <p>average({grades})</p> */}
          </div>
        ))}

    </div>
  );
}

// arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let average = (array) => array.reduce((a, b) => a + b) / array.length;
// console.log(average(arr));