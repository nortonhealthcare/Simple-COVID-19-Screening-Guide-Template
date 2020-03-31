/** This project is a template for a patient screening guide to help individuals navigate the types 
 * of care options they should be pursuing for COVID-19. 
 * All logic is subject to change based on CDC recommendations and should be reviewed against those
 * guidelines before final implementation. */

$(document).ready(function () {
    $('#submitBtn').on('click', function () {
        submit(this);
    });
});

function submit(btn) {
    // Hide all result options
    $('.result-card').hide();

    // Get inputted answers
    var answers = getAnswers();

    // Compute the decision result and show the appropriate result card div
    computeScreeningDecision(answers);

    // Proceed to next step to show the result
    goToNext(btn);
}

function getAnswers() {
    return {
        "age60OrOver": $('#age60OrOver').is(":checked"),
        "chronicMedicalCondition": $('#chronicMedicalCondition').is(":checked"),
        "cruisePlaneBusGroup": $('#cruisePlaneBusGroup').is(":checked"),
        "hadContact": $('#hadContact').is(":checked"),
        "hasFever": $('#hasFever').is(":checked"),
        "hasRespiratorySymptoms": $('#hasRespiratorySymptoms').is(":checked"),
        "liveInCommunalSetting": $('#liveInCommunalSetting').is(":checked"),
        "travelFromInfectedArea": $('#travelFromInfectedArea').is(":checked")
    };
}

function showResult(resultName) {
    $('#result-' + resultName).show();
}

function computeScreeningDecision(data) {
    if (data.hasFever && data.hasRespiratorySymptoms &&
        (data.hadContact || data.travelFromInfectedArea || data.cruisePlaneBusGroup)) {
        showResult('ECareHigh');
        return;
    }

    if (data.hasFever || data.hasRespiratorySymptoms) {
        data.age60OrOver || data.liveInCommunalSetting || data.chronicMedicalCondition
            ? showResult('ECareHigh')
            : showResult('ECareLow');
        return;
    }

    if (data.hadContact || data.travelFromInfectedArea || data.cruisePlaneBusGroup) {
        showResult('WaitAndMonitor');
        return;
    }

    showResult('NoScreen');
}
