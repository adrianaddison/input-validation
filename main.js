(function () {
    var nameEl = document.querySelector('#name');
    var descriptionEl = document.querySelector('#description');
    // var hoursEl = document.querySelector('#hours');
    var minsEl = document.querySelector('#minutes');
    var skillEl = document.querySelector('#skill');
    var ingredientsEl = document.querySelector('#ingredients');
    var stepsEl = document.querySelector('#steps');
    var backButton = document.querySelector('#back');
    var nextButton = document.querySelector('#next');
    var steps = document.querySelectorAll('.step');
    // currentStep should keep track of the index of current step that is visible.
    var currentStep = 0;

    // `updateButtons` should add the `is-active` class to the back button if
    // the current step is beyond the first step, otherwise remove it. It should
    // also show the next button if the current step is before the last step,
    // otherwise hide it. We call this function at the bottom of the scope to do
    // an initial show/hide.
    function updateButtons() {
        if (currentStep > 0) {  
            backButton.classList.add('is-active');
        } else {
            backButton.classList.remove('is-active');
        }
        if (currentStep < steps.length - 1) {
            nextButton.classList.add('is-active');
        } else {
            nextButton.classList.remove('is-active');
        }
    }

    // `hideCurrentStep` should hide the step that is currently visible using
    // the `currentStep` variable.
    function hideCurrentStep() {
        steps[currentStep].classList.remove('is-active');
    }

    // `next` should validate the inputs on the current step by calling
    // `validate()`.
    // * If `validate` returns true, increment the value of `currentStep`.
    // * If `validate` returns true, the current step should be hidden and
    // the next step should be shown (use the class `is-active`).
    // * `next` should also call `updateButtons` to display the appropriate
    // buttons.
    function next(e) {
        e.preventDefault();
        if (validate()) {
            hideCurrentStep();
            currentStep++;
            steps[currentStep].classList.add('is-active');
            updateButtons();
        }
    }

    // `back` should validate the inputs on the current step by calling
    // `validate()`.
    // * If `validate` returns true, decrement the value of `currentStep`.
    // * If `validate` returns true, the current step should be hidden and
    // the previous step should be shown (use the class `is-active`).
    // * `back` should also call `updateButtons` to display the appropriate
    // buttons.
    function back(e) {
        e.preventDefault();
        if (validate()) {
            hideCurrentStep();
            currentStep--;
            steps[currentStep].classList.add('is-active');
            updateButtons();
        }
    }

    // Validate should evaluate the input of the inputs in the current step.
    // * The function should start by clearing any errors that were
    // previously there.
    // * If the inputs have the proper input, the function should return
    // true.
    // * If an input does not have valid input, the function should set the
    // `data-error` attribute on the input's containing `.field` element to
    // an error message, add the class `is-error` to the field and
    // ultimately return false.
    function validate() {
        var valid = true;

        if (currentStep === 0) {
            if (nameEl.value.length === 0) {
                nameEl.parentElement.dataset.error = 'Required';
                nameEl.parentElement.classList.add('is-error');
                valid = false;
            }
            if (descriptionEl.value.length < 6 || descriptionEl.value.length> 30) {
                descriptionEl.parentElement.dataset.error = 'Required Description should be > 6 and < 30';
                descriptionEl.parentElement.classList.add('is-error');
                valid = false;
            }    
            /* etc. */
        } else if (currentStep === 1) {
            if (minsEl.value.length === 0) {
                minsEl.parentElement.dataset.error = 'Required';
                minsEl.parentElement.classList.add('is-error');
                valid = false;
            }
            if (skillEl.value.length === 0) {
                skillEl.parentElement.dataset.error = 'Required';
                skillEl.parentElement.classList.add('is-error');
                valid = false;
            }

        } else if (currentStep === 2) {
            if (ingredientsEl.value.length === 0) {
                ingredientsEl.parentElement.dataset.error = 'Required';
                ingredientsEl.parentElement.classList.add('is-error');
                valid = false;
            }

        } else if (currentStep === 3) {
            if (stepsEl.value.length === 0) {
                stepsEl.parentElement.dataset.error = 'Required';
                stepsEl.parentElement.classList.add('is-error');
                valid = false;
            }
        } 
        /* etc. */
        return valid;
    }

    // Register an event handler for the 'click' event on the next button.
    // The event handler should prevent any default functionality the
    // browser has for `<button>` elements and call the `next` function. 


    // Register an event handler for the 'click' event on the back button.
    // The event handler should prevent any default functionality the
    // browser has for `<button>` elements and call the `back` function. 




    // Call `updateButtons` initially to make sure the proper buttons are
    // visible.
    updateButtons();
    nextButton.addEventListener('click', next);
    backButton.addEventListener('click', next);
})();