const buttonsClk = document.getElementsByClassName('kbd-clk');

for(const btn of buttonsClk) {
    btn.addEventListener('click', function(event) {
    // console.log(event.target);

    const btnBgColor = btn.classList.add('bg-green-400');
    const parSetPrice = event.target;

    const perSetInnerPrice = parSetPrice.innerText;
    const setMoney = document.getElementById("set-price");
    const innerSetMoney = setMoney.innerText;
    const convertInnerSetMoney = parseInt(innerSetMoney);
    // add element and price start
    const addNew = document.getElementById('table');
    const addInner = document.getElementById('table-body');
    const tableRow = document.createElement('tr');
    const p1 = document.createElement('td');
    p1.style.paddingRight = '50px';
    p1.innerText = perSetInnerPrice;
    const p2 = document.createElement('td');
    p2.style.paddingRight = '50px'
    p2.innerText = 'Economoy';
    const p3 = document.createElement('td');
    p3.innerText = convertInnerSetMoney;
    tableRow.appendChild(p1);
    tableRow.appendChild(p2)
    tableRow.appendChild(p3)
    addInner.appendChild(tableRow);
    addNew.appendChild(addInner);
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
    // const ticketCount = document.getElementById('sit-count');
    if(increasingSit >= 4) {
        // buttonForClk.setAttribute("disabled", true)
        alert('select only four');
        return
    }   

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


    const button = document.getElementById('apply-button').addEventListener('click', function forOfferSet() {
        // console.log('hello world', event.target);
        // const addTotal = addElementById('total-price');
        // const addTotalIncreasing = addTotal + convertInnerSetMoney;
        // setValueById('total-price', addTotalIncreasing);
        
        const new15 = document.getElementById('new15');
        const convertNew15 = new15.innerText;
        const newConvert = convertNew15.toLocaleLowerCase();
    
        const new20 = document.getElementById('new20');
        const convertNew20 = new20.innerText;
        const newConvert2 = convertNew20.toLocaleLowerCase();
        console.log(newConvert2);
    
        const inputValue = document.getElementById('input');
        const inputInnerValue = inputValue.value;
        console.log(inputInnerValue);
        const visible = document.getElementById('visibale-this');

        if(inputInnerValue === newConvert) {
            visible.classList.add('hidden');
            const discountAmount = addElementById('grand-total');
            const discountPrice = discountAmount * 15 / 100;
            const totalPrice = discountAmount - discountPrice;
            setValueById('grand-total', totalPrice);
        }
         else if (inputInnerValue === newConvert2) {
            visible.classList.add('hidden');
            const discountAmount = addElementById('grand-total');
            const discountPrice = discountAmount * 15 / 100;
            const totalPrice = discountAmount - discountPrice;
            setValueById('grand-total', totalPrice);
        }
        else {
            alert('please give me coupon code');
            inputValue.value = '';
        } 
    });

 const buttonsForClick = document.getElementById('next-button').addEventListener('click', function() {
    const lastSection = document.getElementById('last-section');
    lastSection.classList.remove('hidden');
 })
 
const buttonForClk = document.getElementById('continue-button').addEventListener('click', function() {
    const hide = document.getElementById('last-section');
    hide.classList.add('hidden');
})