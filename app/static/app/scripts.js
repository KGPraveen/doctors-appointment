function slotSelected(n) {
    var slotButtons = document.querySelectorAll(".slot-button");
    slotButtons.forEach(btn => { btn.style.backgroundColor = "white"; btn.style.color = "black" });
    slotButtons[n - 1].style.backgroundColor = "#64bc6e";
    slotButtons[n - 1].style.color = "white";
    var continueButton = document.querySelector(".continue-btn");
    continueButton.disabled = false;
    continueButton.style.backgroundColor = '#0176c4';
    continueButton.style.color = 'white';
}