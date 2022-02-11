import { Form, FormControl } from 'app/interfaces';
import LinkifyIt from 'linkify-it';

class Utils {
  /**
   * Update and return an object with values provided
   *
   * @param {Object} oldObject - The object that needs to be updated
   * @param {Object} updatedValues - Values to update
   * @returns {Object} Updated object
   */
  static updateObject(oldObject: any, updatedValues: any) {
    return {
      ...oldObject,
      ...updatedValues,
    }
  }

  /**
   * Creates an array from given form
   *
   * @param {Form} form - The form object
   * @returns {Array} Array version of given form
   */
  static formToArray(form: Form) {
    const formArray = []
    for (const key in form.controls) {
      formArray.push({
        id: key,
        config: form.controls[key],
      })
    }

    return formArray
  }

  /**
   * Check validity of a form control based on the rules provided
   *
   * @param {string} value - Value of the form control
   * @param {Object} rules - Rules for validation
   * @returns {boolean} If the control is value or not
   */
  static checkValidity(value: string, rules: { [index: string]: any }) {
    let isValid = true
    let error = ''

    if (rules.required) {
      isValid = value.trim() !== '' && isValid
      error = 'This field is required.'
      // No need to check other rules if empty
      if (!isValid) return { isValid, error }
    }

    if (rules.email) {
      const pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
      isValid = pattern.test(value) && isValid
      error = 'Email is invalid.'
    }

    if (rules.min) {
      isValid = value.trim().length > rules.min && isValid
      error = `Password must be at least ${rules.min} characters long.`
    }

    return { isValid, error }
  }

  /**
   * Update and return a form based on changes of an input
   *
   * @param {Object} form - The object that contains the form state
   * @param {string} itemId - ID of the control in object
   * @param {string} value - Changed value of form control
   * @returns {Form} Updated form object
   */
  static handleFieldChange(form: { [index: string]: FormControl }, itemId: string, value: string) {
    const updatedFormElement = {
      ...form[itemId],
      value: value,
      touched: true,
    }
    const updatedForm = this.updateObject(form, {
      [itemId]: updatedFormElement,
    })

    return updatedForm
  }

  /**
   * Update and return a form based on validation of an input
   *
   * @param {Object} form - The object that contains the form state
   * @param {string} itemId - ID of the control in object
   * @returns {Object} Updated form object and form validity status
   */
  static handleFieldValidation(form: { [index: string]: FormControl }, itemId: string) {
    const { isValid, error } = this.checkValidity(form[itemId].value, form[itemId].validation)
    const updatedFormElement = {
      ...form[itemId],
      valid: isValid,
      error: error,
    }
    const updatedForm = this.updateObject(form, {
      [itemId]: updatedFormElement,
    })

    let formValid = true
    for (let id in updatedForm) {
      formValid = updatedForm[id].valid && formValid
    }

    return { updatedForm, formValid }
  }

  static matchIDfromTextLink(path: string, text: string): number | null {
    const matchedLinks = LinkifyIt().match(text)

    // Match url in text, then search for ID
    if (matchedLinks && matchedLinks.length === 1) {
      const url = matchedLinks[0].url
      if (url.includes(`${window.location.origin}/${path}`)) {
        const matchedDigits = url.match(/\d+/g)

        // Return last occurrence of id
        if (matchedDigits) {
          return +matchedDigits[matchedDigits.length - 1]
        }
      }
    }

    return null
  }
}

export default Utils
