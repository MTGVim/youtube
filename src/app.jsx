import { useEffect, useState } from 'react';
import styles from './app.module.css';
import VideoList from './components/video_list/video_list';
import SearchHeader from './search_header/serach_header';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const search = (query) => {
    youtube.search(query).then(setVideos);
  };

  useEffect(() => {
    youtube.mostPopular().then(setVideos);
  }, [youtube]);

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search}></SearchHeader>
      <VideoList videos={videos}></VideoList>
    </div>
  );
}

export default App;
