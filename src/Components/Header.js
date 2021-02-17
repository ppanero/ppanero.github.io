import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { activeItem: 'home' };
    this.handleItemClick = (e, { name }) => {
      this.setState({ activeItem: name });
    };
  }

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item
            name="Home"
            active={activeItem === 'Home'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="About"
            active={activeItem === 'About'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="Resume"
            active={activeItem === 'Resume'}
            onClick={this.handleItemClick}
          />
        </Menu>
      </div>
    );
  }
}

export default Header;
