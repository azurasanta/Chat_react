import React from 'react'
import styles from './Spinner.module.css'

const Spinner = (props) =>{
    return <div className={styles.Loader} style={{color:props.color}}>Loading...</div>
}

export default Spinner