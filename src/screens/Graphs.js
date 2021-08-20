import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";


function Graphs() {
  const [dataFromServer,setDataFromServer] = useState();
  


let mainData = {
  labels: [],
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: ["red", "green", "yellow", "black", "pink", "violet"],
      
      borderColor: "rgb(255,255,255)",
      data: [],
    },
  ],
};

  
  
  useEffect(() => {
    console.log("fetching data...");
    fetch("http://localhost:3001/statsData")
      .then((res) => res.json())
      .then((json) =>{
        
        
        setDataFromServer({...mainData,labels:json.labels,datasets:[{...mainData.datasets[0],data:json.dataFromServer}]});
      });

    return () => {
      console.log("unmounted");
    };
  }, []);

  // const myref = useRef(null);
  // console.log(myref.current);
  
  return <div id="graphs">
  <Pie data={dataFromServer}></Pie>
  </div>;
}

export default Graphs;
