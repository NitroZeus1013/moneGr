import React from 'react'
import Transaction from './transaction'

function TaskList({data}) {
    return (
        <>
        {
            data.map((item,index) => {
            return <Transaction key={index} item={item} />

        })
        }
        </>
    )
}
export default TaskList;