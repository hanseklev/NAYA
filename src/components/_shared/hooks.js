import { useState } from "react"

export const useStep = ({ initialStep = 0, steps }) => {
  const [index, setStepIndex] = useState(initialStep)
  const step = steps[index]

  function setHash(id) {
    if (typeof window !== "undefined") window.location.hash = id
  }

  function getHash() {
    if (typeof window !== "undefined") return window.location.hash
  }

  function handleNextStep(e) {
    e && e.preventDefault()
    if (index < steps.length - 1) {
      setStepIndex(index + 1)
      setHash(step.id)
    }
  }

  function handlePrevStep(e) {
    e && e.preventDefault()
    if (index > 0) {
      setStepIndex(index - 1)
      setHash(step.id)
    }
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
    getHash,
  }
}

export const useFormFields = initialValues => {
  const [formFields, setFormFields] = useState(initialValues)
  const createChangeHandler = key => value => {
    setFormFields(prev => ({ ...prev, [key]: value }))
  }
  return { formFields, createChangeHandler }
}
