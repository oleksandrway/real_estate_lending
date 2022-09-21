import './form/style.scss'
import { fields, fieldsValidationRules } from './form/data/post-form'
import { addFormValidation } from './form/formHelpers/addFormValidation'

function logData(data) {
  console.log('data:', data)
}

const form = document.querySelector('.order-call')
addFormValidation(form, fields, fieldsValidationRules, logData)
