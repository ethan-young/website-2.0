// Function to make PRL stimuli in 4 quadrants
var prl_stim = function(left, up, right, down){
  if(up === null){
     up = "<div class = 'blank up'></div>";
  } else{
     up = "<div class = 'up'>" + up +  "</div>";
  }
  if(left === null){
     left = "<div class = 'blank left'></div>";
  } else{
     left = "<div class = 'left'>" + left +  "</div>";
  }
  if(down === null){
     down = "<div class = 'blank down'></div>";
  } else{
     down = "<div class='down'>" + down +  "</div>";
  }
  if(right === null){
     right = "<div class = 'blank right'></div>";
  } else{
     right = "<div class='right'>" + right +  "</div>";
  }
  var html = "<style>" +
               "div{text-align: center;}" +
               "img{object-fit: scale-down; height: 100%; width: 100%;}" +
               ".blank{border: 1px dashed;}" +
               ".pressed{background: rgba(0,0,0,0.25);}" +
               ".selected{border: 3px solid red;}" +
               ".prl_grid{justify-content: center; display: grid; grid-template: 120px 120px 120px 70px / 160px 160px 160px; grid-gap: 10px;}" +
               ".key_grid{justify-content: center; display: grid; grid-template: 40px 40px / 40px 40px 40px; grid-gap: 5px;}" +
             "</style>";
  html += "<div class = 'prl_grid'>";
  html +=   "<div></div>";                     // row 1
  html +=   up;
  html +=   "<div></div>";
  html +=   left;                               // row 2
  html +=   "<div id = 'feedback_cell'></div>"; // center
  html +=   right;
  html +=   "<div></div>";                      // row 3
  html +=   down;
  html +=   "<div></div>";
  html +=   "<div></div>";                      // row 4
  html +=   "<div class = 'key_grid'>" +        // arrow keys
                "<div></div>" +
                "<div class = 'up'><img src='img/key.png' width=50%></div>" +
                "<div></div>" +
                "<div class = 'left'  > <img src='img/key.png' width=50% style='transform: rotate(270deg);'> </div>" +
                "<div class = 'down'  > <img src='img/key.png' width=50% style='transform: rotate(180deg);'> </div>" +
                "<div class = 'right' > <img src='img/key.png' width=50% style='transform: rotate(90deg);'> </div>" +
            "</div>";
  html +=   "<div></div>";
  html += "</div>";

  return(html);
};