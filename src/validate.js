// Validate Template
function validateE(e) {
  return (typeof e !== 'undefined' && typeof e === 'object' && typeof e.target !== 'undefined');
}

function validateTmp(tmp) {
  return (typeof tmp !== 'undefined' && typeof tmp === 'string' && tmp.includes('x') && tmp.trim().length > 0);
}

function validateOnlyNumbers(onlyNumbers) {
  if (typeof onlyNumbers === 'undefined') return true;
  if (typeof onlyNumbers !== 'boolean') return null;
  return onlyNumbers;
}

function errors(e, tmp, onlyNumbers) {
  let error = '';

  error += validateE(e) ? '' : '\x1b[31m(Error with value parameter) - invalid parameter, expects "$event" as parameter"\n';
  error += validateTmp(tmp) ? '' : '\x1b[32m(Warrning with tmp parameter) - no valid template is set\n';
  error += validateOnlyNumbers(onlyNumbers) !== null ? '' : '\x1b[31m(Error with onlyNumber parameter) - expects true or false as parameter"\n';

  return error.length > 0
    ? { status: true, errors: error, onlyNumbers: validateOnlyNumbers(onlyNumbers) }
    : { status: false, errors: '', onlyNumbers: validateOnlyNumbers(onlyNumbers) };
}
// Validate Focus
function validateFocusE(e) {
  return (typeof e !== 'undefined' && typeof e === 'object' && typeof e.target !== 'undefined');
}
function validateFocusTarget(target) {
  return (typeof document.getElementsByName(target)[0] !== 'undefined' && typeof target === 'string');
}
function validateFocusAfter(after) {
  if (typeof after === 'undefined') return true;
  if (typeof after === 'string' || typeof after === 'number') {
    if (typeof after === 'string' && after !== 'enter') return false;
    return after;
  }
  return false;
}
function focusErrors(e, target, after) {
  let error = '';

  error += validateFocusE(e) ? '' : '\x1b[31m(Error with value parameter) - invalid parameter, expects "$event" as parameter\n';
  error += validateFocusTarget(target) ? '' : `\x1b[31m(Error with target parameter) - there is no element with that name: "${target}"\n`;
  error += validateFocusAfter(after) ? '' : '\x1b[31m(Error with after parameter) - expects string "enter", or a number as parameter\n';

  return error.length > 0
    ? { status: true, errors: error, onlyNumbers: validateFocusAfter(after) }
    : { status: false, errors: '', onlyNumbers: validateFocusAfter(after) };
}

export { errors, focusErrors };
