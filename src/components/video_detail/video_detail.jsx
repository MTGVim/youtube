import React, { memo } from 'react';
import styles from './video_detail.module.css';

const VideoDetail = memo(({ video, video: { snippet } }) => (
  <section className={styles.detail}>
    <iframe
      title="video-detail"
      className={styles.video}
      type="text/html"
      width="100%"
      height="500px"
      src={`https://www.youtube.com/embed/${video.id}`}
      frameBorder="0"
      allowFullScreen
    ></iframe>
    <h2>{snippet.title}</h2>
    <h2>{snippet.channelTitle}</h2>
    <pre className={styles.description}>{snippet.description}</pre>
  </section>
));
VideoDetail.displayName = 'VideoDetail';
export default VideoDetail;
