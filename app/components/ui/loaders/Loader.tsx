import React, { ReactElement } from 'react'

import styles from '../styles/components/css/Loader.module.css'

interface Props {}

function Loader({}: Props): ReactElement {
  return (
    <div className={styles.ldsDefault}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default Loader
