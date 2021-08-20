import React, { useState ,useEffect} from "react";
import styles from "../style/newTask.module.css";



function AddTask({ setList, list }) {

  const [item, setItem] = useState("");
  const [amount, setAmt] = useState("");
  const [type, setType] = useState("");
 


  function tempSub(e, setList, list){
          e.preventDefault();
          setList([...list, { item,amount }]);
          setItem("");
          setAmt("");
          setType("");
  }
  
    function onSub(e, setList, list) {
      e.preventDefault();
      if(item && amount && type){
        fetch("http://localhost:3001/addData/nakulgopal", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _id: "nakulgopal",
          payload: { title: item, amount: amount },
          type: type,
        }),
      })
        .then((res) => {
          console.log(res);
          res.text();
          setList([...list, { item, amount }]);
          setItem("");
          setAmt("");
          setType("");
        })
        .then((data) => {
          console.log(data);
        });
      }
      else{
        alert("Add the proper data....");
      }
      
    }

  return (
    <div id={styles.newTask}>
      <h4>Add a new Transaction</h4>
      <form>
        <div>
          <input
            placeholder="Add an Item"
            id="item"
            type="text"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
        </div>
        <div>
          <input
            placeholder="Add Amount"
            id="amt"
            type="number"
            value={amount}
            onChange={(e) => setAmt(e.target.value)}
          />
        </div>

        <div>
          <input
            placeholder="Category ex:- food,travel..."
            id="type"
            type="text"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </div>

        <div id={styles.submit}>
          <button onClick={(e) => tempSub(e, setList, list)}>ADD</button>
        </div>
      </form>
    </div>
  );
}

export default AddTask;
