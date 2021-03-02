import { motion } from "framer-motion"
import React from "react"

const AddButton = ({ item }) => {
  return (
    <motion.div
      animate={{
        x: 0,
      }}
      whileTap={{
        scale: 1.02,
        x: 10,
      }}
      whileHover={{
        scale: 1.02,
        x: 10,
      }}
    ></motion.div>
  )
}

export default AddButton
