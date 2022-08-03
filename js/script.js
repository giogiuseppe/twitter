let d = document, [inputs, knapp] = [
    d.querySelectorAll('[type="text"],[type="password"]'),
    d.querySelector('#desativado')]
knapp.disabled = true

for (i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener('input',() => {
    let values = []
    inputs.forEach(v => values.push(v.value))
    knapp.disabled = values.includes('')
  })
}