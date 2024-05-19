import { Link } from "react-router-dom";
import loginImage from "../../assets/login-image.jpg";
import { useState } from "react";
const SignUp = () => {
  interface signUpDataInterface {
    name: String;
    email: String;
    password: String;
  }
  const [signUpData,setSignUpData]=useState<signUpDataInterface>({name:"",email:"",password:""});

  const onChangeHandler=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const {name,value}=e.target;
        setSignUpData(prevState=>({
            ...prevState,
            [name]:value
        }))
  }
  const onSubmitHandler=(e:React.FocusEvent<HTMLFormElement>)=>{
      e.preventDefault();
      console.log(signUpData);
      
  }
  return (
    <>
      <section className=" font-poppins">
        <div className="flex items-center justify-center h-screen  max-w-full mx-12">
          <div className="flex-1">
            <div className="flex flex-wrap ">
              <div className="relative items-center justify-center hidden w-full lg:flex lg:w-1/2 ">
                <div className="absolute inset-0 z-10 bg-gray-900 opacity-40"></div>
                <img
                  className="absolute inset-0 z-0 object-contain w-full h-full ml-auto"
                  src={loginImage}
                  alt="Mamta Nepal"
                />
                <div className="top-0 z-10 max-w-xl mx-auto mb-12 text-center ">
                  <h2 className="mb-4 text-4xl font-bold text-gray-100  ">
                    Welcome to our community and join with us
                  </h2>
                  <div className="max-w-lg mx-auto mb-6">
                    <p className="pt-6 font-medium text-gray-300 ">
                      lorem ipsum dor amet sidcuscd andih wkoidus iusoyions
                      hejitywa qopasation dummy text ipsum
                    </p>
                  </div>
                  <Link
                    to={`/login/signup`}
                    className="inline-block px-6 py-2 font-medium bg-red-500 text-gray-50 "
                  >
                    Join now
                  </Link>
                </div>
              </div>
              <div className="w-full py-6   lg:py-7 lg:w-1/2 ">
                <div className="max-w-md mx-auto">
                  <div className="px-4 my-7 ">
                    <div className="mb-7">
                      <span className="flex items-center justify-center w-20 h-20 mx-auto text-gray-900 bg-red-500 rounded-lg ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          fill="currentColor"
                          className="text-gray-200 bi bi-person-circle"
                          viewBox="0 0 16 16"
                        >
                          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"></path>
                          <path
                            fill-rule="evenodd"
                            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                          ></path>
                        </svg>
                      </span>
                    </div>
                    <h2 className="mb-4 text-xl font-bold lg:mb-8 lg:text-3xl text-center ">
                      Create an account
                    </h2>
                    <form onSubmit={onSubmitHandler} className="p-0 m-0">
                      <div>
                        <label className="text-lg font-medium ">Name:</label>
                        <input
                          type="email"
                          className="w-full px-4 py-3 mt-3 bg-gray-200 rounded-lg   "
                          name="name"
                          required
                          placeholder="Enter your name"
                          onChange={onChangeHandler}
                        />
                      </div>
                      <div>
                        <label className="text-lg font-medium ">Email:</label>
                        <input
                          type="email"
                          className="w-full px-4 py-3 mt-3 bg-gray-200 rounded-lg   "
                          name="email"
                          required
                          placeholder="Enter your email"
                          onChange={onChangeHandler}
                        />
                      </div>
                      <div className="mt-5">
                        <div>
                          <label className="text-lg font-medium  ">
                            Password:
                          </label>
                          <div className="relative flex items-center mt-2">
                            <input
                              type="password"
                              className="w-full px-4 py-3 bg-gray-200 rounded-lg   "
                              name="password"
                              required
                              placeholder="Enter password"
                              onChange={onChangeHandler}
                            />
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              className="absolute right-0 mr-3   bi bi-eye-slash"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                            >
                              <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
                              <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
                              <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="mt-5 text-right">
                        <Link
                          to={"/"}
                          className="text-sm font-semibold text-blue-700  "
                        >
                          forgot password?
                        </Link>
                      </div>
                      <button
                        className="w-full px-4 py-3 mt-5 font-semibold text-gray-200 bg-red-500 rounded-lg  hover:bg-red-600"
                        type="submit"
                      >
                        Sign up
                      </button>
                      <div className="flex flex-wrap items-center mt-3 text-sm lg:text-base lg:mt-5 ">
                        Already an account?
                        <Link
                          to={"/login"}
                          className="ml-2 text-base font-semibold "
                        >
                          Login
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
