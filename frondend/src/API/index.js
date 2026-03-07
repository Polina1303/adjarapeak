// import axios from "axios";

// export const SendEmail = async ({
//   name,
//   phone,
//   telegram,
//   dateStart,
//   dateEnd,
//   comments,
//   prod,
//   desc,
//   count,
//   price,
// }) => {
//   try {
//     const datas = {
//       name,
//       phone,
//       telegram,
//       dateStart,
//       dateEnd,
//       comments,
//       prod,
//       desc,
//       count,
//       price,
//     };
//     let res = await axios.post(
//       `https://adjarapeak-api-production.up.railway.app/send`,
//       datas
//     );
//     console.log("Response:", res);
//     if (res && res.data) {
//       console.log("Data:", res.data);
//     }
//   } catch (error) {
//     console.error(error);
//     alert(error.response.data.message);
//   }
// };

import axios from "axios";

export const SendEmail = async ({
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
}) => {
  try {
    const datas = {
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
    };

    const res = await axios.post(
      "https://adjarapeak-api-production.up.railway.app/send",
      datas,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Response:", res);

    if (res?.data) {
      console.log("Data:", res.data);
    }
  } catch (error) {
    console.error("SEND EMAIL ERROR:", error);

    const message =
      error?.response?.data?.message ||
      error?.message ||
      "Ошибка при отправке заявки";

    alert(message);
  }
};
