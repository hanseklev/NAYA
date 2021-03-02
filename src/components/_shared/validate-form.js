import validator from "validator"

export function validateStep(step, data) {
  let errorMessage = ""
  let errorType = ""
  let isValid = false

  switch (step) {
    case "personal":
      if (!validator.isEmail(data.email)) {
        errorMessage = `E-posten er ikke gyldig`
        errorType = "email"
      }
      else if (data.firstName.length < 3) {
        errorMessage = "Navnet er for kort"
        errorType = "firstName"
        
      } else isValid = true
      break

    case "shipping":
      if (!validator.isMobilePhone(data.phone)) {
        errorMessage = `Ikke et gyldig telefonnr`
        errorType = "phone"
      }

      if (
        !validator.isInt(data.postcode) &&
        data.postcode.toString().length !== 4
      ) {
        errorMessage = `Ikke et postnummer`
        errorType = "postcode"
      } else isValid = true
      break

    case "payment":
      break

    default:
      break
  }

  return { isValid, errorType, errorMessage }
}
