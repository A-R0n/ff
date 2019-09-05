import React, { Component } from 'react';
import ReactAudioPlayer from 'react-audio-player';

class Song extends Component {
	render() {
        return <ReactAudioPlayer
        // src="https://ffavi.s3.amazonaws.com/Lil+Wayne+-+3+peat.mp3"
        autoPlay
        controls />;
	}
}

export default Song;
