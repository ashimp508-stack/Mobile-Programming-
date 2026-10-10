
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";

import {
    getDatabase,
    ref,
    push,
    set
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-database.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBHvT2HcXxZ6jiV7rq1Q6SGPEQAnltywuI",
    authDomain: "mobileprogramming10.firebaseapp.com",
    databaseURL: "https://mobileprogramming10-default-rtdb.firebaseio.com",
    projectId: "mobileprogramming10",
    storageBucket: "mobileprogramming10.firebasestorage.app",
    messagingSenderId: "881671180561",
    appId: "1:881671180561:web:32de5304bfdcc41fb6bcb0",
    measurementId: "G-037F94VSGV"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Select the form elements
const contactForm = document.getElementById("contactForm");
const submitBtn = document.getElementById("submitBtn");
const statusMessage = document.getElementById("statusMessage");

// Save contact information to Firebase
contactForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        statusMessage.textContent = "Please fill in all required fields.";
        return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";
    statusMessage.textContent = "";

    try {
        // Generate a unique database reference
        const newContactRef = push(ref(db, "contacts"));

        // Save contact details
        await set(newContactRef, {
            name: name,
            email: email,
            phone: phone,
            message: message,
            submittedAt: new Date().toISOString()
        });

        statusMessage.textContent =
            "Thank you! Your message was sent successfully.";

        contactForm.reset();

    } catch (error) {
        console.error("Firebase error:", error);

        statusMessage.textContent =
            "Unable to send your message. Please try again.";
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = "Send Message";
    }
});