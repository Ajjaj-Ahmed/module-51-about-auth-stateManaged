import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";




const Login = () => {
  const {signInUser} = useContext(AuthContext)

  const navigate = useNavigate();

    const handleLogin= e =>{
      e.preventDefault();
      const email = e. target.email.value;
      const password = e.target.password.value;
      //console.log(email,password)

      signInUser(email,password)
      .then(result=>{
        console.log(result.user)
        e.target.reset();
        navigate('/')
      })
      .catch(error=>{
        console.log(error) 
      })

     
      
    }
  return (
    <div>
      <div className="w-2/3 border-3 mx-auto">
        <h2 className="text-3xl text-center mb-3">Please Login</h2>
        <form onSubmit={handleLogin} className="text-center w-3/5  mx-auto">

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

              {/* Forget Password */}
            <p  className="text-left mt-2">Forget Password?</p>
          </div>
          
          <br />
          {/* Submit button */}
          <input className="border-2 btn btn-secondary py-2 rounded-lg px-2 w-full" type="submit" value="LogIn" />
        </form>
        <p className="text-center">New Here ! please <Link to='/register'>
        <button className="btn btn-link no-underline">register</button>
        </Link>
        </p>
      </div>
     
    </div>
  );
}


export default Login;

/* useNavigate to navigate  */