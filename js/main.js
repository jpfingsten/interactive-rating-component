// Loop over radio inputs.
// If one is checked, clear the checked property for all the others
// Change checked button's label to have brighter gray background (add .checked class)

const radios = document.querySelectorAll('.btn-radio');

// for (const radio of radios) {
//   radio.addEventListener('click', function (e) {
//     for (const radio of radios) {
//       radio.checked = false;
//     };
//     e.target.classList.add('checked');
//   })
// }
