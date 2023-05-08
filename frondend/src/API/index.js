import axios from "axios";

export const SendEmail = async ({
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
      count,
      price,
    };
    let res = await axios.post(`http://localhost:5000/send`, datas);
    if (res) {
      setSend(res.data);
    }
  } catch (error) {
    alert(error.response.data.message);
  }
};
