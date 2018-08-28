
const defaultState = {
  count: 0,
};

// function Reducer(defaultState) {
//   this.state = defaultState;
//   this.actionType = [];
// }
//
// Reducer.prototype.use = function(name,cb) {
//
// }
//
// const reducer = new Reducer({
//   defaultState: {
//     value: 0
//   }
// })

// reducer.use('ADD_COUNT', (state, value) => ({...state, value}))


function reducer(state = defaultState, action) {
  switch (action.type) {
    case 'ADD_COUNT':
      return Object.assign({}, state, { count: state.count + 1 });
    case 'SUB_COUNT':
      return Object.assign({}, state, { count: state.count - 1 });
    default:
      return state;
  }
}

export default reducer;
