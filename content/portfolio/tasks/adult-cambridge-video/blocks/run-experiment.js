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
  preload_video: video_files,
  on_finish: function() {
    //var subjID = jsPsych.data.get().select("ID").values[0];
    jsPsych.data.get().localSave('csv', "your-video-mind-reading-data.csv");
  }
});