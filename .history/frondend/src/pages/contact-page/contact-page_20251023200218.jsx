import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const ContactPage = () => {
  const navigate = useNavigate();
  const languages = useSelector((state) => state.languages.currentLanguage);
  return <></>;
};
