export function findCard(array, element) {
  let newArray = array.filter(function (elem) {
    if (elem._id !== element._id) {
      return true;
    } else {
      return false;
    }
  });
  return newArray;
}

export function clearForm() {
  let inputs = document.getElementsByTagName('input');
  for (let input of inputs) {
    input.value = '';
  }
  document.querySelector('.select').options[0].selected = 'selected';
}
