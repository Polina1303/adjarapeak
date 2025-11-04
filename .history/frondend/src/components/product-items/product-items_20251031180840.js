export const ProductItems = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handelClickImg = () => {
    dispatch(setCurrentProduct(product));
    navigate(`/app/${product.id}`);
  };

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  // Проверяем есть ли описание
  const hasDescription = product.desc && product.desc.trim() !== "";

  return (
    <>
      <div className="product-items">
        <div ref={ref} className="product-items__details">
          {inView ? (
            <img
              className="product-items__img"
              src={process.env.PUBLIC_URL + "/img/" + product.img}
              alt={product.title}
            />
          ) : (
            <div className="product-items__img-unvisible"></div>
          )}

          <div className="icon-background" onClick={handelClickImg}>
            <div className="icon-search">
              <BsSearch />
            </div>
          </div>

          <span className="product-items__title">
            {product.title.toUpperCase()}
          </span>

          {hasDescription && (
            <p className="product-items__desc">{product.desc}</p>
          )}

          <Buy product={product} />
        </div>
      </div>
    </>
  );
};
