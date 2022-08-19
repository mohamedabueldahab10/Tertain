import React, { useState } from "react";
import "../Assets/Css/Home.css";
import Facebook from "../Assets/Images/facebook.png";
import Google from "../Assets/Images/3.png";
import Twitter from "../Assets/Images/Artboard 1.png";
import Controls from "../Assets/Css/Controls";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

export default function () {
  const [Change, setChange] = useState("SignIn");
  function changeable(val){
    setChange(val);
  }
  return (
    <div className="mainDiv">
      {/* ===============header====================== */}
      <header>
        <div className="navBar">
          <div className="logo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="204.834"
              height="109.083"
              viewBox="0 0 204.834 109.083"
            >
              <g
                id="Group_22"
                data-name="Group 22"
                transform="translate(-107 -55)"
              >
                <text
                  id="Trt_"
                  data-name="Trt    "
                  transform="translate(107 137.083)"
                  fill="#129b2e"
                  fontSize="78"
                  fontFamily="Poppins-ExtraBold, Poppins"
                  fontWeight="800"
                  letterSpacing="-0.02em"
                >
                  <tspan x="0" y="0">
                    Trt{" "}
                  </tspan>
                </text>
                <text
                  id="n"
                  transform="translate(257.834 137)"
                  fill="#129b2e"
                  fontSize="78"
                  fontFamily="Poppins-ExtraBold, Poppins"
                  fontWeight="800"
                  letterSpacing="-0.02em"
                >
                  <tspan x="0" y="0">
                    n
                  </tspan>
                </text>
                <path
                  id="Path_5875"
                  data-name="Path 5875"
                  d="M65.557,26.52a15.03,15.03,0,0,1,21.176.1,16.366,16.366,0,0,1,4.592,10.671v15.03H76.3a16.383,16.383,0,0,1-10.621-4.576,15.03,15.03,0,0,1,0-21.192M60.08,20.976a22.578,22.578,0,0,0,.117,31.73,24.065,24.065,0,0,0,15.765,6.83H98.573v-22.6A24.082,24.082,0,0,0,91.76,21.059a22.562,22.562,0,0,0-31.73-.117Z"
                  transform="translate(161.307 79.724)"
                  fill="#129b2e"
                />
                <circle
                  id="Ellipse_17"
                  data-name="Ellipse 17"
                  cx="8.1"
                  cy="8.1"
                  r="8.1"
                  transform="translate(229.236 108.616)"
                  fill="#129b2e"
                />
              </g>
            </svg>
          </div>
          <div className="sections">
            <div>Home</div>
            <div>About</div>
            <div>Section</div>
            <div>Search</div>
            <div>Login</div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="41.947"
                height="40.728"
                viewBox="0 0 41.947 40.728"
              >
                <g id="subject" transform="translate(0 0)">
                  <path
                    id="Path_137"
                    data-name="Path 137"
                    d="M177.559,208.867h-15.8a4.525,4.525,0,0,0-4.519,4.519v8.582l-4.093,2.923a1.229,1.229,0,0,0,0,2l4.142,2.958a4.527,4.527,0,0,0,4.47,3.852h15.8a4.525,4.525,0,0,0,4.519-4.52v-15.8a4.525,4.525,0,0,0-4.519-4.519Zm-5.311,17.268c-.29,0-.513-.092-.579-.342l-.5-1.751h-3.015l-.5,1.751c-.066.25-.29.342-.579.342-.461,0-1.079-.289-1.079-.71a.76.76,0,0,1,.026-.132l2.541-8.28a1.069,1.069,0,0,1,1.093-.58c.5,0,.987.185,1.106.58l2.541,8.28a.582.582,0,0,1,.026.132c0,.408-.619.71-1.079.71Zm0,0"
                    transform="translate(-140.132 -192.974)"
                    fill="#129b2e"
                  />
                  <path
                    id="Path_138"
                    data-name="Path 138"
                    d="M346.375,332.42h2.291l-1.146-4.041Zm0,0"
                    transform="translate(-317.997 -302.341)"
                    fill="#129b2e"
                  />
                  <path
                    id="Path_139"
                    data-name="Path 139"
                    d="M14.654,21.631a6.943,6.943,0,0,1,1.538-4.363,6.594,6.594,0,0,1-3.775-1.184,6.592,6.592,0,0,1-3.776,1.184.693.693,0,0,1,0-1.386,5.217,5.217,0,0,0,2.688-.743A6.61,6.61,0,0,1,9.6,11.328H8.642a.693.693,0,1,1,0-1.386h3.083V8.26a.693.693,0,1,1,1.386,0V9.942h3.083a.693.693,0,1,1,0,1.386h-.955a6.61,6.61,0,0,1-1.733,3.811,5.21,5.21,0,0,0,2.688.743.693.693,0,0,1,.691.643,6.951,6.951,0,0,1,4.748-1.871h3.2V11.733L28.927,8.81a1.229,1.229,0,0,0,0-2L24.786,3.852A4.527,4.527,0,0,0,20.315,0H4.52A4.525,4.525,0,0,0,0,4.519v15.8a4.525,4.525,0,0,0,4.52,4.519H14.654Zm0,0"
                    fill="#129b2e"
                  />
                  <path
                    id="Path_140"
                    data-name="Path 140"
                    d="M135.608,141.222a5.232,5.232,0,0,0,1.424-2.945h-2.848A5.236,5.236,0,0,0,135.608,141.222Zm0,0"
                    transform="translate(-123.191 -127.303)"
                    fill="#129b2e"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </header>
      {/* =======================Content======================= */}
      <main className="content">
        {/* =======================Left side======================= */}
        <div className="form">
        <Controls Change={Change} changeable={changeable} />
          {Change === "SignIn" ? <SignUp signupstate={Change} /> : <SignIn signinstate={Change} />}
        </div>
        {/* =======================Right side======================= */}
        <div className="photo">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="204.834"
              height="109.083"
              viewBox="0 0 204.834 109.083"
            >
              <g
                id="Group_22"
                data-name="Group 22"
                transform="translate(-107 -55)"
              >
                <text
                  id="Trt_"
                  data-name="Trt    "
                  transform="translate(107 137.083)"
                  fill="#129b2e"
                  fontSize="78"
                  fontFamily="Poppins-ExtraBold, Poppins"
                  fontWeight="800"
                  letterSpacing="-0.02em"
                >
                  <tspan x="0" y="0">
                    Trt{" "}
                  </tspan>
                </text>
                <text
                  id="n"
                  transform="translate(257.834 137)"
                  fill="#129b2e"
                  fontSize="78"
                  fontFamily="Poppins-ExtraBold, Poppins"
                  fontWeight="800"
                  letterSpacing="-0.02em"
                >
                  <tspan x="0" y="0">
                    n
                  </tspan>
                </text>
                <path
                  id="Path_5875"
                  data-name="Path 5875"
                  d="M65.557,26.52a15.03,15.03,0,0,1,21.176.1,16.366,16.366,0,0,1,4.592,10.671v15.03H76.3a16.383,16.383,0,0,1-10.621-4.576,15.03,15.03,0,0,1,0-21.192M60.08,20.976a22.578,22.578,0,0,0,.117,31.73,24.065,24.065,0,0,0,15.765,6.83H98.573v-22.6A24.082,24.082,0,0,0,91.76,21.059a22.562,22.562,0,0,0-31.73-.117Z"
                  transform="translate(161.307 79.724)"
                  fill="#129b2e"
                />
                <circle
                  id="Ellipse_17"
                  data-name="Ellipse 17"
                  cx="8.1"
                  cy="8.1"
                  r="8.1"
                  transform="translate(229.236 108.616)"
                  fill="#129b2e"
                />
              </g>
            </svg>
            <p>
              Do You Have An Account ? <a href="">Sign in</a>
            </p>
            <div className="social">
              <div>
                <img src={Facebook} />
              </div>
              <div>
                <img src={Google} />
              </div>
              <div>
                <img src={Twitter} />
              </div>
            </div>
            <button
             style={{visibility: Change === "SignIn" ? "hidden" : "visible"}}
            >
              SIGN UP</button>
          </div>
        </div>
      </main>
    </div>
  );
}
