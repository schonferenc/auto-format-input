export default function allowOnlyNumbers(e) {
  if (e.keyCode < 48 || e.keyCode > 57) {
    e.preventDefault();
    return false;
  }
  return true;
}
