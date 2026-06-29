class AboutClass extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const name = this.props.name;
    const location = this.props.location;
    return (
      <div>
        <h3>Founder : {name}</h3>
        <h3>city : {location}</h3>
      </div>
    );
  }
}

export default AboutClass;
