import { useCallback, useEffect, useState } from 'react';
import styles from './app.module.css';
import VideoDetail from './components/video_detail/video_detail';
import VideoList from './components/video_list/video_list';
import SearchHeader from './search_header/serach_header';

const App = ({ youtube }) => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = useCallback((video) => {
    setSelectedVideo(video);
  }, []);
  const search = useCallback(
    (query) => {
      setSelectedVideo(null);
      youtube
        .search(query) //
        .then((videos) => {
          setVideos(videos);
        });
    },
    [youtube]
  );

  useEffect(() => {
    youtube
      .mostPopular() //
      .then(setVideos);
  }, [youtube]);

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search}></SearchHeader>
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo}></VideoDetail>
          </div>
        )}
        <div className={styles.list}>
          <VideoList
            videos={videos}
            onVideoClick={selectVideo}
            display={selectedVideo ? 'list' : 'grid'}
          ></VideoList>
        </div>
      </section>
    </div>
  );
};

export default App;
