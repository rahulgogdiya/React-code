import React from 'react'
import styles from './Item.module.css'

function Item(props) {
 //de-stecharing  let {fooditem} = props
 //de-stecharing   {props.fooditem}
 //de-stecharing dairect {fooditem} 
  return (
    <li className={`${styles['items','display']}`}>{props.fooditem}</li>
    )
}

export default Item