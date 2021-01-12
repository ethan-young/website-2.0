//-------------------- Stimuli for task

var female_angry = "<img src='img/2-shifting-faces/03F_AN_C.png'>";
var female_happy = "<img src='img/2-shifting-faces/03F_HA_O.png'>";
var male_angry   = "<img src='img/2-shifting-faces/35M_AN_C.png'>";
var male_happy   = "<img src='img/2-shifting-faces/35M_HA_O.png'>";
var angry  = "<img src='img/2-shifting-faces/angry.png'  height=100>";
var happy  = "<img src='img/2-shifting-faces/happy.png'  height=100 style='padding-left: 20px;'>";
var female = "<img src='img/2-shifting-faces/female.jpg' height=100 style='padding-right: 20px;'>";
var male   = "<img src='img/2-shifting-faces/male.png'   height=100>";

//-------------------- Response prompts

var prompt_angry  = "<div style='float:right; text-align: right;' >" + happy  +  "</div>";
var prompt_happy  = "<div style='float:left;  text-align: left;'  >" + angry  + "</div>";
var prompt_female = "<div style='float:left;  text-align: left;'  >" + female + "</div>";
var prompt_male   = "<div style='float:right; text-align: right;' >" + male   + "</div>";

//-------------------- All stimuli and rule (gender or emotion) combinations

var female_happy_gender  = "<div style = 'text-align: center;'><h1>Gender <br></h1>" + female_happy + "</div>";
var female_angry_gender  = "<div style = 'text-align: center;'><h1>Gender <br></h1>" + female_angry + "</div>";
var female_happy_emotion = "<div style = 'text-align: center;'><h1>Emotion<br></h1>" + female_happy + "</div>";
var female_angry_emotion = "<div style = 'text-align: center;'><h1>Emotion<br></h1>" + female_angry + "</div>";
var male_happy_gender    = "<div style = 'text-align: center;'><h1>Gender <br></h1>" + male_happy   + "</div>";
var male_angry_gender    = "<div style = 'text-align: center;'><h1>Gender <br></h1>" + male_angry   + "</div>";
var male_happy_emotion   = "<div style = 'text-align: center;'><h1>Emotion<br></h1>" + male_happy   + "</div>";
var male_angry_emotion   = "<div style = 'text-align: center;'><h1>Emotion<br></h1>" + male_angry   + "</div>";

//------------------------- Obejects to hold trial information for the practice session

var shifting_ecological_timeline = [];

// Gender instructions

var gender_instructions = {
    type: 'instructions',
    pages: [
        "<p style = 'text-align: left;'>We are going to play a matching game with pictures of a man and woman.<br><br></p>",
        "<p style = 'text-align: left;'> We will play the GENDER game first.<br><br>" +
        "In the GENDER game, choose the gender that is the same as the person in the picture.<br><br></p>",
        "If the person is a WOMAN, press the LEFT arrow key.<br><br>Example:"+
        "<div style = 'text-align: center;'>" + female_happy + "</div>" +
        "<div>" + prompt_female + prompt_male + "</div><br><br><br>",
        "If the person is a MAN, press the RIGHT arrow key.<br><br>Example:"+
        "<div style = 'text-align: center;'>" + male_happy + "</div>" +
        "<div>" + prompt_female + prompt_male + "</div><br><br><br>",
        "<p style = 'text-align: left;'> Now you will practice playing the GENDER game.<br><br>" +
        "Answer as fast as you can without making mistakes. If you make a mistake, just keep going.<br><br>" +
        "Click 'continue' to practice the GENDER game.</p>"
    ],
    show_clickable_nav: true,
    allow_backward: true,
    key_forward: -1,
    key_backward: -1,
    button_label_next: "continue",
    button_label_previous: "go back",
    data: {variable: "gender_instructions", task: "shifting_ecological"}
};

// Gender practice

var gender_practice = {
  timeline: [
    {
      type: 'categorize-html',
      choices: [37,39],
      correct_text: "<h1 style='text-align:center;'>Correct</h1>",
      incorrect_text:"<h1 style='text-align:center;'>Incorrect</h1>",
      show_stim_with_feedback: false,
      feedback_duration: 500,
      prompt: "<div style='width:500px; height: 12px;'>" + prompt_female + prompt_male + "</div><br><br><br>" +
              "<div style='width: 500px;'><h1 style='float: left; margin:0;'>&#x21E6</h1><h1 style='float: right; margin:0;'>&#x21E8</h1></div>",
      data: {variable: "gender_practice", rule: "type", type: "repeat", task: "shifting_ecological"},
      stimulus: jsPsych.timelineVariable('stimulus'),
      key_answer: jsPsych.timelineVariable('key_answer'),
    }
  ],
  randomize_order: true,
  timeline_variables: [
    {stimulus: female_happy_gender , key_answer: 37},
    {stimulus: male_happy_gender   , key_answer: 39},
    {stimulus: female_angry_gender , key_answer: 37},
    {stimulus: male_angry_gender   , key_answer: 39}
  ]
};

