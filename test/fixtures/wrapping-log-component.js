import React from 'react';
import { Environment } from 'react-environment';

class Log extends React.Component {
  componentDidMount() {
    console.log(this.props.message);
  }
  render() {
    return null;
  }
}

const MyApp = () => (
  <div>
    <Environment environment='development'>
      <Log message='Hello world!' />
    </Environment>
  </div>
);

export default MyApp;
