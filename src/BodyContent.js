var React=require('react');
var Topics=require('./Topics');
var Chat = require('./Chat');
var BodyContent=React.createClass({
  render(){
    return(
      <div id="bodycontent">
        <Topics />
        <Chat />
      </div>
    )
  }
});

module.exports=BodyContent;