var gender_confirmation = {
  type: 'html-button-response',
  stimulus: "<p>Would you like to practice the GENDER game again?</p>",
  choices: ['No, I am ready to continue', 'Yes, practice again'],
  prompt: "",
  data: {variable: 'gender_confirmation', task: "shifting_ecological"}
};

var gender_practice_loop = {
  timeline: [gender_practice,gender_confirmation],
  loop_function: function(data){
    if(jsPsych.data.get().last(1).values()[0].button_pressed == 1){
      return true;
    } else {
      return false;
    }
  }
};

// Emotion instructions

var emotion_instructions = {
    type: 'instructions',
    pages: [
        "<p style = 'text-align: left;'>We can also match by the emotion the person feels." + 
        "<br><br>In the EMOTION game, choose the emotion that is the same as the one the person feels.<br><br></p>",
        "If the person is ANGRY, press the LEFT arrow key.<br><br>Example:" +
        "<div style = 'text-align: center;'>" + female_angry + "</div>" +
        "<div>" + prompt_angry + prompt_happy + "</div><br><br>",
        "If the person is HAPPY, press the RIGHT arrow key.<br><br>Example:" +
        "<div style = 'text-align: center;'>" + male_happy + "</div>" +
        "<div>" + prompt_angry + prompt_happy + "</div><br><br>",
        "<p style = 'text-align: left;'>Now you will practice playing the EMOTION game.<br><br>" +
        "Answer as fast as you can without making mistakes. If you make a mistake, just keep going.<br><br>" +
        "Click 'continue' to practice the EMOTION game.</p>"
    ],
    show_clickable_nav: true,
    allow_backward: true,
    key_forward: -1,
    key_backward: -1,
    button_label_next: "continue",
    button_label_previous: "go back",
    data: {variable: "emotion_instructions", task: "shifting_ecological"}
};

// Emotion practice

var emotion_practice = {
  timeline: [
    {
      type: 'categorize-html',
      choices: [37,39],
      correct_text: "<h1 style='text-align:center;'>Correct</h1>",
      incorrect_text:"<h1 style='text-align:center;'>Incorrect</h1>",
      show_stim_with_feedback: false,
      feedback_duration: 500,
      prompt: "<div style='width:500px; height: 12px;'>" + prompt_angry + prompt_happy + "</div><br><br><br>" +
              "<div style='width: 500px;'><h1 style='float: left; margin:0;'>&#x21E6</h1><h1 style='float: right; margin:0;'>&#x21E8</h1></div>",
      data: {variable: "emotion_practice", rule: "size", type: "repeat", task: "shifting_ecological"},
      stimulus: jsPsych.timelineVariable('stimulus'),
      key_answer: jsPsych.timelineVariable('key_answer'),
    }
  ],
  randomize_order: true,
  timeline_variables: [
    {stimulus: female_angry_emotion , key_answer: 37},
    {stimulus: male_happy_emotion   , key_answer: 39},
    {stimulus: female_happy_emotion , key_answer: 39},
    {stimulus: male_angry_emotion   , key_answer: 37}
  ]
};

var emotion_confirmation = {
  type: 'html-button-response',
  stimulus: "<p>Would you like to practice the EMOTION game again?</p>",
  choices: ['No, I am ready to continue', 'Yes, practice again'],
  prompt: "",
  data: {variable: 'emotion_confirmation', task: "shifting_ecological"}
};

var emotion_practice_loop = {
  timeline: [emotion_practice,emotion_confirmation],
  loop_function: function(data){
    if(jsPsych.data.get().last(1).values()[0].button_pressed == 1){
      return true;
    } else {
      return false;
    }
  }
};

// Face shifting instructions

var face_shifting_instructions = {
    type: 'instructions',
    pages: ["<div style = 'text-align: left;'>Nice work!<br><br>" + 
            "Now, we are going to play both games together.<br><ul>" + 
            "<li>When you see the word GENDER, choose the gender that is the same GENDER as the picture.</li>" +
            "<li>When you see the word EMOTION, choose the emotion that is the same EMOTION as the picture.</li>" + 
            "</ul>You will see the following pictures to remind you:</div><br><br>" +
            "<div style='width: 60%; padding-left:20%; padding-right:20%;'>" +
            "<div>" + prompt_female + prompt_angry + prompt_happy +  prompt_male + "</div><br><br><br>" +
            "<div><h1 style='float: left; margin:0;'>&#x21E6</h1><h1 style='float: right; margin:0;'>&#x21E8</h1></div><br>" +
            "<div><p style='float: left; margin:0;'>always on the left</p><p style='float: right; margin:0;'>always on the right</p></div>" + 
            "</div><br><br>" +
            "<p style = 'text-align: left;'><b>Note that you won't receive feedback for the rest of the game.</b><br><br>" +
            "Click 'continue' to play!</p>"],
    show_clickable_nav: true,
    allow_backward: true,
    key_forward: -1,
    key_backward: -1,
    button_label_next: "continue",
    data: {variable: "face_shifting_instructions", task: "shifting_ecological"}
};