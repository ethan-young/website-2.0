//-------------------- Start the Experiment

// timeline
var timeline = [];

// fullscreen
timeline.push({
  type: 'fullscreen',
  fullscreen_mode: true
});

timeline.push({
  type: "survey-text",
  questions: [{prompt:"Enter the participant's student ID:", columns: 10}],
  data: {variable: "id"},
  on_finish: function(){
    var subjID_Data = jsPsych.data.get().filter({variable: "id"}).last(1).values()[0].responses;
    var subjID = JSON.parse(subjID_Data).Q0;
    jsPsych.data.addProperties({ID: subjID});
  }
});

timeline.push({
  type: 'html-button-response',
  stimulus: "<p>Select the counter-balance scheme for this session:</p>",
  choices: ['1','2','3','4'],
  prompt: "",
  data: {variable: "counter_balance_scheme"},
  on_finish: function(){
    var counter_balance = jsPsych.data.get().filter({variable: "counter_balance_scheme"}).last(1).values()[0].button_pressed;
    jsPsych.data.addProperties({counter_balance: counter_balance});
  }
});

timeline.push({
  type: 'instructions',
  pages: [
    "Welcome!<br><br>Please wait for instructions from the researcher."
  ],
  show_clickable_nav: true,
  allow_backward: true,
  key_forward: -1,
  key_backward: -1,
  button_label_next: "continue",
  data: {variable: 'welcome'}
});