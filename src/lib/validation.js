const validateEmail = value => {
  let errors = {}
  const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  const emailRegExp2 = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  const isValid = emailRegExp2.test(String(value).toLowerCase)

  return isValid ? {} : (errors.msg = "Du må oppgi en gyldig epost")
}

const validateInput = value => {
  const isValid = value.length > 0

  return isValid ? {} : (errors.msg = "Du må fylle ut dette feltet")
}
