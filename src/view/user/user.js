import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import actions from '../../store/actions/index'

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '山佳',
      job: 'develop',
      level: 'low',
      isLoading: false,
    }
  }

  add() {
    console.log(this.props)
    this.props.dispatch(actions.user.add_count)
  }
  sub() {
    this.props.dispatch(actions.user.sub_count)
  }

  render() {
    const { user, job, level } = this.state;
    const { count } = this.props.user;
    return (
      <div className="user-wrap">
        <div className="user-avatar"></div>
        <div className="user-nickname">{user}</div>
        <div className="user-job">i am a {job} - {level}</div>
        <Link to='/test'>跳转</Link>
        <div>这里放一个计数器用来练习redux</div>
        <div>{count}</div>
        <div className="btn" onClick={this.add.bind(this)}>点我加一</div>
        <div className="btn" onClick={this.sub.bind(this)}>点我减一</div>
      </div>
    )
  }
}

export default connect(state => ({ user: state.user}))(User);