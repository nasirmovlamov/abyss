import { CreateProductInterface } from '../state-Interfaces/CreateProductInterface'

export const CreateProductState: CreateProductInterface = {
  name: '',
  current_step: 1,
  product_created: {
    isPlagiat: 'not-checked',
    status: 'not-created',
    plagirismLoading: 'not-checked',
    id: null,
    sendend_source_code: '',
  },
  steps: {
    1: {
      id: 1,
      step_name: 'Product Code',
      step_active: false,
      validated: 'not-checked',
      source_code: '',
      lang_type: 'py',
      validators: {
        isCodeFilled: {
          valid: false,
          message: 'Please enter your code',
        },
        isPlagirismChecked: {
          valid: false,
          code_accepted: 'not-checked',
          message: "Don't copy another person code ,  stupid",
        },
      },
    },
    2: {
      id: 2,
      step_name: 'Details',
      step_active: false,
      validated: 'not-checked',
      details_data: {
        product_name: '',
        product_tags: [],
        sections_product: [
          {
            id: 1,
            label_key: 'Product_Description',
            label_value: '',
            isEditor: true,
            isClips: { status: false, clips: [] },
          },
          {
            id: 2,
            label_key: 'Product_Applicability',
            label_value: '',
            isEditor: true,
            isClips: { status: false, clips: [] },
          },
          {
            id: 3,
            label_key: 'Product_Problem_Formulation',
            label_value: '',
            isEditor: true,
            isClips: { status: false, clips: [] },
          },
          {
            id: 4,
            label_key: 'Clips',
            label_value: '',
            isEditor: false,
            isClips: { status: true, clips: [] },
          },
        ],
      },
      validators: {
        isNameFilled: {
          valid: false,
          message: 'Please enter your name',
        },
        isTagsFilled: {
          valid: false,
          message: 'Please enter at least 1 tag',
        },
        isDescriptionFilled: {
          valid: false,
          isCharacterMoreThan50: false,
          message: 'Description must be at least 50 character long',
        },
        isApplicabilityFilled: {
          valid: false,
          isCharacterMoreThan50: false,
          message: 'Applicability must be at least 50 character long',
        },
        isProblemFormulationFilled: {
          valid: false,
          isCharacterMoreThan50: false,
          message: 'Problem Formulation must be at least 50 character long',
        },
      },
    },
    3: {
      id: 3,
      step_name: 'Iterations',
      step_active: false,
      validated: 'not-checked',
      iterations_of_product: [
        {
          id: Date.now(),
          iteration_code: '',
          iteration_note: '',
          iteration_name: '',
          validators: {
            isCodeFilled: {
              valid: false,
              message: 'Please enter code of iteration',
            },
            isNoteFilled: {
              valid: false,
              message: 'Please enter note of iteration',
            },
            isNameFilled: {
              valid: false,
              message: 'Please enter name of iteration',
            },
            areAllFilled: {
              valid: 'empty',
            },
          },
        },
      ],
    },
    4: {
      id: 4,
      step_name: 'Checks',
      step_active: false,
      validated: 'valid',
      infoValidators: {
        messagesWithRef: [],
      },
    },
    5: {
      id: 5,
      step_name: 'Pricing',
      step_active: false,
      validated: 'not-checked',
      payment_type: 'not-selected',
      tier_type: 'not-selected',
      visibility_type: 'not-selected',

      validators: {
        isPriceTypeSelected: {
          valid: false,
          message: 'Please select tier  type',
        },
        isPaidTypeSelected: {
          valid: false,
          message: 'Please select payment  type',
        },
        isVisibilityTypeSelected: {
          valid: false,
          message: 'Please select visibility type',
        },
      },
    },
  },
}
