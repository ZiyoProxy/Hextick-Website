
function displayDateTime() {
    const now = new Date();
    const options = { 
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', 
        hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true 
    };
    
    // Format the date and time
    const formattedDateTime = now.toLocaleString('en-US', options);
    
    // this will display the formatted date and time in the "date-time" element
    document.getElementById('date-time').textContent = formattedDateTime;
}

// this will call the function when the page loads
window.onload = displayDateTime;

// it changes the time and seconds in real time
setInterval(displayDateTime, 1000);



// the below function is for the review part in products page
function SubmitReview(button) 
{
    // Find the closest popup box 
    const popup = button.closest(".popup-box");

    // it will find the review textarea inside specific popup option
    const reviewTextArea = popup.querySelector(".review-text");

    // this is for the review text box
    const message = reviewTextArea.value.trim();

    if (message === "") {
        alert("Please leave a review!");
    } else {
        alert("Thank you for your review!");
        reviewTextArea.value = ""; // this will clears input after user clicks on submit button 
    }
}