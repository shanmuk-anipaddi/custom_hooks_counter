import React from "react";
import useCounter from '../Hooks/use-Counter';

const ForwardCounter = () => {

    const counter = useCounter(true)
//   const [counter, setCounter] = useState(0);

//   useEffect(()=>{
//     setInterval(()=>{
//         setCounter((prevState)=>prevState+1)
//     },1000)
//   },[])


  return (<h2>{counter}</h2>)


};
export default ForwardCounter;
