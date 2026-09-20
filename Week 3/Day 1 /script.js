// List of colors for the profile card

const colors = [
    "#4f46e5",
    "#059669",
    "#7c3aed",
    "#ea580c",
    "#0891b2",
    "#db2777"
];


// Starting color

let colorIndex = 0;


// Profile card

const profileCard = document.getElementById("profileCard");


// QR popup

const qrPopup = document.getElementById("qrPopup");


// Change card color

function changeCardColor() {

    colorIndex++;

    if (colorIndex >= colors.length) {
        colorIndex = 0;
    }

    profileCard.style.backgroundColor = colors[colorIndex];
}


// Show QR popup

function showQR() {

    qrPopup.style.display = "flex";
}


// Close QR popup

function closeQR() {

    qrPopup.style.display = "none";

    // Change card color when returning to the profile card

    changeCardColor();
}


// Change card color when page is opened

changeCardColor();