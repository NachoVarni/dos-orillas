import Carousel from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Work.module.scss";
import Image from "next/image";
import poolOne from "../../public/assets/pool-1.png";
import poolTwo from "../../public/assets/pool-2.jpg";
import poolThree from "../../public/assets/pool-3.jpg";
import poolFour from "../../public/assets/pool-4.jpg";
import { Link } from "react-scroll";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className={`${styles.slickNext} ${styles.slickArrow}`}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className={`${styles.slickPrev} ${styles.slickArrow}`}
      onClick={onClick}
    />
  );
}

function Work() {
  return (
    <>
      <div className={styles.wrapper} id="work">
        <h3 className={styles.title}>NUESTRO TRABAJO</h3>
        <div className={styles.carousel}>
          <Carousel
            dots={true}
            slidesToShow={1}
            slidesToScroll={1}
            autoplay={false}
            arrows={true}
            nextArrow={<SampleNextArrow />}
            prevArrow={<SamplePrevArrow />}
            responsive={[
              {
                breakpoint: 812,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: false,
                },
              },
            ]}
          >
            <div className={styles.card}>
              <Image
                src={poolOne}
                className={styles.image}
                alt="pool example"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={styles.card}>
              <Image
                src={poolTwo}
                className={styles.image}
                alt="pool example"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={styles.card}>
              <Image
                src={poolThree}
                className={styles.image}
                alt="pool example"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={styles.card}>
              <Image
                src={poolFour}
                className={styles.image}
                alt="pool example"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default Work;
