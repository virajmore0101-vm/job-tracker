console.log("Hello from JavaScript!"); 
const form = document.querySelector("form");
let applications = JSON.parse(localStorage.getItem("applications")) || [];
console.log(form); 
function showApplication(app) {
    const item = document.createElement("li");
    item.textContent = app.company + " - " + app.role + " - " + app.date + " - " + app.status + " - " + app.notes;
    const deleteButton = document.createElement("button");
deleteButton.textContent = "Delete";
item.appendChild(deleteButton);
deleteButton.addEventListener("click", function () {
    const index = applications.indexOf(app);
    applications.splice(index, 1);
    localStorage.setItem("applications", JSON.stringify(applications));
    item.remove();
});
    document.querySelector("#list").appendChild(item);
}

applications.forEach(showApplication);
form.addEventListener("submit", function (event) {
    event.preventDefault();
    const role = document.querySelector("#role").value;
    const company = document.querySelector("#company").value;
    console.log(role);
    console.log(company);
    const date = document.querySelector("#date").value;
    console.log(date);
    const status = document.querySelector("#status").value;
    console.log(status);
    const notes = document.querySelector("#notes").value;
    console.log(notes);
    const application = {
    company: company,
    role: role,
    date: date,
    status: status,
    notes: notes
};
console.log(application);
applications.push(application);
localStorage.setItem("applications", JSON.stringify(applications));
console.log(applications);
   showApplication(application);
form.reset();
});
