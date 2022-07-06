import React from "react";
import useCounter from "../Hooks/use-Counter";

const BackwardCounter = () => {
//   const [counter, setCounter] = useState(0);

//   useEffect(()=>{
//     setInterval(()=>{
//         setCounter((prevState)=>prevState-1)
//     },1000)
//   },[])
const counter = useCounter(false)

  return (<h2>{counter}</h2>)


};
export default BackwardCounter;
