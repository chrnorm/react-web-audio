import React, { Component } from "react";
import styled from "styled-components";
import WaveBar from "./WaveBar/WaveBar";

/**
 * Concatentates an array with a mirrored version of itself.
 * Implementation note - reverse() mutates the array inplace so we need to slice() the array first
 * @param {Array} arr the array to mirror
 */
const appendReverse = arr => arr.concat(arr.slice().reverse());

/**
 * Scales a number from the input range to the output range. Similar to the Arduino `map` function.
 * @param {Number} x the number to scale
 * @param {Number} in_min the minimum of the input
 * @param {Number} in_max the maximum of the input
 * @param {Number} out_min the corresponding mininum of the output
 * @param {Number} out_max the corresponding maximum of the output
 */
const scale = (x, in_min, in_max, out_min, out_max) =>
  ((x - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

class WaveformVisualiser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      barHeights: [...Array(32)].map(_ => Math.ceil(Math.random() * 20 + 4))
    };
  }

  render() {
    const elementHeights = appendReverse([
      ...this.props.audioData.map(volume => scale(volume, 0, 300, 4, 24))
    ]);

    return (
      <Wrapper>
        {elementHeights.map(height => (
          <WaveBar height={height} />
        ))}
      </Wrapper>
    );
  }
}

export default WaveformVisualiser;
