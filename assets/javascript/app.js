// TRIVIA ANSERS SOURCE: https://www.history.com/topics/black-panthers

$(document).ready( function(){

    // declaring function for 30-second timer
    var index = 0;
    var countdownTimer = {
        time: 30,
        
        // for every new round, reset the timer to 30 seconds
        reset: function() {
            this.time = 30;
            $('.timer').html('<h3>' + this.time + ' seconds remaining!</h3>');
        },

        // start the game after 1 second
        start: function() {
            counter = setInterval(countdownTimer.count, 1000);
        },

        // when the game stops, stop the timer - it should never go below 0 seconds
        stop: function() {
            clearInterval(counter);
        },
        
        // declaring count function and printing the countdown in a new timer div to the page and displaying seconds remaining
        count: function() {
            countdownTimer.time--;
            console.log(countdownTimer.time);
            if (countdownTimer.time >= 0) {
                $('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining!</h3>')
            }
            
            // when timer expires, reset it and load a new question
            else {
                answerWrong();
                index++;
                countdownTimer.reset();
                if (index < questionArray.length) {
                    loadQuestion(index);
                }

                // if no questions remain after the timer has expired, end the game and display the score
                else {
                    $('.chosenAnswer').hide();
                    showScore();
                }
            }
        }
    };

    // declaring variables for # correct and # wrong and setting them to 0 at start of game
    var correct = 0;
    var wrong = 0;

    // declaring 26 questions and their data as variables
    var q1 = {
        question: 'What year was the Black Panther Party founded?',
        choices: ['1965','1966','1967','1968'],
        flags: [false, true, false, false],
        answer: '1966'
    };
    var q2 = {
        question: 'In what city was the Black Panther Party established?',
        choices: ['Los Angeles', 'San Francisco', 'Oakland', 'San Diego'],
        flags: [false, false, true, false],
        answer: 'Oakland'
    }
    var q3 = {
        question: 'What was the core mission of the Black Panther Party?',
        choices: ['defend against police brutality', 'elect more African Americans', 'compete with the Nation of Islam', 'frame police officers'],
        flags: [true, false, false, false],
        answer: 'defend against police brutality'
    }
    var q4 = {
        question: 'At its peak, how many members did the Black Panther Party have?',
        choices: ['1,500', '3,000', '2,000', '2,500'],
        flags: [false, false, true, false],
        answer: '2,000'
    }
    var q5 = {
        question: 'What does COINTELPRO stand for?',
        choices: ['Co-Intelligence Telephone Program', 'Counterintelligence Program', 'Counterintelligence Telephone Program', 'Co-Intelligence Program'],
        flags: [false, true, false, true],
        answer: 'Counterintelligence Program'
    }
    var q6 = {
        question: 'What federal organization used COINTELPRO against the Black Panther Party?',
        choices: ['CIA', 'ATF', 'NSA', 'FBI'],
        flags: [false, false, false, true],
        answer: 'FBI'
    }
    var q7 = {
        question: 'Who founded the Black Panther Party?',
        choices: ['Huey & Riley Freeman', 'Huey Newton & Bobby Seale', 'Huey Newton & Barry Seal ', 'Huey Newton & Bobby Brown'],
        flags: [false, true, false, false],
        answer: 'Huey Newton & Bobby Seale'
    }
    var q8 = {
        question: 'When did the founders of the Black Panther Party meet?',
        choices: ['1961', '1960', '1962', '1959'],
        flags: [true, false, false, false],
        answer: '1961'
    }
    var q9 = {
        question: 'Where did the founders of the Black Panther Party meet?',
        choices: ['Mills College', 'College of Alameda', 'Merritt College', 'Berkeley City College'],
        flags: [false, false, true, false],
        answer: 'Merritt College'
    }
    var q10 = {
        question: 'What group did the founders form before the Black Panther Party?',
        choices: ['United Negro College Fund', 'Negro History Fact Group', 'Free Negro Food Program', 'Free Negro Health Clinic'],
        flags: [false, true, false, false],
        answer: 'Negro History Fact Group'
    }
    var q11 = {
        question: 'Which assassination contributed to the founding of the Black Panther Party?',
        choices: ['John F. Kennedy', 'Dr. Martin Luther King, Jr.', 'Robert Kennedy', 'Malcolm X.'],
        flags: [false, false, false, true],
        answer: 'Malcolm X.'
    }
    var q12 = {
        question: "Who was the unarmed Black teen killed by police before the Black Panther Party's founding?",
        choices: ['Mark Jones', 'Matt Jackson', 'Matthew Johnson', 'Max Jacobs'],
        flags: [false, false, true, false],
        answer: 'Matthew Johnson'
    }
    var q13 = {
        question: 'Which police department was responsible for the death of the unarmed Black teen?',
        choices: ['San Francisco PD', 'Oakland PD', 'Los Angeles PD', 'San Diego PD'],
        flags: [true, false, false, false],
        answer: 'San Francisco PD'
    }
    var q14 = {
        question: 'What was the original name of the Black Panther Party?',
        choices: ['Black Panther Party for Black Power', 'Black Panther Party for Civil Rights', 'Black Panther Party for Self-Defense', 'Black Panther Party for Equal Justice'],
        flags: [false, false, true, false],
        answer: 'Black Panther Party for Self-Defense'
    }
    var q15 = {
        question: "Which was the Black Panther Party's furthest urban center?",
        choices: ['Los Angeles', 'Chicago', 'Philadelphia', 'New York'],
        flags: [false, false, false, true],
        answer: 'New York'
    }
    var q16 = {
        question: "How many points did the Black Panther Party's social programs follow?",
        choices: ['10 Points', '5 Points', '3 Points', '7 Points'],
        flags: [true, false, false, false],
        answer: '10 Points'
    }
    var q17 = {
        question: 'What kind of ideology did the Black Panther Party follow?',
        choices: ['Communist', 'Marxist', 'Capitalist', 'Anarchist'],
        flags: [false, true, false, false],
        answer: 'Marxist'
    }
    var q18 = {
        question: 'What kind of free services did the Black Panthers run for children?',
        choices: ['free breakfast', 'free mentoring', 'free weapons training', 'free books'],
        flags: [true, false, false, false],
        answer: 'free breakfast'
    }
    var q19 = {
        question: 'What kind of free services did the Black Panthers run for the community?',
        choices: ['free library', 'free clothing drive', 'free jobs training', 'free health clinics'],
        flags: [false, false, false, true],
        answer: 'free health clinics'
    }
    var q20 = {
        question: 'How many free health clinics did the Black Panthers operate?',
        choices: ['ten', 'eleven', 'twelve', 'thirteen'],
        flags: [false, false, false, true],
        answer: 'thirteen'
    }
    var q21 = {
        question: 'When did the FBI declare the Black Panther Party an emeny of the US Government?',
        choices: ['1966', '1969', '1968', '1970'],
        flags: [false, true, false, false],
        answer: '1969'
    }
    var q22 = {
        question: "Who called the Black Panther Party 'one of the greatest threats to nation's internal security'?",
        choices: ['J. Edgar Hoover', 'Harry S. Truman', 'Byron Todd Jones', 'Rex D. Davis'],
        flags: [true, false, false, false],
        answer: 'J. Edgar Hoover'
    }
    var q23 = {
        question: 'Who shot and killed Black Panther Party members as they slept?',
        choices: ['rogue FBI agents', 'jealous BPP members', 'trained assassins', 'Chicago Police'],
        flags: [false, false, false, true],
        answer: 'Chicago Police'
    }
    var q24 = {
        question: 'Who were the Black Panther Party members shot and killed as they slept?',
        choices: ['Fred Hampton & Bobby Seale', 'Fred Hampton & Eldridge Cleaver', 'Fred Hampton & Mark Clark', 'Fred Hampton & Stokely Carmichael'],
        flags: [false, false, true, false],
        answer: 'Fred Hampton & Mark Clark'
    }
    var q25 = {
        question: "Black Panthers fired how many of the 100 bullets in this 'fierce gun battle' with police?",
        choices: ['none', 'about half', 'just one', 'all 100'],
        flags: [false, false, true, false],
        answer: 'just one'
    }
    var q26 = {
        question: 'When did the Black Panther Party dissolve?',
        choices: ['1982', '1969', '1980', '1972'],
        flags: [true, false, false, false],
        answer: '1982'
    }

    // saving all 26 questions and their data in an array that's easier to manage
    var questionArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18, q19, q20, q21, q22, q23, q24, q25, q26];

    // hiding youLose and youWin divs on default
    $('.youLose').addClass('hide');
    $('.youWin').addClass('hide');

    // hide the multiple choice buttons until Start Trivia button is clicked
    $('#buttonA, #buttonB, #buttonC, #buttonD').hide();

    // hide play again button on default 
    $('#replayButton').hide();

    // loading a question and reset the timer every time a new question is loaded
    // also loading the question's corresponding data (choices)
    function loadQuestion(questionSelection) {
        console.log(questionSelection);
        countdownTimer.reset();
        $(".question").html("<h3>" + questionArray[questionSelection].question + "</h3>");
        $("#buttonA").text(questionArray[questionSelection].choices[0]).show();
        $("#buttonB").text(questionArray[questionSelection].choices[1]).show();
        $("#buttonC").text(questionArray[questionSelection].choices[2]).show();
        $("#buttonD").text(questionArray[questionSelection].choices[3]).show();
    }

    // adding click event to start button, start timer and load question
    function setup() {
        index = 0;
        $('#startButton').on('click', function() {
            $(this).hide();
            countdownTimer.start();
            loadQuestion(index);
            $('.howWell').hide();
        });
    }

    // displaying to the uer that they answered correctly and increasing correct score by 1
    function answerCorrect() {
        correct++;
        $('.youWin').addClass('show').html("<p class='text-center'>Correct!<br>" + "<span style='color:white'>answer: &nbsp;" + questionArray[index].answer + "</span></p>");
        $('.youWin').removeClass('hide');
        $('.youLose').addClass('hide');
        $('.youLose').removeClass('show');
        // alert("Correct!");
        console.log("correct " + questionArray[index].answer);
    }

    // displaying to the uer that they did not answer correctly and increasing wrong score by 1
    function answerWrong() {
        wrong++;
        $('.youLose').addClass('show').html("<p class='text-center'>Wakanda answer was that?<br>" + "<span style='color:white'>correct answer: &nbsp;" + questionArray[index].answer + "</span></p>");
        $('.youLose').removeClass('hide');
        $('.youWin').addClass('hide');
        $('.youWin').removeClass('show');
        // alert("Incorrect!");
        console.log("wrong");
    }

    // hiding the game contents and displaying score when the game ends
    function showScore() {
        $('.question').empty();
        $('.question').append("<h2 class='countRightAnswers'><p>Right Answers: " + correct + "</p></h2>");
        $('.question').append("<h2 class='countWrongAnswers'><p>Wrong Answers: " + wrong + "</p></h2>");
        countdownTimer.stop();
        $('.timer').empty();
        $('#replayButton').show();
    }
    setup();
    
    $('#replayButton').on('click', function() {
        location.reload();
    });

    // doing some matchy matchy with the user's chosen answer vs the correct answer in the questions array
    $('.answerChoice').on('click', function() {
        console.log($(this));
        if(this.id == 'buttonA') {
            var answerChosen = 'A';
        } else if(this.id == 'buttonB') {
            answerChosen = 'B';
        } else if (this.id == 'buttonC') {
            answerChosen = 'C';
        } else if (this.id == 'buttonD') {
            answerChosen = 'D';
        } 
        if ((answerChosen == 'A') && (questionArray[index].flags[0] == true)) {
            answerCorrect();
        } else if (answerChosen == 'A') {
            answerWrong();
        }
        if ((answerChosen == 'B') && (questionArray[index].flags[1] == true)) {
            answerCorrect();
        } else if (answerChosen == 'B') {
            answerWrong();
        }
       if ((answerChosen == 'C') && (questionArray[index].flags[2] == true)) {
            answerCorrect();
        } else if (answerChosen == 'C') {
            answerWrong();
        }
       if ((answerChosen == 'D') && (questionArray[index].flags[3] == true)) {
            answerCorrect();
        } else if (answerChosen == 'D') {
            answerWrong();
        }

        $(".question").text('');
        $("#buttonA").text('');
        $("#buttonB").text('');
        $("#buttonC").text('');
        $("#buttonD").text('');
        index++;
        if (index < questionArray.length) {
            loadQuestion(index);
        } else {
            $(".answerChoice").hide();
            showScore();
        }
    });

    // need a 2-second wait period after user is notified if answer is correct or wrong .. maybe?
    // it would be nice to have some sorta pause button
    // need to remove auto-focus when a new question has loaded - an answer selection is being focussed on without the user input
        // i think i did this with .blur();
        // never mind .blur(); did not work
    
// closing document.ready function below
});