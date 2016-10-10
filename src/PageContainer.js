var React=require('react');
var HeaderContainer=require('./Header');
var MainContainer=require('./MainContainer');


var PageContainer=React.createClass({
  render(){
    return(
    <div id="pagecontainer">
      <Header />
      <MainContainer />
      </div>
    );
  }
});

module.exports=PageContainer;
