
// if (isLinkedIn()) {
    initElements();
    initStorage();
    // } else {
    //     console.log("You are not on LinkedIn.");
    // }
    const CV = `Highly skilled Senior Full-Stack Engineer with 9+ years of experience in designing, developing, and deploying highperformance web and mobile applications. Extensive expertise in both React and React Native, with a strong ability to
    deliver cross-platform mobile applications and scalable web solutions. Proven track record in delivering user-centric
    solutions using modern technologies like React, Node.js, Laravel, and React Native. Experienced in leading crossfunctional teams, optimizing system performance, and driving business outcomes through technical innovation.
    Passionate about mentoring junior developers, leveraging emerging technologies, and continuously improving
    development processes.
    Lime Software Logics
    Senior Full Stack Engineer
    Led Full SaaS Platform Overhaul: Spearheaded the development of a comprehensive SaaS platform, driving a 40%
    increase in user engagement and 35% improvement in retention by introducing intuitive features and optimizing
    UI/UX.
    Performance Optimization: Reduced server response times by 40% and enhanced platform scalability by refactoring
    core infrastructure, supporting growth to 10,000+ active users.
    React Native Mobile Development: Led the development of a cross-platform mobile app using React Native,
    reducing time-to-market by 30% while maintaining a native-like experience for iOS and Android users.
    API Architecture & Integration: Architected robust RESTful APIs, enabling seamless integration with third-party
    services and ensuring smooth data exchanges, enhancing system interoperability.
    Collaborative Leadership: Led cross-functional teams in delivering high-impact features ahead of schedule,
    improving project delivery efficiency by 25% and meeting client requirements with a focus on business growth.
    Cloud and Infrastructure Optimization: Spearheaded the migration to a more efficient cloud infrastructure (AWS),
    reducing operational costs by 30% and improving system uptime.
    Sep 2022 – Present
    FULL STACK ENGINEER
    0344-0259952 | haris.khan802@yahoo.com | GitHub[https://github.com/hariskhan802] | LinkedIn[https://www.linkedin.com/in/muhammadharis802/] | Portfolio[https://haris-portfolio-five.vercel.app/]
    MUHAMMAD HARIS
    PROFESSIONAL EXPERIENCE
    Right Solutions
    Senior Full Stack Engineer
    E-Commerce Platform Transformation: Overhauled a legacy e-commerce platform by integrating cutting-edge
    technologies, which resulted in a 35% increase in sales and significantly enhanced user experience with optimized UI
    components.
    Security & Compliance Enhancements: Led the implementation of advanced security protocols (SSL/TLS, OAuth,
    GDPR), ensuring 100% compliance with international standards and securing customer data across platforms.
    Data Analytics & Reporting Platform: Designed and developed a real-time data analytics dashboard, delivering
    actionable business insights and enabling leadership to make informed decisions, improving operational
    performance.
    React Native for E-Commerce App: Developed and deployed a React Native e-commerce app that streamlined
    mobile user experiences, contributing to a 20% increase in mobile app downloads and improving sales via mobile
    platforms.
    Cloud Migration Leadership: Managed the transition of the e-commerce platform to AWS, reducing hosting costs by
    20% and improving platform reliability through automation and optimized architecture.
    2019 – 2022
    Kingdom Vision
    Senior Full Stack Engineer
    B2B Application Enhancements: Revamped a B2B application by incorporating real-time data analytics and a
    scalable architecture, leading to a 25% improvement in client satisfaction and a 20% increase in business efficiency.
    React Native for Client-Facing App: Developed a React Native mobile app for clients that enhanced user interaction
    with key services, reducing customer service response times by 40%.
    Communication System Integration: Integrated Twilio API to streamline customer support systems, reducing
    response time by 50% and increasing resolution rates.
    Consulting & Process Optimization: Provided consultancy on architecture and development best practices,
    significantly improving team efficiency and cutting down development time by 15% for new feature rollouts.
    2017 – 2019
    TECHNICAL SKILLS
    Languages: JavaScript, TypeScript, PHP, SQL
    Frontend: React, React Native, Angular, Vue.js, HTML5, CSS3, Bootstrap, Tailwind
    Backend: Node.js, Laravel, Express.js, GraphQL, RESTful APIs
    DevOps & CI/CD: Docker, Jenkins, Git, Kubernetes, AWS, Azure
    Databases: MySQL, MongoDB, PostgreSQL, Redis
    Cloud Platforms: AWS, Google Cloud Platform, Azure
    Tools & Technologies: Webpack, Redux, Twilio, Stripe, OAuth, Jenkins, SOAP, GraphQL
    Poly Web Tech
    Senior Full Stack Engineer
    CMS & E-Commerce Solutions: Developed custom content management and e-commerce systems, boosting online
    sales by 15% and enhancing the content management process for clients.
    API Integration & Optimization: Integrated third-party APIs, enabling enhanced payment and shipping functionality,
    thus improving customer satisfaction and reducing operational overhead.
    2015 – 2017
    KEY ACCOMPLISHMENTS & PROJECTS
    SaaS Platform Development at Lime Software Logics: Reduced latency by 40% and improved user retention by
    introducing predictive analytics and enhancing UX/UI design.
    Mobile App Development with React Native at Right Solutions: Developed a cross-platform React Native mobile
    app for e-commerce that boosted mobile sales by 25%.
    Security & Data Protection at Right Solutions: Enhanced security measures to meet GDPR and SOC 2 compliance,
    protecting over 5 million customer records.
    Cloud Transition Leadership: Successfully led cloud migrations for two enterprise clients, reducing infrastructure
    costs by 20-30% and improving platform scalability and uptime.
    SOFT SKILLS & LEADERSHIP
    Excellent leadership skills with the ability to mentor and guide junior developers
    Strong problem-solving mindset and the ability to deliver high-quality software under tight deadlines
    Effective communicator, able to convey complex technical concepts to non-technical stakeholders
    Focused on continuous learning and staying up-to-date with industry trends
    EDUCATION
    Bachelor’s in Computer Science Virtual University of Pakistan | In Progress`
    function initStorage() {
    
        chrome.runtime.sendMessage({ action: 'initStorage' });
    }
    
    function initElements() {
    
        const popupDiv = createPopupDiv();
    
        const toggleButton = createToggleButton();
    
        const applyButton = createApplyButton();
        const autoFillButton1 = createAutoFill1()
        const autoFillButton2 = createAutoFill2()
        const aiApply = createAiApply()
        const singleApplyButton = createSingleApplyButton()
        const helpButton = createHelpButton();
    
    
        toggleButton.addEventListener('click', () => {
            togglePopupHeight(popupDiv, toggleButton, applyButton, helpButton, autoFillButton1, autoFillButton2, aiApply, singleApplyButton);
        });

        async function runAutoApplyScript (singleJob = false) {
            runningScript = true;
    
            const currentUrl = window.location.href.includes("www.linkedin.com/jobs/search")
    
            if (!currentUrl) {
                createNotOnJobSearchAlert()
            }
            else {
    
                await runScript(singleJob);
            }
        }
    
        applyButton.addEventListener('click', async () => {
            await runAutoApplyScript()
        });
        
        singleApplyButton.addEventListener('click', async () => {
            await runAutoApplyScript(true)
        });
    
    
        function extractKeywords(text) {
            // Convert to lowercase, remove non-alphabetic characters, split into words
            return text
                .toLowerCase()
                .replace(/[^a-z\s]/g, '') // Remove punctuation
                .split(/\s+/) // Split by spaces
                .filter((word) => word.length > 2); // Ignore very short words
        }
    
        function matchFields(label, storedData) {
            const labelKeywords = extractKeywords(label);
            const storedKeywords = extractKeywords(storedData);
    
            // Check for any overlap between the two sets of keywords
            return storedKeywords.some((keyword) => labelKeywords.includes(keyword));
        }
    
        function reactSetValue(element, value) {
            // if (!element || element.value === value) {
            //     return; // Skip if the element is null or already has the desired value
            // }
    
            // Get the native input setter
            const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
                Object.getPrototypeOf(element),
                'value'
            ).set;
    
            if (!nativeInputValueSetter) {
                console.error('Native input setter not found');
                return;
            }
    
            // Use the setter to update the value
            nativeInputValueSetter.call(element, value);
    
            // Dispatch the input event to notify React of the change
            const event = new Event('input', { bubbles: true });
            element.dispatchEvent(event);
        }
    
        function findLabelOrFallback(element) {
            let label = '';
            let currentElement = $(element);
    
            // Dynamically traverse up the DOM tree to search for a label
            while (currentElement.length > 0 && label.length === 0) {
                label = currentElement.closest('div').find('label').text().replace(/[{}\n*]/g, '').trim();
                currentElement = currentElement.parent(); // Move to the parent element
            }
    
            // If no label is found, use a fallback
            if (!label) {
                label = $(element).attr('placeholder') || $(element).attr('aria-label') || 'No Label Found';
            }
    
            return label;
        }
    
        autoFillButton1.addEventListener('click', async () => {
    
            let data = await chrome.storage.local.get(null);
            let fields = [
                ...data.inputFieldConfigs,
                ...Object.keys(data.defaultFields).map((key) => ({
                    count: 1,
                    defaultValue: data.defaultFields[key],
                    placeholderIncludes: key,
                })),
            ];
            $(':input').each(function () {
                const name = $(this).attr('name')
                const id = $(this).attr('id')
                const placeholder = $(this).attr('placeholder')
                if ($(this).val() === '' && $(this).attr('type') !== 'file' && $(this).attr('type') !== 'button' && $(this).attr('type') !== 'submit' && $(this).attr('type') !== 'hidden') {
    
                    $(this).attr('af-name', name?.toLowerCase())
                    $(this).attr('af-id', id?.toLowerCase())
                    $(this).attr('af-placeholder', placeholder?.toLowerCase())
                }
            })
            for (let field of fields) {
                let word = field?.placeholderIncludes
                let cleanWord = word.replace(/[^a-zA-Z ]/g, "")
                let selector = $(`[af-name*="${cleanWord?.toLowerCase()}"], [af-id*="${cleanWord?.toLowerCase()}"], [af-placeholder*="${cleanWord?.toLowerCase()}"]`)
                if (selector.length > 0 && selector.val() === '' && selector.attr('type') !== 'file' && selector.attr('type') !== 'button' && selector.attr('type') !== 'submit' && selector.attr('type') !== 'hidden') {
                    selector.val(field.defaultValue)
                    reactSetValue(selector[0], field.defaultValue);
                }
    
                // for(let word of words) {
                //     let cleanWord = word.replace(/[^a-zA-Z ]/g, "")
                //     // console.log({cleanWord});
                //     let selector = $(`[af-name*="${cleanWord?.toLowerCase()}"], [af-id*="${cleanWord?.toLowerCase()}"], [af-placeholder*="${cleanWord?.toLowerCase()}"]`)
                //     // console.log({'selector.length': selector.length});
    
                //     if(selector.length > 0 && selector.val() === '' && selector.attr('type') !== 'file' && selector.attr('type') !== 'button' && selector.attr('type') !== 'submit' && selector.attr('type') !== 'hidden') {
                //         // console.log({selector});
                //         // console.log('test123', selector.attr('type'));
                //         console.log(field?.placeholderIncludes);
    
                //         selector.val(field.defaultValue)
                //     }
                // }
    
            }
            await setLeadData('Company Website');
            await createLead();
        });
    
        autoFillButton2.addEventListener('click', async () => {
            let data = await chrome.storage.local.get(null);
            $(':input').each(function () {
                if (['button', 'file', 'submit'].includes($(this).attr('type')) === false) {
                    // console.log('this', this);
    
                    var inputId = $(this).attr('id');
                    var label = $('label[for="' + inputId + '"]').text().replace(/[{}\n*]/g, '').trim();
    
                    if (label.length === 0) {
                        label = $(this).closest('div').find('label').text().replace(/[{}\n*]/g, '').trim();
                        if (!label) {
                            label = $(this).closest('div').closest('div').find('label').text().replace(/[{}\n*]/g, '').trim();
                            if (!label) {
                                label = $(this).closest('div').closest('div').closest('div').find('label').text().replace(/[{}\n*]/g, '').trim();
                                if (!label) {
                                    label = $(this).closest('div').closest('div').closest('div').closest('div').find('label').text().replace(/[{}\n*]/g, '').trim();
                                    if (!label) {
                                        label = $(this).closest('div').closest('div').closest('div').closest('div').closest('div').find('label').text().replace(/[{}\n*]/g, '').trim();
                                        if (!label) {
                                            label = $(this).closest('div').closest('div').closest('div').closest('div').closest('div').closest('div').find('label').text().replace(/[{}\n*]/g, '').trim();
                                        }
                                    }
                                }
                            }
                        }
                    }
    
                    // let label = $('label[for="' + inputId + '"]').text().replace(/[{}\n*]/g, '').trim();
    
                    // Use dynamic search for labels if 'for' attribute doesn't resolve the label
                    // if (label.length === 0) {
                    //     label = findLabelOrFallback(this);
                    // }
                    console.log('label', label);
    
                    let fields = [
                        ...data.inputFieldConfigs,
                        ...Object.keys(data.defaultFields).map((key) => ({
                            count: 1,
                            defaultValue: data.defaultFields[key],
                            placeholderIncludes: key,
                        })),
                    ];
    
                    console.log('Processing field:', { label, inputId });
    
                    for (field of fields) {
                        // if (label.length !== 0 && field.placeholderIncludes.includes(label) === true) {
                        //     reactSetValue(this, field.defaultValue);
                        //     break;
                        // }
                        if (matchFields(label, field.placeholderIncludes)) {
                            // console.log(this, field.defaultValue);
                            $(this).val(field.defaultValue);
                            reactSetValue(this, field.defaultValue); // Use React-compatible value setter
                            break;
                        }
                    }
    
                }
    
            });
            await setLeadData('Company Website');
            await createLead();
        })
    
        aiApply.addEventListener('click', async (e) => {
            e.target.textContent = 'Please wait'
            // console.log( );
            
            this.value = 'Please wait'
            let formData = []
            console.log('asass',  $(":input"));
            
            $(":input").each(function () {
                if ($(this).attr('type') === 'file' || $(this).attr('type') === 'button' || $(this).attr('type') === 'submit' || $(this).attr('type') === 'hidden') {
                    console.log('asasas');
    
                    return
                }
                let inputId = $(this).attr('id')
                let label = $('label[for="' + inputId + '"]').text().replace(/[{}\n*]/g, '').trim();
    
                if (label.length === 0) {
                    label = $(this).closest('div').find('label').text().replace(/[{}\n*]/g, '').trim() || $(this).closest('div').text().replace(/[{}\n*]/g, '').trim();
                    if (!label) {
                        label = $(this).closest('div').closest('div').find('label').text().replace(/[{}\n*]/g, '').trim() || $(this).closest('div').closest('div').text().replace(/[{}\n*]/g, '').trim();
                        if (!label) {
                            label = $(this).closest('div').closest('div').closest('div').find('label').text().replace(/[{}\n*]/g, '').trim() || $(this).closest('div').closest('div').closest('div').text().replace(/[{}\n*]/g, '').trim()
                            if (!label) {
                                label = $(this).closest('div').closest('div').closest('div').closest('div').find('label').text().replace(/[{}\n*]/g, '').trim() || $(this).closest('div').closest('div').closest('div').closest('div').find('label').text().replace(/[{}\n*]/g, '').trim()
                                if (!label) {
                                    label = $(this).closest('div').closest('div').closest('div').closest('div').closest('div').find('label').text().replace(/[{}\n*]/g, '').trim() || $(this).closest('div').closest('div').closest('div').closest('div').closest('div').text().replace(/[{}\n*]/g, '').trim();
                                    if (!label) {
                                        label = $(this).closest('div').closest('div').closest('div').closest('div').closest('div').closest('div').find('label').text().replace(/[{}\n*]/g, '').trim() || $(this).closest('div').closest('div').closest('div').closest('div').closest('div').closest('div').text().replace(/[{}\n*]/g, '').trim();
                                    }
                                }
                            }
                        }
                    }
                }
                
                if (label && ($(this).attr('name') || $(this).attr('type')))
                    formData.push({ label, name: $(this).attr('name'), type: $(this).attr('type') || 'text' })
            })
    
            // console.log({formData});
            const apiKey = "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";
    
            // const apiEndpoint = 'https://api.openai.com/v1/chat/completions'; // ChatGPT endpoint
    
            async function generateFormAnswers(formFields, cvContent) {
                // Build a prompt to send to ChatGPT API
                console.log(formFields);
                
                const prompt = `
            Given the following CV content: 
            "${cvContent}", 
            
            and the following form structure: 
            ${JSON.stringify(formFields)},
            
            find appropriate answers for each field based on the CV content. If a field is not explicitly answered in the CV, generate a reasonable response based on the field label. The response must map to the field "name" attribute. Ensure no field is left unanswered.
            
            The output should be in JSON format where each key is the field's "name", and the value is the response to that field.
            Please give the only respone in json format, so that I am unable parse and map into my form field
            don't give me this type of response "Not Provided", "Unknown", "Not mentioned in CV", Please try write reasonable answer, your answer might be wrong, but it should not look like that is AI generated
            Please ansser the according to type it is text or number
                Current Salary 3000 USD
                Expected Salary 3500 USD
                Address : House 208 Zamanabad Society Karachi Pakistan 41256
                `;
    
                // Use ChatGPT API to process the request
                const response = await fetch("https://api.openai.com/v1/chat/completions", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${apiKey}`, // Replace with your OpenAI API key
                    },
                    body: JSON.stringify({
                        model: "gpt-4",
                        messages: [
                            { role: "system", content: "You are an assistant who provides intelligent, human-like answers based on form fields and CV data." },
                            { role: "user", content: prompt }
                        ]
                    })
                });
    
                const data = await response.json();
    
                // Parse the output
                if (data.choices && data.choices.length > 0) {
                    // return JSON.parse(data.choices[0].message.content);
                    
                        // console.log('ChatGPT Response:', result.choices[0].message.content);
                    const responses = JSON.parse(data.choices[0].message.content);
                    // console.log({responses});
                    
                    for (const [key, value] of Object.entries(responses)) {
                        // console.log({key, value});
                        
                        const field = document.querySelector(`[name="${key}"]`);
                        // if (field) {
                        //     field.value = value || "";
                        // }
                        $(`[name="${key}"]`).trigger('focus').val(value).trigger('change').trigger('keypress')
                        field &&
                        reactSetValue(field, value)
                    }
                    e.target.textContent = 'AI Auto Fill'
                    
                } else {
                    e.target.textContent = 'AI Auto Fill'
                    throw new Error("No response received from ChatGPT API");
                }
            }
    
    
            generateFormAnswers(formData, CV)
            await setLeadData('Company Website');
            await createLead();
        })
        // Append elements to the document
        document.body.appendChild(popupDiv);
        popupDiv.appendChild(toggleButton);
        popupDiv.appendChild(applyButton);
        popupDiv.appendChild(singleApplyButton);
        popupDiv.appendChild(helpButton);
        popupDiv.appendChild(autoFillButton1);
        popupDiv.appendChild(autoFillButton2);
        popupDiv.appendChild(aiApply);
    }
    
    function createNotOnJobSearchAlert() {
        const overlay = document.createElement('div');
        overlay.id = 'customAlertOverlay';
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
        `;
    
        const modal = document.createElement('div');
        modal.id = 'customAlertModal';
        modal.style.cssText = `
            background-color: #fff;
            padding: 20px;
            border-radius: 10px;
            text-align: center;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        `;
    
        const title = document.createElement('h3');
        title.innerHTML = `<b>Please Go to jobs search page</b>`;
        title.style.marginBottom = '10px';
    
        const message = document.createElement('p');
        const jobSearchButtonContainer = document.createElement('div');
        jobSearchButtonContainer.style.marginTop = '15px';
    
        const jobSearchButton = document.createElement('button');
        jobSearchButton.innerHTML = `
            <i class="fas fa-search"></i> <b>Click here to Go To Job Search</b>
        `;
        jobSearchButton.style.cssText = `
            background-color: #2196F3;
            color: white;
            padding: 10px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        `;
        jobSearchButton.onclick = () => window.location.href = 'https://www.linkedin.com/jobs/search';
    
        jobSearchButtonContainer.appendChild(jobSearchButton);
        message.appendChild(jobSearchButtonContainer);
    
        const buttonsContainer = document.createElement('div');
        buttonsContainer.style.display = 'flex';
        buttonsContainer.style.justifyContent = 'center';
        buttonsContainer.style.marginTop = '15px';
    
        const okButtonContainer = document.createElement('div');
        const okButton = document.createElement('button');
        okButton.textContent = 'Close';
        okButton.style.cssText = `
            margin-right: 5px;
            padding: 10px;
            background-color: red;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        `;
        okButton.onclick = closeCustomAlert;
    
        okButtonContainer.appendChild(okButton);
    
        buttonsContainer.appendChild(okButtonContainer);
    
        const helpButtonContainer = document.createElement('div');
        const helpButton = document.createElement('button');
        helpButton.textContent = 'Help';
        helpButton.style.cssText = `
            margin-left: 10px;
            padding: 10px;
            background-color: #FFA500;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        `;
    
    
        // helpButton.onclick = () => window.open('', '_blank');
    
        // helpButtonContainer.appendChild(helpButton);
        // buttonsContainer.appendChild(helpButtonContainer);
    
        modal.appendChild(title);
    
        modal.appendChild(message);
    
        modal.appendChild(buttonsContainer);
    
        overlay.appendChild(modal);
    
        document.body.appendChild(overlay);
    }
    
    function closeCustomAlert() {
        const overlay = document.getElementById('customAlertOverlay');
        if (overlay) {
    
            overlay.remove();
        }
    }
    
    // Function to create the popup div
    function createPopupDiv() {
        const popupDiv = document.createElement('div');
        popupDiv.style.cssText = `
            position: fixed;
            top: 50%;
            right: 10px;
            transform: translate(0, -50%);
            color: #fff;
            padding: 20px;
            border-radius: 5px;
            z-index: 99999999999;
            height: auto;
            max-height: 200px;
            transition: all 0.3s;
            display: flex;
            flex-direction: column;
        `;
        return popupDiv;
    }
    
    // Function to create the "Run Auto Apply" button
    function createSingleApplyButton() {
        const applyButton = document.createElement('button');
        applyButton.textContent = 'Single Auto Apply';
        applyButton.style.cssText = `
            margin-right: 5px;
            background-color: #fff;
            color: #0077B5.;
            padding: 10px;
            border: 1px solid #FFFFFF;
            border-radius: 5px;
            cursor: pointer;
            margin-top: 10px;
            font-weight: bold;
            border: solid;
            color: #000 !important;
        `;
        applyButton.classList.add('linkedin-only')
        return applyButton;
    }
    
    function createApplyButton() {
        const applyButton = document.createElement('button');
        applyButton.textContent = 'Multi Auto Apply';
        applyButton.style.cssText = `
            margin-right: 5px;
            background-color: #fff;
            color: #0077B5.;
            padding: 10px;
            border: 1px solid #FFFFFF;
            border-radius: 5px;
            cursor: pointer;
            margin-top: 10px;
            font-weight: bold;
            border: solid;
            color: #000 !important;
        `;
        applyButton.classList.add('linkedin-only')
        return applyButton;
    }

    function createAutoFill1() {
        const applyButton = document.createElement('button');
        applyButton.textContent = 'Auto Fill 1';
        applyButton.style.cssText = `
            margin-right: 5px;
            background-color: #fff;
            color: #0077B5.;
            padding: 10px;
            border: 1px solid #FFFFFF;
            border-radius: 5px;
            cursor: pointer;
            margin-top: 10px;
            font-weight: bold;
            border: solid;
            color: #000 !important;
        `;
        applyButton.classList.add('linkedin-only')
        return applyButton;
    }
    
    function createAutoFill2() {
        const applyButton = document.createElement('button');
        applyButton.textContent = 'Auto Fill 2';
        applyButton.style.cssText = `
            margin-right: 5px;
            background-color: #fff;
            color: #0077B5.;
            padding: 10px;
            border: 1px solid #FFFFFF;
            border-radius: 5px;
            cursor: pointer;
            margin-top: 10px;
            font-weight: bold;
            border: solid;
            color: #000 !important;
        `;
        applyButton.classList.add('linkedin-only')
        return applyButton;
    }
    
    function createAiApply() {
        const applyButton = document.createElement('button');
        applyButton.textContent = 'AI Auto Fill';
        applyButton.style.cssText = `
            margin-right: 5px;
            background-color: #fff;
            color: #0077B5.;
            padding: 10px;
            border: 1px solid #FFFFFF;
            border-radius: 5px;
            cursor: pointer;
            margin-top: 10px;
            font-weight: bold;
            border: solid;
            color: #000 !important;
        `;
        applyButton.classList.add('linkedin-only')
        return applyButton;
    }
    
    // Function to create the toggle button
    function createToggleButton() {
        const toggleButton = document.createElement('button');
        toggleButton.textContent = '▼';
        toggleButton.style.cssText = `
            background-color: rgb(255, 255, 255);
            padding: 0px;
            border-radius: 5px;
            cursor: pointer;
            margin-right: 5px;
            margin-bottom: 10px;
            color: red;
            border: 4px solid #9d1b1b;
            
        `;
        toggleButton.classList.add('linkedin-only')
        return toggleButton;
    }
    
    // Function to create the help button
    function createHelpButton() {
        const helpButton = document.createElement('button');
        helpButton.textContent = '?';
        helpButton.style.cssText = `
            background-color: #fff;
            color: #ff0000;
            padding: 5px;
            border: 1px solid #ff0000;
            border-radius: 5px;
            cursor: pointer;
            margin-top: 10px;
            display: none;
        `;
        return helpButton;
    }
    
    
    
    
    
    function togglePopupHeight(popupDiv, toggleButton, applyButton, helpButton, autoFillButton1, autoFillButton2, aiApply, singleApplyButton) {
        if (popupDiv.style.height === 'auto' || popupDiv.style.height === '') {
            popupDiv.style.height = '50px';
            toggleButton.textContent = '▲';
            applyButton.style.display = 'none';
            helpButton.style.display = 'none';
            autoFillButton1.style.display = 'none';
            autoFillButton2.style.display = 'none';
            aiApply.style.display = 'none';
            singleApplyButton.style.display = 'none';
    
        } else {
            popupDiv.style.height = 'auto';
            toggleButton.textContent = '▼';
            applyButton.style.display = 'inline-block';
            helpButton.style.display = 'inline-block';
            autoFillButton1.style.display = 'inline-block';
            autoFillButton2.style.display = 'inline-block';
            aiApply.style.display = 'inline-block';
            singleApplyButton.style.display = 'inline-block';
                
        }
    }