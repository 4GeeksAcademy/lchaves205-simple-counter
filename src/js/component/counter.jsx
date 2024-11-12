import React, { useEffect } from "react";
 
const SecondsCounter = (props) => {
    const { count, setCount, isRunning } = props;

    useEffect(() => {
        if (isRunning) {
            const interval = setInterval(() => {
                setCount(prevCount => prevCount + 1);
            }, 1000);

            // Clear the interval on component unmount or if isRunning changes
            return () => clearInterval(interval);
        }
    }, [isRunning]); // Re-run this effect only when isRunning changes
    
    return (
        <h1 className="counter">{count}</h1>
    );
};
 
export default SecondsCounter;
