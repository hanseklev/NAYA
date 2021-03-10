import React from "react"
import styled from "styled-components"
import Button from "../_shared/button"
import Input from "../_shared/input"

export const PersonDetails = ({ form, onChange, submit, error, title }) => (
  <>
    <Fields>
      <FieldsetTitle>{title}</FieldsetTitle>
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
    </Fields>
    <ErrorMessage value={error} />
    {submit && <Button primary type="submit" label={submit} />}
  </>
)

export const ShippingDetails = ({ form, onChange, submit, error, title }) => (
  <>
    <Fields>
      <FieldsetTitle>{title}</FieldsetTitle>
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
  ${'' /* margin-bottom: auto; */}
`
const ErrorMessage = ({ value }) => {
  if (!value) return null

  return <span style={{ color: "black" }}>{value}</span>
}
