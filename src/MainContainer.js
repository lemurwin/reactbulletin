var React=require('react');
var Menu=require('./Menu');
var BodyContainer=require('./BodyContainer');

var MainContainer=React.createClass({
  render(){
    return(
      <div id="maincontainer">
      <Menu />
      <BodyContainer />
      </div>
    );
  }
});

module.exports=MainContainer;
