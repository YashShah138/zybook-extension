// This program is meant to be pasted into the console in the F12 menu of any zybooks page. It will automate the following tasks:
    // - Multiple choice radio buttons
    // - 2x speed checkboxes
    // - Animation start buttons
    // - Animation play buttons
    // - Text entry activities (answers revealed, but not entered for you sadly)
    // - Matching activities (This is difficult and I haven't gotten it working)


    // CLICK ALL RADIO BUTTONS
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    let index = 0;

    function clickNextButton() {
        if (index < radioButtons.length) {
            radioButtons[index].click();
            index++;
            setTimeout(clickNextButton, 50); // adjust delay as needed
        }
    }
    clickNextButton();


    // CLICK ALL 2X SPEED BOXES
    const x2Buttons = document.querySelectorAll('input[type="checkbox"]');
    let index2 = 0;
    function clickNextBox() {
        if (index2 < x2Buttons.length) {
            x2Buttons[index2].click();
            index2++;
            setTimeout(clickNextBox, 50); // adjust delay as needed
        }
    }
    clickNextBox();


    // CLICK ALL START BUTTONS
    const startButtons = document.querySelectorAll('button[class="zb-button primary raised            start-button start-graphic"]');
    let index3 = 0;
    function clickNextStartButton() {
        if (index3 < startButtons.length) {
            startButtons[index3].click();
            index3++;
            setTimeout(clickNextStartButton, 50); // adjust delay as needed
        }
    }
    clickNextStartButton();


    // CLICK ALL PLAY BUTTONS
    function clickNextPlayButton() {
        let playButtons = document.querySelectorAll('div[class="play-button  bounce"]');
        // let playButtons = document.querySelectorAll('button[class="zb-button  grey              normalize-controls"]');
        setTimeout(clickNextPlayButton, 50); // adjust delay as needed
        let index4 = 0;
        if (index4 < playButtons.length) {
            playButtons[index4].click();
            index4++;
        }
        // let pauseButtons = document.querySelectorAll('button[class="pause-button  bounce"]');
        // if (pauseButtons.length != 0) {
        //     clickNextPlayButton;
        // }
    }
    clickNextPlayButton();


    // CLICK ALL SHOW ANSWER BUTTONS
    let index5 = 0;
    function clickNextShowAnswerButton() {
        setTimeout(clickNextShowAnswerButton, 50);
        let showAnswerButtons = document.querySelectorAll('button[class="zb-button secondary             show-answer-button"]');
        if (index5 < showAnswerButtons.length) {
            showAnswerButtons[index5].click();
            setTimeout(() => showAnswerButtons[index5].click(), 50); // adjust delay as needed
            index5++;
        }
    }
    clickNextShowAnswerButton();


    let index6 = 0;
    function pasteAnswers() {
        // Select all answer elements
        let answers = document.querySelectorAll('span.forfeit-answer ');
    
        // Select all textareas
        let textboxes = document.querySelectorAll("textarea");
    
        // Select all check buttons
        let checkAnswers = document.querySelectorAll('button.zb-button primary raised            check-button');
    
        // Ensure we process all elements correctly
        for (let i = 0; i < answers.length && i < textboxes.length; i++) {
            // Extract and clean the text from the answer span
            const answerText = answers[i].textContent.trim();
    
            // Set the answer into the corresponding textarea
            textboxes[i].value = answerText;
    
            // Dispatch an 'input' event to simulate human typing
            let event = new Event('input', { bubbles: true });
            textboxes[i].dispatchEvent(event);
    
            // Click the corresponding "Check" button if available
            if (i < checkAnswers.length) {
                setTimeout(() => {
                    checkAnswers[i].click();
                }, 200); // Small delay to allow text entry to register
            }
        }
    }
    
    // Run the function after a slight delay to allow elements to load
    setTimeout(pasteAnswers, 500);
    
    console.log("Injected!");
