var React = require('react');


var Header = React.createClass({
  render() {
    return(
      <div id="headercontainer">
      <div id="header">
        <div id="main">BulletinBoard</div>

          <div id="user">
            <div id="picture"></div>
            <div>Miles M</div>
          </div>
        </div>
        </div>
    )
  }

});

module.exports=Header;
