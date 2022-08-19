import React from "react";
import "../Assets/Css/SignIn.css";

export default function SignIn() {
  return (
      <div className="signinForm">
        {/* ================================= */}
        {/* your name */}
        <div className="namePosition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22.246"
            height="27.31"
            viewBox="0 0 22.246 27.31"
          >
            <g id="group" transform="translate(-121.6 -92.25)">
              <g
                id="Group_5"
                data-name="Group 5"
                transform="translate(121.6 92.25)"
              >
                <path
                  id="Path_12"
                  data-name="Path 12"
                  d="M139.915,105.969a11.01,11.01,0,0,0-3.983-2.17,6.221,6.221,0,1,0-6.434,0,11.1,11.1,0,0,0-3.94,2.145c-2.348,1.508-3.049,4.584-3.864,7.072a11.444,11.444,0,0,0-.094,1.438v.579a4.526,4.526,0,0,0,4.528,4.528h13.191a4.526,4.526,0,0,0,4.528-4.528v-.579a11.447,11.447,0,0,0-.094-1.438S142.646,107.659,139.915,105.969Zm-12.076-7.5a4.859,4.859,0,1,1,5.14,4.851h-.562A4.866,4.866,0,0,1,127.838,98.471Zm14.629,16.561A3.171,3.171,0,0,1,139.3,118.2H126.111a3.171,3.171,0,0,1-3.166-3.166v-.579a9.776,9.776,0,0,1,9.472-9.761c.094.008.2.008.289.008s.2,0,.289-.008a9.776,9.776,0,0,1,9.472,9.761Z"
                  transform="translate(-121.6 -92.25)"
                />
              </g>
            </g>
          </svg>
          <input placeholder="Your Name" type="text"></input>
        </div>

        {/* ================================= */}
        {/* your email */}
        <div className="emailPosition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34.406"
            height="26.184"
            viewBox="0 0 34.406 26.184"
          >
            <g id="mail" transform="translate(0 -57.75)">
              <g
                id="Group_15"
                data-name="Group 15"
                transform="translate(0 57.75)"
              >
                <path
                  id="Path_40"
                  data-name="Path 40"
                  d="M30.206,57.75h-26A4.211,4.211,0,0,0,0,61.957V79.726a4.211,4.211,0,0,0,4.207,4.207H30.2a4.211,4.211,0,0,0,4.207-4.207V61.964A4.206,4.206,0,0,0,30.206,57.75Zm2.285,21.976a2.288,2.288,0,0,1-2.285,2.285h-26a2.288,2.288,0,0,1-2.285-2.285V61.964a2.288,2.288,0,0,1,2.285-2.285H30.2a2.288,2.288,0,0,1,2.285,2.285V79.726Z"
                  transform="translate(0 -57.75)"
                />
                <path
                  id="Path_41"
                  data-name="Path 41"
                  d="M73.482,118.132l8.415-7.546a.963.963,0,0,0-1.289-1.431L69,119.57l-2.264-2.022c-.007-.007-.014-.014-.014-.021a1.422,1.422,0,0,0-.157-.135l-9.212-8.244a.963.963,0,1,0-1.281,1.438l8.514,7.61-8.479,7.938a.965.965,0,0,0-.043,1.36.983.983,0,0,0,.7.306.963.963,0,0,0,.655-.256l8.607-8.052,2.335,2.086a.959.959,0,0,0,1.281-.007l2.4-2.15,8.557,8.13a.964.964,0,0,0,1.36-.036.965.965,0,0,0-.036-1.36Z"
                  transform="translate(-51.783 -105.261)"
                />
              </g>
            </g>
          </svg>
          <input placeholder="Email" type="email"></input>
        </div>

        {/* ================================= */}
        {/* your password */}
        <div className="passwordPosition">
          <svg
            id="_002-password"
            data-name="002-password"
            xmlns="http://www.w3.org/2000/svg"
            width="25.502"
            height="29.145"
            viewBox="0 0 25.502 29.145"
          >
            <g id="Group_118" data-name="Group 118">
              <g id="Group_117" data-name="Group 117">
                <circle
                  id="Ellipse_18"
                  data-name="Ellipse 18"
                  cx="1.19"
                  cy="1.19"
                  r="1.19"
                  transform="translate(18.021 18.486)"
                />
                <path
                  id="Path_66"
                  data-name="Path 66"
                  d="M56.364,20.607A1.138,1.138,0,0,0,57.5,19.468V15.256A4.559,4.559,0,0,0,52.948,10.7H51.58V6.687a6.833,6.833,0,0,0-13.662,0V10.7H36.554A4.559,4.559,0,0,0,32,15.256v9.336a4.559,4.559,0,0,0,4.554,4.554H52.948A4.559,4.559,0,0,0,57.5,24.591a1.138,1.138,0,0,0-2.277,0,2.28,2.28,0,0,1-2.277,2.277H36.554a2.28,2.28,0,0,1-2.277-2.277V15.256a2.28,2.28,0,0,1,2.277-2.277H52.948a2.28,2.28,0,0,1,2.277,2.277v4.212A1.138,1.138,0,0,0,56.364,20.607ZM49.3,10.7H40.2V6.687a4.556,4.556,0,0,1,9.108,0Z"
                  transform="translate(-32)"
                />
                <circle
                  id="Ellipse_19"
                  data-name="Ellipse 19"
                  cx="1.19"
                  cy="1.19"
                  r="1.19"
                  transform="translate(9.464 18.486)"
                />
                <circle
                  id="Ellipse_20"
                  data-name="Ellipse 20"
                  cx="1.19"
                  cy="1.19"
                  r="1.19"
                  transform="translate(5.214 18.486)"
                />
                <circle
                  id="Ellipse_21"
                  data-name="Ellipse 21"
                  cx="1.19"
                  cy="1.19"
                  r="1.19"
                  transform="translate(13.714 18.486)"
                />
              </g>
            </g>
          </svg>
          <input placeholder="Password" type="password"></input>
        </div>
    </div>
  );
}
