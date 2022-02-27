

const mySwitch = document.getElementById("priceSwitch");
const myAnnTables = document.getElementById("myAnnualTables");
const myMonTables = document.getElementById("myMonthlyTables");

mySwitch.addEventListener('click', function(){

    console.log("Working as intended");

    myAnnTables.classList.toggle("tables-hidden");

    myMonTables.classList.toggle("tables-hidden");
});

