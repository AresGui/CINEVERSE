import React, { useEffect } from "react";
import "./MovieTrailer.css";
import ReactPlayer from "react-player";
import axios from "axios";
import {
  BigContainer,
  TrailerContainer,
  CloseContainer,
} from "./MovieTrailer.styles";
import { RiCloseCircleFill } from "react-icons/ri";

const SeriesTrailer = ({
  videoKey,
  setVideoKey,
  seriesTitle,
  isOpen,
  setIsOpen,
}) => {
  useEffect(() => {
    const fetchVideoKey = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/tv?query=${seriesTitle}&api_key=af929f85de6377607702be056fc0ba2e`
        );

        const series = response.data.results[0];

        if (series) {
          const videosResponse = await axios.get(
            `https://api.themoviedb.org/3/tv/${series.id}/videos?api_key=af929f85de6377607702be056fc0ba2e`
          );

          const video = videosResponse.data.results[0];

          console.log(videosResponse.data.results);

          if (video) {
            setVideoKey(video.key);
          } else {
            setVideoKey(false);
          }
        }
      } catch (error) {
        console.error("Error fetching trailer:", error);
      }
    };

    fetchVideoKey();
  }, [seriesTitle]);

  const videoURL = `https://www.youtube.com/watch?v=${videoKey}`;

  return (
    <BigContainer isOpen={isOpen} onClick={() => setIsOpen(false)}>
      <TrailerContainer>
        <CloseContainer>
          <RiCloseCircleFill size={40} onClick={() => setIsOpen(false)} />
        </CloseContainer>
        {videoKey && <ReactPlayer url={videoURL} controls={true} />}
      </TrailerContainer>
    </BigContainer>
  );
};

export default SeriesTrailer;
