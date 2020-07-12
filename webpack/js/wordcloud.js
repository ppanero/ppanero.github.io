var d3 = require("d3");
var cloud = require("d3-cloud");

window.addEventListener('load', function () {
  var myWords = [
    // Programming languages
    {word: "Python", size: "100", cat: "plang"},
    {word: "JavaScript", size: "50", cat: "plang"},
    {word: "Bash", size: "30", cat: "plang"},
    {word: "Java", size: "40", cat: "plang"},
    // Frameworks
    {word: "Invenio", size: "90", cat: "fw"},
    {word: "Flask", size: "80", cat: "fw"},
    {word: "React", size: "50", cat: "fw"},
    {word: "Tensorflow", size: "60", cat: "fw"},
    {word: "Keras", size: "40", cat: "fw"},
    // Databases
    {word: "Elasticsearch", size: "90", cat: "db"},
    {word: "PostgreSQL", size: "70", cat: "db"},
    {word: "MySQL", size: "40", cat: "db"},
    {word: "SQLite", size: "40", cat: "db"},
    // DevOps
    {word: "Docker", size: "90", cat: "devops"},
    {word: "OpenShift", size: "90", cat: "devops"},
    {word: "Helm", size: "60", cat: "devops"},
    {word: "Puppet", size: "30", cat: "devops"},
    {word: "Git", size: "80", cat: "devops"},
    {word: "Gitlab-CI", size: "30", cat: "devops"},
    {word: "GitHub Actions", size: "50", cat: "devops"},
    {word: "Travis CI", size: "80", cat: "devops"},
    // Data
    {word: "Neural Networks", size: "70", cat: "data"},
    {word: "Data visualization", size: "60", cat: "data"},
    {word: "Spark", size: "40", cat: "data"},
    {word: "Kafka", size: "30", cat: "data"},
    {word: "Flume", size: "30", cat: "data"},
    {word: "YARN", size: "30", cat: "data"},
  ]

  // set the dimensions and margins of the graph
  var margin = {top: 5, right: 5, bottom: 5, left: 5},
      width = 1200 - margin.left - margin.right,
      height = 700 - margin.top - margin.bottom;

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
    .words(myWords.map(function(d) { return {text: d.word, props: [d.size, d.cat]}; }))
    .padding(5) //space between words
    .fontSize(function(d) { return d.props[0]; })      // font size of words
    .on("end", draw);
  layout.start();

  function getColorFromCategory(category) {
    switch(category) {
      case "plang":
        return "#E4E423";
      case "fw":
        return "#07AE39";
      case "db":
        return "#FD6933";
      case "devops":
        return "#2A15E2";
      case "data":
        return "#40EAF6";
      default:
        return "#FFFFFF";
    }
  }
  // This function takes the output of 'layout' above and draw the words
  // Wordcloud features that are THE SAME from one word to the other can be here
  function draw(words) {
    svg
      .append("g")
        .attr("transform", "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")")
        .selectAll("text")
          .data(words)
        .enter().append("text")
          .style("font-size", function(d) { return d.props[0]; })
          .style("fill", function (d) { return getColorFromCategory(d.props[1]);})
          .attr("text-anchor", "middle")
          .style("font-family", "Impact")
          .attr("transform", function(d) {
            return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
          })
          .text(function(d) { return d.text; });
  }
})