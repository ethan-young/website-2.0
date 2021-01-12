//-------------------------- End page
timeline.push({
  type: 'html-button-response',
  stimulus: "Great work!<br><br>" + 
  "You are now finished with the game.<br><br>",
  choices: ['finish'],
  data: {variable: "end"},
});

//-------------------------- Run Experiment
jsPsych.init({
  timeline: timeline,
  //show_progress_bar: true,
  preload_images: img_files,
  on_finish: function() {
    //var subjID = jsPsych.data.get().select("ID").values[0];
    jsPsych.data.get().localSave('csv', 'your-mind-in-the-eyes-data.csv');
  }
});