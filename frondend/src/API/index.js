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
  setSend,
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
    let res = await axios.post(
      `https://adjarapeak-api-production.up.railway.app/send`,
      datas
    );
    console.log("Response:", res);
    if (res && res.data) {
      console.log("Data:", res.data);
      setSend(res.data);
    }
  } catch (error) {
    console.error(error);
    alert(error.response.data.message);
  }
};
