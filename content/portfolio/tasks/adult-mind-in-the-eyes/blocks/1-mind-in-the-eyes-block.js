// Mind in the Eyes Block
var me_prompt = "<p>What is this person thinking and/or feeling?</p>";

timeline.push({
  timeline: [
      {
        type: 'html-keyboard-response',
        stimulus: '+',
        choices: jsPsych.NO_KEYS,
        trial_duration: 1000
      },
      {
        type: 'html-button-response',
        stimulus: jsPsych.timelineVariable('stimulus'),
        prompt: jsPsych.timelineVariable('prompt'),
        choices: jsPsych.timelineVariable('choices'),
        data: jsPsych.timelineVariable('data'),
        on_start: function(trial){
          console.log(trial.stimulus);
        }
      }
  ],
  randomize_order: true,
  timeline_variables: [
    {stimulus: "<image src=" + img_files[0] + " width = '500px'><br><br>",  prompt: me_prompt + prompts[0],  choices: ["playful","comforting","irritated","bored"], data: {answer: "1", answer_js: 0, gender: "M", img: 1}},
    {stimulus: "<image src=" + img_files[1] + " width = '500px'><br><br>",  prompt: me_prompt + prompts[1],  choices: ["terrified","upset","arrogant","annoyed"], data: {answer: "2", answer_js: 1, gender: "M", img: 2}},
    {stimulus: "<image src=" + img_files[2] + " width = '500px'><br><br>",  prompt: me_prompt + prompts[2],  choices: ["joking","flustered","desire","convinced"], data: {answer: "3", answer_js: 2, gender: "F", img: 3}},
    {stimulus: "<image src=" + img_files[3] + " width = '500px'><br><br>",  prompt: me_prompt + prompts[3],  choices: ["joking","insisting","amused","relaxed"], data: {answer: "2", answer_js: 1, gender: "M", img: 4}},
    {stimulus: "<image src=" + img_files[4] + " width = '500px'><br><br>",  prompt: me_prompt + prompts[4],  choices: ["irritated","sarcastic","worried","friendly"], data: {answer: "3", answer_js: 2, gender: "M", img: 5}},
    {stimulus: "<image src=" + img_files[5] + " width = '500px'><br><br>",  prompt: me_prompt + prompts[5],  choices: ["aghast","fantasizing","impatient","alarmed"], data: {answer: "2", answer_js: 1, gender: "F", img: 6}},
    {stimulus: "<image src=" + img_files[6] + " width = '500px'><br><br>",  prompt: me_prompt + prompts[6],  choices: ["apologetic","friendly","uneasy","dispirited"], data: {answer: "3", answer_js: 2, gender: "M", img: 7}},
    {stimulus: "<image src=" + img_files[7] + " width = '500px'><br><br>",  prompt: me_prompt + prompts[7],  choices: ["despondent","relieved","shy","excited"], data: {answer: "1", answer_js: 0, gender: "M", img: 8}},
    {stimulus: "<image src=" + img_files[8] + " width = '500px'><br><br>",  prompt: me_prompt + prompts[8],  choices: ["annoyed","hostile","horrified","preoccupied"], data: {answer: "4", answer_js: 3, gender: "F", img: 9}},
    {stimulus: "<image src=" + img_files[9] + " width = '500px'><br><br>",  prompt: me_prompt + prompts[9],  choices: ["cautious","insisting","bored","aghast"], data: {answer: "1", answer_js: 0, gender: "M", img: 10}},
    {stimulus: "<image src=" + img_files[10] + " width = '500px'><br><br>", prompt: me_prompt + prompts[10], choices: ["terrified","amused","regretful","flirtatious"], data: {answer: "3", answer_js: 2, gender: "M", img: 11}},
    {stimulus: "<image src=" + img_files[11] + " width = '500px'><br><br>", prompt: me_prompt + prompts[11], choices: ["indifferent","embarrassed","sceptical","dispirited"], data: {answer: "3", answer_js: 2, gender: "M", img: 12}},
    {stimulus: "<image src=" + img_files[12] + " width = '500px'><br><br>", prompt: me_prompt + prompts[12], choices: ["decisive","anticipating","threatening","shy"], data: {answer: "2", answer_js: 1, gender: "M", img: 13}},
    {stimulus: "<image src=" + img_files[13] + " width = '500px'><br><br>", prompt: me_prompt + prompts[13], choices: ["irritated","disappointed","depressed","accusing"], data: {answer: "4", answer_js: 3, gender: "M", img: 14}},
    {stimulus: "<image src=" + img_files[14] + " width = '500px'><br><br>", prompt: me_prompt + prompts[14], choices: ["contemplative","flustered","encouraging","amused"], data: {answer: "1", answer_js: 0, gender: "F", img: 15}},
    {stimulus: "<image src=" + img_files[15] + " width = '500px'><br><br>", prompt: me_prompt + prompts[15], choices: ["irritated","thoughtful","encouraging","sympathetic"], data: {answer: "2", answer_js: 1, gender: "M", img: 16}},
    {stimulus: "<image src=" + img_files[16] + " width = '500px'><br><br>", prompt: me_prompt + prompts[16], choices: ["doubtful","affectionate","playful","aghast"], data: {answer: "1", answer_js: 0, gender: "F", img: 17}},
    {stimulus: "<image src=" + img_files[17] + " width = '500px'><br><br>", prompt: me_prompt + prompts[17], choices: ["decisive","amused","aghast","bored"], data: {answer: "1", answer_js: 0, gender: "F", img: 18}},
    {stimulus: "<image src=" + img_files[18] + " width = '500px'><br><br>", prompt: me_prompt + prompts[18], choices: ["arrogant","grateful","sarcastic","tentative"], data: {answer: "4", answer_js: 3, gender: "F", img: 19}},
    {stimulus: "<image src=" + img_files[19] + " width = '500px'><br><br>", prompt: me_prompt + prompts[19], choices: ["dominant","friendly","guilty","horrified"], data: {answer: "2", answer_js: 1, gender: "M", img: 20}},
    {stimulus: "<image src=" + img_files[20] + " width = '500px'><br><br>", prompt: me_prompt + prompts[20], choices: ["embarrassed","fantasizing","confused","panicked"], data: {answer: "2", answer_js: 1, gender: "F", img: 21}},
    {stimulus: "<image src=" + img_files[21] + " width = '500px'><br><br>", prompt: me_prompt + prompts[21], choices: ["preoccupied","grateful","insisting","imploring"], data: {answer: "1", answer_js: 0, gender: "F", img: 22}},
    {stimulus: "<image src=" + img_files[22] + " width = '500px'><br><br>", prompt: me_prompt + prompts[22], choices: ["contented","apologetic","defiant","curious"], data: {answer: "3", answer_js: 2, gender: "M", img: 23}},
    {stimulus: "<image src=" + img_files[23] + " width = '500px'><br><br>", prompt: me_prompt + prompts[23], choices: ["pensive","irritated","excited","hostile"], data: {answer: "1", answer_js: 0, gender: "M", img: 24}},
    {stimulus: "<image src=" + img_files[24] + " width = '500px'><br><br>", prompt: me_prompt + prompts[24], choices: ["panicked","incredulous","despondent","interested"], data: {answer: "4", answer_js: 3, gender: "F", img: 25}},
    {stimulus: "<image src=" + img_files[25] + " width = '500px'><br><br>", prompt: me_prompt + prompts[25], choices: ["alarmed","shy","hostile","anxious"], data: {answer: "3", answer_js: 2, gender: "M", img: 26}},
    {stimulus: "<image src=" + img_files[26] + " width = '500px'><br><br>", prompt: me_prompt + prompts[26], choices: ["joking","cautious","arrogant","reassuring"], data: {answer: "2", answer_js: 1, gender: "F", img: 27}},
    {stimulus: "<image src=" + img_files[27] + " width = '500px'><br><br>", prompt: me_prompt + prompts[27], choices: ["interested","joking","affectionate","contented"], data: {answer: "1", answer_js: 0, gender: "F", img: 28}},
    {stimulus: "<image src=" + img_files[28] + " width = '500px'><br><br>", prompt: me_prompt + prompts[28], choices: ["impatient","aghast","irritated","reflective"], data: {answer: "4", answer_js: 3, gender: "F", img: 29}},
    {stimulus: "<image src=" + img_files[29] + " width = '500px'><br><br>", prompt: me_prompt + prompts[29], choices: ["grateful","flirtatious","hostile","disappointed"], data: {answer: "2", answer_js: 1, gender: "F", img: 30}},
    {stimulus: "<image src=" + img_files[30] + " width = '500px'><br><br>", prompt: me_prompt + prompts[30], choices: ["ashamed","confident","joking","dispirited"], data: {answer: "2", answer_js: 1, gender: "F", img: 31}},
    {stimulus: "<image src=" + img_files[31] + " width = '500px'><br><br>", prompt: me_prompt + prompts[31], choices: ["serious","ashamed","bewildered","alarmed"], data: {answer: "1", answer_js: 0, gender: "M", img: 32}},
    {stimulus: "<image src=" + img_files[32] + " width = '500px'><br><br>", prompt: me_prompt + prompts[32], choices: ["embarrassed","guilty","fantasizing","concerned"], data: {answer: "4", answer_js: 3, gender: "M", img: 33}},
    {stimulus: "<image src=" + img_files[33] + " width = '500px'><br><br>", prompt: me_prompt + prompts[33], choices: ["aghast","baffled","distrustful","terrified"], data: {answer: "3", answer_js: 2, gender: "F", img: 34}},
    {stimulus: "<image src=" + img_files[34] + " width = '500px'><br><br>", prompt: me_prompt + prompts[34], choices: ["puzzled","nervous","insisting","contemplative"], data: {answer: "2", answer_js: 1, gender: "F", img: 35}},
    {stimulus: "<image src=" + img_files[35] + " width = '500px'><br><br>", prompt: me_prompt + prompts[35], choices: ["ashamed","nervous","suspicious","indecisive"], data: {answer: "3", answer_js: 2, gender: "M", img: 36}},
  ]
});