import React from 'react';
import { connect } from 'react-redux';

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: 'test',
    };
  }

  componentDidMount() {
    // console.log(this.props);
  }

  onClick() {
    const { history } = this.props;
    history.push('/');
  }

  render() {
    const { test } = this.state;
    return (
      <div className="user-wrap" onClick={this.onClick.bind(this)}>
        {test}
      </div>
    );
  }
}

export default connect()(Test);
