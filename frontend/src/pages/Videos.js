import PostNav from "../components/PostsNav";
import axios from "axios";
import Loader from "../components/Loader";
import { useState, useEffect } from "react";
import { useGetAllLinks } from "../hooks/getAllLinks";
import SingleVideo from "../components/SingleVideo";
import { Helmet } from "react-helmet";

const Videos = () => {
  const [videoData, setVideoData] = useState([]);
  const { isLoading, data } = useGetAllLinks();
  const videoIds = data?.videoIds;

  useEffect(() => {
    const getVideoData = async () => {
      if (videoIds && videoIds.length > 0) {
        const promises = videoIds.map(async (id) => {
          const res = await axios.get(
            `https://www.googleapis.com/youtube/v3/videos?id=${id}&key=AIzaSyBad8gYJi8K3_2iR2QP1BQOFqXR-v2-tTM&part=snippet,contentDetails,statistics`
          );
          return res.data;
        });
        const responseData = await Promise.all(promises);
        setVideoData(responseData);
      }
    };
    getVideoData();
  }, [videoIds]);
  const link = data?.links?.map((link) => link);
  console.log(videoData);

  return (
    <>
    <Helmet>
      <title>Dezire | videos</title>
    </Helmet>
      <PostNav />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {videoData?.map((video) => (
            <SingleVideo
              title={video.items[0].snippet.title}
              tags={video.items[0].snippet.tags}
              channelName={video.items[0].snippet.channelTitle}
              thumbnail={video.items[0].snippet.thumbnails.standard.url}
              likeCount={video.items[0].statistics.likeCount}
              viewsCount={video.items[0].statistics.viewCount}
              link={link}
              key={video.items[0].id}
            />
          ))}
        </>
      )}
    </>
  );
};

export default Videos;
