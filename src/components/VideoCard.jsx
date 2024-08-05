import millify from "millify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const VideoCard = ({ video, isRow }) => {
  const [isHover, setIsHover] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className={`${isRow ? "row" : ""} cursor-pointer`}
      //onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={() => navigate(`/watch?v=${video.videoId}`)}
    >
      {/* Resim Alanı */}
      <div>
        <img
          className="rounded-lg w-full h-full"
          src={
            isHover && video?.richThumbnail?.length
              ? video.richThumbnail[0]?.url || 'fallback-image-url'
              : video?.thumbnail[0]?.url || 'fallback-image-url'
          }
          alt={video?.title || 'Video Thumbnail'}
        />
      </div>

      {/* Video Alt Detay Alanı */}
      <div className="flex gap-4 mt-5">
        <img
          className="w-14 h-14 rounded-full"
          src={video?.channelThumbnail?.[0]?.url || 'fallback-channel-image-url'}
          alt="Channel logo"
        />
        <div>
          <h4 className="font-bold line-clamp-2">{video?.title || 'Video Title'}</h4>
          <p>{video?.channelTitle || 'Channel Title'}</p>

          <div className="flex gap-3">
            <p className="flex gap-1">
              <span>{millify(video?.viewCount || 0)}</span>
              <span>Görüntülenme</span>
            </p>
            <p>{video?.publishedTimeText || 'Published Time'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
