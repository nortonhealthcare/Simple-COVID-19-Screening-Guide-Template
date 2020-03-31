# Simple COVID-19 Screening Guide Template

This project is a template for a patient screening guide to help individuals navigate the types of care options they should be pursuing for COVID-19. ***All logic is subject to change based on CDC recommendations and should be reviewed against those guidelines before final implementation.***

## Project Structure 

* **index.html** Contains all of the HTML for the wizard steps, questions, and results. Each `<fieldset>` is a step. The results `<fieldset>` has a hidden `<div class="... result-card ...">` for each possible result that is shown based on the inputted answers.
* **js/stepper.js** The javascript used by the next/previous buttons for going to the next/previous step.
* **js/screening-guide.js** Contains the logic for using the inputted answers to compute the screening decision and displaying the appropriate result `<div class="... result-card ...">`.
* **css/site.css** Contains all css styling.