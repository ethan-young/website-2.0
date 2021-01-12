//-------------------------- Close experiment

var end = {
  type: 'html-button-response',
  stimulus: "Great work!<br><br>" + 
  "You are now finished with the shape counting game.<br><br>" +
  "Click 'finish' to exit.<br><br>",
  choices: ['Finish'],
  data: {variable: "end"},
};

//-------------------------- Create session timeline based on counterbalance scheme
// Updating then Shifting, Standard first
var counter_balance_03 = {
  timeline: [
      updating_standard_instructions,      //-----------------
      updating_standard_practice_loop,     //
      updating_standard_practice_finish,   // Standard Updating
      updating_standard,                   //
      end
]};

timeline.push(
  counter_balance_03
);

//-------------------------- Run the Session

jsPsych.init({
  timeline: timeline,
  //show_progress_bar: true,
  preload_images: [
    'img/3-updating-standard/circle.png',
    'img/3-updating-standard/triangle.png',
    'img/3-updating-standard/square.png'
  ],
  on_finish: function() {
    jsPsych.data.get().localSave('your-updating-data.csv');
  }
});