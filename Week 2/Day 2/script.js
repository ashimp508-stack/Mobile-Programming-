function calculate() {
    let economics = Number(document.getElementById("Econmics").value);
    let maths = Number(document.getElementById("Maths").value);
    let science = Number(document.getElementById("Science").value);
    let social = Number(document.getElementById("Social").value);
    let english = Number(document.getElementById("English").value);
    let account = Number(document.getElementById("Account").value);
    let nepali = Number(document.getElementById("Nepali").value);

    let total = economics + maths + science + social + english + account + nepali;

    if (
        economics >= 40 &&
        maths >= 40 &&
        science >= 40 &&
        social >= 40 &&
        english >= 40 &&
        account >= 40 &&
        nepali >= 40
    ) {
        document.getElementById("result").innerHTML =
            "Total Marks = " + total + "<br>Student is PASS";
            document.getElementById("result").style.color = "green";
            
    } else {
        document.getElementById("result").innerHTML =
            "Total Marks = " + total + "<br>Student is FAIL";
            document.getElementById("result").style.color = "red";
    }
}
