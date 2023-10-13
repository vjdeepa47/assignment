const form = document.getElementById("survey-form");
const submitButton = document.getElementById("submit-button");
const resetButton = document.getElementById("reset-button");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("close-popup");

submitButton.addEventListener("click", () => {
  if (form.checkValidity()) {
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const dob = document.getElementById("date-of-birth").value;
    const country = document.getElementById("country").value;
    const gender = [
      ...document.querySelectorAll('input[name="gender"]:checked'),
    ].map((input) => input.value);
    const profession = document.getElementById("profession").value;
    const email = document.getElementById("email").value;
    const mobileNumber = document.getElementById("mobile-number").value;

    const message = `
                    <p><strong>First Name:</strong> ${firstName}</p>
                    <p><strong>Last Name:</strong> ${lastName}</p>
                    <p><strong>Date of Birth:</strong> ${dob}</p>
                    <p><strong>Country:</strong> ${country}</p>
                    <p><strong>Gender:</strong> ${gender.join(", ")}</p>
                    <p><strong>Profession:</strong> ${profession}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Mobile Number:</strong> ${mobileNumber}</p>
                `;

    document.getElementById("popup-content").innerHTML = message;

    popup.style.display = "block";

    form.reset();
  } else {
    alert("Please fill out all required fields.");
  }
});

resetButton.addEventListener("click", () => {
  form.reset();
});

closePopup.addEventListener("click", () => {
  popup.style.display = "none";
});
