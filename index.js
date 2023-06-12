// outputs
const output_year = document.querySelector(".output_year");
const output_month = document.querySelector(".output_month");
const output_day = document.querySelector(".output_day");
const submit_button = document.querySelector(".submit_button");
submit_button.addEventListener("click", calculateDate);

// inputs
const input_year = document.querySelector("#year");
const input_month = document.querySelector("#month");
const input_day = document.querySelector("#day")

// error code
const error_year  = document.querySelector(".error_year");
const error_month = document.querySelector(".error_month");
const error_day = document.querySelector(".error_day");

is_valid = false;

input_year.addEventListener("input", e => {
    if(+input_year.value > 2023) {
        error_year.textContent = "Must be valid year";
        is_valid = false;
        return;
    }
    else {
        error_year.textContent = "";
        is_valid = true;
    }
    if(+input_year.value < 0) {
        is_valid = false;
        error_year.textContent = "This field is required";
        is_valid = false;
    }
    else {
        error_year.textContent = "";
    }
});

input_month.addEventListener("input", e => {
    if(+input_month.value > 12) {
        error_month.textContent = "Must be valid month";
        is_valid = false;
        return;
    }
    else {
        error_month.textContent = "";
        is_valid = true;
    }
    if(+input_month.value < 0) {
        is_valid = false;
        error_month.textContent = "This field is required";
        is_valid = false;
    }
    else {
        error_month.textContent = "";
    }
});

input_day.addEventListener("input", e => {
    if(+input_day.value > 31) {
        error_day.textContent = "Must be valid Day";
        is_valid = false;
        return;
    }
    else {
        error_day.textContent = "";
        is_valid = true;
    }
    if(+input_day.value === 0) {
        is_valid = false;
        error_day.textContent = "This field is required";
        is_valid = false;
    }
    else {
        error_day.textContent = "";
    }
});

function calculateDate() {
    if(is_valid) {
        let birthday = `${input_month.value}/${input_day.value}/${input_year.value}`;
        console.log(birthday);
        let birthdayobj = new Date(birthday);
        let ageDiffMill = Date.now() - birthdayobj;
        let newAgeDate = new Date(ageDiffMill);
        let newAgeYears = newAgeDate.getUTCFullYear() - 1970;
        let newAgeMonth = newAgeDate.getMonth();
        let newAgeDay = newAgeDate.getUTCDay();
        output_day.textContent = newAgeDay;
        output_month.textContent = newAgeMonth;
        output_year.textContent = newAgeYears;
    }
    else {
        alert("error");
    }
}