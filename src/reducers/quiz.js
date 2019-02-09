import {
  REQUEST_QUESTIONS,
  RECEIVE_QUESTIONS,
  SUBMIT_ANSWER,
} from './../actions/quiz';
import update from 'immutability-helper';

const initState = {
  currentQuestion: 0,
  reachedEnd: false,
  isFetchingQuestions: false,
  questions: []
}

export default function quiz(state = initState, action) {

  switch (action.type) {
    case REQUEST_QUESTIONS:
      return update(state, {
        $merge: {
          isFetchingQuestions: true
        }
      })
    case RECEIVE_QUESTIONS:
      return update(state, {
        $merge: {
          isFetchingQuestions: false,
          questions: action.questions
        }
      })
    case SUBMIT_ANSWER:
      var newQuestions = state.questions.map((question, index) => {
        if (index !== action.questionIndex) return question;

        return update(question, { $merge: { answer: action.answer } });
      });

      return update(state, {
        $merge: {
          currentQuestion: state.currentQuestion + 1,
          reachedEnd: (state.currentQuestion + 1) >= state.questions.length,
          questions: newQuestions
        }
      })
    default:
      return state;
  }

}