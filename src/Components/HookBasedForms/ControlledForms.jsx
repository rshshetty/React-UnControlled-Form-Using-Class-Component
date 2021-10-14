import React, { useState } from "react";

let ControlledForms = () => {
    let [form, setForm] = useState({
        username: "",
        password: "",
        gender: "",
        skills:"",

    });
    let { username, password,gender,skills } = form;

    let handleChange = e => {
        console.log(e);
        setForm({ ...form, [e.target.name]: e.target.value })

    }


    
    let handleGender = e => {
        console.log(e);
        setForm({...form, [e.target.name]: e.target.value })
    }


    let handleSubmit = e => {
        e.preventDefault();
        console.log({ username, password, gender,skills });
    }
   


 return (
            <div>
                <>
                <section>
                        <article>
                            <h2>Login</h2>
                            <form onSubmit={handleSubmit}>
                               <div className="form-control">
                                    <label htmlFor="username">username</label>
                                    <input
                                        type="text"
                                        name="username"                       //name is required to use array kind of HandleSubmit,
                                        id="username" value={username}
                                        onChange={handleChange} placeholder="enter the username" />
                                </div>

                                 <div className="form-control">
                                    <label htmlFor="password">password</label>
                                    <input 
                                        type="password" name="password" id="password" value={password}
                                         onChange={handleChange} placeholder="enter the password" />
                         </div>
                         <div onChange={handleGender}>
                             <input type="radio" name="gender" value="Male" />Male
                             <input type="radio" name="gender" value="Female" />Female
                            
                             
                         </div>
                         <div>
                             <label htmlFor="skills">Skills</label>
                             <select name="skills" value={skills} onChange={handleChange}>
                                 <option>JAVA</option>
                                 <option>JS</option>
                                 <option>CSS</option>
                                 <option>HTML</option>
                                 <option>CSS</option>
                             </select>
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
export default ControlledForms;