const url1 = 'https://intern-challenge.herokuapp.com/persons?page=1';
const url2 = 'https://intern-challenge.herokuapp.com/persons?page=2';

console.log(fetch(url2).then(response => response.json()).then(data => {console.log(data.persons)}));
fetch(url1).then(response => response.json()).then(data => people(data.persons));
fetch(url2).then(response => response.json()).then(data => peoples(data.persons));
// data
//  let fromcurrency = document.getElementById('countries');

function people(data){

    let thisperson = document.getElementById('countries');
    let list = document.getElementById('amount2');
    // let tocurrency = document.getElementById('countries2');


    for (let person of Object.keys(data).sort()){
        let {name, id} = data[person];

        // console.log(currencyName);
        // console.log(data);



        let optionFrom = document.createElement('option');
        optionFrom.innerText = `${name}`;
        optionFrom.value = `${id}`;

        let optionList = document.createElement('option');
        optionList.innerText = `${name}`;
        optionList.value = `${id}`;

        

        /* let optionTo = document.createElement('option');
        optionTo.innerText = `${person} (${currencyName})`;
        optionTo.value = `${person}`;
 */
        thisperson.appendChild(optionFrom);
        list.appendChild(optionList);

        // tocurrency.appendChild(optionTo); // ToCurrencyInput is undefined!

    }

 }

 function peoples(data){

    // let thisperson = document.getElementById('countries');
    let tocurrency = document.getElementById('countries2');
    let list = document.getElementById('amount2');


    for (let person of Object.keys(data).sort()){
        let {name, photo, id} = data[person];

        console.log(photo);

        /* img_src = person.photo;


        fetch(photo).then(response => response.blob()).then(data => console.log(data)); */



        /* let optionFrom = document.createElement('option');
        optionFrom.innerText = `${person} (${currencyName})`;
        optionFrom.value = `${person}`;
 */
        let optionTo = document.createElement('option');
        optionTo.innerText = `${name}`;
        optionTo.value = `${id}`;

        let img = document.createElement('img');
        // let img = document.getElementById('amount1')
        img.setAttribute('src', photo);

        let optionList = document.createElement('option');
        optionList.innerText = `${name}`;
        optionList.value = `${id}`;
    //    tolu ??
        // thisperson.appendChild(optionFrom);
    optionsTo.appendChild(img)
        tocurrency.appendChild(optionTo); // ToCurrencyInput is undefined!
        
        // document.getElementById("amount1").innerHTML = optionTo;
        list.appendChild(optionList);
        // details.appendChild()

       
    }

 }