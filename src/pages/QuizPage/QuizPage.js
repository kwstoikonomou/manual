import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchQuestions, submitAnswer } from '../../actions/quiz';

import './QuizPage.css';

class QuizPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  componentDidMount() {
    const dispatch = this.props.dispatch;
    const questions = this.props.questions;

    if (!questions || questions.length === 0)
      dispatch(fetchQuestions())
  }

  getSkeleton() {
    return (
      <div className="QuizPage">
        <div className="QuizPageContainer">

          <div className="BackToLandingWrapper">
            <Link to="/" className="BackToLanding">{"<"} Back to Landing page</Link>
          </div>

          <div className="QuizPageTitle">Manual Quiz</div>

          <div className="shine skeleton" style={{ height: '20px' }} />

        </div>
      </div>
    )
  }

  getQuizFinished() {
    const questions = this.props.questions;

    //The specification states: If the user answers “true” in any of the true/false questions then he can not use Manual.
    //The problem is that with the current JSON provided i have no way to tell which are the boolean question other than checking the answer with `typeof`.
    //I am going to do exactly that here but in the real world probably this would cause problems and we will need another atribute to flag those questions.
    const canUseManual = questions.reduce((acc, question) => {
      if (typeof (question.answer) === "boolean")
        return acc && !question.answer;
      else
        return acc;
    }, true)

    return (
      <div className="QuizPage">
        <div className="QuizPageContainer">

          <div className="BackToLandingWrapper">
            <Link to="/" className="BackToLanding">{"<"} Back to Landing page</Link>
          </div>

          <div className="QuizPageTitle">Manual Quiz</div>

          {
            canUseManual
              ? <div className="QuestionText">
                Great news! We have the perfect treatment for your hair loss. Proceed to
                <a href="https://www.manual.co/"> www.manual.co</a>, and prepare to say hello to your new hair!
              </div>
              : <div className="QuestionText">
                Unfortunately, we are unable to prescribe this medication for you. This is because
                finasteride can alter the PSA levels, which maybe used to monitor for cancer. You
                should discuss this further with your GP or specialist if you would still like this
                medication
              </div>
          }

        </div>
      </div>
    )
  }

  render() {
    const dispatch = this.props.dispatch;
    const currentQuestionIndex = this.props.currentQuestion;
    const reachedEnd = this.props.reachedEnd;
    const isFetchingQuestions = this.props.isFetchingQuestions;
    const questions = this.props.questions;

    let currentQuestion = questions[currentQuestionIndex];

    if (reachedEnd) return this.getQuizFinished();
    if (!currentQuestion || isFetchingQuestions) return this.getSkeleton();

    return (
      <div className="QuizPage">
        <div className="QuizPageContainer">

          <div className="BackToLandingWrapper">
            <Link to="/" className="BackToLanding">{"<"} Back to Landing page</Link>
          </div>

          <div className="QuizPageTitle">Manual Quiz</div>

          <div className="QuestionText"><strong>{currentQuestionIndex + 1}</strong>. {currentQuestion.question}</div>

          <div className="QuestionOptions">
            {
              currentQuestion.options.map((option, index) => {
                let key = Object.keys(option)[0];
                let value = option[key];

                return (
                  <div key={currentQuestionIndex + "@" + index} className="QuestionOption" onClick={() => { dispatch(submitAnswer(currentQuestionIndex, value)) }}>
                    <div dangerouslySetInnerHTML={{ __html: key }} />
                  </div>
                )
              })
            }
          </div>

        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { currentQuestion, reachedEnd, isFetchingQuestions, questions } = state.quiz

  return {
    currentQuestion,
    reachedEnd,
    isFetchingQuestions,
    questions
  }
}

export default connect(mapStateToProps)(QuizPage)
