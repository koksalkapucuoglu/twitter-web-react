import React from "react";
import formatDistanceToNowStrict from "date-fns/formatDistanceToNowStrict";
import styles from "./style.module.css";
import Photo from "../photo";
import IconButton from "../icon";
import * as Icon from "../icons";

function Tweet({ user, created_at, favorite_count, retweet_count, text, id }) {

  return (
    <article className={styles.tweet}>
      {/*Avatar*/}
      <div className={styles.avatar}>
        <Photo src={user.profile_image_url_https} />
      </div>

      {/*Body*/}
      <div className={styles.body}>
        <header className={styles.header}>
          <span className={styles.name}>{user.name}</span>{" "}
          <span className={styles.slug}>@{user.screen_name}</span> ·{" "}
          <span>{formatDistanceToNowStrict(new Date(created_at))}</span>
        </header>

        <div className={styles.content}>{text}</div>

        <footer className={styles.footer}>
          {/*Reply*/}
          <div className={styles.footerButton}>
            <IconButton className={styles.actionButton}>
              <Icon.Reply />
            </IconButton>
            {false && <span>3</span>}
          </div>
          {/*Retweet*/}
          <div className={styles.footerButton}>
            <IconButton
              className={`${styles.actionButton} ${styles.hoverRetweet} ${id == 1408427761220219000 && styles.retweeted}`}
            >
              <Icon.Retweet />
            </IconButton>
            {retweet_count && <span>{retweet_count}</span>}
          </div>
          {/*Like*/}
          <div className={styles.footerButton}>
            <IconButton
              className={`${styles.actionButton} ${styles.hoverLike} ${id == 1407951875492651000 && styles.liked} `}
            >
              <Icon.Like/>
            </IconButton>
            {favorite_count && <span>{favorite_count}</span>}
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
