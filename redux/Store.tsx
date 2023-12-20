// import { createStore } from 'redux';

// // Define your initial state and reducer function
// const initialState = {
//   teams: [],
// };

// const reducer:any = (state = initialState, action:any) => {
//   switch (action.type) {
//     case 'CREATE_TEAM':
//       return { ...state, teams: [...state.teams, { name: action.payload, tasks: [] }] };
//     // Add more cases for other actions as needed
//     default:
//       return state;
//   }
// };

// // Create the Redux store
// const store = createStore(reducer);

// export default store;




// store.js
import { createStore } from 'redux';

const initialState = {
  teams: [],
};

const reducer:any = (state = initialState, action:any) => {
  switch (action.type) {
    case 'CREATE_TEAM':
      return { ...state, teams: [...state.teams, action.payload] };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
