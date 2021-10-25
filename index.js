function allowOnlyNumbers(e) {
  if (e.keyCode < 48 || e.keyCode > 57) {
    e.preventDefault();
    return false;
  }
  return true;
}
function signsBeforeValue(i, tmp) {
  let section = '';
  for (let q = i; q < tmp.length; q += 1) {
    if (tmp[q] === 'x') {
      break;
    }
    section += tmp[q];
  }

  return section;
}
function focusNext(targetName) {
  const element = document.getElementsByName(targetName)[0];
  if (typeof element !== 'undefined' && typeof targetName === 'string') {
    element.focus();
  } else {
    console.log(
      `\x1b[31m(Error with focus parameter) \u001b[0m- there is no element with that name: "${targetName}"`,
    );
  }
}
function core(e, index, tmp, focus) {
  let { value } = e.target;
  const signsSectionLength = signsBeforeValue(index, tmp).length + 1;
  if (value.length - 1 === 0 && tmp[0] !== 'x') {
    value = signsBeforeValue(index, tmp)
      + value
      + signsBeforeValue(signsSectionLength, tmp);
  } else value += signsBeforeValue(index + 1, tmp);

  if (value.length >= tmp.length) {
    if (!window.getSelection().toString().length) {
      e.preventDefault();
    }
    if (typeof focus !== 'undefined') focusNext(focus);
  }
  e.target.value = value;
}

function useTemplate(e, tmp, focus, onylNumber) {
  if (
    typeof e !== 'undefined'
    && typeof e === 'object'
    && typeof e.target !== 'undefined'
  ) {
    const { value } = e.target;
    if (
      typeof tmp !== 'undefined'
      && typeof tmp === 'string'
      && tmp.includes('x')
      && tmp.trim().length > 0
    ) {
      const index = value.length - 1;

      if (
        typeof onylNumber === 'undefined'
        || typeof onylNumber === 'boolean'
      ) {
        if (typeof onylNumber === 'undefined' || onylNumber) {
          if (allowOnlyNumbers(e)) core(e, index, tmp, focus);
        }
        if (typeof onylNumber !== 'undefined' && !onylNumber) {
          core(e, index, tmp, focus);
        }
      } else {
        console.log(
          '\x1b[31m(Error with onlyNumber parameter) \u001b[0m- its value can only be true or false"',
        );
      }
    } else {
      console.log(
        '\u001b[35m(Warrning with tmp parameter) \u001b[0m- no valid template is set',
      );
      e.target.value = value;
    }
  } else {
    console.log(
      '\x1b[31m(Error with value parameter) \u001b[0m- invalid parameter, expects "$event" as parameter"',
    );
  }
}
export { useTemplate as default };
