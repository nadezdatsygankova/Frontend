


import { useState, useEffect } from "react";
import axios from "axios";
import Search from "./Search";
import Details from "./Details";

export default function Card() {
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
            {/* <h1></h1> */}
            {loading && <div>A moment please...</div>}
            {error && (
                <div>{`There is a problem fetching the post data - ${error}`}</div>
            )}
            <Search data={data} />
            <Details information={data} />

        </div>
    );
}

