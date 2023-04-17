import { useEffect, useState } from "react";
// import { GetContries, IpAddress, SendEmail } from "./API";
// import InlineError from "./components/InlineError";
// import Loading from "./components/Loading";
// import {
//   validateEmail,
//   validateFullName,
//   validateMessage,
//   validatePhone,
// } from "./components/Validation";
// import { toast } from "react-toastify";
// import Toast from "./components/Toast";
import { SendEmail } from "../../API/index";
import "./order-input.css";

// const InputClass =
//   "w-full py-4 placeholder:text-gray px-6 text-main border-2 mt-2 border-border rounded-md";

export const OrderInput = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState();
  const [message, setMessage] = useState("");
  const [fullNameError, setFullNameError] = useState();
  const [emailError, setEmailError] = useState();
  const [phoneError, setPhoneError] = useState();
  const [messageError, setMessageError] = useState();
  const [loading, setLoading] = useState(true);
  const [ipData, setIpData] = useState();
  const [countries, setCountries] = useState();
  const [country, setCountry] = useState("Tanzania");
  const [buttonLoading, setButtonLoading] = useState(false);
  const [send, setSend] = useState();

  //   let result = countries && Object.keys(countries).map((key) => countries[key]);
  //   let output = result && result.find((x) => x.country_name === country);
  //   let outputResult = output && output.dialling_code;
  //   let phoneFull = outputResult && outputResult.concat(phone);

  //   useEffect(() => {
  //     if (!ipData & !countries) {
  //       IpAddress({ setLoading, setIpData });
  //       GetContries({ setLoading, setCountries });
  //     }
  //     // *********** VALIDATION **********
  //     validateFullName({ fullName, setFullNameError });
  //     validateEmail({ email, setEmailError });
  //     validatePhone({ phone, setPhoneError });
  //     validateMessage({ message, setMessageError });

  //     // ***********
  //     if (send) {
  //       toast.success(send.msg);
  //       setFullName("");
  //       setEmail("");
  //       setMessage("");
  //       setSend();
  //       setPhone("");
  //     }
  //   }, [fullName, email, phone, message, send, ipData, countries]);

  const submitHandler = (e) => {
    e.preventDefault();
    setButtonLoading(true);
    // if (!fullNameError & !emailError & !phoneError & !messageError) {
    SendEmail({ fullName, email, message, setSend }).then(() => {
      setButtonLoading(false);
    });
    // }
  };

  return (
    <>
      {/* <Toast /> */}
      <div className="">
        {/* {loading ? (
          <Loading />
        ) : ( */}
        <div className="">
          <form onSubmit={submitHandler} className="">
            <h2 className="">Contact Us</h2>
            {/* fullName */}
            <div className="">
              <label>FullName</label>
              <input
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                type="text"
                placeholder="User Doe"
                // className={InputClass}
              />
              {/* {fullNameError && <InlineError error={fullNameError} />} */}
            </div>
            {/* email */}
            <div className="my-6">
              <label>Email</label>
              <input
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="example@gmail.com"
                // className={InputClass}
              />
              {/* {emailError && <InlineError error={emailError} />} */}
            </div>
            {/* phone */}
            <div className="">
              <label>Phone</label>
              <div className="">
                {/* <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="col-span-3 bg-main py-3 px-2 my-2 text-sm rounded"
                >
                  {result &&
                    result.map((e, index) => (
                      <option key={index} value={e.country_name}>
                        {e.country_name}
                      </option>
                    ))}
                </select> */}
                {/* <div className="tracking-widest col-span-2 border-x-2 border-border flex-colo">
                  {outputResult}
                </div> */}
                {/* <input
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  type="number"
                  placeholder="0765452312"
                  //   className="placeholder:text-gray text-main col-span-7 px-3"
                /> */}
              </div>
              {/* {phoneError && <InlineError error={phoneError} />} */}
            </div>
            {/* message */}
            <div className="">
              <label>Message</label>
              <textarea
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="How can help you"
                rows={3}
                className=""
              />
              {/* {messageError && <InlineError error={messageError} />} */}
            </div>
            {/* submit */}
            <button
              type="submit"
              disabled={buttonLoading && true}
              className=" "
            >
              {/* {buttonLoading ? "Loading.." : "SUBMIT"} */}
            </button>
            {/* social media */}
            {/* <div className="">
              <a href="https://medium.com/@irenemmassyy" target="_black">
                <i className="fab fa-medium-m social" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCOYwYO-LEsrjqBs6xXSfq1w"
                target="_black"
              >
                <i className="fab fa-youtube text-red-500 social" />
              </a>
              <a href="https://t.me/zpunet" target="_black">
                <i className="fab fa-telegram text-blue-400 social" />
              </a>
            </div> */}
          </form>
        </div>
        {/* )} */}
      </div>
    </>
  );
};
