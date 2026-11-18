# Job Application Tracker

A simple web app to keep track of the jobs you've applied to. Record the company, role, date, status, and notes for each application, all in one place.

## Features
- Add a job application with company, role, application date, status, and notes
- See all your applications in a list
- Update an application's status (Applied, Interviewing, Offer, Rejected) with a dropdown
- Delete applications you no longer need
- Data is saved in the browser, so it stays after a refresh or closing the tab

## Built with
- HTML
- JavaScript
- localStorage (browser storage)
- Git and GitHub

## How to use
1. Download or clone this repository
2. Open `index.html` in your browser
3. Fill in the form and click **Add application**

No installation needed.

## How it works
- When you click **Add application**, JavaScript reads the form fields and bundles them into an object
- Each object is added to an array that holds all your applications
- The array is converted to text with `JSON.stringify` and saved in `localStorage`
- When the page opens, the saved text is read back, converted to an array with `JSON.parse`, and each application is shown on the page
- Changing a status or deleting an application updates the array and saves it again

## Project structure
- `index.html`: the page layout and the form
- `script.js`: all the logic (adding, showing, updating, deleting, saving)

## What I learned
- How HTML forms work, and the difference between writing code and using it in the browser
- Using JavaScript to read form inputs, respond to clicks and changes, and add elements to the page
- Storing data with objects, arrays, and localStorage, and why `JSON.stringify` and `JSON.parse` are needed
- Debugging real errors, like hidden spaces in a file name and case-sensitive names in JavaScript
- Using Git to save my progress step by step and publish it on GitHub

## Coming next
- Search and filter applications
- Styling with CSS
- A live version on GitHub Pages

## Author
Viraj More · [GitHub](https://github.com/virajmore0101-vm)