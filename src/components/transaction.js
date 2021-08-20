import React from 'react'
import styles from '../style/transaction.module.css'
import {TiArrowUpThick,TiArrowDownThick,TiDelete} from 'react-icons/ti'
function Transaction({ deleteTransaction,item}) {
    
    return (
        <div className= {styles.transaction}>
            <h4>{item.item}</h4>
            <div className={styles.amount}>
               <h4>{item.amount}</h4>
            {Number(item.amount)>0?<span className={styles.increment}><TiArrowUpThick /></span>:<span className={styles.decrement}><TiArrowDownThick /></span>}
            <button className={styles.delete} onClick = {deleteTransaction(item.id)}>{<TiDelete />}</button>
            </div>
        </div>
        //  we have to delete from database...
    )
}

export default Transaction;


/*
db
{
    username:"nakulgopal",
    food:[
        {title:'party',amount:1200,type:'food'},
        {title:'pizza',amount:120,type:'food'},
    ],
    travel:[],
    .
    .`
    .`
    other:[]
} 


*/