const buttonsClk = document.getElementsByClassName('kbd-clk');
for(const btn of buttonsClk) {
    btn.addEventListener('click', function(e) {
    const btnBgColor = btn.classList.add('bg-green-400');
    const parSetPrice = e.target.parentNode.childNodes[1];
    const perSetInnerPrice = parSetPrice.innerText;
    const setMoney = document.getElementById("set-price");
    const innerSetMoney = setMoney.innerText;
    const convertInnerSetMoney = parseInt(innerSetMoney);
    // add element and price start
    const addNew = document.getElementById('element-add');
    const addInner = document.getElementById('inner-add-element');
    const p1 = document.createElement('p');
    p1.innerText = perSetInnerPrice;
    const p2 = document.createElement('p');
    p2.innerText = 'Economoy';
    const p3 = document.createElement('p');
    p3.innerText = convertInnerSetMoney;
    addInner.appendChild(p1);
    addInner.appendChild(p2);
    addInner.appendChild(p3);
    addNew.append(addInner);
    // add element and price end
    // minus value from set start
    const minusValue = addElementById('set-minus-40') 
    const minusOneByOne = minusValue - 1;
    setValueById('set-minus-40', minusOneByOne);
    // minus value from set end
    // count value in form start
    const sitCount = addElementById('sit-count');
    const increasingSit = sitCount + 1;
    setValueById('sit-count', increasingSit);
    // count value in from end
    // add total price start
    const addTotal = addElementById('total-price');
    const addTotalIncreasing = addTotal + convertInnerSetMoney;
    setValueById('total-price', addTotalIncreasing);
    // add total price end
    // add grand total price start
     const addGrandTotal = addElementById('grand-total');
     const addGrandTotalIncreasing = addGrandTotal + convertInnerSetMoney;
     setValueById('grand-total', addGrandTotalIncreasing);
    // add grand total price end
    
})
}

function addElementById(inputId) {
    const getId = document.getElementById(inputId);
    const getIdInner = getId.innerText;
    const convertIdInner = parseInt(getIdInner);
    return convertIdInner;
}

function setValueById(inputId, value) {
    const setValue = document.getElementById(inputId);
    setValue.innerText = value;
}

