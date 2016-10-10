var React=require('react');
var BodyHeader=require('./BodyHeader');
var BodyContent=require('./BodyContent');


var BodyContainer=React.createClass({
  render(){
    return(
      <div id="bodycontainer">
      <BodyHeader />
      <BodyContent />
      </div>
    );
  }
});

module.exports=BodyContainer;
