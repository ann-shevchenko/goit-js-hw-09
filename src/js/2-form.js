const form = document.querySelector(".feedback-form");
const input = form.querySelector("input");
const textarea = form.querySelector("textarea");
const formData = {
    email: "",
    message: "",
}

populateFormFields();


function handleSubmit(event) {
    event.preventDefault();
    const { email, message } = event.target.elements;
    const emailValue = email.value.trim();
    const messageValue = message.value.trim();
    if(emailValue !== "" && messageValue !== "") {
        console.log({
            email: emailValue,
            message: messageValue,
            });
        event.target.reset();
        localStorage.removeItem("feedback-form-state");
    }
}

function handleInput(event) {
    const key = event.target.name;
    formData[key] = event.target.value.trim();

    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}

form.addEventListener ("submit", handleSubmit)
form.addEventListener ("input", handleInput);

function populateFormFields() {
    const date = JSON.parse(localStorage.getItem("feedback-form-state"));
    if(!date) {
        return;
    }
    const { email, message } = form.elements;
    email.value = date.email;
    message.value = date.message;
}