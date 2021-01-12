var childhood_stress_questions = [
  {prompt: "My family is a source of strength and support.", required: true},
  {prompt: "I don't know what my parent(s) or other people in my home are going to say or do from day-to-day.", required: true},
  {prompt: "In the neighborhood where I live, people feel safe walking alone after dark.", required: true},
  {prompt: "There is enough food for everyone in the home where I live.", required: true},
  {prompt: "People around me get into physical fights (for example, at school, in my neighborhood, or where I hang out).", required: true},
  {prompt: "There is conflict (arguing, yelling, anger) between me and the adult(s) in my home.", required: true}
];

var childhood_stress_labels = ["Never True", "Rarely True","Sometimes True","Often True","Very Often True"];

var childhood_stress = {
  timeline: [
    {
      type: "survey-matrix",
      preamble: "These questions ask about your life RIGHT NOW:",
      questions: jsPsych.timelineVariable('questions'),
      labels: childhood_stress_labels,
      data: jsPsych.timelineVariable('data'),
      screenshot: false
    }
  ],
  timeline_variables: [
    {questions: childhood_stress_questions, data: {variable: 'childhood_stress'}}
  ]
};