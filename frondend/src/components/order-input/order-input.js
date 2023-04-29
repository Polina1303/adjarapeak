import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { SendEmail } from "../../API/index";
import "./order-input.css";

export const OrderInput = (items) => {
  const [visible, setVisible] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [setSend] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const obj = items;
  const num = obj.items.map((item) => item.category.includes("rent"));

  useEffect(() => {
    if (num.includes(true)) {
      setVisible(true);
    }
  }, [num]);

  const prod = obj.items.map((item) => item.title).join(",");
  const price = obj.items.map((item) => item.price).join(",");
  const count = obj.items.map((item) => item.count).join(",");

  const defaultValues = {
    prod: prod,
    price: price,
    count: count,
  };

  const onSubmit = (data, e) => {
    e.preventDefault();
    const {
      name,
      phone,
      telegram,
      dateStart,
      dateEnd,
      comments,
      prod,
      count,
      price,
    } = data;
    SendEmail({
      name,
      phone,
      telegram,
      dateStart,
      dateEnd,
      comments,
      prod,
      count,
      price,
      setSend,
    }).then(() => {
      setOrderSuccess(true);
    });
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
        <div style={{ display: "none" }}>
          <input {...register("prod")} defaultValue={defaultValues.prod} />
          <input {...register("price")} defaultValue={defaultValues.price} />
          <input {...register("count")} defaultValue={defaultValues.count} />
        </div>
        <div>
          <button className="button-form">ОФОРМИТЬ ЗАКАЗ</button>
        </div>
      </form>
      {orderSuccess && (
        <div className="successTitle">
          Спасибо за заказа!
          <br /> С уважением Adjara Peak.
        </div>
      )}
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
