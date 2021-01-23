import React from 'react'
import {parsePrice} from '../../../lib/helpers'
export default({price}) => {
    return(<div>{parsePrice(price)} NOK</div>)
}
