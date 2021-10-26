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

export default function core(e, index, tmp) {
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
  }
  e.target.value = value;
}
