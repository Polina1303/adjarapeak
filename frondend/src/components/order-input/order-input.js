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
  const desc = obj.items.map((item) => item.desc).join(",");
  const price = obj.items.map((item) => item.price).join(",");
  const count = obj.items.map((item) => item.count).join(",");

  const defaultValues = {
    prod: prod,
    desc: desc,
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
      desc,
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
      desc,
      count,
      price,
      setSend,
    }).then(() => {});
    reset();
    setOrderSuccess(true);
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
          <input {...register("desc")} defaultValue={defaultValues.desc} />
          <input {...register("price")} defaultValue={defaultValues.price} />
          <input {...register("count")} defaultValue={defaultValues.count} />
        </div>
        {orderSuccess && (
          <div className="successTitle">
            Спасибо за заказ!
            <br /> С уважением Adjara Peak.
          </div>
        )}
        <div>
          <button className="button-form">ОФОРМИТЬ ЗАКАЗ</button>
        </div>
      </form>
    </div>
  );
};
