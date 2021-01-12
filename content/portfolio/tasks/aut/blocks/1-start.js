var timeline = [];
        
timeline.push({
  type: 'instructions',
  pages: [
    "Welcome to the <b>alternative uses</b> game.<br><br>",
    "<div style = 'text-align: left; margin: 20px 10%;'>"+
    "This study is about how people think creatively, like how people come up with original, innovative, and valuable ideas.<br><br>"+ 
    "Everyone can think creatively, and we’d like to learn more about how people do it." +
    "</div>",
    "<div style = 'text-align: left; margin: 20px 10%;'>"+
    "For this task, you will see a picture of an everyday object, like a brick. We'll ask you to come up with original and creative uses for that object. We'll repeat this task three times." +
    "</div>"
  ],
  show_clickable_nav: true,
  allow_backward: true,
  key_forward: -1,
  key_backward: -1,
  button_label_next: "continue",
  data: {variable: 'welcome'}
});

