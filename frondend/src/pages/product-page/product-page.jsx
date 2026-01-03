"use client";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useCallback, useRef, useState } from "react";
import Link from "next/link";
import { setCurrentProduct } from "../../redux/product/reducer";
import { useRouter } from "next/router";
import { IoIosArrowBack } from "react-icons/io";
import { Buy } from "../../components/buy/buy";
import { PRODUCT } from "../../components/product-range/product";
import { RENT } from "../../components/product-range/rent";
import { RENT_SKY } from "../../components/product-range/rent-sky";
import { CATEGORY_PRODUCT } from "../../components/product-range/categoryProduct";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import DoneIcon from "@mui/icons-material/Done";
import { RecommendedCarousel } from "../../components/carousel";
import { getProductById } from "../../../lib/cache";
import { CATEGORY_RENT } from "../../components/product-range/categoryRent";
import Image from "next/image";
import styles from "./product-page.module.css";

export const ProductPage = () => {
  const product = useSelector((state) => state.products.currentProduct);
  const router = useRouter();
  const { id } = router.query;
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isZoomed, setIsZoomed] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });

  const imageRef = useRef(null);
  const containerRef = useRef(null);

  const handleBackClick = () => {
    router.back();
  };

  useEffect(() => {
    window.addEventListener("mouseup", handleMouseUp);
    return () => window.removeEventListener("mouseup", handleMouseUp);
  }, []);

  const handleZoomIn = () => {
    const newZoom = Math.min(zoomLevel + 0.5, 3);
    setZoomLevel(newZoom);
    setIsZoomed(newZoom > 1);
  };

  const handleZoomOut = () => {
    const newZoom = Math.max(zoomLevel - 0.5, 1);
    setZoomLevel(newZoom);
    setIsZoomed(newZoom > 1);

    if (newZoom <= 1) {
      setPosition({ x: 0, y: 0 });
    }
  };

  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    if (!isZoomed) return;

    e.preventDefault();
    setIsDragging(true);

    setDragStart({
      mouseX: e.clientX,
      mouseY: e.clientY,
      imageX: position.x,
      imageY: position.y,
    });
  };

  const handleMouseMove = (e) => {
    e.preventDefault();
    if (!imageSize.width || !containerSize.width) return;

    if (!isDragging || !isZoomed) return;

    const deltaX = e.clientX - dragStart.mouseX;
    const deltaY = e.clientY - dragStart.mouseY;

    const newX = dragStart.imageX + deltaX;
    const newY = dragStart.imageY + deltaY;

    const scaledWidth = imageSize.width * zoomLevel;
    const scaledHeight = imageSize.height * zoomLevel;

    const maxX = Math.max((scaledWidth - containerSize.width) / 2, 0);
    const maxY = Math.max((scaledHeight - containerSize.height) / 2, 0);

    const clampedX = Math.max(Math.min(newX, maxX), -maxX);
    const clampedY = Math.max(Math.min(newY, maxY), -maxY);

    setPosition({
      x: clampedX,
      y: clampedY,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleResetZoom = () => {
    setZoomLevel(1);
    setIsZoomed(false);
    setPosition({ x: 0, y: 0 });
  };

  const handleWheel = (e) => {
    if (isZoomed) {
      e.preventDefault();
      if (e.deltaY < 0) {
        handleZoomIn();
      } else {
        handleZoomOut();
      }
    }
  };

  // useEffect(() => {
  //   const updateSizes = () => {
  //     if (containerRef.current && imageRef.current) {
  //       setContainerSize({
  //         width: containerRef.current.offsetWidth,
  //         height: containerRef.current.offsetHeight,
  //       });

  //       const rect = imageRef.current.getBoundingClientRect();
  //       setImageSize({
  //         width: rect.width,
  //         height: rect.height,
  //       });
  //     }
  //   };

  //   updateSizes();
  //   window.addEventListener("resize", updateSizes);

  //   return () => {
  //     window.removeEventListener("resize", updateSizes);
  //   };
  // }, [product]);

  useEffect(() => {
    if (!imageRef.current || !containerRef.current) return;

    const img = imageRef.current;

    const updateSizes = () => {
      setContainerSize({
        width: containerRef.current.offsetWidth,
        height: containerRef.current.offsetHeight,
      });

      setImageSize({
        width: img.naturalWidth,
        height: img.naturalHeight,
      });
    };

    if (img.complete) {
      updateSizes();
    } else {
      img.onload = updateSizes;
    }

    window.addEventListener("resize", updateSizes);
    return () => window.removeEventListener("resize", updateSizes);
  }, [product?.img]);

  // const handleResetZoom = () => {
  //   setZoomLevel(1);
  //   setIsZoomed(false);
  //   setPosition({ x: 0, y: 0 });
  // };

  const handleImageClick = () => {
    if (!isZoomed) handleZoomIn();
  };

  const dispatch = useDispatch();

  const isRentProduct =
    RENT.some((p) => p.id === product.id) ||
    RENT_SKY.some((p) => p.id === product.id);

  const relatedTitle = isRentProduct
    ? "С этим товаром арендуют"
    : "С этим товаром покупают";

  const redirectToError = useCallback(() => {
    router.push("/error");
  }, [router]);

  const getRecommendedProducts = useCallback(() => {
    if (!product) return [];

    const isRent =
      RENT.some((p) => p.id === product.id) ||
      RENT_SKY.some((p) => p.id === product.id);

    const allSource = isRent ? [...RENT, ...RENT_SKY] : [...PRODUCT];

    let filtered = allSource.filter((item) => item.id !== product.id);

    const priorityItems = filtered
      .filter((item) => item.category === product.category)
      .slice(0, 3);

    const otherItems = filtered
      .filter((item) => item.category !== product.category)
      .sort(() => Math.random() - 0.5)
      .slice(0, 7);

    return [...priorityItems, ...otherItems];
  }, [product]);

  const recommendedProducts = getRecommendedProducts();

  useEffect(() => {
    if (!id) return;
    if (product && (product.id === Number(id) || product.id === id)) return;

    const foundProduct = getProductById(id);

    if (foundProduct) {
      dispatch(setCurrentProduct(foundProduct));
    } else {
      redirectToError();
    }
  }, [id, product, dispatch, redirectToError]);

  if (!product || !product.column) return null;
  const column = product.column;

  return (
    <>
      <div className={styles["back-button-cover"]}>
        <button className="back-button" onClick={handleBackClick}>
          <IoIosArrowBack size={"25px"} /> Назад
        </button>
      </div>

      <Card className={styles["product-card"]}>
        <Box className={styles["product-top"]}>
          {/* <Box className={styles["product-image-box"]}>
            <img
              src={"/img/" + product.img}
              alt={product.title}
              className={styles["product-image"]}
              // style={{ cursor: "zoom-in" }}
            />
          </Box> */}
          <Box className={styles["product-image-box"]}>
            <div
              ref={containerRef}
              className={`${styles["zoom-container"]} ${
                isZoomed ? styles.zoomed : ""
              } ${isDragging ? styles.dragging : ""}`}
              onWheel={handleWheel}
            >
              <Image
                ref={imageRef}
                src={"/img/" + product.img}
                alt={product.title}
                className={styles["product-image"]}
                style={{
                  transform: `translate(${position.x}px, ${position.y}px) scale(${zoomLevel})`,
                  transformOrigin: "center center",
                }}
                width={300}
                height={300}
                priority
                onClick={handleImageClick}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                draggable="false"
              />
            </div>

            {isZoomed && (
              <div className={styles["zoom-controls"]}>
                <button
                  className={styles["zoom-button"]}
                  onClick={handleZoomOut}
                  disabled={zoomLevel <= 1}
                  title="Уменьшить"
                >
                  −
                </button>

                <div className={styles["zoom-info"]}>
                  <span className={styles["zoom-level"]}>
                    {zoomLevel.toFixed(1)}x
                  </span>
                </div>

                <button
                  className={styles["zoom-button"]}
                  onClick={handleZoomIn}
                  disabled={zoomLevel >= 3}
                  title="Увеличить"
                >
                  +
                </button>

                <button
                  className={styles["zoom-reset"]}
                  onClick={handleResetZoom}
                  title="Сбросить зум"
                >
                  ↺
                </button>
              </div>
            )}
          </Box>
          <Box className={styles["product-info"]}>
            <Typography
              component="h1"
              className={styles["product-title"]}
              sx={{
                fontFamily: "RoadRadio-Bold, sans-serif",
                minWidth: 0,
                whiteSpace: "normal",
                overflowWrap: "anywhere",
                fontSize: {
                  xs: "18px",
                  sm: "28px",
                  md: "30px",
                  lg: "32px",
                },
              }}
            >
              {product.title}
            </Typography>

            <Box className={styles["product-buy"]}>
              <Buy product={product} page={true} />
            </Box>

            <Box>
              {isRentProduct ? null : (
                <Link className={styles["product-link"]} href="/delivery-terms">
                  Условия доставки
                </Link>
              )}
            </Box>
          </Box>
        </Box>

        <Box className={styles["product-description"]}>
          <Typography
            variant="h5"
            component="h3"
            className="product-desc-title"
            sx={{ fontFamily: "RoadRadio-Bold, sans-serif" }}
          >
            Описание
          </Typography>

          {product.desc && (
            <Typography className={styles["product-info-additional"]}>
              {product.desc}
            </Typography>
          )}
          {product.shortly && (
            <Typography className={styles["product-info-additional"]}>
              {product.shortly}
            </Typography>
          )}

          {product.day && (
            <Typography
              variant="h6"
              className={styles["product-info-additional"]}
            >
              {product.day}
            </Typography>
          )}

          <Box className={styles["product-list"]}>
            {column && column.length > 0 && (
              <ul className={styles["product-list"]}>
                {column.map((item, index) => (
                  <li key={index} className={styles["product-list-item"]}>
                    <DoneIcon sx={{ color: "#de682d" }} />
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </Box>
        </Box>

        <Box className={styles["product-related"]}>
          <Typography
            variant="h5"
            component="h3"
            className={styles["product-related-title"]}
            sx={{
              fontFamily: "RoadRadio-Bold, sans-serif",
            }}
          >
            {relatedTitle}
          </Typography>
        </Box>
        <Box>
          <RecommendedCarousel products={recommendedProducts} />
        </Box>
      </Card>
    </>
  );
};
