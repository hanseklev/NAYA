import { useState } from "react"

export const useStep = ({ initialStep = 0, steps }) => {
  const [index, setStepIndex] = useState(initialStep)
  const step = steps[index]

  window.location.hash = step.id

  function handleNextStep(e) {
    e && e.preventDefault()
    if (index < steps.length - 1) setStepIndex(index + 1)
  }
  function handlePrevStep(e) {
    e && e.preventDefault()
    if (index > 0) setStepIndex(index - 1)
  }

  function setStepById(id) {
    const idx = steps.findIndex(step => step.id === id)
    setStepIndex(idx)
  }

  const navigation = {
    next: e => handleNextStep(e),
    prev: e => handlePrevStep(e),
  }

  let isFinalStep = index === steps.length - 1

  return {
    step,
    navigation,
    index,
    isFinalStep,
    setStepById,
  }
}

export const useFormFields = initialValues => {
  const [formFields, setFormFields] = useState(initialValues)
  const createChangeHandler = key => value => {
    setFormFields(prev => ({ ...prev, [key]: value }))
  }
  return { formFields, createChangeHandler }
}
