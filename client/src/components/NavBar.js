import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {

  render() {

    // Generate Buttons
    this.buttons = [];

    this.props.links.forEach((link, id) => {
      this.buttons.push(
        <NavBarButton 
          key={id} 
          text={link.text} 
          link={link.link}
          isActive={id === 0}
        />
      );
    });

    return(
      <div className='NavBar__Container'>
        {this.buttons}
      </div>
    );
  }
}

class NavBarButton extends Component {

  constructor(props) {
    super(props);

    this.setActive = this.setActive.bind(this);
  }

  componentDidMount() {
    if (this.props.isActive) {
      this.setActive();
    }
  }

  setActive() {
    this.buttonDOM.classList.add('NavBar__Button--active');
  }

  render() {
    return(
      <a  
          ref={(buttonDOM) => {this.buttonDOM = buttonDOM}} 
          className='NavBar__Button' 
          href={this.props.link}
      >
        {this.props.text}
      </a>
    );
  }
}

export default NavBar;