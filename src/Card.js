import React from "react";

class Card extends React.Component {
  render() {
    const style = {
      borderTop: `4px solid ${this.props.borderColor}`,
    };

    const iconStyle = {
      height: `3.8em`,
      width: `3.8em`,
    };

    return (
      <div className="Card" style={style}>
        <div>
          <h2>{this.props.title}</h2>
          <p>{this.props.text}</p>
        </div>
        <div className="Card-Icon">
          <img src={this.props.icon} style={iconStyle} alt=""></img>
        </div>
      </div>
    );
  }
}

export default Card;
