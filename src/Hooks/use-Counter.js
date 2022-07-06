import { useState, useEffect } from "react";

const useCounter = (flag = true) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setInterval(() => {
        if(flag ===  true){
            setCounter((prevState) => prevState + 1);
        }else{
            setCounter((prevState) => prevState - 1);
        }
      
    }, 1000);
  }, [flag]);

  return counter;
};

export default useCounter;
