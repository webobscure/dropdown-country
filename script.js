let selectorCountry = document.getElementById('select-country');
let countryBlock = document.getElementById('block-selector');

selectorCountry.addEventListener('click', (e) => {
    if(countryBlock.className == 'dropdown-select__hide') {
        console.log('true')
        countryBlock.classList.remove('dropdown-select__hide')
        countryBlock.classList.add('dropdown-select__block')
    } else {
        countryBlock.classList.remove('dropdown-select__block')
        countryBlock.classList.add('dropdown-select__hide')
    } 
    
})





