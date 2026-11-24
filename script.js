const form = document.querySelector("form");
let applications = JSON.parse(localStorage.getItem("applications")) || [];
function updateSummary() {
    const interviewing = applications.filter(function (a) { return a.status === "Interviewing"; }).length;
    const offers = applications.filter(function (a) { return a.status === "Offer"; }).length;
    const rejected = applications.filter(function (a) { return a.status === "Rejected"; }).length;
    document.querySelector("#summary").textContent =
        "Total: " + applications.length +
        " · Interviewing: " + interviewing +
        " · Offers: " + offers +
        " · Rejected: " + rejected;
            document.querySelector("#empty").style.display = applications.length === 0 ? "block" : "none";
}
function showApplication(app) {
    const item = document.createElement("li");
    const title = document.createElement("strong");
title.textContent = app.company + " · " + app.role;

const details = document.createElement("div");
details.className = "details";
const prettyDate = new Date(app.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
details.textContent = prettyDate + (app.notes ? " · " + app.notes : "");

item.appendChild(title);
item.appendChild(details);

    const statusSelect = document.createElement("select");
    ["Applied", "Interviewing", "Offer", "Rejected"].forEach(function (status) {
        const option = document.createElement("option");
        option.textContent = status;
        statusSelect.appendChild(option);
    });
    statusSelect.value = app.status;
    item.appendChild(statusSelect);

    statusSelect.addEventListener("change", function () {
        app.status = statusSelect.value;
        statusSelect.className = "status " + app.status.toLowerCase();
        statusSelect.className = "status " + app.status.toLowerCase();
        localStorage.setItem("applications", JSON.stringify(applications));
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    item.appendChild(deleteButton);

    deleteButton.addEventListener("click", function () {
        if (confirm("Are you sure?")) {
        const index = applications.indexOf(app);
        applications.splice(index, 1);
        localStorage.setItem("applications", JSON.stringify(applications));
        item.remove();
        updateSummary();
        }
    });
    document.querySelector("#list").appendChild(item);
}

applications.forEach(showApplication);
updateSummary();
form.addEventListener("submit", function (event) {
    event.preventDefault();
    const company = document.querySelector("#company").value;
    const role = document.querySelector("#role").value;
    const date = document.querySelector("#date").value;
    const status = document.querySelector("#status").value;
    const notes = document.querySelector("#notes").value;
    const application = { company: company, role: role, date: date, status: status, notes: notes };
    applications.push(application);
    localStorage.setItem("applications", JSON.stringify(applications));
    showApplication(application);
    updateSummary();
    form.reset();
});