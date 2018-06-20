$(document).ready( function(){

    var index = 0;
    var countdownTimer = {
        time: 30,
        reset: function(){
            this.time = 30;
            $('.timer').html('<h3>' + this.time + ' seconds remaining!</h3>');
        },
        start: function() {
            counter = setInterval(countdownTimer.count, 1000);
        },
        stop: function() {
            clearInterval(counter);
        },
        count: function() {
            countdownTimer.time--;
            console.log(countdownTimer.time);
            if (countdownTimer.time >= 0) {
                $('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining!</h3>')
            }
            else {
                index++;
                wrongAnswer();
                countdownTimer.reset();
                if (index < questionArray.length) {
                    loadQuestion(index);
                }
                else {
                    $('.chosenAnswer').hide();
                    showScore();
                }
            }
        }
    };

    var correct = 0;
    var wrong = 0;

    // declare 27 question variables
    var q1 = {
        question: 'What year was the Black Panther Party founded?',
        choices: ['A. 1965','B. 1966','C. 1967','D. 1968'],
        flags: [false, true, false, false],
        answer: 'B. 1966'
    };
    var q2 = {
        question: 'In what city was the Black Panther Party established?',
        choices: ['A. Los Angeles', 'B. San Francisco', 'C. Oakland', 'D. San Diego'],
        flags: [false, false, true, false],
        answer: 'C. Oakland'
    }
    var q3 = {
        question: 'What was the core mission of the Black Panther Party?',
        choices: ['A. defend against police brutality', 'B. elect more African Americans', 'C. compete with the Nation of Islam', 'D. frame police officers'],
        flags: [true, false, false, false],
        answer: 'A. defend against police brutality'
    }
    var q4 = {
        question: 'At its peak, how many members did the Black Panther Party have?',
        choices: ['A. 1500', 'B. 3000', 'C. 2000', 'D. 2500'],
        flags: [false, false, true, false],
        answer: 'C. 2000'
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
        answer: 'D. FBI'
    }
    var q7 = {
        question: 'Who founded the Black Panther Party?',
        choices: ['A. Huey & Riley Freeman', 'B. Huey Newton & Bobby Seale', 'C. Huey Newton & Barry Seal ', 'D. Huey Newton & Bobby Brown'],
        flags: [false, true, false, false],
        answer: 'B. Huey Newton & Bobby Seale'
    }
    var q8 = {
        question: 'When did the founders of the Black Panther Party meet?',
        choices: ['A. 1961', 'B. 1960', 'C. 1962', 'D. 1959'],
        flags: [true, false, false, false],
        answer: 'A. 1961'
    }
    var q9 = {
        question: 'Where did the founders of the Black Panther Party meet?',
        choices: ['A. Mills College', 'B. College of Alameda', 'C. Merritt College', 'D. Berkeley City College'],
        flags: [false, false, true, false],
        answer: 'C. Merritt College'
    }
    var q10 = {
        question: 'What group did the founders form before the Black Panther Party?',
        choices: ['A. United Negro College Fund', 'B. Negro History Fact Group', 'C. Free Negro Food Program', 'D. Free Negro Health Clinic'],
        flags: [false, true, false, false],
        answer: 'B. Negro History Fact Group'
    }
    var q11 = {
        question: 'Which assassination contributed to the founding of the Black Panther Party?',
        choices: ['A. John F. Kennedy', 'B. Dr. Martin Luther King, Jr.', 'C. Robert Kennedy', 'D. Malcolm X'],
        flags: [false, false, true, false],
        answer: 'D. Malcolm X'
    }
    var q12 = {
        question: "Who was the unarmed Black teen killed by police before the Black Panther Party's founding?",
        choices: ['A. Mark Jones', 'B. Matt Jackson', 'C. Matthew Johnson', 'D. Max Jacobs'],
        flags: [false, false, true, false],
        answer: 'C. Matthew Johnson'
    }
    var q13 = {
        question: 'Which police department was responsible for the death of the unarmed Black teen?',
        choices: ['A. San Francisco PD', 'B. Oakland PD', 'C. Los Angeles PD', 'D. San Diego PD'],
        flags: [true, false, false, false],
        answer: 'A. San Francisco PD'
    }
    var q14 = {
        question: 'What was the original name of the Black Panther Party?',
        choices: ['A. Black Panther Party for Black Power', 'B. Black Panther Party for Civil Rights', 'C. Black Panther Party for Self-Defense', 'D. Black Panther Party for Equal Justice'],
        flags: [false, false, true, false],
        answer: 'C. Black Panther Party for Self-Defense'
    }
    var q15 = {
        question: "Which was the Black Panther Party's furthest urban center?",
        choices: ['A. Los Angeles', 'B. Chicago', 'C. Philadelphia', 'D. New York'],
        flags: [false, false, false, true],
        answer: 'D. New York'
    }
    var q16 = {
        question: "How many points did the Black Panther Party's social programs follow?",
        choices: ['A. 10 Points', 'B. 5 Points', 'C. 3 Points', 'D. 7 Points'],
        flags: [true, false, false, false],
        answer: 'A. 10 Points'
    }
    var q17 = {
        question: 'What kind of ideology did the Black Panther Party follow?',
        choices: ['A. Communist', 'B. Marxist', 'C. Capitalist', 'D. Anarchist'],
        flags: [false, true, false, false],
        answer: 'B. Marxist'
    }
    var q18 = {
        question: 'What kind of free services did the Black Panthers run for children?',
        choices: ['A. free breakfast', 'B. free mentoring', 'C. free weapons training', 'D. free books'],
        flags: [true, false, false, false],
        answer: 'A. free breakfast'
    }
    var q19 = {
        question: 'What kind of free services did the Black Panthers run for the community?',
        choices: ['A. free library', 'B. free clothing drive', 'C. free jobs training', 'D. free health clinics'],
        flags: [false, false, false, true],
        answer: 'D. free health clinics'
    }
    var q20 = {
        question: 'How many free health clinics did the Black Panthers operate?',
        choices: ['A. ten', 'B. eleven', 'C. twelve', 'D. thirteen'],
        flags: [false, false, true, false],
        answer: 'D. thirteen'
    }
    var q21 = {
        question: 'When did the FBI declare the Black Panther Party an emeny of the US Govenment?',
        choices: ['A. 1966', 'B. 1969', 'C. 1968', 'D. 1970'],
        flags: [false, true, false, false],
        answer: 'B. 1969'
    }
    var q22 = {
        question: "Who called the Black Panther Party 'one of the greatest threats to nation's internal security?",
        choices: ['A. J. Edgar Hoover', 'B. Harry S. Truman', 'C. Byron Todd Jones', 'D. Rex D. Davis'],
        flags: [true, false, false, false],
        answer: 'A. J. Edgar Hoover'
    }
    var q23 = {
        question: 'Who shot and killed Black Panther Party members as they slept?',
        choices: ['A. rogue FBI agents', 'B. jealous BPP members', 'C. trained assassins', 'D. Chicago PD'],
        flags: [false, false, false, true],
        answer: 'D. Chicago Police'
    }
    var q24 = {
        question: 'Who were the Black Panther Party members shot and killed as they slept?',
        choices: ['A. Fred Hampton & Bobby Seale', 'B. Fred Hampton & Eldridge Cleaver', 'C. Fred Hampton & Mark Clark', 'D. Fred Hampton & Stokely Carmichael'],
        flags: [false, false, true, false],
        answer: 'C. Fred Hampton & Mark Clark'
    }
    var q25 = {
        question: "Around 100 bullets were fired in this 'fierce gun battle' with police. How many were fired by Black Panthers?",
        choices: ['A. none', 'B. about half', 'C. just one', 'D. all 100'],
        flags: [false, false, true, false],
        answer: 'C. just one'
    }
    var q26 = {
        question: 'When did the Black Panther Party dissolve?',
        choices: ['A. 1982', 'B. 1969', 'C. 1980', 'D. 1972'],
        flags: [true, false, false, false],
        answer: '1982'
    }

    var questionArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18, q19, q20, q21, q22, q23, q24, q25, q26];

    function loadQuestion(questionSelection) {
        console.log(questionSelection);
        countdownTimer.reset();
        $(".question").html("<h3>" + questionArray[questionSelection].question + "</h3>");
        $("#buttonA").text(questionArray[questionSelection].choices[0]).show();
        $("#buttonB").text(questionArray[questionSelection].choices[1]).show();
        $("#buttonC").text(questionArray[questionSelection].choices[2]).show();
        $("#buttonD").text(questionArray[questionSelection].choices[3]).show();
    }

    function setup() {
        index = 0;
        // $('.question').append('<button class="btn btn-primary" id="startButton">Start</button>');
        $('#startButton').on('click', function() {
            $(this).hide();
            countdownTimer.start();
            loadQuestion(index);
        });
    }

    function getAnswer() {
        $('.answerChoice').on('click', function() {
            console.log('alert', index);
            index++;
            console.log('click', index);
            $(".question").text('');
            $("#buttonA").text('');
            $("#buttonB").text('');
            $("#buttonC").text('');
            $("#buttonD").text('');
            loadQuestion();
        })
    }

    function answerCorrect() {
        correct++;
        $('.rightAnswer').toggleClass('hide');
        $('.wrongAnswer').addClass('hide');
        alert("Correct!");
        console.log("correct");
    }

    function answerWrong() {
        wrong++;
        $('.wrongAnswer').toggleClass('hide');
        $('.rightAnswer').addClass('hide');
        alert("Incorrect!");
        console.log("wrong");
    }

    function showScore() {
        $('.question').empty();
        $('.question').append("<h2 class='countRightAnswers'><p>Right Answers: " + correct + "</p></h2>");
        $('.question').append("<h2 class='countWrongAnswers'><p>Wrong Answers: " + wrong + "</p></h2>");
        countdownTimer.stop();
        $('.timer').empty();
    }
    setup();    

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

    //    });
    

    // need a for loop to loop thru the questions
    // need a math.random() to randomize the questions
    // need to print one of the random questions to the html
    // need to match 3 wrong answers with the right one in the multiple choice and print to HTML
    // need to match the right answer to its corresponding question
    // need to start timeout countdown and display countdown to user on HTML
    // need to render that answer to the HTML after a timeout or after the user got chose the wrong answer
    // toggleClass display:hide; on .theWrongOne if user answered incorrectly
    // toggleClass display:hide; on .theRightOne if user answered correctly
    // need to restart the game after a timeout
    
    

















// close ready function below
});