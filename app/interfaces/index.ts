export interface FormControl {
  name: string
  label?: string
  type: string
  placeholder?: string
  validation: {
    required?: boolean
    email?: boolean
    min?: number
  }
  value: string
  valid: boolean
  touched: boolean
  error: string
}

export interface Form {
  controls: { [index: string]: FormControl }
  valid: boolean
  error: string
}
