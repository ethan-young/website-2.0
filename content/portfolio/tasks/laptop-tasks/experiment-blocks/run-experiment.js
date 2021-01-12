//-------------------------- Close experiment

var end = {
  type: 'html-button-response',
  stimulus: "Great work!<br><br>" + 
  "You are now finished playing all the games.<br><br>" +
  "Click 'finish' to exit.<br><br>",
  choices: ['Finish'],
  data: {variable: "end"},
};

//-------------------------- Create session timeline based on counterbalance scheme

// Shifting then Updating, Standard first
var counter_balance_01 = {
  timeline: [
      shape_instructions,                  //-----------------
      shape_practice_loop,                 // 
      color_instructions,                  // 
      color_practice_loop,                 // 
      shifting_instructions,               // 
      shifting_01,                         // Standard Shifting
      shifting_02,                         // 
      shifting_03,                         // 
      shifting_04,                         // 
      shifting_end,                        //-----------------
      gender_instructions,                 //
      gender_practice_loop,                //
      emotion_instructions,                //
      emotion_practice_loop,               //
      face_shifting_instructions,          // Ecological Shifting
      face_shifting_01,                    //
      face_shifting_02,                    //
      face_shifting_03,                    //
      face_shifting_04,                    //
      face_shifting_end,                   //-----------------
      updating_standard_instructions,      //
      updating_standard_practice_loop,     // Standard Updating
      updating_standard_practice_finish,   //
      updating_standard,                   //
      updating_standard_end,               //----------------
      updating_ecological_instructions,    //
      updating_ecological_practice_loop,   //
      updating_ecological_practice_finish, // Ecological Updating
      updating_ecological,                 //
      updating_ecological_end,             //----------------
      end
  ],
  conditional_function: function(){
        var code = jsPsych.data.get().select("counter_balance").values[0];
        if(JSON.parse(code) === 0){
            return true;
        } else {
            return false;
        }
    },
};

// Shifting then Updating, Ecological first
var counter_balance_02 = {
  timeline: [
      gender_instructions,                 //-----------------
      gender_practice_loop,                //
      emotion_instructions,                //
      emotion_practice_loop,               //
      face_shifting_instructions,          // Ecological Shifting
      face_shifting_01,                    //
      face_shifting_02,                    //
      face_shifting_03,                    //
      face_shifting_04,                    //
      face_shifting_end,                   //-----------------
      shape_instructions,                  //
      shape_practice_loop,                 // 
      color_instructions,                  // 
      color_practice_loop,                 // 
      shifting_instructions,               // 
      shifting_01,                         // Standard Shifting
      shifting_02,                         // 
      shifting_03,                         // 
      shifting_04,                         // 
      shifting_end,                        //-----------------
      updating_ecological_instructions,    //
      updating_ecological_practice_loop,   //
      updating_ecological_practice_finish, // Ecological Updating
      updating_ecological,                 //
      updating_ecological_end,             //----------------
      updating_standard_instructions,      //
      updating_standard_practice_loop,     // Standard Updating
      updating_standard_practice_finish,   //
      updating_standard,                   //
      updating_standard_end,               //----------------
      end
  ],
  conditional_function: function(){
        var code = jsPsych.data.get().select("counter_balance").values[0];
        if(JSON.parse(code) === 1){
            return true;
        } else {
            return false;
        }
    }
};

// Updating then Shifting, Standard first
var counter_balance_03 = {
  timeline: [
      updating_standard_instructions,      //-----------------
      updating_standard_practice_loop,     //
      updating_standard_practice_finish,   // Standard Updating
      updating_standard,                   //
      updating_standard_end,               //----------------
      updating_ecological_instructions,    //
      updating_ecological_practice_loop,   //
      updating_ecological_practice_finish, // Ecological Updating
      updating_ecological,                 //
      updating_ecological_end,             //----------------
      shape_instructions,                  //
      shape_practice_loop,                 // 
      color_instructions,                  // 
      color_practice_loop,                 // 
      shifting_instructions,               // 
      shifting_01,                         // Standard Shifting
      shifting_02,                         // 
      shifting_03,                         // 
      shifting_04,                         // 
      shifting_end,                        //-----------------
      gender_instructions,                 //
      gender_practice_loop,                //
      emotion_instructions,                //
      emotion_practice_loop,               //
      face_shifting_instructions,          // Ecological Shifting
      face_shifting_01,                    //
      face_shifting_02,                    //
      face_shifting_03,                    //
      face_shifting_04,                    //
      face_shifting_end,                   //-----------------
      end
  ],
  conditional_function: function(){
        var code = jsPsych.data.get().select("counter_balance").values[0];
        if(JSON.parse(code) === 2){
            return true;
        } else {
            return false;
        }
    }
};

// Updating then Shifting, Ecological first
var counter_balance_04 = {
  timeline: [
      updating_ecological_instructions,    //-----------------
      updating_ecological_practice_loop,   //
      updating_ecological_practice_finish, // Ecological Updating
      updating_ecological,                 //
      updating_ecological_end,             //----------------
      updating_standard_instructions,      //
      updating_standard_practice_loop,     //
      updating_standard_practice_finish,   // Standard Updating
      updating_standard,                   //
      updating_standard_end,               //----------------
      gender_instructions,                 //
      gender_practice_loop,                //
      emotion_instructions,                //
      emotion_practice_loop,               //
      face_shifting_instructions,          // Ecological Shifting
      face_shifting_01,                    //
      face_shifting_02,                    //
      face_shifting_03,                    //
      face_shifting_04,                    //
      face_shifting_end,                   //-----------------
      shape_instructions,                  //
      shape_practice_loop,                 // 
      color_instructions,                  // 
      color_practice_loop,                 // 
      shifting_instructions,               // 
      shifting_01,                         // Standard Shifting
      shifting_02,                         // 
      shifting_03,                         // 
      shifting_04,                         // 
      shifting_end,                        //-----------------
      end
  ],
  conditional_function: function(){
        var code = jsPsych.data.get().select("counter_balance").values[0];
        if(JSON.parse(code) === 3){
            return true;
        } else {
            return false;
        }
    }
};

timeline.push(
  counter_balance_01,
  counter_balance_02,
  counter_balance_03,
  counter_balance_04,
  childhood_stress
);

//-------------------------- Run the Session

jsPsych.init({
  timeline: timeline,
  //show_progress_bar: true,
  preload_images: [
    "img/2-shifting-faces/03F_AN_C.png",
    "img/2-shifting-faces/03F_HA_O.png",
    "img/2-shifting-faces/35M_AN_C.png",
    "img/2-shifting-faces/35M_HA_O.png",
    'img/2-shifting-faces/angry.png' ,
    'img/2-shifting-faces/happy.png' ,
    'img/2-shifting-faces/female.jpg',
    'img/2-shifting-faces/male.png',
    'img/3-updating-standard/circle.png',
    'img/3-updating-standard/triangle.png',
    'img/3-updating-standard/square.png',
    'img/4-updating-objects/fivedollarbill.jpg',
    'img/4-updating-objects/uta_bus.png',
    'img/4-updating-objects/angry.png',
  ],
  on_finish: function() {
    var subjID = jsPsych.data.get().select("ID").values[0];
    jsPsych.data.get().localSave('csv', subjID + "_all_task_data" + ".csv");
  }
});