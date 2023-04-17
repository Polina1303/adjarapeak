import { TiDeleteOutline } from "react-icons/ti";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import {
  deletItemFromCart,
  minusItem,
  plusItem,
} from "../../redux/cart/reducer";
import { Button } from "../button";
import "./count.css";

export const Count = ({ img, title, price, id, count }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(deletItemFromCart(id));
  };

  const handleClickPlus = () => {
    dispatch(plusItem({ id }));
  };
  const handleClickMinus = () => {
    dispatch(minusItem({ id }));
  };

  return (
    <div className="">
      <div className="">
        {/* {count >= 0 ? ( */}
        <div className="wrapper-count">
          <Button onClick={handleClickMinus}>
            <AiOutlineMinus size={25} />
          </Button>
          <span className="count-cover"> {count}</span>
          <Button onClick={handleClickPlus}>
            <AiOutlinePlus size={25} />
          </Button>
        </div>
        {/* ) : (
          handleClick()
        )} */}
      </div>
    </div>
  );
};
