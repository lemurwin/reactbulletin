var React=require('react');

var Chat=React.createClass({
  render(){
    return(
      <div id="chat">
      <ul>
          <li>Hello</li>
          <li>Whats up?</li>
          <li>Hello Friend</li>
        </ul>
        <div id="entertext">
        <input type="text" name="Text" /><button>Send</button>
        </div>

        </div>
    );
  }
});

module.exports=Chat;
