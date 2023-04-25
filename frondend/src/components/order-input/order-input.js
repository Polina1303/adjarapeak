import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import PhoneNumber from "libphonenumber-js";
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

export const OrderInput = (items) => {
  // const [fullName, setFullName] = useState("");
  // const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState();
  // const [message, setMessage] = useState("");
  // const [fullNameError, setFullNameError] = useState();
  // const [emailError, setEmailError] = useState();
  // const [phoneError, setPhoneError] = useState();
  // const [messageError, setMessageError] = useState();
  // const [loading, setLoading] = useState(true);
  // const [ipData, setIpData] = useState();
  // const [countries, setCountries] = useState();
  // const [country, setCountry] = useState("Tanzania");
  // const [buttonLoading, setButtonLoading] = useState(false);
  // const [send, setSend] = useState();
  const [visible, setVisible] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   setButtonLoading(true);
  //   // if (!fullNameError & !emailError & !phoneError & !messageError) {
  //   SendEmail({ fullName, email, message, setSend }).then(() => {
  //     setButtonLoading(false);
  //   });
  //   // }
  // };
  const obj = items;
  const num = obj.items.map((item) => item.category.includes("rent"));
  console.log(num);
  console.log(num.includes(true));

  useEffect(() => {
    if (num.includes(true)) {
      console.log("11");
      setVisible(true);
    }
  }, [num]);

  console.log("ghggh", obj.items);
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="container-form">
      <p className="title-form">Bведите информацию для оформления заказа</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-item">
          <label>Имя*:</label>
          <input
            className="input"
            type="text"
            placeholder="Имя"
            {...register("name", {
              required:
                "Это обязательное поле для заполнения. Введите ваше имя!",
            })}
          />
          {errors?.name && (
            <div className="input-error" style={{ color: "red" }}>
              {errors.name.message}
            </div>
          )}
        </div>
        <div className="form-item">
          <label>Номер телефона*:</label>
          <input
            className="input"
            type="tel"
            placeholder="Номер телефона"
            {...register("phone", {
              required:
                "Это обязательное поле для заполнения. Введите ваше номер телефона!",
              pattern: {
                value: /^(?=.*\d)[+\d().\s-]{9,}$/,
                message: "Пожалуйста, введите правильный номер телефона",
              },
            })}
          />
          {errors?.phone && (
            <div className="input-error" style={{ color: "red" }}>
              {errors.phone.message}
            </div>
          )}
        </div>
        <div className="form-item">
          <label>Telegram:</label>
          <input
            className="input"
            type="text"
            placeholder="Telegram"
            {...register("telegram")}
          />
        </div>
        {visible && (
          <>
            <div className="form-item">
              <label>Даты аренды:</label>
              <input
                className="input"
                type="date"
                {...register("dateStart", {
                  required:
                    "Это обязательное поле для заполнения. Выберете дату проката!",
                })}
              />
              {errors?.dateStart && (
                <div className="input-error" style={{ color: "red" }}>
                  {errors.dateStart.message}
                </div>
              )}

              <input
                className="input"
                type="date"
                {...register("dateEnd", {
                  required:
                    "Это обязательное поле для заполнения. Выберете дату проката!",
                })}
              />
              {errors?.dateEnd && (
                <div className="input-error" style={{ color: "red" }}>
                  {errors.dateEnd.message}
                </div>
              )}
            </div>
          </>
        )}
        <div className="form-item">
          <label>Комментарий:</label>
          <textarea
            className="input-text"
            placeholder="Комментарий"
            {...register("comments")}
          />
        </div>
        <div>
          <button className="button-form">ОФОРМИТЬ ЗАКАЗ</button>
        </div>
      </form>
    </div>
  );
};

// {/* <Toast /> */}
// <div className="">
// {/* {loading ? (
//   <Loading />
// ) : ( */}
// <div className="">
//   <form onSubmit={submitHandler} className="">
//     <h2 className="">Contact Us</h2>
//     {/* fullName */}
//     <div className="">
//       <label>FullName</label>
//       <input
//         value={fullName}
//         onChange={(e) => setFullName(e.target.value)}
//         required
//         type="text"
//         placeholder="User Doe"
//         // className={InputClass}
//       />
//       {/* {fullNameError && <InlineError error={fullNameError} />} */}
//     </div>
//     {/* email */}
//     <div className="my-6">
//       <label>Email</label>
//       <input
//         required
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         type="email"
//         placeholder="example@gmail.com"
//         // className={InputClass}
//       />
//       {/* {emailError && <InlineError error={emailError} />} */}
//     </div>
//     {/* phone */}
//     <div className="">
//       <label>Phone</label>
//       <div className="">
//         {/* <select
//           value={country}
//           onChange={(e) => setCountry(e.target.value)}
//           className="col-span-3 bg-main py-3 px-2 my-2 text-sm rounded"
//         >
//           {result &&
//             result.map((e, index) => (
//               <option key={index} value={e.country_name}>
//                 {e.country_name}
//               </option>
//             ))}
//         </select> */}
//         {/* <div className="tracking-widest col-span-2 border-x-2 border-border flex-colo">
//           {outputResult}
//         </div> */}
//         {/* <input
//           required
//           value={phone}
//           onChange={(e) => setPhone(e.target.value)}
//           type="number"
//           placeholder="0765452312"
//           //   className="placeholder:text-gray text-main col-span-7 px-3"
//         /> */}
//       </div>
//       {/* {phoneError && <InlineError error={phoneError} />} */}
//     </div>
//     {/* message */}
//     <div className="">
//       <label>Message</label>
//       <textarea
//         required
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//         placeholder="How can help you"
//         rows={3}
//         className=""
//       />
//       {/* {messageError && <InlineError error={messageError} />} */}
//     </div>
//     {/* submit */}
//     <button
//       type="submit"
//       disabled={buttonLoading && true}
//       className=" "
//     >
//       {/* {buttonLoading ? "Loading.." : "SUBMIT"} */}
//     </button>
//     {/* social media */}
//     {/* <div className="">
//       <a href="https://medium.com/@irenemmassyy" target="_black">
//         <i className="fab fa-medium-m social" />
//       </a>
//       <a
//         href="https://www.youtube.com/channel/UCOYwYO-LEsrjqBs6xXSfq1w"
//         target="_black"
//       >
//         <i className="fab fa-youtube text-red-500 social" />
//       </a>
//       <a href="https://t.me/zpunet" target="_black">
//         <i className="fab fa-telegram text-blue-400 social" />
//       </a>
//     </div> */}
//   </form>
// </div>
// {/* )} */}
// </div>
