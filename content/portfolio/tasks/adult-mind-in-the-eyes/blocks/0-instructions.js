//-------------------------- Start the timeline

var timeline = [];

timeline.push({
  type: 'instructions',
  pages: [
    "<div style = 'text-align: left; margin: 20px 5px;'>" +
    "Welcome to the <b>mind in the eyes</b> game!" +
    "</div><br><br>",
    "<div style = 'text-align: left; margin: 10px 10%;'>" +
    "For each set of eyes, choose the word that best describes what the person in the picture is thinking or feeling. " +
    "You may feel that more than one word is applicable but please choose the word you consider to be most suitable.<br><br>" +
    "Before making your choice, make sure that you have read all 4 words. You should try to do the task as quickly as possible but you will not be timed.<br><br>" +
    "If you really don’t know the meaning of a word you can look it up by hovering the mouse over the word *definitions*. <br><br>" +
    "Click 'Continue' to practice" +
    "</div><br><br>"
  ],
  show_clickable_nav: true,
  allow_backward: true,
  key_forward: -1,
  key_backward: -1,
  button_label_next: "continue",
  data: {variable: 'welcome'}
});