var d3 = require("d3");
var cloud = require("d3-cloud");

window.addEventListener('load', function () {
  var myWords = [
    // Programming languages
    {word: "Python", size: "100"},
    {word: "JavaScript", size: "60"},
    {word: "Bash", size: "60"},
    {word: "Java", size: "50"},
    //Frameworks
    {word: "Invenio", size: "90"},
    {word: "Flask", size: "80"},
    {word: "React", size: "70"},
    {word: "Tensorflow", size: "60"},
    {word: "Keras", size: "60"},
    // Databases
    {word: "Elasticsearch", size: "90"},
    {word: "PostgreSQL", size: "90"},
    {word: "MySQL", size: "70"},
    {word: "SQLite", size: "40"},
    //DevOps
    {word: "Docker", size: "90"},
    {word: "OpenShift", size: "90"},
    {word: "Helm", size: "60"},
    {word: "Puppet", size: "50"},
    {word: "Git", size: "80"},
    {word: "Gitlab-CI", size: "60"},
    {word: "GitHub Actions", size: "70"},
    {word: "Travis CI", size: "90"},
    //Big Data
    {word: "Spark", size: "50"},
    {word: "Kafka", size: "40"},
    {word: "Flume", size: "40"},
    {word: "YARN", size: "40"},
  ]

  // set the dimensions and margins of the graph
  var margin = {top: 10, right: 10, bottom: 10, left: 10},
      width = 1200 - margin.left - margin.right,
      height = 600 - margin.top - margin.bottom;

  // append the svg object to the body of the page
  var svg = d3.select("#skills-cloud").append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

  // Constructs a new cloud layout instance. It run an algorithm to find the position of words that suits your requirements
  // Wordcloud features that are different from one word to the other must be here
  var layout = cloud()
    .size([width, height])
    .words(myWords.map(function(d) { return {text: d.word, size:d.size}; }))
    .padding(5) //space between words
    .fontSize(function(d) { return d.size; })      // font size of words
    .on("end", draw);
  layout.start();

  // This function takes the output of 'layout' above and draw the words
  // Wordcloud features that are THE SAME from one word to the other can be here
  function draw(words) {
    svg
      .append("g")
        .attr("transform", "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")")
        .selectAll("text")
          .data(words)
        .enter().append("text")
          .style("font-size", function(d) { return d.size; })
          .style("fill", "#000000")
          .attr("text-anchor", "middle")
          .style("font-family", "Impact")
          .attr("transform", function(d) {
            return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
          })
          .text(function(d) { return d.text; });
  }
})