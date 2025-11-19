import dynamic from "next/dynamic";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import videoFile from "./mov1.mp4";
import styles from "./rock-climbing.module.css";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export const RockClimbing = () => {
  const { ref } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <div className={styles.climbingContainer}>
      <div className={styles.climbingContent}>
        <ReactPlayer
          url={videoFile}
          playing
          controls={false}
          muted
          loop
          playsinline
          width="460px"
          height="355px"
          config={{
            file: {
              attributes: {
                preload: "metadata",
              },
            },
          }}
          className={styles.climbingVideo}
        />

        <div className={styles.climbingDetails}>
          <h2 className={styles.routesTitleText}>Скалолазаниe</h2>
          <p className={styles.climbingText}>
            Приглашаем на тренировки по скалолазанию на естественном рельефе в
            живописном месте Гонио-Квариати! Подходит как новичкам, так и
            опытным скалолазам.
          </p>
          <p className={styles.climbingText}>
            Тренировки проходят 4 раза в неделю: в субботу и воскресенье (10:00
            и 15:00). Всё необходимое снаряжение предоставим, включая скальные
            туфли. Стоимость — 49 лари.
          </p>
          <Link href="/rockСlimbing" className={styles.climbingButton}>
            УЗНАТЬ БОЛЬШЕ
          </Link>
          <a
            href="https://t.me/shpaksn"
            target="_blank"
            rel="noreferrer"
            className={styles.climbingLink}
          >
            Записаться на тренировку
          </a>
        </div>
      </div>
    </div>
  );
};
