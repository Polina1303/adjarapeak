export const DeliveryTerms = () => {
  return (
    <>
      <div className="back-button-cover">
        <button className="back-button" onClick={() => navigate(-1)}>
          <IoIosArrowBack size={"25px"} />{" "}
          {languages === "RU" ? "Назад" : "Back"}
        </button>
      </div>
    </>
  );
};
