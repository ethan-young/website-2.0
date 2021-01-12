// PRL instructions

// instructions
var study_outline = {
  type: "instructions",
  pages: [
  // page 1
  "Welcome to the <b>Choose an Image</b> game.",
  // page 2
  "<div style='text-align: left;'>" +
  "During this game, you will see two images that will appear in one of four places on the screen:</div><br>" +
   prl_stim('<img src="img/fractal1.png">','<img src="img/fractal2.png">',null,null) +
  "<br><div style='text-align: left;'>" +
  "One image is the correct more often than the other. Choose the image that tends to be correct more often.</div>",
  // page 3
  "<div style='text-align: left;'>" +
  "At first, you will not know which image tends to be correct more often. Use the arrow keys to choose an image. "+
  "Then, the computer will tell you if your choice was correct or incorrect.<br><br>"  +
  "<div style='width: 50%; float: left; text-align: center;'>" +
  "<li>If correct, you will see a smiley face:</li>" +
  "<img src='img/correct.jpg' width=25% style='padding: 15px;'><div style='color: green;'><h2>Correct</h2></div></div>" +
  "<div style='width: 50%; float: right;text-align: center;'>" +
  "<li>If incorrect, you will see a frowny face:</li>" +
  "<img src='img/incorrect.jpg' width=25% style='padding: 15px;'><div style='color: red;'><h2>Incorrect</h2></div></div></div>",
  // page 5
  "<div style='text-align: left;'>" +
  "To give you a feel for the game, you will practice a few rounds.<br><br>Click 'next' to practice.</div>",
  ],
  data: {variable: "prl_inst"},
  show_clickable_nav: true,
  allow_keys: false
};

timeline.push(study_outline);