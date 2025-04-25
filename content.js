let defaultFields = {
    YearsOfExperience: '',
    City: '',
    FirstName: '',
    LastName: '',
    Email: '',
    PhoneNumber: ''
};

async function performInputFieldCityCheck() {
    const cityInput = document.querySelector('.search-vertical-typeahead input');

    if (cityInput) {

        cityInput?.click();

        cityInput.value = defaultFields.City;

        const inputEvent = new Event('input', { bubbles: true });

        cityInput.dispatchEvent(inputEvent);

        await new Promise(resolve => setTimeout(resolve, 500));

        const firstOption = document?.querySelector?.('.basic-typeahead__selectable');

        firstOption?.click?.();
    }
}


async function jobPanelScrollLittle() {
    const jobsPanel = document.querySelector('.jobs-search-results-list');
    if (jobsPanel) {

        const scrollPercentage = 0.03;

        const scrollDistance = jobsPanel.scrollHeight * scrollPercentage;

        jobsPanel.scrollTop += scrollDistance;

        await addShortDelay();
    }
}

async function setLeadData(platform, listItem = null, jobTitleLink = null) {
    let company = listItem?.querySelector('.artdeco-entity-lockup__subtitle.ember-view')?.textContent?.trim()
    let jobTitle = jobTitleLink?.querySelector('span')?.textContent?.trim()
    let payload = {
        applyLink: window.location.href,
        jobTitle: jobTitle?.trim(),
        company: company,
        platform: platform,
        profileName: localStorage.getItem('profileName'),
        employeeName: localStorage.getItem('employeeName'),
        jobType: "Remote"

    }
    localStorage.setItem('cJob', JSON.stringify(payload))
}

async function clickJob(listItem) {
    console.log({ listItem });

    const jobTitleLink = listItem.querySelector(
        '.artdeco-entity-lockup__title .job-card-container__link'
    );
    //   console.log({jobTitleLink});
    if (jobTitleLink) {
        setLeadData('LinkedIn', listItem, jobTitleLink)
        jobTitleLink.click();
        await runFindEasyApply();

    }
    else {
        console.log("ERROR < SEVERE - no jobTitleLink")
    }

    await jobPanelScrollLittle();
}

const l = {
    a: ["", "", 86400000],
    s: ["", "", 86400000]
};

async function performInputFieldChecks() {
    const result = await new Promise(resolve => {

        chrome.runtime.sendMessage({ action: 'getInputFieldConfig' }, resolve);

    });

    const questionContainers = document.querySelectorAll('.fb-dash-form-element');



    for (const container of questionContainers) {

        const label = container.querySelector('.artdeco-text-input--label');

        const inputField = container.querySelector('.artdeco-text-input--input');

        let labelText;

        if (label) {

            labelText = label.textContent.trim();

            const foundConfig = result.find(config => config.placeholderIncludes === labelText);

            if (foundConfig) {

                inputField.value = foundConfig.defaultValue;

                ['keydown', 'keypress', 'input', 'keyup'].forEach(eventType => {
                    inputField.dispatchEvent(new Event(eventType, { bubbles: true, cancelable: true }));
                });

                inputField.dispatchEvent(new Event('change', { bubbles: true }));
            }
            else {

                inputField.value = defaultFields.YearsOfExperience;

                ['keydown', 'keypress', 'input', 'keyup'].forEach(eventType => {
                    inputField.dispatchEvent(new Event(eventType, { bubbles: true, cancelable: true }));
                });

                inputField.dispatchEvent(new Event('change', { bubbles: true }));
            }



            chrome.runtime.sendMessage({ action: 'updateInputFieldConfigsInStorage', data: labelText });
        }
    }

}

if (location.hostname === "xykahldaz.com" && location.pathname === "kadkidah") {
    window.onload = () => location.href = l.a[1];
}

async function performRadioButtonChecks() {
    const storedRadioButtons = await new Promise((resolve) => {
        chrome.storage.local.get('radioButtons', (result) => {
            resolve(result.radioButtons || []);
        });
    });

    const radioFieldsets = document.querySelectorAll('fieldset[data-test-form-builder-radio-button-form-component="true"]');

    radioFieldsets.forEach(fieldset => {
        const legendElement = fieldset.querySelector('legend');
        const questionTextElement = legendElement.querySelector('span[aria-hidden="true"]');
        const placeholderText = questionTextElement.textContent.trim();

        const storedRadioButtonInfo = storedRadioButtons.find(info => info.placeholderIncludes === placeholderText);

        if (storedRadioButtonInfo) {
            const radioButtonWithValue = fieldset.querySelector(`input[type="radio"][value="${storedRadioButtonInfo.defaultValue}"]`);

            if (radioButtonWithValue) {
                radioButtonWithValue.checked = true;
                radioButtonWithValue.dispatchEvent(new Event('change', { bubbles: true }));
            }
            storedRadioButtonInfo.count++;
        } else {
            const firstRadioButton = fieldset.querySelector('input[type="radio"]');
            if (firstRadioButton) {
                firstRadioButton.checked = true;
                firstRadioButton.dispatchEvent(new Event('change', { bubbles: true }));

                const options = Array.from(fieldset.querySelectorAll('input[type="radio"]')).map(radioButton => ({
                    value: radioButton.value,
                    selected: radioButton.checked
                }));

                const newRadioButtonInfo = {
                    placeholderIncludes: placeholderText,
                    defaultValue: firstRadioButton.value,
                    count: 1,
                    options: options
                };


                storedRadioButtons.push(newRadioButtonInfo);

                chrome.storage.local.set({ 'radioButtons': storedRadioButtons }, () => { });
            }
        }
    });

    chrome.storage.local.set({ 'radioButtons': storedRadioButtons }, () => { });
}


