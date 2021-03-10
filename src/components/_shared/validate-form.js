import validator from "validator"

export function validateStep(step, data) {
  let errorMessage = ""
  let errorType = ""
  let isValid = false

  switch (step) {
    case "personal":
      if (!validator.isEmail(data.email)) {
        errorMessage = `Du må oppgi en gyldig e-post`
        errorType = "email"
      } else if (data.firstName.length === 0) {
        errorMessage = "Du må oppgi fornavn"
        errorType = "firstName"
      } else if (data.lastName.length === 0) {
        errorMessage = "Du må oppgi etternavn"
        errorType = "lastName"
      } else isValid = true
      break

    case "shipping":
      if (data.address.length === 0) {
        errorMessage = `Du må oppgi en addresse`
        errorType = "address"
      } else if (!validator.isMobilePhone(data.phone)) {
        errorMessage = `Du må oppgi et gyldig telefonnr`
        errorType = "phone"
      } else if (
        !validator.isInt(data.postcode) &&
        data.postcode.toString().length !== 4
      ) {
        errorMessage = `Du må oppgi et gyldig postnummer`
        errorType = "postcode"
      } else if (data.city.length === 0) {
        errorMessage = `Du må oppgi et poststed`
        errorType = "postcode"
      } else isValid = true
      break
    default:
      break
  }

  return { isValid, errorType, errorMessage }
}
