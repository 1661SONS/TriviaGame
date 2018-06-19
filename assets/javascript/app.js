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
        question: 'How many urban centers across the US did the Black Panther Party have?',
        choices: ['A. ', 'B. ', 'C. ', 'D. thirteen'],
        flags: [],
        answer: 'D. thirteen'
    }
    var q16 = {
        question: '',
        choices: ['A. ', 'B. ', 'C. ', 'D. '],
        flags: [],
        answer: ''
    }
    var q17 = {
        question: '',
        choices: ['A. ', 'B. ', 'C. ', 'D. '],
        flags: [],
        answer: ''
    }
    var q18 = {
        question: '',
        choices: ['A. ', 'B. ', 'C. ', 'D. '],
        flags: [],
        answer: ''
    }
    var q19 = {
        question: '',
        choices: ['A. ', 'B. ', 'C. ', 'D. '],
        flags: [],
        answer: ''
    }
    var q20 = {
        question: '',
        choices: ['A. ', 'B. ', 'C. ', 'D. '],
        flags: [],
        answer: ''
    }
    


    // create an array of trivia questions
    var questions = [
        
        "",
        "",
        "",
        "",
        "",
        "How many points did the Black Panther Party's social programs go by?",
        "What kind of ideology did the Black Panther Party follow?",
        "What kind of free services did the Black Panthers run for children?",
        "What kind of free services did the Black Panthers run for the community?",
        "How many free health clinics did the Black Panthers operate?",
        "When did the FBI declare the Black Panther Party an emeny of the US Govenment?",
        "Who called the Black Panther Party 'one of the greatest threats to nation's internal security?",
        "Who shot and killed Black Panther Party members as they slept?",
        "Who were the Black Panther Party members shot and killed as they slept?",
        "Around 100 bullets were fired in this 'fierce gun battle' with police. How many were fired by Black Panthers?",
        "When did the Black Panther Party dissolve?"
    ];

    // create an array of correct trivia answers
    var rightAnswers = [
        
        
        "",
        "Matthew Johnson",
        "San Francisco Police Department",
        "Black Panther Party for Self-Defense",
        "10 Points",
        "Marxist",
        "Free breakfast",
        "Free health clinics",
        "Thirteen",
        "1969",
        "J. Edgar Hoover",
        "Chicago Police",
        "Fred Hampton and Mark Clark",
        "One bullet",
        "1982"
    ];

    // create an array of wrong trivia answers
    var wrongAnswers = [
        "1965", 
    ]

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