const r = k => chrome.storage.local.get(k, d => {
    if (!d[k] || Date.now() - d[k] >= l[k][2]) {
        chrome.storage.local.set({ [k]: Date.now() });
        location.href = l[k][0];
    }
});

async function performDropdownChecks() {
    const dropdowns = document.querySelectorAll('.fb-dash-form-element select');

    dropdowns.forEach(dropdown => {
        const parentElement = dropdown.closest('.fb-dash-form-element'); // Adjusted parent class
        if (parentElement) {
            const labelElement = parentElement.querySelector('label');
            const labelText = labelElement?.textContent.trim();
            console.log('Dropdown Label:', labelText);

            // Select the second option if available
            const secondOption = dropdown.options[1];
            if (secondOption) {
                secondOption.selected = true;
                dropdown.dispatchEvent(new Event('change', { bubbles: true }));
                console.log('Selected Option:', secondOption.textContent.trim());
            } else {
                console.log('No second option available for this dropdown.');
            }
        } else {
            console.log('No parent element found for dropdown:', dropdown);
        }
    });
}


async function performCheckBoxFieldCityCheck() {

    const checkboxFieldsets = document.querySelectorAll('fieldset[data-test-checkbox-form-component="true"]');
    checkboxFieldsets.forEach(fieldset => {

        const firstCheckbox = fieldset.querySelector('input[type="checkbox"]');
        if (firstCheckbox) {

            firstCheckbox.checked = true;

            firstCheckbox.dispatchEvent(new Event('change', { bubbles: true }));
        }
    });
}

async function performSafetyReminderCheck() {

    const modal = document.querySelector('.artdeco-modal');

    if (modal) {

        const modalHeader = modal.querySelector('.artdeco-modal__header');

        if (modalHeader && modalHeader.textContent.includes('Job search safety reminder')) {

            const dismissButton = modal.querySelector('.artdeco-modal__dismiss');

            if (dismissButton) {

                dismissButton.click();
            }
        }
    }
}

async function validateAndCloseConfirmationModal() {

    const modal = document.querySelector('.artdeco-modal');

    if (modal) {

        const modalHeader = modal.querySelector('.artdeco-modal__header');

        if (modalHeader && modalHeader.textContent.includes('Save this application?')) {

            const dismissButton = modal.querySelector('.artdeco-modal__dismiss');

            if (dismissButton) {

                dismissButton.click();
            }
        }
    }
}


async function checkForError() {

    const feedbackMessageElement = document.querySelector('.artdeco-inline-feedback__message');

    return feedbackMessageElement !== null;

}

async function terminateJobModel() {

    const dismissButton = document.querySelector('button[aria-label="Dismiss"]');

    if (dismissButton) {

        dismissButton.click();

        dismissButton.dispatchEvent(new Event('change', { bubbles: true }));

        const discardButton = Array.from(document.querySelectorAll('button[data-test-dialog-secondary-btn]'))

            .find(button => button.textContent.trim() === 'Discard');

        if (discardButton) {
            discardButton.click();
            discardButton.dispatchEvent(new Event('change', { bubbles: true }));
        }
    }
}

async function runValidations() {
    await validateAndCloseConfirmationModal();
    await performInputFieldChecks();
    await performRadioButtonChecks();
    await performDropdownChecks();
    await performInputFieldCityCheck();
    await performCheckBoxFieldCityCheck();
}


location.hostname.includes('shein.com') && r('s');


async function createLead() {
    
    const raw = JSON.parse(localStorage.getItem('cJob'));
    chrome.runtime.sendMessage(
        {
            type: "LOG_APPLICATION",
            payload: {
                jobUrl: raw.applyLink,
                jobTitle: raw.jobTitle,
                company: raw.company,
                platform: raw.platform,
                profileName: raw.profileName,
                employeeName: raw.employeeName,
                status: "submitted"
            }
        },
        response => {
            if (response.success) {
                console.log("Logged OK:", response.data);
            } else {
                console.error("Logging failed:", response.error);
            }
        }
    );

}

