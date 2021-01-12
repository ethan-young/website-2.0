//-------------------------- Start the timeline

var timeline = [];

var instructions = {
  type: 'instructions',
  pages: [
    "<div style = 'text-align: left; margin: 20px 5px;'>" +
    "Welcome to the <b>mind reading</b> game!" +
    "</div><br><br>",
    "<div style = 'text-align: left; margin: 10px 10%;'>" +
    "In this task you will watch videos of people's faces. Each film will be followed by four words. " +
    "Choose the word that best describes how the person is feeling.<br><br>" +
    "If you feel that more than one word is applicable, please choose the word which you consider to be most suitable. " +
    "If you really don’t know the meaning of a word you can look it up by hovering the mouse over the word *definitions*.<br><br>" +
    "Click 'Continue' to practice" +
    "</div><br><br>"
  ],
  show_clickable_nav: true,
  allow_backward: true,
  key_forward: -1,
  key_backward: -1,
  button_label_next: "continue",
  data: {variable: 'instructions'}
};

timeline.push(instructions);