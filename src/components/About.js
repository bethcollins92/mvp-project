import React, { Component } from "react";

export default class chooseTime extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-6">
            <div className="card" id="title">
              <p id="title">
                ‘Trying to be healthy can be overwhelming – what if all it took
                to make a real difference was 5 minutes of your day?’ If you’ve
                ever started an intensive plan only to stop days, weeks or
                months later, or struggled to prioritise your health, it’s not
                your fault – behavioural science shows that most plans simply
                aren’t built to last. Feel Better in 5 is the first daily 5
                minute plan that is easy to maintain, easy-to-follow and
                requires only the smallest amount of willpower. It is a
                programme that doesn’t force you to bend your life around its
                demands. It bends around your life.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
