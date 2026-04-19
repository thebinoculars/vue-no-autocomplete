import { nextTick } from 'vue'

const observers = new WeakMap()

function disableAutocomplete(el) {
  if (typeof window === 'undefined') {
    return
  }

  if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
    if (el.disabled) {
      return
    }
    el.setAttribute('readonly', 'readonly')
    setTimeout(() => el.removeAttribute('readonly'), 100)
  } else {
    const inputs = el.querySelectorAll('input:not([disabled]), textarea:not([disabled])')
    inputs.forEach((input) => {
      input.setAttribute('readonly', 'readonly')
      setTimeout(() => input.removeAttribute('readonly'), 100)
    })
  }
}

const NoAutocompleteDirective = {
  mounted(el) {
    nextTick(() => {
      disableAutocomplete(el)
    })

    if (typeof MutationObserver !== 'undefined') {
      const observer = new MutationObserver(() => {
        disableAutocomplete(el)
      })
      observer.observe(el, { childList: true, subtree: true })
      observers.set(el, observer)
    }
  },
  updated(el) {
    nextTick(() => {
      disableAutocomplete(el)
    })
  },
  unmounted(el) {
    const observer = observers.get(el)
    if (observer) {
      observer.disconnect()
      observers.delete(el)
    }
  },
}

export default {
  install(app) {
    app.directive('no-autocomplete', NoAutocompleteDirective)
  },
}
