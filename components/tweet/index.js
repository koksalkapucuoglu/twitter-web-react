import React from "react";
import formatDistanceToNowStrict from "date-fns/formatDistanceToNowStrict";
import styles from "./style.module.css";
import Photo from "../photo";
import IconButton from "../icon";
import * as Icon from "../icons";

function Tweet({ name, slug, datetime, text }) {
  return (
    <article className={styles.tweet}>
      {/*Avatar*/}
      <div className={styles.avatar}>
        <Photo />
      </div>

      {/*Body*/}
      <div className={styles.body}>
        <header className={styles.header}>
          <span className={styles.name}>{name}</span>{" "}
          <span className={styles.slug}>@{slug}</span> ·{" "}
          <span>{formatDistanceToNowStrict(datetime)}</span>
        </header>

        <div className={styles.content}>{text}</div>
        <footer className={styles.footer}>
            {/*Reply*/}
          <div className={styles.footerButton}>
            <IconButton className={styles.actionButton}>
              <Icon.Reply />
            </IconButton>
              <span>3</span>
          </div>
            {/*Retweet*/}
            <div className={styles.footerButton}>
                <IconButton className={`${styles.actionButton} ${styles.hoverRetweet}`}>
                    <Icon.Retweet/>
                </IconButton>
                <span>12</span>
            </div>
            {/*Like*/}
            <div className={styles.footerButton}>
                <IconButton className={`${styles.actionButton} ${styles.hoverLike}`}>
                    <Icon.Like />
                </IconButton>
            </div>
            {/*Share*/}
            <div className={styles.footerButton}>
                <IconButton className={styles.actionButton}>
                    <Icon.Share />
                </IconButton>
            </div>
        </footer>
      </div>
    </article>
  );
}

export default Tweet;
