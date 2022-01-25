import { CreateQuestionInterface } from '../interfaces/CreateQuestion.interface';

export const CreateQuestionState: CreateQuestionInterface = {
  questionTitle: '',
  linkedProducts: [],
  mentionedUsers: [],
  tags: [],
  tagValue: '',
  questionValue: '',
  validation_check: 'not-checked',
  validations: {
    questionTitle: {
      isValid: false,
      message: 'Please enter a question title',
    },
    tags: {
      isValid: false,
      message: 'Please enter at least one tag',
    },
    tagValue: {
      isValid: false,
      message: '',
    },
    questionValue: {
      isValid: false,
      message: 'Please enter a question content',
    },
  },
}