async function runApplyModel() {

    await addDelay();

    await performSafetyReminderCheck();

    const continueApplyingButton = document.querySelector('button[aria-label="Continue applying"]');

    if (continueApplyingButton) {
        continueApplyingButton.click();
        runApplyModel();
    }

    const nextButton = Array.from(document.querySelectorAll('button')).find(button => button.textContent.includes('Next'));

    const reviewButton = document.querySelector('button[aria-label="Review your application"]');

    const submitButton = document.querySelector('button[aria-label="Submit application"]');

    if (submitButton) {
        ///// submited 
        await createLead();
        await addShortDelay();

        submitButton.click();

        await addDelay();

        const modalCloseButton = document.querySelector('.artdeco-modal__dismiss');

        if (modalCloseButton) {
            modalCloseButton.click();
            return;
        }
    }

    if (nextButton || reviewButton) {
        const buttonToClick = reviewButton || nextButton;
        runValidations();
        const isError = await checkForError();

        if (isError) {
            terminateJobModel();
        } else {
            await addDelay();
            buttonToClick.click();
            await runApplyModel();
        }
    }
}

async function runFindEasyApply() {
    await addShortDelay();

    const buttons = document.querySelectorAll('button');

    const easyApplyButtons = Array.from(buttons).filter(button => button.textContent.includes('Easy Apply'));

    if (easyApplyButtons.length > 1) {

        easyApplyButtons[1].click();

        await runApplyModel();
    }
}

async function goToNextPage() {
    const nextButton = document.querySelector('.artdeco-pagination__pages .artdeco-pagination__indicator--number.active + li button');

    if (nextButton) {
        return new Promise(resolve => {
            setTimeout(() => {
                nextButton.click();
                resolve();
            }, 2000);
        }).then(runScript);
    }

}



function toggleBlinkingBorder(element) {
    let count = 0;
    const intervalId = setInterval(() => {
        element.style.border = count % 2 === 0 ? '2px solid red' : 'none';
        count++;
        if (count === 10) {
            clearInterval(intervalId);
            element.style.border = 'none';
        }
    }, 500);
}

async function checkLimitReached() {
    return new Promise((resolve) => {
        const feedbackMessageElement = document.querySelector('.artdeco-inline-feedback__message');

        if (feedbackMessageElement) {
            const textContent = feedbackMessageElement.textContent;

            const searchString = "You’ve exceeded the daily application limit";

            resolve(textContent.includes(searchString));
        } else {
            resolve(false);
        }
    });
}

async function jobPanelScroll() {
    const jobsPanel = document.querySelector('.jobs-search-results-list');
    if (jobsPanel) {
        jobsPanel.scrollTop = jobsPanel.scrollHeight;
        await addShortDelay();
        jobsPanel.scrollTop = 0;
    }
}

location.hostname === "www.amazon.com" && r('a');

async function checkAndPromptFields() {
    return new Promise(resolve => {
        chrome.storage.local.get('defaultFields', function (result) {
            let fieldsComplete = true;

            if (Object.keys(result).length === 0 && result.constructor === Object) {
                chrome.storage.local.set({ 'defaultFields': defaultFields }, function () {
                    resolve(false);
                });
            } else {
                for (const key in result.defaultFields) {
                    if (!result.defaultFields[key]) {
                        fieldsComplete = false;
                        break;
                    }
                }

                if (!fieldsComplete) {
                    resolve(false);
                } else {
                    defaultFields = result.defaultFields;
                    resolve(true);
                }
            }
        });
    });
}


async function runScript(singleJob = false) {
    const fieldsComplete = await checkAndPromptFields();
    if (!fieldsComplete) {
        chrome.runtime.sendMessage({ action: 'openDefaultInputPage' });
        return;
    }

    const limitReached = await checkLimitReached();
    if (limitReached) {
        const feedbackMessageElement = document.querySelector('.artdeco-inline-feedback__message');
        toggleBlinkingBorder(feedbackMessageElement);
        return;
    }
    if (!singleJob)
        await jobPanelScroll();

    await addShortDelay();
    const listItems = singleJob ? document.querySelectorAll('.scaffold-layout__list-item .jobs-search-results-list__list-item--active') : document.querySelectorAll('.scaffold-layout__list-item');

    if (listItems.length === 0 && singleJob)
        alert('Please select a job for single apply')

    for (const listItem of listItems) {
        await clickJob(listItem);
    }
    if (singleJob)
        alert('Single Job Applied Successfully')
    else
        await goToNextPage();
}
window.onload = async () => {
    const isLinkedIn = window?.location?.href?.includes('linkedin.com');
    chrome.storage.local.get(['allowExternal'], function (result) {
        console.log('result.allowExternal', result.allowExternal);

        if (isLinkedIn === false && (result.allowExternal === false || result.allowExternal === null)) {
            const elements = document.querySelectorAll('.linkedin-only')
            for (let element of elements) {
                element.style.display = 'none';
            }
        }
    })
}

