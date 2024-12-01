import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authUser } from "../../redux/userSlice";
import {notify} from "../../notify";

function SignUp() {
  const navigate = useNavigate();

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const createUser = async () => {
      try {
        const axiosConfig = {
          method: "POST",
          url: `${import.meta.env.VITE_API_URL}/users`,
          data: {
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password,
            phone: phone,
            address: address,
          },
        };
        const response = await axios(axiosConfig);
        notify(response.data.msg);
        !response.data.constraint && navigate("/");
      } catch (err) {
        console.log(err);
      }
    };
    createUser();
  };

  return (
    <>
      <div className="vh-100 d-flex align-items-center">
        <div className="container">
          <div className="row g-0">
            <div className="d-none d-md-block col-md-5 col-lg-7">
              <div className="login-first-box h-100">
                <div className="d-flex justify-content-center align-items-center h-100">
                  <img
                    src="/img/equal-vision-auth-logo.png"
                    alt=""
                    className=""
                  />
                </div>
              </div>
            </div>
            <div className="col-md-7 col-lg-5">
              <div className="bg-white p-5 login-second-box ">
                <div className="mb-4">
                  <h3>Create an Account</h3>
                </div>
                <div className="d-flex flex-column justify-content-around align-items-center">
                  <form className="w-100" onSubmit={handleSubmit}>
                    <div className="input-group mb-4">
                      <input
                        type="text"
                        className="form-control"
                        id="firstname"
                        placeholder="Firstname"
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                      />
                    </div>

                    <div className="input-group mb-4">
                      <input
                        type="text"
                        className="form-control"
                        id="lastname"
                        placeholder="Lastname"
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                      />
                    </div>

                    <div className="input-group mb-4">
                      <input
                        type="text"
                        className="form-control"
                        id="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>

                    <div className="input-group mb-4">
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>

                    <div className="input-group mb-4">
                      <input
                        type="text"
                        className="form-control"
                        id="phone"
                        placeholder="Phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>

                    <div className="input-group mb-4">
                      <input
                        type="text"
                        className="form-control"
                        id="address"
                        placeholder="Address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </div>

                    <button className="btn login-custom-btn mb-5 w-100 auth-btn text-white">
                      Sign Up
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
