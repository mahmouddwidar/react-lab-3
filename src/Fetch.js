import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = () => {
        axios
            .get(url)
            .then((response) => {
            setData(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
        };
        fetchData();
    }, [url]);

    return { data };
};

export default useFetch;
