import React, {useState} from "react";

function LoginForm() {

    const [credentials, setCredentials] = useState({});
    const [errors, setErrors] = useState({
        nameError: "",
        emailError: "",
        passwordError: ""
    });

    const handelChange = (e) => {
        
        const name = e.target.name;
        const value = e.target.value;

        setCredentials({
            ...credentials,
            [name]: value
        });
    }

    const validate = (credentials) => {

        const formErrors = {};
        const nameRegex = new RegExp(/^(?!\s)[a-zA-Z][\\s\][a-zA-Z]{5}/);
        const emailRegex = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');

        // if(!credentials.name) {
        //     formErrors.nameError = "Pls enter name"
        // } else if(nameRegex.test(credentials.name)){
        //     formErrors.nameError = "Name must be atleast 6 characters";
        // }    
        // if(!credentials.email) {
        //     formErrors.emailError = "Pls enter email address";
        // } else if(emailRegex.test(credentials.email)) {
        //     formErrors.emailError = "Pls enter a valid email address";
        // }
        if(!credentials.name)
            formErrors.nameError = "Pls enter your name";
        if(!nameRegex.test(credentials.name))
            formErrors.name = "Name must be atleast 6 characters long";
        if(!credentials.password)
            formErrors.passwordError = "Pls enter a password";

        return formErrors;    

    }

    const handelSubmit = (e) => {
        e.preventDefault();

        const formErrors = validate(credentials);
        const formData = new FormData();

        if(formErrors) {
            setErrors(formErrors);
        } else if(!formErrors) {
            formData.append("userCredentials", credentials);
            console.log("Success");
        }
    }


    return(
        <div className="container p-3">
            <div className="col-lg-6 mx-auto">
                <div className="card">
                    <form className="card-body" onSubmit={handelSubmit}>
                        <div className="row p-1">
                            <label>Name</label>
                            <input type="text" name="name" onChange={handelChange} />
                            {errors.nameError !== "" ? <span className="text-danger">{errors.nameError}</span>
                            : null
                            }
                        </div>
                        <div className="row p-1">
                            <label>Email</label>
                            <input type="email" name="email" onChange={handelChange} />
                            {errors.emailError !== "" ? <span className="text-danger">{errors.emailError}</span>
                            : null 
                            }
                        </div>
                        <div className="row p-1">
                            <label>Password</label>
                            <input type="text" name="password" onChange={handelChange} />
                            {errors.passwordError !== "" ? <span className="text-danger">{errors.passwordError}</span>
                            : null
                            }
                        </div>
                        <div className="row p-1">
                            <button className="btn btn-primary" type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}


export default LoginForm;