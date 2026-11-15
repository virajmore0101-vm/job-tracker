console.log("Hello from JavaScript!"); 
const form = document.querySelector("form");
console.log(form); 
form.addEventListener("submit", function (event) {
    event.preventDefault();
    const role = document.querySelector("#role").value;
    const company = document.querySelector("#company").value;
    console.log(role);
    console.log(company);
});
