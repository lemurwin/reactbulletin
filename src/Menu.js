var React=require('react');

var Menu=React.createClass({
  render(){
    return(
      <div id="menucontainer">
        <ul id="menu">
          <li id="menuitem">Miles M</li>
          <li id="menuitem">Messages</li>
          <li id="menuitem">Calendar</li>
          <li id="menuitem">Subscriptions</li>
          <li id="menuitem">Connections/Friends</li>
          </ul>
      </div>
    );
  }
});

module.exports=Menu;
