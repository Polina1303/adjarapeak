const { Carousel } = require("antd");

export const CarouselItem = ({ item }) => {
  return (
    <Carousel arrows infinite={false}>
      {item.map((item) => (
        <div>{item}</div>
      ))}
    </Carousel>
  );
};
