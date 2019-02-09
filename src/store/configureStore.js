import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers/rootReducer';

const loggerMiddleware = createLogger();

export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunkMiddleware, loggerMiddleware)
  )
}



// STORE example structure

// store = {
//   quiz: {
//     currentQuestion: 0,
//     reachedEnd: false,
//     isFetchingQuestions: false,
//     questions: [{
//       question: "Have you ever....?",
//       type: "ChoiceType",
//       options: [
//         {
//           "Key": value
//         },
//         {
//           "Key2": value2
//         }
//       ],
//       answer: null
//     }, {}, {}, {}]
//   },
// }