import React, { Component, Fragment } from "react";
import WaveformVisualiser from "./WaveformVisualiser/WaveformVisualiser";

class AudioAnalyser extends Component {
  constructor(props) {
    super(props);
    this.audioRef = React.createRef();
    this.state = { audioData: new Uint8Array(0) };
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.audioContext = new (window.AudioContext ||
      window.webkitAudioContext)();
    this.analyser = this.audioContext.createAnalyser();
    this.analyser.fftSize = 64;
    const bufferLength = this.analyser.frequencyBinCount;
    console.log(bufferLength);
    this.dataArray = new Uint8Array(this.analyser.frequencyBinCount);
    this.source = this.audioContext.createMediaElementSource(
      this.audioRef.current
    );
    this.source.connect(this.analyser);
    this.source.connect(this.audioContext.destination);
    this.rafId = requestAnimationFrame(this.tick);
  }

  tick() {
    this.analyser.getByteFrequencyData(this.dataArray);
    this.setState({ audioData: this.dataArray });
    this.rafId = requestAnimationFrame(this.tick);
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.rafId);
    this.analyser.disconnect();
    this.source.disconnect();
  }

  render() {
    return (
      <Fragment>
        <audio
          crossOrigin="anonymous"
          controls
          ref={this.audioRef}
          src={
            "https://p.scdn.co/mp3-preview/21d086998189aa3814709c71c554c840fefeeeb4?cid=68d8d5adac344ad59fa37afc65eb1b13"
          }
        />
        <WaveformVisualiser audioData={this.state.audioData} />
      </Fragment>
    );
  }
}

export default AudioAnalyser;
