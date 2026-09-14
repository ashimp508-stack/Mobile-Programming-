javascript
function calculate() {

    // Get marks from HTML
    let economics = Number(document.getElementById("Econmics").value);
    let maths = Number(document.getElementById("Maths").value);
    let science = Number(document.getElementById("Science").value);
    let social = Number(document.getElementById("Social").value);
    let english = Number(document.getElementById("English").value);
    let account = Number(document.getElementById("Account").value);
    let nepali = Number(document.getElementById("Nepali").value);

    // Calculate total marks
    let total = economics + maths + science + social +
                english + account + nepali;

    // Get result paragraph
    let result = document.getElementById("result");

    // Check result
    if (total >= 560) {

        result.innerHTML =
            "Total Marks: " + total + "/700<br>" +
            "Result: DISTINCTION";

        result.style.color = "green";

    } 
    else if (total >= 350) {

        result.innerHTML =
            "Total Marks: " + total + "/700<br>" +
            "Result: PASS";

        result.style.color = "blue";

    } 
    else {

        result.innerHTML =
            "Total Marks: " + total + "/700<br>" +
            "Result: FAIL";

        result.style.color = "red";
    }

}
