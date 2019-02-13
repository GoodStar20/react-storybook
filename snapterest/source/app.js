class ReactClass extends Component {
  state = {
    isHeaderHidden: false
  }
  handleClick = () => {
    this.setState(prevState => ({
      isHeaderHidden: !prevState.isHeaderHidden
    }));
  }

  render() {
    const {
      isHeaderHidden
    } = this.state;
    if (isHeaderHidden) {
      return (
        <button
          className="btn ban-default"
          onClick={this.handleClick}
        >
          Toggle Header
  </button>
      );
    }
    return (
      <div>
        <h1 className="header">Stateful React Component</h1>
        <button
          className="btn ban-default"
          onClick={this.handleClick}
        >
          Toggle Header
  </button>
      </div>
    );
  }
}



















