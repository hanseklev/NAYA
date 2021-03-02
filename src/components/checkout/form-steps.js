import React from "react"
import styled from "styled-components"
import Button from "../_shared/button"
import Input from "../_shared/input"

export const PersonDetails = ({ form, onChange, submit, error, title }) => (
  <>
    <Fields>
      {/*       <h1 style={{ textAlign: "center" }}>Navn</h1>
       */}{" "}
      <FieldsetTitle>{title}</FieldsetTitle>
      <Input
        label="E-post"
        type="email"
        name="email"
        required
        value={form.email}
        onChange={onChange("email")}
      />
      <Input
        label="Fornavn"
        type="firstName"
        name="firstName"
        required
        value={form.firstName}
        onChange={onChange("firstName")}
      />
      <Input
        label="Etternavn"
        type="text"
        name="lastName"
        required
        value={form.lastName}
        onChange={onChange("lastName")}
      />
    </Fields>
    <ErrorMessage value={error} />
    {submit && <Button primary type="submit" label={submit} />}
  </>
)

export const ShippingDetails = ({ form, onChange, submit, error, title }) => (
  <>
    <Fields>
      <FieldsetTitle>{title}</FieldsetTitle>
      {/*       <h1 style={{textAlign:'center'}}>Leveringsadresse</h1>
       */}{" "}
      <Input
        name="address"
        label="Adresse"
        type="text"
        required
        value={form.address}
        onChange={onChange("address")}
      />
      <Input
        label="Telefon"
        name="phone"
        type="tel"
        required
        value={form.phone}
        onChange={onChange("phone")}
      />
      <Input
        name="postcode"
        label="Postnummer"
        type="text"
        value={form.postcode}
        required
        pattern="[0-9]*"
        onChange={onChange("postcode")}
      />
      <Input
        name="city"
        label="Poststed"
        type="text"
        required
        value={form.city}
        onChange={onChange("city")}
      />
      <ErrorMessage value={error} />
    </Fields>
    {submit && <Button primary type="submit" label={submit} />}
  </>
)

const FieldsetTitle = styled.legend`
  font-size: 20px;
  margin-bottom: 1rem;
  font-family: var(--font-primary);
  text-transform: uppercase;
`

const Fields = styled.fieldset`
  margin-bottom: auto;
`
const ErrorMessage = ({ value }) => {
  if (!value) return null

  return <p style={{ color: "red" }}>{value}</p>
}
