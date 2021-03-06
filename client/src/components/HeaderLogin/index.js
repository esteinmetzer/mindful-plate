import React from "react";
import "../../index.css";


class HeaderLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: true
    }
  }
  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  render() {
    return (
      <div className="header">
        Mindful Plate
        <button className=" sign-in btn-default" onClick={() => this.props.handleDisplay()}>
          Get Started
        </button>
      </div>
    );
  }
}
export default HeaderLogin;
