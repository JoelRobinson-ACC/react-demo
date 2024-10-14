import { useEffect, useState } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [isError, setIsError] = useState(null);

    useEffect(() => {

        // put the Y back in dummy, you dummy
        fetch(url)
        .then((res) => {
        if(!res.ok){
            throw Error("Could not fetch data");
        }
        return res.json();
        })
        .then((data) => {
        setTimeout(() => {
            setData(data);
            setIsPending(false);
        }, 2000)
        })
        .catch((err) => {
        setIsPending(false);
        setIsError(err);
        })

    }, [url]);

    return {data, isPending, isError}
}

export default useFetch;