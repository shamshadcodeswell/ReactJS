import React from "react";

class AboutClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        login: this.props.name,
        id: this.props.location,
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/shamshadcodeswell");
    const json = await data.json();
    console.log(json);

    this.setState({
      userInfo: json,
    });
  }

  render() {
    // const name = this.props.name;
    // const location = this.props.location;
    return (
      <div>
        <h3>Founder : {this.state.userInfo.login}</h3>
        <h3>city : {this.state.userInfo.id}</h3>
      </div>
    );
  }
}

export default AboutClass;
