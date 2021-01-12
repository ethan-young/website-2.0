//------------------------- End of the task and save data

var face_shifting_end = {
  type: 'html-button-response',
  stimulus: "Great work!<br><br>" + 
  "You are now finished playing this game.<br><br>" +
  "Click 'finish' to continue.<br><br>",
  choices: ['Finish'],
  data: {variable: "shifting_ecological_finish", task: "shifting_ecological"},
  on_finish: function() {
    var subjID = jsPsych.data.get().select("ID").values[0];
    var shifting_ecological_data = jsPsych.data.get().filter([{variable: "ID"}, {variable: "counter_balance_scheme"}, {task: "shifting_ecological"}]);
    shifting_ecological_data.localSave('csv', subjID + "_shifting_ecological" + ".csv");
  }
};