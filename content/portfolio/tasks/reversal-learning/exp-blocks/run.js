// Images for preloading
var prl_images = ['img/fractal1.png','img/fractal2.png',
                  'img/fractal3.png','img/fractal4.png',
                  'img/fractal5.png','img/fractal6.png',
                  'img/correct.jpg','img/incorrect.jpg','img/key.png'];

// Save Data
function saveData() {
  // Get ID and save it to data
  //var subjID = JSON.parse(jsPsych.data.get().filter({variable: "ID"}).last(1).values()[0].responses).Q0;
  //var subjID = jsPsych.data.getURLVariable('subjID');
  //jsPsych.data.addProperties({id: subjID});

  // Write data locally
  jsPsych.data.get().localSave('csv', 'your_data.csv');

  // Display end screen
  $("#jspsych-content").html('<h1 style = "text-align: center">You made it through, nice work!<br><br>Thanks!</h1>');

}

// start the experiment
jsPsych.init({
  timeline: timeline,
  preload_images: prl_images,
  on_finish: saveData
});