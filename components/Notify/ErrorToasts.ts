import toast from 'react-hot-toast'
import { ToastPosition } from 'react-hot-toast/dist/core/types'

//ERROR TOASTERS
export const errorToastFunc = (side: ToastPosition, message: string) => {
  toast(message, {
    position: side || 'top-right',
    // Styling
    style: {
      background: 'red',
      padding: '10px',
      transition: '5s',
      color: 'white',
    },
    className: '',
    // Custom Icon
    icon: '❌',
    // Change colors of success/error/loading icon

    // Aria
    ariaProps: {
      role: 'status',
      'aria-live': 'polite',
    },
  })
}

//Login TOASTER
export const loginError = () => {
  toast('Login your account', {
    position: 'top-right',
    // Styling
    style: {
      background: 'red',
      padding: '10px',
      transition: '5s',
      color: 'white',
    },
    className: '',
    // Custom Icon
    icon: '❌',
    // Change colors of success/error/loading icon

    // Aria
    ariaProps: {
      role: 'status',
      'aria-live': 'polite',
    },
  })
}
