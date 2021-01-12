// Variables to run trials
var fractal_01 = '<img src="img/fractal1.png">';
var fractal_02 = '<img src="img/fractal2.png">';

var correct_smile   = "<img src='img/correct.jpg'  >";
var incorrect_frown = "<img src='img/incorrect.jpg'>";

var prl_keys = [37,38,39,40];

// Probabilistic Learning Practice
var prl_practice = {
  timeline: [
    {
      type: 'categorize-html',
      stimulus: jsPsych.timelineVariable('stimulus'),
      key_answer: jsPsych.timelineVariable('key_answer'),
      choices: jsPsych.timelineVariable('choices'),
      correct_text: correct_smile,
      incorrect_text: incorrect_frown,
      show_stim_with_feedback: true,
      feedback_duration: 2000,
      data: jsPsych.timelineVariable('data'),
      post_trial_gap: 250,
      on_start:  function(trial){
        var presses = 0;
        $(document).on('keydown',function(event){
          if(event.which == 37 && presses < 1){
            //$('.left').addClass('pressed');
            $('div.prl_grid > div.left > img').addClass('selected');
            presses += 1;
          }
          if(event.which == 38 && presses < 1){
            //$('.up').addClass('pressed');
            $('div.prl_grid > div.up > img').addClass('selected');
            presses += 1;
          }
          if(event.which == 39 && presses < 1){
            //$('.right').addClass('pressed');
            $('div.prl_grid > div.right > img').addClass('selected');
            presses += 1;
          }
          if(event.which == 40 && presses < 1){
            //$('.down').addClass('pressed');
            $('div.prl_grid > div.down > img').addClass('selected');
            presses += 1;
          }
        });
        var prob = [];
        for (var i = 1; i <= 100; i++){
          prob[i-1] = i;
        }
        var feedback_prob = jsPsych.randomization.sampleWithoutReplacement(prob, 1);
        if(feedback_prob<=80){
          trial.correct_text = correct_smile;
          trial.incorrect_text = incorrect_frown;
          trial.data.feedback = "congruent";
        }
        if(feedback_prob>80){
          trial.correct_text = incorrect_frown;
          trial.incorrect_text = correct_smile;
          trial.data.feedback = "incongruent";
        }
        trial.data.prob_value = feedback_prob[0];
      },
      on_finish: function(data){
        if(data.correct === true & data.feedback == "congruent"){
          data.valence = "positive";
        }
        if(data.correct === true & data.feedback == "incongruent"){
          data.valence = "negative";
        }
        if(data.correct === false & data.feedback == "congruent"){
          data.valence = "negative";
        }
        if(data.correct === false & data.feedback == "incongruent"){
          data.valence = "positive";
        }
        if(data.correct === true){
          data.correct = 1;
        } else{
          data.correct = 0;
        }
        var pressed = 0;
      }
    }
  ],
  timeline_variables: [
    {stimulus: "<h3>Use the arrow keys now</h3>" +
               prl_stim(null,null,fractal_01,fractal_02), choices: [39,40], key_answer: 39, data: {variable: "prl_practice", answer: 39, key1: 39, key2: 40, left: "null      ", up: "null      ", right: "fractal_01", down: "fractal_02"}},
    {stimulus: prl_stim(null,fractal_02,null,fractal_01), choices: [40,38], key_answer: 40, data: {variable: "prl_practice", answer: 40, key1: 40, key2: 38, left: "null      ", up: "fractal_02", right: "null      ", down: "fractal_01"}},
    {stimulus: prl_stim(fractal_01,fractal_02,null,null), choices: [37,38], key_answer: 37, data: {variable: "prl_practice", answer: 37, key1: 37, key2: 38, left: "fractal_01", up: "fractal_02", right: "null      ", down: "null      "}},
    {stimulus: prl_stim(fractal_02,fractal_01,null,null), choices: [38,37], key_answer: 38, data: {variable: "prl_practice", answer: 38, key1: 38, key2: 37, left: "fractal_02", up: "fractal_01", right: "null      ", down: "null      "}},
    {stimulus: prl_stim(fractal_02,null,null,fractal_01), choices: [40,37], key_answer: 40, data: {variable: "prl_practice", answer: 40, key1: 40, key2: 37, left: "fractal_02", up: "null      ", right: "null      ", down: "fractal_01"}},
    {stimulus: prl_stim(null,fractal_01,fractal_02,null), choices: [38,39], key_answer: 38, data: {variable: "prl_practice", answer: 38, key1: 38, key2: 39, left: "null      ", up: "fractal_01", right: "fractal_02", down: "null      "}},
    {stimulus: prl_stim(fractal_02,null,fractal_01,null), choices: [39,37], key_answer: 39, data: {variable: "prl_practice", answer: 39, key1: 39, key2: 37, left: "fractal_02", up: "null      ", right: "fractal_01", down: "null      "}},
    {stimulus: prl_stim(null,fractal_02,fractal_01,null), choices: [39,38], key_answer: 39, data: {variable: "prl_practice", answer: 39, key1: 39, key2: 38, left: "null      ", up: "fractal_02", right: "fractal_01", down: "null      "}},
    {stimulus: prl_stim(null,fractal_01,null,fractal_02), choices: [38,40], key_answer: 38, data: {variable: "prl_practice", answer: 38, key1: 38, key2: 40, left: "null      ", up: "fractal_01", right: "null      ", down: "fractal_02"}},
    {stimulus: prl_stim(null,null,fractal_02,fractal_01), choices: [40,39], key_answer: 40, data: {variable: "prl_practice", answer: 40, key1: 40, key2: 39, left: "null      ", up: "null      ", right: "fractal_02", down: "fractal_01"}},
    {stimulus: prl_stim(fractal_01,null,fractal_02,null), choices: [37,39], key_answer: 37, data: {variable: "prl_practice", answer: 37, key1: 37, key2: 39, left: "fractal_01", up: "null      ", right: "fractal_02", down: "null      "}},
    {stimulus: prl_stim(fractal_01,null,null,fractal_02), choices: [37,40], key_answer: 37, data: {variable: "prl_practice", answer: 37, key1: 37, key2: 40, left: "fractal_01", up: "null      ", right: "null      ", down: "fractal_02"}}
  ]
};

timeline.push(prl_practice);