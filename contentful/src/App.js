import React from "react";
import "./App.css";
import * as contentful from "contentful";

class App extends React.Component {
  client = contentful.createClient({
    space: "<Space ID>",
    accessToken: "<Content Delivery API - access token>"
  });

  state = {
    items: []
  };

  componentDidMount = () => {
    this.client.getEntries().then(response => {
      this.setState({
        items: response.items
      });
    });
  };

  render() {
    return (
      <div>
        {this.state.items.map(item => (
          <li>{item.fields.title} - {item.fields.bodyText}</li>
        ))}
      </div>
    );
  }
}

export default App;
