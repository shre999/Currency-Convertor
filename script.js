const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json";
const btn = document.querySelector('button');
const fromCurr = document.querySelector('.from select');
const toCurr = document.querySelector('.to select')
  // for (code in countryList){
  //   console.log(code,  countryList[code]);
  // }
  let dropdown = document.querySelector('#to');
  // for (let select of dropdown){
    for(currCode in countryList){
      let newOption = document.createElement('option');
      newOption.innerText = currCode;
      newOption.value = currCode;
      if (currCode ==="INR"){
        newOption.selected = "selected";
      }
      dropdown.appendChild(newOption);
    }
    dropdown.addEventListener("change", (evt) => {
      updateFlag(evt.target);
    })
  // }

  const updateFlag = (target) =>{
    let currCode = target.value;
    console.log(currCode);
    let countryCode = countryList[currCode];
    console.log(countryCode);
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = target.parentElement.querySelector('img');
    img.src = newSrc;
  }

  btn.addEventListener('click', async (event)=> {
    event.preventDefault();
    let amt = document.querySelector('.amount input');
    let amtValue = amt.value;
    if(amtValue === "" || amtValue <1){
      amtValue = 1;
      amt.value = "1";
    }
    const URL = BASE_URL;
    let response = await fetch(URL);
    let data = await response.json();
    let toCountry = toCurr.value.toLowerCase();
    console.log(data);
    
    let rate = data.eur[toCountry];
    finalRate = amtValue * rate;
    let msg = document.querySelector('.msg')
    msg.innerText = `${amtValue} EUR = ${finalRate} ${toCurr.value}`;
  })


  
  
    