import { formatDate } from './utils/date.js'

export { formatDate }

if (typeof window !== 'undefined') {
  window.HtnnJsToolkit = {
    formatDate,
  }
}
