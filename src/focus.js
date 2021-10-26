export function focusAfterEnter(e, target) {
  if (e.keyCode === 13) {
    e.preventDefault();
    document.getElementsByName(target)[0].focus();
  }
}

export function focusAfterMaxLength(e, target, after) {
  if (e.target.value.length >= after) {
    if (!window.getSelection().toString().length) {
      e.preventDefault();
    }
    document.getElementsByName(target)[0].focus();
  }
}
