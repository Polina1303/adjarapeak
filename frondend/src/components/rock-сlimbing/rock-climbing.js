import dynamic from "next/dynamic";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import styles from "./rock-climbing.module.css";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export const RockClimbing = () => {
  const { t } = useTranslation("rock-climbing");
  const { ref } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <div className={styles.climbingContainer}>
      <div className={styles.climbingContent}>
        <ReactPlayer
          url="/image/mov1.mp4"
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
          <h2 className={styles.routesTitleText}>{t("homeSection.title")}</h2>
          <p className={styles.climbingText}>{t("homeSection.description1")}</p>
          <p className={styles.climbingText}>{t("homeSection.description2")}</p>
          <Link href="/rockClimbing" className={styles.climbingButton}>
            {t("homeSection.more")}
          </Link>
          <a
            href="https://t.me/shpaksn"
            target="_blank"
            rel="noreferrer"
            className={styles.climbingLink}
          >
            {t("homeSection.signup")}
          </a>
        </div>
      </div>
    </div>
  );
};
