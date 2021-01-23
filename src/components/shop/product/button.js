import { motion } from 'framer-motion'
import React from 'react'
import { BasketIcon } from '../../header/basket'

import styles from './product.module.css'

const AddButton = ({item}) => {

    return (
        <motion.div animate = {
            {
                x: 0
            }
        }
        whileTap = {
            {
                scale: 1.02,
                x: 10
            }
        }
        whileHover = {
            {
                scale: 1.02,
                x: 10
            }
        }>
            <button className={styles.addButton}>
                <BasketIcon/>
            </button>
        </motion.div>
    )

}

export default AddButton