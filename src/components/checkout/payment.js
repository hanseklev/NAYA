import { Link } from "gatsby"
import React from "react"
import Button from "../_shared/button"
import { Loader } from "../_shared/loader"

export const WaitingStep = () => {
  return (
    <div style={{ textAlign: "center", margin: '0 auto', width:'100%', paddingTop:'3rem'}}>
      <Loader  />
      <p>
        Venter på vipps...hvis det ikke skjer noe ta kontakt på{" "}
        <a href="mailto:support@naya.no">support@naya.no</a> så ordner vi det!
      </p>
    </div>
  )
}

export const PaymentOptions = ({ handlePayment, loading }) => {

  return (
    <fieldset style={{ textAlign: "center" }}>
      <legend className="formtitle" style={{ marginBottom: "3rem" }}>
        Betaling
      </legend>
      <Button
        type="submit"
        vipps={true}
        onClick={e => {
          handlePayment(e, "vipps")
        }}
      />
      {loading && <p>Vent litt mens vi får kontakt med vipps...</p>}
      <p style={{ marginTop: "2rem" }}>
        Ved å fortsette godtar du våre
        <Link to="/general-terms"> kjøpsvilkår</Link> og bekrefter at du har
        lest vår <Link to="/privacy-policy">privacy policy </Link>
      </p>
    </fieldset>
  )
}

export default PaymentOptions
