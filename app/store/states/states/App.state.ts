import { APP_INTERFACE } from '../state-Interfaces/AppInterface'
import { AUTH_STATE } from './Auth.state'
import { QUESTION_STATE } from './Question.state'

export const APP_STATE: APP_INTERFACE = {
  AUTH_STATE: { ...AUTH_STATE },
  QUESTION_STATE: { ...QUESTION_STATE },
  PAGE_OVERFLOWY: 'scroll',
  CommentsSection: {
    id: null,
    comments: [],
    isShown: false,
  },
}
