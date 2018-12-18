import React, { Component } from "react";

class AudioVisualiserFreqBins extends Component {
  constructor(props) {
    super(props);
    this.canvas = React.createRef();
  }

  componentDidUpdate() {
    this.draw();
  }

  draw() {
    const { audioData } = this.props;
    const canvas = this.canvas.current;
    const height = canvas.height;
    const width = canvas.width;
    const context = canvas.getContext("2d");

    context.fillStyle = "rgb(0, 0, 0)";
    context.fillRect(0, 0, width, height);

    let barWidth = (width / 32) * 2.5;
    let barHeight;
    let x = 0;

    for (let i = 0; i < 32; i++) {
      barHeight = audioData[i] / 2;

      context.fillStyle = "rgb(" + (barHeight + 100) + ",50,50)";
      context.fillRect(x, height - barHeight / 2, barWidth, barHeight);

      x += barWidth + 1;
    }
  }

  render() {
    return <canvas width="300" height="300" ref={this.canvas} />;
  }
}

export default AudioVisualiserFreqBins;
