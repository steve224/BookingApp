import React, {useState} from "react";

function RegistrationForm() {

    const [userForm, setUserForm] = useState({});
    const [errors, setErrors] = useState({
        nameError: "",
        emailError: "",
        password: ""
    });

    const handelChange = (e) => {

        const target = e.target;
        const name = target.name;
        const value = target.type === 'file' ? target.files[0] : target.value;

        setUserForm({
            ...userForm,
            [name]: value,
        });
    }

    const validate = (userForm) => {

        const nameRegex = new RegExp(/^(?!\s)[a-zA-Z][\\s\][a-zA-Z]{5}/);
        const emailRegex = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
        const formErrors = {};

        // if(!userForm.name){
        //     formErrors.nameError = "Pls enter name";
        // } else if(!nameRegex.test(userForm.name)){
        //     formErrors.nameError = "Name must be atleast 6 characters";
        // }
        if(!userForm.name)
            formErrors.nameError = "Pls enter your name";
        if(!nameRegex.test(userForm.name))
            formErrors.nameError = "Name must be atleast 6 characters long";
        if(!userForm.email) 
            formErrors.emailError = "Pls enter your email address";
        // if(!userForm.email) {
        //     formErrors.emailError = "Pls enter email";
        // } else if(emailRegex.test(userForm.email)) {
        //     formErrors.emailError = "Pls enter a valid email address";
        // }
        if(!userForm.password)
            formErrors.passwordError = "Pls enter password";
        if(!userForm.confirmPassword) {
            formErrors.confirmPasswordError = "Pls confirm password";
        } else if(userForm.confirmPassword !== userForm.password) {
            formErrors.confirmPasswordError = "Pass words must match";
        }


        return formErrors;    

    }

    const handelSubmit = (e) => {
        e.preventDefault();
        
        const formErrors = validate(userForm);
        const formData = new FormData();

        if(formErrors) {
            setErrors(formErrors);
        } else {
            formData.append("user", formData);
            console.log("Resgistered");
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
                            <label>Choose Image for Profile</label>
                            <input type="file" name="image" onChange={handelChange} />
                            {/* {errors.imageError !== "" ? <span className="text-danger">{errors.imageError}</span>
                            : null 
                            } */}
                        </div>
                        <div className="row p-1">
                            <label>Password</label>
                            <input type="text" name="password" onChange={handelChange} />
                            {errors.passwordError !== "" ? <span className="text-danger">{errors.passwordError}</span>
                            : null
                            }
                        </div>
                        <div className="row p-1">
                            <label>Confirm Password</label>
                            <input type="text" name="confirmPassword" onChange={handelChange} />
                            {errors.confirmPasswordError !== "" ? <span className="text-danger">{errors.confirmPasswordError}</span>
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

export default RegistrationForm;
