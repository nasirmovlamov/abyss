import { QUESTION_INTERFACE } from '../state-Interfaces/QuestionInterface';

export const QUESTION_STATE: QUESTION_INTERFACE = {
  status: 'loading',
  errors: null,
  question_data: null,
  answersData: {
    questionId: null,
    topPage: 1,
    downPage: 0,
    totalPage: 0,
    submittedAnswer: [],
    topAnswers: {
      status: 'loading',
      answers: [],
    },
    downAnswers: {
      status: 'loading',
      answers: [],
    },
  },
  delete_options: null,
  answerSubmitData: {
    linkedProducts: [],
    mentionedUsers: [],
    content: '',
  },
  linkedProductsData: {
    linkedProducts: [],
    status: 'loading',
    current_page: 1,
    last_page: 1,
    total: 0,
  },
  mentionsOfLinkedProduct: {
    productId: null,
    mentions: [],
    status: 'loading',
    current_page: 1,
    last_page: 1,
    total: 0,
  },
  edit_answer: null,
  edit_question: null,
}
