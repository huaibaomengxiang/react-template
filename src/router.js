import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';


import User from './view/user/user';
import Test from './view/test/test';


const routers = [
  {
    name: 'user',
    path: '/',
    component: User,
    exact: true,
  },
  {
    name: 'test',
    path: '/test',
    component: Test,
  },
];

const App = () => (
  <Router>
    <Switch>
      {
          routers.map(v => <Route key={v.name} exact={v.exact} path={v.path} component={v.component} />)
        }
    </Switch>
  </Router>
);

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//
//   render() {
//     return (
//       <Router>
//         <Switch>
//           {
//             routers.map(v => <Route key={v.name} exact={v.exact} path={v.path} component={v.component} />)
//           }
//         </Switch>
//       </Router>
//     );
//   }
// }


export default App;
