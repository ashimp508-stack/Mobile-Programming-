javascript
function calculate() {

    let economics = Number(document.getElementById("Econmics").value);
    let maths = Number(document.getElementById("Maths").value);
    let science = Number(document.getElementById("Science").value);
    let social = Number(document.getElementById("Social").value);
    let english = Number(document.getElementById("English").value);
    let account = Number(document.getElementById("Account").value);
    let nepali = Number(document.getElementById("Nepali").value);

    let total = economics + maths + science + social +
                english + account + nepali;
    let result = document.getElementById("result");
    if (total >= 630) {
        result.innerHTML =
            "Total Marks: " + total + "/700<br>" +
            "Result: DISTINCTION A+";
        result.style.color = "green";
    }
    else if (total >= 560) {
        result.innerHTML =
            "Total Marks: " + total + "/700<br>" +
            "Result: FIRST DIVISION A";
        result.style.color = "blue";
    }

    else if (total >= 490) {
        result.innerHTML =
            "Total Marks: " + total + "/700<br>" +
            "Result: SECOND DIVISION B";
        result.style.color = "orange";
    }
     else {
         result.innerHTML =
            "Total Marks: " + total + "/700<br>" +
            "Result: FAIL";
        result.style.color = "red";
    }
}
