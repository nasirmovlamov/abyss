import { errorToastFunc } from './ErrorToasts'

export const autoErrorToaster = (error: any) => {
  const errors = error.errors
  const keys = Object.keys(error.errors)
  for (let i = 0; i < keys.length; i++) {
    for (let j = 0; j < errors[keys[i]].length; j++) {
      errorToastFunc('top-right', errors[keys[i]][j])
    }
  }
}
