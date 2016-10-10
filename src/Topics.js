var React = require('react');
var TopicsNav=require('./TopicsNav');
var TopicsContent=require('./TopicsContent');

var Topics=React.createClass({
  render(){
    return(
      <div id="topics">
        <TopicsNav />
        <TopicsContent />
        </div>
    );
  }
});

module.exports=Topics;
