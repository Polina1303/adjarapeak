import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectLanguage } from "../../redux/languages/reducer";

export const ContactPage = () => {
  const navigate = useNavigate();
  const languages = useSelector(selectLanguage);
  return <></>;
};
