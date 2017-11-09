import React from 'react';

class Contact extends React.Component {
  state = { data: {} }

  addClasses() {

  }

  render() {
    return (
      <div className="wrap">
        <div className="margin--bottom-5">
          <h1>Get In Touch</h1>
          <h3>Have a question, want to provide feedback, or just want to say hello?</h3>
        </div>
        <div className="flex-col-break">
          <form>
          <div className="form-group">
            <div className="form-component">
              {this.addClasses(
                <input onChange={this.onDataChange} value={this.state.data.name} name="name" type="text" />,
                this.state.data.name
              )}
              <label>Full Name</label>
            </div>
          </div>
          </form>
          <div className="flex-col-break--m">
            <div>
              <h4 className="small-caps">General Inquiries:</h4>
              <p>hello@archadon.com</p>
            </div>
            <div className="margin--top-5">
              <h4 className="small-caps">Returns:</h4>
              <p>returns@archadon.com</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
