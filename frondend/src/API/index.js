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

    let res = await axios.post(
      `https://adjarapeak-api-production.up.railway.app/send`,
      datas,
      {
        headers: {
          "Content-Type": "application/json",
        },
        // Add timeout
        timeout: 10000,
      }
    );

    console.log("Response:", res);
    if (res && res.data) {
      console.log("Data:", res.data);
      return res.data;
    }
  } catch (error) {
    console.error("Full error:", error);

    // Better error handling
    if (error.response) {
      // The request was made and the server responded with a status code
      console.error("Error response data:", error.response.data);
      console.error("Error response status:", error.response.status);
      alert(error.response.data?.message || "Server error occurred");
    } else if (error.request) {
      // The request was made but no response was received
      console.error("No response received:", error.request);
      alert("No response from server. Please check your connection.");
    } else {
      // Something happened in setting up the request
      console.error("Error setting up request:", error.message);
      alert("Error sending request: " + error.message);
    }
  }
};
