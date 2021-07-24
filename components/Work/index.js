import Carousel from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Work.module.scss";
import Image from "next/image";
import poolExample from "../../public/assets/pool-example.png";
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
                src={poolExample}
                className={styles.image}
                alt="pool example"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={styles.card}>
              <Image
                src={poolExample}
                className={styles.image}
                alt="pool example"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={styles.card}>
              <Image
                src={poolExample}
                className={styles.image}
                alt="pool example"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={styles.card}>
              <Image
                src={poolExample}
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
