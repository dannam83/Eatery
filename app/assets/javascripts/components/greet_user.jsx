window.GreetUser = React.createClass({
  render: function() {
    return (
      <div id="root">
        <h1>Hello {this.props.name}!</h1>
      </div>
    )
  }
});
