import React from "react";
import formatDistanceToNowStrict  from 'date-fns/formatDistanceToNowStrict'
import styles from "./style.module.css";
import Photo from "../photo";

function Tweet({ name, slug, datetime, text }) {
  return (
    <article className={styles.tweet}>
      {/*Avatar*/}
      <div className={styles.avatar}>
        <Photo />
      </div>

      {/*Body*/}
      <div className={styles.body}>
        <header className={styles.header}>{name} @{slug} · {formatDistanceToNowStrict(datetime)}</header>

        <div className={styles.content}>{text}</div>
        <footer className={styles.footer}>footer</footer>
      </div>
    </article>
  );
}

export default Tweet;
