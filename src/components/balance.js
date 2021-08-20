import React from 'react'
import styles from '../style/balance.module.css'

function Balance({bal}) {
    
    return (
        <div id={styles.balance}>
        <h4>Your Balance</h4>
        <h2>{bal}</h2>
        </div>
    )
}

export default Balance;