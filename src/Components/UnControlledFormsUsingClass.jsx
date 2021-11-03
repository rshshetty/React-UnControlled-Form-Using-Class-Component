import React, { Component } from "react";
//uncontrolled way of doing form
class UnControlledFormsUsingClass extends Component {
  constructor() {
    super();
    this.usernameRef = React.createRef();
    this.passwordRef = React.createRef();
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("ok");
    let username = this.usernameRef.current;
    let password = this.passwordRef.current;
    console.log({ username, password });
  };

  render() {
    return (
      <div>
        <>
          <section>
            <article>
              <h2>Login</h2>
              <form onSubmit={this.handleSubmit}>
                <div className='form-control'>
                  <label htmlFor='username'>username</label>
                  <input
                    ref={this.usernameRef}
                    type='text'
                    name='username'
                    id='username'
                    placeholder='enter the username'
                  />
                </div>

                <div className='form-control'>
                  <label htmlFor='password'>password</label>
                  <input
                    ref={this.passwordRef}
                    type='password'
                    name='password'
                    id='password'
                    placeholder='enter the password'
                  />
                </div>
                <div className='form-control'>
                  <button>Submit</button>
                </div>
              </form>
            </article>
          </section>
        </>
      </div>
    );
  }
}
export default UnControlledFormsUsingClass;
