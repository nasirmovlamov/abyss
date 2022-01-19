import toast from 'react-hot-toast'
import { ToastPosition } from 'react-hot-toast/dist/core/types'

//ERROR TOASTERS
export const successToast = (side: ToastPosition, message: string) => {
  toast(message, {
    position: side || 'top-right',
    // Styling
    style: {
      background: 'green',
      padding: '10px',
      transition: '5s',
      color: 'white',
    },
    className: '',
    // Custom Icon
    icon: '✅',
    // Change colors of success/error/loading icon

    // Aria
    ariaProps: {
      role: 'status',
      'aria-live': 'polite',
    },
  })
}

//Login TOASTER
export const loginSuccess = () => {
  toast('You logged successfully!', {
    position: 'top-right',
    // Styling
    style: {
      background: 'green',
      padding: '10px',
      transition: '5s',
      color: 'white',
    },
    className: '',
    // Custom Icon
    icon: '✅',
    // Change colors of success/error/loading icon

    // Aria
    ariaProps: {
      role: 'status',
      'aria-live': 'polite',
    },
  })
}
