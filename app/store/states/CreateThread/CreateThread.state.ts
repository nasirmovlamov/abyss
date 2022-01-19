import { CreateThread_Interface } from './../../state-Interfaces/CreateThread/CreatThread.interface'

export const CreateThread_STATE: CreateThread_Interface = {
  threadType: 'not-selected',
  currentStage: 1,
  validation: {
    1: {
      isValid: 'not-selected',
      message: 'Please select a thread type',
    },
    2: {
      isValid: 'not-selected',
      message: 'Please fill blocks.',
    },
    3: {
      isValid: 'not-selected',
      message: 'Error occured during creation. Please try again',
    },
  },
}
