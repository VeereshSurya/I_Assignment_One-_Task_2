import React, { Component } from "react";
import "./App.css";
import { FetchImage } from "./api";
import Cards from "./Components/Cards";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  // function FetchImage is called componentDidMount!
  componentDidMount = async () => {
    const modifiedData = await FetchImage();
    this.setState({
      data: modifiedData,
    });
  };

  render() {
    // Destructuring data from the data
    const { data } = this.state;
    return (
      <div>
        {/*  Passing data props to Cards component!  */}
        <Cards data={data} />
      </div>
    );
  }
}

export default App;
