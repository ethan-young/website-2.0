//-------------------------- Block 1
var me_part1 = {
    type: 'html-button-response',
    prompt: "<p>What emotion is this person feeling?</p>",
    post_trial_gap: 1000,
    randomize_order: true,
    timeline:[
      {stimulus: "<image src='img/RME_01.jpg' width = '700px'><br><br>", choices: ['playful','comforting','irritated','bored'], data: {gender: 'M', face: 1, answer: 0}},
      {stimulus: "<image src='img/RME_02.jpg' width = '700px'><br><br>", choices: ['terrified','upset','arrogant','annoyed'], data: {gender: 'M', face: 2, answer: 1}},
      {stimulus: "<image src='img/RME_03.jpg' width = '700px'><br><br>", choices: ['joking','flustered','desire','convinced'], data: {gender: 'F', face: 3, answer: 2}},
      {stimulus: "<image src='img/RME_04.jpg' width = '700px'><br><br>", choices: ['joking','insisting','amused','relaxed'], data: {gender: 'M', face: 4, answer: 1}},
      {stimulus: "<image src='img/RME_05.jpg' width = '700px'><br><br>", choices: ['irritated','sarcastic','worried','friendly'], data: {gender: 'M', face: 5, answer: 2}},
      {stimulus: "<image src='img/RME_06.jpg' width = '700px'><br><br>", choices: ['aghast','fantasizing','impatient','alarmed'], data: {gender: 'F', face: 6, answer: 1}},
      {stimulus: "<image src='img/RME_07.jpg' width = '700px'><br><br>", choices: ['apologetic','friendly','uneasy','dispirited'], data: {gender: 'M', face: 7, answer: 2}},
      {stimulus: "<image src='img/RME_08.jpg' width = '700px'><br><br>", choices: ['despondent','relieved','shy','excited'], data: {gender: 'M', face: 8, answer: 0}},
      {stimulus: "<image src='img/RME_09.jpg' width = '700px'><br><br>", choices: ['annoyed','hostile','horrified','preoccupied'], data: {gender: 'F', face: 9, answer: 3}},
      {stimulus: "<image src='img/RME_10.jpg' width = '700px'><br><br>", choices: ['cautious','insisting','bored','aghast'], data: {gender: 'M', face: 10, answer: 0}},
      {stimulus: "<image src='img/RME_11.jpg' width = '700px'><br><br>", choices: ['terrified','amused','regretful','flirtatious'], data: {gender: 'M', face: 11, answer: 2}},
      {stimulus: "<image src='img/RME_12.jpg' width = '700px'><br><br>", choices: ['indifferent','embarrassed','sceptical','dispirited'], data: {gender: 'M', face: 12, answer: 2}},
      {stimulus: "<image src='img/RME_13.jpg' width = '700px'><br><br>", choices: ['decisive','anticipating','threatening','shy'], data: {gender: 'M', face: 13, answer: 1}},
      {stimulus: "<image src='img/RME_14.jpg' width = '700px'><br><br>", choices: ['irritated','disappointed','depressed','accusing'], data: {gender: 'M', face: 14, answer: 3}},
      {stimulus: "<image src='img/RME_15.jpg' width = '700px'><br><br>", choices: ['contemplative','flustered','encouraging','amused'], data: {gender: 'F', face: 15, answer: 0}},
      {stimulus: "<image src='img/RME_16.jpg' width = '700px'><br><br>", choices: ['irritated','thoughtful','encouraging','sympathetic'], data: {gender: 'M', face: 16, answer: 1}},
      {stimulus: "<image src='img/RME_17.jpg' width = '700px'><br><br>", choices: ['doubtful','affectionate','playful','aghast'], data: {gender: 'F', face: 17, answer: 0}},
      {stimulus: "<image src='img/RME_18.jpg' width = '700px'><br><br>", choices: ['decisive','amused','aghast','bored'], data: {gender: 'F', face: 18, answer: 0}},
      {stimulus: "<image src='img/RME_19.jpg' width = '700px'><br><br>", choices: ['arrogant','grateful','sarcastic','tentative'], data: {gender: 'F', face: 19, answer: 3}},
      {stimulus: "<image src='img/RME_20.jpg' width = '700px'><br><br>", choices: ['dominant','friendly','guilty','horrified'], data: {gender: 'M', face: 20, answer: 1}},
      {stimulus: "<image src='img/RME_21.jpg' width = '700px'><br><br>", choices: ['embarrassed','fantasizing','confused','panicked'], data: {gender: 'F', face: 21, answer: 1}},
      {stimulus: "<image src='img/RME_22.jpg' width = '700px'><br><br>", choices: ['preoccupied','grateful','insisting','imploring'], data: {gender: 'F', face: 22, answer: 0}},
      {stimulus: "<image src='img/RME_23.jpg' width = '700px'><br><br>", choices: ['contented','apologetic','defiant','curious'], data: {gender: 'M', face: 23, answer: 2}},
      {stimulus: "<image src='img/RME_24.jpg' width = '700px'><br><br>", choices: ['pensive','irritated','excited','hostile'], data: {gender: 'M', face: 24, answer: 0}},
      {stimulus: "<image src='img/RME_25.jpg' width = '700px'><br><br>", choices: ['panicked','incredulous','despondent','interested'], data: {gender: 'F', face: 25, answer: 3}},
      {stimulus: "<image src='img/RME_26.jpg' width = '700px'><br><br>", choices: ['alarmed','shy','hostile','anxious'], data: {gender: 'M', face: 26, answer: 2}},
      {stimulus: "<image src='img/RME_27.jpg' width = '700px'><br><br>", choices: ['joking','cautious','arrogant','reassuring'], data: {gender: 'F', face: 27, answer: 1}},
      {stimulus: "<image src='img/RME_28.jpg' width = '700px'><br><br>", choices: ['interested','joking','affectionate','contented'], data: {gender: 'F', face: 28, answer: 0}},
      {stimulus: "<image src='img/RME_29.jpg' width = '700px'><br><br>", choices: ['impatient','aghast','irritated','reflective'], data: {gender: 'F', face: 29, answer: 3}},
      {stimulus: "<image src='img/RME_30.jpg' width = '700px'><br><br>", choices: ['grateful','flirtatious','hostile','disappointed'], data: {gender: 'F', face: 30, answer: 1}},
      {stimulus: "<image src='img/RME_31.jpg' width = '700px'><br><br>", choices: ['ashamed','confident','joking','dispirited'], data: {gender: 'F', face: 31, answer: 1}},
      {stimulus: "<image src='img/RME_32.jpg' width = '700px'><br><br>", choices: ['serious','ashamed','bewildered','alarmed'], data: {gender: 'M', face: 32, answer: 0}},
      {stimulus: "<image src='img/RME_33.jpg' width = '700px'><br><br>", choices: ['embarrassed','guilty','fantasizing','concerned'], data: {gender: 'M', face: 33, answer: 3}},
      {stimulus: "<image src='img/RME_34.jpg' width = '700px'><br><br>", choices: ['aghast','baffled','distrustful','terrified'], data: {gender: 'F', face: 34, answer: 2}},
      {stimulus: "<image src='img/RME_35.jpg' width = '700px'><br><br>", choices: ['puzzled','nervous','insisting','contemplative'], data: {gender: 'F', face: 35, answer: 1}},
      {stimulus: "<image src='img/RME_36.jpg' width = '700px'><br><br>", choices: ['ashamed','nervous','suspicious','indecisive'], data: {gender: 'M', face: 36, answer: 2}}
    ]
};

//-------------------------- Close experiment

var end = {
  type: 'html-button-response',
  stimulus: "Great work!<br><br>" + 
  "You are now finished playing all the games.<br><br>" +
  "Click 'finish' to exit.<br><br>",
  choices: ['Finish'],
  data: {variable: "end"},
};

timeline.push(me_part1,end);