import validator from "validator"
import { isEmpty } from "lodash"

const validateCheckoutForm = data => {
  let errors = {}

  data.name = !isEmpty(data.name) ? data.name : ""
  data.country = !isEmpty(data.country) ? data.country : ""
  data.address1 = !isEmpty(data.address1) ? data.address1 : ""
  data.address2 = !isEmpty(data.address2) ? data.address2 : ""
  data.city = !isEmpty(data.city) ? data.city : ""
  data.postcode = !isEmpty(data.postalCode) ? data.postalCode : ""
  data.phone = !isEmpty(data.phone) ? data.phone : ""
  data.email = !isEmpty(data.email) ? data.email : ""
  data.customerNote = !isEmpty(data.customerNote) ? data.customerNote : ""
  data.paymentMethod = !isEmpty(data.paymentMethod) ? data.paymentMethod : ""

  const 
}

export default validateCheckoutForm