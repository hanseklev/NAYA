import { useQuery } from '@apollo/client'
import React, { useContext } from 'react'
import { ProductContext } from '../../../context/productContext'

const AddToCartButton = ({product}) => {


    const {cartItems, addItem}= useContext(ProductContext)

   // const {data, refetch} = useQuery()


    return (
        <button disabled={!isInStock} onClick={() => addItem(product)}>
          Legg i handlekurv
        </button>
    )
}