import { useContext } from "react";
import { Link } from "react-router-dom";
import {AuthContext} from "../providers/AuthProvider"

const Register = () => {

  const {createUser,singUpWithGoogle} = useContext(AuthContext)
  //console.log(createUser);

  const handleGoogleSignUp=()=>{
    singUpWithGoogle()
    .then(result=>console.log(result.user))
    .catch(error=>console.log(error.message))
  }

  const handleRegister = e =>{
    e.preventDefault();
    const name = e. target.name.value;
    const email = e. target.email.value;
    const password = e.target.password.value;
    console.log(name,email,password)

    //create user in firebase

    createUser(email,password)
    .then(result=>{
      console.log(result.user)
    })
    .catch(error=>{
      console.log(error.message)
    })
  }
  return (
    <div>
      <h2 className="text-4xl font-bold text-center mb-5 text-green-700">Register Now !</h2>
      <form onSubmit={handleRegister} className="text-center w-3/5  mx-auto">
        <input
          className="border-2 mb-4 py-2 bg-gray-100 rounded-lg  w-full"
          type="text" name="name"

          placeholder="Name"
          id="nameField" required />
        <br />

        {/* Email */}
        <input
          className="border-2 mb-4 py-2 bg-gray-100 rounded-lg  w-full"
          type="email" name="email"

          placeholder="email"
          id="emailField" required />
        <br />

        <div>
          {/* Password */}
          <input
            className="border-2 py-2 bg-gray-100 rounded-lg w-full"
            type="password"
            name="password"
            placeholder="password" id="passField" required />
         
        </div>

        <br />
        {/* Submit button */}
        <input className="border-2 btn btn-secondary py-2 rounded-lg px-2 w-full" type="submit" value="Register" />
      </form>
      <p className="text-center">Already have Account !  <Link to='/login'>
        <button className="btn btn-link no-underline">Login</button>
        </Link>
        </p>

        <div className="flex justify-center">
        <button className="font-semibold mt-3" onClick={handleGoogleSignUp}>Google sing up</button>
        </div>
    </div>
  );
};

export default Register;