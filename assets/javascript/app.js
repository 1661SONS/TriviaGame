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

            // loading a new question even if the user got the answer wrong (as long as the countdown has not expired)
            else {
                index++;
                wrongAnswer();
                countdownTimer.reset();
                if (index < questionArray.length) {
                    loadQuestion(index);
                }

                // if the countdown has expired, end the game and display the score
                    // this doesn't seem to be working
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
        choices: ['A. 1965','B. 1966','C. 1967','D. 1968'],
        flags: [false, true, false, false],
        answer: '1966'
    };
    var q2 = {
        question: 'In what city was the Black Panther Party established?',
        choices: ['A. Los Angeles', 'B. San Francisco', 'C. Oakland', 'D. San Diego'],
        flags: [false, false, true, false],
        answer: 'Oakland'
    }
    var q3 = {
        question: 'What was the core mission of the Black Panther Party?',
        choices: ['A. defend against police brutality', 'B. elect more African Americans', 'C. compete with the Nation of Islam', 'D. frame police officers'],
        flags: [true, false, false, false],
        answer: 'defend against police brutality'
    }
    var q4 = {
        question: 'At its peak, how many members did the Black Panther Party have?',
        choices: ['A. 1500', 'B. 3000', 'C. 2000', 'D. 2500'],
        flags: [false, false, true, false],
        answer: '2000'
    }
    var q5 = {
        question: 'What does COINTELPRO stand for?',
        choices: ['A. co-intelligence telephone program', 'B. counterintelligence program', 'C. counterintelligence telephone program', 'D. co-intelligence program'],
        flags: [false, true, false, true],
        answer: 'counterintelligence program'
    }
    var q6 = {
        question: 'What federal organization used COINTELPRO against the Black Panther Party?',
        choices: ['A. CIA', 'B. ATF', 'C. NSA', 'D. FBI'],
        flags: [false, false, false, true],
        answer: 'FBI'
    }
    var q7 = {
        question: 'Who founded the Black Panther Party?',
        choices: ['A. Huey & Riley Freeman', 'B. Huey Newton & Bobby Seale', 'C. Huey Newton & Barry Seal ', 'D. Huey Newton & Bobby Brown'],
        flags: [false, true, false, false],
        answer: 'Huey Newton & Bobby Seale'
    }
    var q8 = {
        question: 'When did the founders of the Black Panther Party meet?',
        choices: ['A. 1961', 'B. 1960', 'C. 1962', 'D. 1959'],
        flags: [true, false, false, false],
        answer: '1961'
    }
    var q9 = {
        question: 'Where did the founders of the Black Panther Party meet?',
        choices: ['A. Mills College', 'B. College of Alameda', 'C. Merritt College', 'D. Berkeley City College'],
        flags: [false, false, true, false],
        answer: 'Merritt College'
    }
    var q10 = {
        question: 'What group did the founders form before the Black Panther Party?',
        choices: ['A. United Negro College Fund', 'B. Negro History Fact Group', 'C. Free Negro Food Program', 'D. Free Negro Health Clinic'],
        flags: [false, true, false, false],
        answer: 'Negro History Fact Group'
    }
    var q11 = {
        question: 'Which assassination contributed to the founding of the Black Panther Party?',
        choices: ['A. John F. Kennedy', 'B. Dr. Martin Luther King, Jr.', 'C. Robert Kennedy', 'D. Malcolm X'],
        flags: [false, false, false, true],
        answer: 'Malcolm X'
    }
    var q12 = {
        question: "Who was the unarmed Black teen killed by police before the Black Panther Party's founding?",
        choices: ['A. Mark Jones', 'B. Matt Jackson', 'C. Matthew Johnson', 'D. Max Jacobs'],
        flags: [false, false, true, false],
        answer: 'Matthew Johnson'
    }
    var q13 = {
        question: 'Which police department was responsible for the death of the unarmed Black teen?',
        choices: ['A. San Francisco PD', 'B. Oakland PD', 'C. Los Angeles PD', 'D. San Diego PD'],
        flags: [true, false, false, false],
        answer: 'San Francisco PD'
    }
    var q14 = {
        question: 'What was the original name of the Black Panther Party?',
        choices: ['A. Black Panther Party for Black Power', 'B. Black Panther Party for Civil Rights', 'C. Black Panther Party for Self-Defense', 'D. Black Panther Party for Equal Justice'],
        flags: [false, false, true, false],
        answer: 'Black Panther Party for Self-Defense'
    }
    var q15 = {
        question: "Which was the Black Panther Party's furthest urban center?",
        choices: ['A. Los Angeles', 'B. Chicago', 'C. Philadelphia', 'D. New York'],
        flags: [false, false, false, true],
        answer: 'New York'
    }
    var q16 = {
        question: "How many points did the Black Panther Party's social programs follow?",
        choices: ['A. 10 Points', 'B. 5 Points', 'C. 3 Points', 'D. 7 Points'],
        flags: [true, false, false, false],
        answer: '10 Points'
    }
    var q17 = {
        question: 'What kind of ideology did the Black Panther Party follow?',
        choices: ['A. Communist', 'B. Marxist', 'C. Capitalist', 'D. Anarchist'],
        flags: [false, true, false, false],
        answer: 'Marxist'
    }
    var q18 = {
        question: 'What kind of free services did the Black Panthers run for children?',
        choices: ['A. free breakfast', 'B. free mentoring', 'C. free weapons training', 'D. free books'],
        flags: [true, false, false, false],
        answer: 'free breakfast'
    }
    var q19 = {
        question: 'What kind of free services did the Black Panthers run for the community?',
        choices: ['A. free library', 'B. free clothing drive', 'C. free jobs training', 'D. free health clinics'],
        flags: [false, false, false, true],
        answer: 'free health clinics'
    }
    var q20 = {
        question: 'How many free health clinics did the Black Panthers operate?',
        choices: ['A. ten', 'B. eleven', 'C. twelve', 'D. thirteen'],
        flags: [false, false, true, false],
        answer: 'thirteen'
    }
    var q21 = {
        question: 'When did the FBI declare the Black Panther Party an emeny of the US Govenment?',
        choices: ['A. 1966', 'B. 1969', 'C. 1968', 'D. 1970'],
        flags: [false, true, false, false],
        answer: '1969'
    }
    var q22 = {
        question: "Who called the Black Panther Party 'one of the greatest threats to nation's internal security?",
        choices: ['A. J. Edgar Hoover', 'B. Harry S. Truman', 'C. Byron Todd Jones', 'D. Rex D. Davis'],
        flags: [true, false, false, false],
        answer: 'J. Edgar Hoover'
    }
    var q23 = {
        question: 'Who shot and killed Black Panther Party members as they slept?',
        choices: ['A. rogue FBI agents', 'B. jealous BPP members', 'C. trained assassins', 'D. Chicago PD'],
        flags: [false, false, false, true],
        answer: 'Chicago Police'
    }
    var q24 = {
        question: 'Who were the Black Panther Party members shot and killed as they slept?',
        choices: ['A. Fred Hampton & Bobby Seale', 'B. Fred Hampton & Eldridge Cleaver', 'C. Fred Hampton & Mark Clark', 'D. Fred Hampton & Stokely Carmichael'],
        flags: [false, false, true, false],
        answer: 'Fred Hampton & Mark Clark'
    }
    var q25 = {
        question: "Around 100 bullets were fired in this 'fierce gun battle' with police. How many were fired by Black Panthers?",
        choices: ['A. none', 'B. about half', 'C. just one', 'D. all 100'],
        flags: [false, false, true, false],
        answer: 'just one'
    }
    var q26 = {
        question: 'When did the Black Panther Party dissolve?',
        choices: ['A. 1982', 'B. 1969', 'C. 1980', 'D. 1972'],
        flags: [true, false, false, false],
        answer: '1982'
    }

    // saving all 26 questions and their data in an array that's easier to manage
    var questionArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18, q19, q20, q21, q22, q23, q24, q25, q26];

    // hiding youLose and youWin divs on default
    $('.youLose').addClass('hide');
    $('.youWin').addClass('hide');

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
        });
    }

    // displaying to the uer that they answered correctly and increasing correct score by 1
    function answerCorrect() {
        correct++;
        $('.youWin').addClass('show').html("<p class='text-center'>Correct!<br>" + "<span style='color:white'>Answer: " + questionArray[index].answer + "</span></p>");
        $('.youWin').removeClass('hide');
        $('.youLose').addClass('hide');
        $('.youLose').removeClass('show');
        // alert("Correct!");
        console.log("correct " + questionArray[index].answer);
    }

    // displaying to the uer that they did not answer correctly and increasing wrong score by 1
    function answerWrong() {
        wrong++;
        $('.youLose').addClass('show').html("<p class='text-center'>Wakanda answer was that?<br>" + "<span style='color:white'>Answer: " + questionArray[index].answer + "</span></p>");
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
    }
    setup();    

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
    // need to end game or refresh page when timer reaches 0
    
// close ready function below
});