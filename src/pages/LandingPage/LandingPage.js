import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Button from './../../components/Button/Button';

import { fetchQuestions } from '../../actions/quiz';

import manualSymbol from './../../icons/manual-symblol.svg';
import facebook from './../../icons/facebook.svg';
import linkedIn from './../../icons/linkedin.svg';
import twitter from './../../icons/twitter.svg';
import coverHairPhoto from './../../icons/hair-cat-header.jpg';
import coverHairPhoto2x from './../../icons/hair-cat-header@2x.jpg';
import hairPhoto from './../../icons/hair-photo-1-2-x.jpg';
import hairPhoto2x from './../../icons/hair-photo-1-2-x@2x.jpg';
import sexPhoto from './../../icons/sex-photo-1-2-x.jpg';
import sexPhoto2x from './../../icons/sex-photo-1-2-x@2x.jpg';

import './LandingPage.css';

class LandingPage extends React.Component {
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

  render() {
    return (
      <div className="LandingPage">

        <div className="LPHeader">
          <div className="LPHeaderContainer">
            <div className="LPSymbol">
              <img alt="" src={manualSymbol} style={{ height: '40px' }} />
            </div>

            <div className="LPTitle">
              BE GOOD TO YOURSELF
            </div>

            <div className="LPSubTitle">
              We’re working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out.
            </div>

            <Link to="/quiz">
              <Button>TAKE THE QUIZ</Button>
            </Link>

          </div>
        </div>
        <img alt="" src={coverHairPhoto} srcSet={coverHairPhoto2x + " 2x"} className="no-mb-hidden" style={{ width: '100%' }} />

        <div className="LPSection">
          <div className="LPSectionTitle">What we can help with</div>

          <div className="LPContentBlock ContentRight">
            <div className="Image">
              <img alt="" src={hairPhoto} srcSet={hairPhoto2x + " 2x"} style={{ width: '100%' }} />
            </div>

            <div className="Content">
              <div className="ContentTitle">Hair Loss</div>
              <div className="ContentSubTitle">Hair loss needn’t be irreversible. We can help!</div>
              <div className="ContentText">Hair loss needn’t be irreversible. There’s a scientifically proven way that’s most effective in keeping and regrowing your hair. It’s all to do with blocking a pesky hormone called DHT. That’s the bad guy behind hair loss. And you can keep him at bay. The choice is yours.</div>

              <div className="ContentCounter">01</div>
            </div>
          </div>

          <div className="LPContentBlock ContentLeft">
            <div className="Content">
              <div className="ContentTitle">Erectile Dysfunction</div>
              <div className="ContentSubTitle">Erections can be a tricky thing. But no need to feel down!</div>
              <div className="ContentText">There are plenty of reasons why you might be having difficulty in the erection department. We can help you figure out possible reasons why. And prescribe a pill if needed.</div>

              <div className="ContentCounter">02</div>
            </div>

            <div className="Image">
              <img alt="" src={sexPhoto} srcSet={sexPhoto2x + " 2x"} style={{ width: '100%' }} />
            </div>
          </div>
        </div>

        <div className="LPFooter">
          <div className="LPFooterContainer">
            <div className="Column">
              <div className="ColumnTitle">Product</div>
              <div className="ColumnLink">Popular</div>
              <div className="ColumnLink">Trending</div>
              <div className="ColumnLink">Guided</div>
              <div className="ColumnLink">Products</div>
            </div>

            <div className="Column">
              <div className="ColumnTitle">Company</div>
              <div className="ColumnLink">Press Releases</div>
              <div className="ColumnLink">Mission</div>
              <div className="ColumnLink">Strategy</div>
              <div className="ColumnLink">About</div>
            </div>

            <div className="Column">
              <div className="ColumnTitle">Info</div>
              <div className="ColumnLink">Support</div>
              <div className="ColumnLink">Customer Service</div>
              <div className="ColumnLink">Get Started Guide</div>
            </div>

            <div className="Column">
              <div className="ColumnTitle">Follow us</div>
              <div className="ColumnLink">
                <img alt="" src={facebook} style={{ height: '20px', marginRight: '30px' }} />
                <img alt="" src={twitter} style={{ height: '20px', marginRight: '30px' }} />
                <img alt="" src={linkedIn} style={{ height: '20px' }} />
              </div>
            </div>
          </div>
          <div className="LPFooterCopyright">© {new Date().getFullYear()} Manual. All rights reserved.</div>
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

export default connect(mapStateToProps)(LandingPage)