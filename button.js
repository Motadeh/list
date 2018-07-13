function myfunction() {
    let from = document.getElementById("countries").value; ////getElementsByClassName retrieves all elements, you need the first one only with [0]
    let to = document.getElementById("countries2").value; //getElementsByClassName retrieves all elements, you need the first one only with [0]
    let fromAmount = document.getElementById("amount").value;
    // console.log(from);
    // let toAmount = document.getElementById("amount2").value;
    // let toAmount        =   document.getElementById("toAmount");
    // you dont need this, you already declared it
    //let fromQuery       =   `${from}`;
    //you dont need this, you already declared it
    //let toQuery         =   `${to}`;
    /* fetch(`https://intern-challenge.herokuapp.com/persons/${from}`).then(response => response.json()
    ).then(rates => {
        
    }) */
    // console.log(from);

    const url = `https://intern-challenge.herokuapp.com/persons/${from}`;

    // console.log(post(url1).then(response => response.json()).then(data => {"description" = "very nice"}));
    

    var data = {description: fromAmount};

    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'content-type':'application/json'
        }
    }).then(res =>res.json())
      .catch(error => console.error('Error:', error))
      .then(response=> console.log('Success:', response));
}
