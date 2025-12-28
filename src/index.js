import { formatDate } from './utils/date.js'

if (typeof window !== 'undefined') {
  window.Toolkit = {
    formatDate,
  }
}

export { formatDate }
