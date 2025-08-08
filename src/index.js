function disableAutocomplete(el) {
  if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
    el.setAttribute('readonly', 'readonly');
    setTimeout(() => el.removeAttribute('readonly'), 100);
  } else {
    const inputs = el.querySelectorAll('input, textarea');
    inputs.forEach(input => {
      input.setAttribute('readonly', 'readonly');
      setTimeout(() => input.removeAttribute('readonly'), 100);
    });
  }
}

const NoAutocompleteDirective = {
  mounted(el) {
    disableAutocomplete(el);
  }
};

export default {
  install(app) {
    app.directive('no-autocomplete', NoAutocompleteDirective);
  }
};
