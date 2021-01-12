function saveData() {
  var subjID = JSON.parse(jsPsych.data.get().filter({variable: "ID"}).last(1).values()[0].responses).Q0;
  var exp_condition = jsPsych.data.get().filter({variable: "condition"}).last(1).values()[0].button_pressed;
  jsPsych.data.addProperties({id: subjID, condition: exp_condition});
  
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'write_data.php'); // change 'write_data.php' to point to php script.
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = function() {
    if(xhr.status == 200){
      var response = JSON.parse(xhr.responseText);
      console.log(response.success);
    }
  };
  xhr.send(jsPsych.data.get().json());
}

// start the experiment
jsPsych.init({
  timeline: timeline,
  show_progress_bar: true,
  on_finish: saveData
});