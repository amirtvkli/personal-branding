import { Swipup } from './swip-up';
import { visitState } from '../lib';
export class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.canvas = null;
    this.shirt = null;
    this.shirtColor = null;
    this.txtFrame = null;
    this.bowtie = null;
    this.birds = null;
    this.myTween = null;
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onTouchStart = this.onTouchStart.bind(this);
    this.onTouchEnd = this.onTouchEnd.bind(this);
    this.onSwip = this.onSwip.bind(this);
    this.ts = undefined;
    this.te = undefined;
  }
  onSwip(horizontalMovement, verticalMovement, srcSlide) {
    // this.myTween = TweenLite.to(srcSlide, 1, {
    //   left: horizontalMovement,
    //   top: verticalMovement,
    //   // opacity: 0,
    // });

    localStorage.clear();
    if (Math.abs(horizontalMovement) > Math.abs(verticalMovement)) {
      if (horizontalMovement > 0) {
        // horizontal:right
        this.props.history.push('/menu');
      } else {
        // horizontal:left
        this.props.history.push('/folio');
      }
    } else {
      if (verticalMovement > 0) {
        // vertical:down
        this.props.history.push('/about');
      } else {
        this.props.history.push('/menu');
        // vertical:up
      }
    }
  }
  onTouchStart(event) {
    if (event && event.touches && event.touches[0]) {
      this.ts = { X: event.touches[0].clientX, Y: event.touches[0].clientY };
    }
  }
  onTouchEnd(event) {
    if (event && event.changedTouches && event.changedTouches[0]) {
      this.te = {
        X: event.changedTouches[0].clientX,
        Y: event.changedTouches[0].clientY,
      };

      let deltaX = this.te.X - this.ts.X;
      let deltaY = this.te.Y - this.ts.Y;
      this.onSwip(
        deltaX,
        deltaY,
        this.canvas,
        undefined,
        undefined,
        undefined,
        undefined,
      );
    }
  }
  onMouseOver() {
    if (!!this.shirtColor)
      this.myTween = TweenLite.to(this.shirtColor, 1, {
        opacity: 1,
      });
  }

  onMouseLeave() {
    if (!!this.shirtColor)
      this.myTween = TweenLite.to(this.shirtColor, 1, {
        opacity: 0,
      });
  }
  componentDidMount() {
    const defaultAction = () => {
      this.myTween = TweenLite.to(this.txtFrame, 0.9, {
        opacity: 1,
        fontSize: '29pt',
      });
      this.myTween = TweenLite.to(this.shirt, 1, {
        bottom: '0px',
        opacity: 1,
      });
    };
    switch (visitState()) {
      case 0:
        defaultAction();

        break;
      case 1:
        defaultAction();

        this.myTween = TweenLite.to(this.bowtie, 1, {
          left: '-2%',
          bottom: '-14%',
          opacity: 1,
        });

        break;
      case 2:
        defaultAction();
        this.myTween = TweenLite.to(this.birds, 1, {
          left: '24%',
          bottom: '216px',
          opacity: 1,
        });
        this.onMouseOver();
        break;
      default:
        defaultAction();
        break;
    }
  }
  render() {
    return (
      <div
        className="at-welcome"
        onTouchStart={(event) => this.onTouchStart(event)}
        onTouchEnd={(event) => this.onTouchEnd(event)}
        onMouseOver={this.onMouseOver()}
        onMouseLeave={this.onMouseLeave()}
        ref={(div) => (this.canvas = div)}
      >
        <img
          className="at-welcome__birds"
          src={require('assets/images/birds.png')}
          ref={(img) => (this.birds = img)}
        ></img>
        <div className="at-welcome__container">
          <img
            className="at-welcome__shirt--color"
            src={require('assets/images/shirt-color.png')}
            ref={(img) => (this.shirtColor = img)}
          ></img>
          <img
            className="at-welcome__shirt"
            src={require('assets/images/shirt.png')}
            ref={(img) => (this.shirt = img)}
          ></img>
          <img
            className="at-welcome__bowtie"
            src={require('assets/images/bowtie.png')}
            ref={(img) => (this.bowtie = img)}
          ></img>
          <div className="at-welcome__txt" ref={(div) => (this.txtFrame = div)}>
            Welcome. My Name is Amir Tavakoli. Around 10 years ago when I was
            working as a project planner engineer in a project, I felt that a
            simple application tool was required. Thus, I decided to design and
            develop a simple app. It motivated me to study in Ms degree and
            improve my programming knowledge more and more. Simultaneously, I
            experienced designing of different user Interfaces and designing
            lots of graphic projects. These experiences have led me to be a product manager right now.
          </div>
        </div>
        <Swipup />
      </div>
    );
  }
}
