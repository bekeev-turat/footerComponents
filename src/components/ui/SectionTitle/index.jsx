import React from 'react'
import styles from './SectionTitle.module.scss'

const SectionTitle = ({children}) => {
  return (
    <h2 className={styles.title}>
      {children}
    </h2>
  )
}

export default SectionTitle