// Common form
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

// Add product
export interface AddProductFormValidation {
  rules: {
    required?: boolean
    email?: boolean
    min?: number
  }
  error: string
}

export interface AddProductFormStep {
  key: string
  label: string
  isValidated: boolean | null
  validations: {
    [index: string]: AddProductFormValidation | { [index: string]: AddProductFormValidation }
  }
  productTitle?: string
  code?: string
  lang?: string
  iterationTitle?: string
  iterationCode?: string
  iterationLang?: string
  iterationNote?: string
  details?: { key: string; label: string; value: string; isEditable: boolean }[]
  tags?: string[]
  clips?: string[]
  tierType?: 'free' | 1 | 2 | 3 | null
  visibilityType?: 'public' | 'private' | null
}

export interface AddProductForm {
  curStep: number
  supportedLangs: { key: string; label: string }[]
  steps: AddProductFormStep[]
}

export interface AddProductStepProps {
  state: AddProductFormStep
  handleValueChange: (itemId: string, value: string) => void
}
