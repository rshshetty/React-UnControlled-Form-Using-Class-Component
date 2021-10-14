
import React, { Component } from 'react'
//controlled way of doing form
class ControlledFormsUsingClass extends Component {
    state = {
        username:"",
        password:"",
    };
 handleSubmit = e => {
        
        this.setState({ [e.target.name]: e.target.value })                       //array kind means ({[]})
    }

    

    render() {
        return (
            <div>
                <>
                <section>
                        <article>
                            <h2>Login</h2>
                            <form>
                               <div className="form-control">
                                    <label htmlFor="username">username</label>
                                    <input
                                        type="text"
                                        name="username"                       //name is required to use array kind of HandleSubmit,
                                        id="username" value={this.state.username}
                                        onChange={this.handleSubmit} placeholder="enter the username" />
                                </div>

                                 <div className="form-control">
                                    <label htmlFor="password">password</label>
                                    <input ref={this.passwordRef}
                                        type="password" name="password" id="password" value={this.state.password}
                                         onChange={this.handleSubmit} placeholder="enter the password" />
                                </div>
                                <div className="form-control">
                                <button >Submit</button>
                                </div>
                            </form>
                    </article>
                </section>
    </>                
            </div>
        )
    }
}
export default ControlledFormsUsingClass;