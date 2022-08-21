import React from "react";
import styled from "styled-components";
import CardSlider from "./CardSlider";
export default function Slider({ movies }) {
  const getMoviesFromRange = (from, to) => {
    return movies.slice(from, to);
  };
  return (
    <Container>
      <CardSlider data={getMoviesFromRange(0, 10)} title="現正熱播" />
      <CardSlider data={getMoviesFromRange(10, 20)} title="最新發行" />
      <CardSlider data={getMoviesFromRange(20, 30)} title="好萊塢電影" />
      <CardSlider data={getMoviesFromRange(30, 40)} title="Netflix 獨家" />
      <CardSlider data={getMoviesFromRange(40, 50)} title="熱門選擇" />
      <CardSlider data={getMoviesFromRange(50, 60)} title="戲劇節目" />
    </Container>
  );
}

const Container = styled.div``;
