import React from "react"
import Button from "../_shared/button"
import Input from "../_shared/input"

export const PersonDetails = ({ form, onChange, submit, error, title }) => (
  <>
    <fieldset>
      <legend className="formtitle">{title}</legend>
      <Input
        label="E-post"
        type="email"
        name="email"
        value={form.email}
        onChange={onChange("email")}
      />
      <Input
        label="Fornavn"
        type="text"
        name="firstName"
        value={form.firstName}
        onChange={onChange("firstName")}
      />
      <Input
        label="Etternavn"
        type="text"
        name="lastName"
        value={form.lastName}
        onChange={onChange("lastName")}
      />
    </fieldset>
    <ErrorMessage value={error} />
    {submit && <Button primary type="submit" label={submit} />}
  </>
)

export const ShippingDetails = ({ form, onChange, submit, error, title }) => (
  <>
    <fieldset>
      <legend className="formtitle">{title}</legend>
      <Input
        name="address"
        label="Adresse"
        type="text"
        value={form.address}
        onChange={onChange("address")}
      />
      <Input
        label="Telefon"
        name="phone"
        type="tel"
        value={form.phone}
        onChange={onChange("phone")}
      />
      <Input
        name="postcode"
        label="Postnummer"
        type="text"
        value={form.postcode}
        onChange={onChange("postcode")}
      />
      <Input
        name="city"
        label="Poststed"
        type="text"
        value={form.city}
        onChange={onChange("city")}
      />
    </fieldset>
    <ErrorMessage value={error} />
    {submit && <Button primary type="submit" label={submit} />}
  </>
)

export const ConfirmationStep = ({ order }) => {
  const { orderKey, status } = order || {}
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{fontSize:'1.5rem', margin:'3rem 0rem'}}>Ordre {orderKey} er motatt!</h1>
      <p>
        Ordre {orderKey} er motatt! {status && <> Og har status {status}</>}{" "}
      </p>
      <p>Du vil om kort tid motta ordrebekreftelse på e-post </p>
      <p>
        Har du spørsmål om ordren ta kontakt på{" "}
        <a href="mailto:support@naya.no">support@naya.no</a>
      </p>
    </div>
  )
}

const ErrorMessage = ({ value }) => {
  if (!value) return null

  return <span style={{ color: "black", margin: "1rem 0" }}>{value}</span>
}
