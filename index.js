import { errors, focusErrors } from './src/validate';
import { focusAfterEnter, focusAfterMaxLength } from './src/focus';
import allowOnlyNumbers from './src/allow';
import core from './src/core';

function template(e, tmp, onylNumbers) {
  const err = errors(e, tmp, onylNumbers);
  if (err.status) {
    console.log(err.errors);
    return;
  }

  const { value } = e.target;
  const index = value.length - 1;

  const numbers = typeof onylNumbers === 'undefined' ? true : onylNumbers;

  if (numbers) {
    if (allowOnlyNumbers(e)) core(e, index, tmp);
  }
  if (!numbers) {
    core(e, index, tmp);
  }
}
function focus(e, target, after) {
  if (typeof e === 'undefined' && typeof target === 'undefined' && typeof after === 'undefined') return;
  const err = focusErrors(e, target, after);
  if (err.status) {
    console.log(err.errors);
    return;
  }
  if (typeof after === 'undefined') {
    focusAfterEnter(e, target);
  }
  if (after === 'enter') {
    focusAfterEnter(e, target);
  }
  if (typeof after === 'number') {
    focusAfterMaxLength(e, target, after);
  }
}
export { template, focus };
