import { ProductItems } from "../../components/product-items";
import { PRODUCT } from "../../components/product-range/product";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import "./sale-page.css";
import { Menu} from 'antd';
import {CATEGORY_PRODUCT} from '../../components/product-range/categoryProduct'
import { useEffect,useState } from "react";



const items = CATEGORY_PRODUCT.map((item, index) => ({
  key: index,
  label: item.title,
  type:item.type
}));

export const SalePage = () => {
  const history = useNavigate();
  const [activeType, setActiveType] = useState(0);
  const [active,setActive]=useState(PRODUCT)

  const handleClick = (e) => {
    setActiveType(Number(e.key));

  };
  useEffect(() => {
    const currentItems=PRODUCT.filter(item=>{
      return item.category===items[activeType].type
    })
if(currentItems.length===0){
  setActive(PRODUCT)

}else{
  setActive(currentItems)
}
  }, [activeType]);

  return (
    <>
      <div className="back-button-cover">
        <button className="back-button" onClick={() => history(-1)}>
          <IoIosArrowBack size={"25px"} /> Назад
        </button>
      </div>
      <Menu
          mode="horizontal"
          defaultSelectedKeys={['0']}
          items={items}
          style={{ flex: 1, minWidth: 0, }}
          onClick={handleClick}
     
        />
      <div className="home-page__container-product">
        <div>
          <div className="title" id="home-page-buy">
            ПРОДАЖА СНАРЯЖЕНИЯ
          </div>
          <div className="home-page-product">
            {active.map((product) => (
              <ProductItems key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
