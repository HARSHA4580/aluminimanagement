// src/pages/VideoCall.js
import React, { useState, useRef } from 'react';
import Webcam from 'react-webcam';
import SimplePeer from 'simple-peer';

function VideoCall() {
  const [peer, setPeer] = useState(null);
  const [stream, setStream] = useState(null);
  const [callAccepted, setCallAccepted] = useState(false);
  const [caller, setCaller] = useState(null);

  const myVideo = useRef(null);
  const partnerVideo = useRef(null);

  // Set up peer connection and stream
  const startCall = () => {
    const peer = new SimplePeer({
      initiator: true,
      trickle: false,
      stream: stream,
    });

    peer.on('signal', (data) => {
      // Send the signal data to the other peer via signaling server or any other method
      // Here you will handle it on the client-side in demo (e.g., using prompts for simplicity)
      console.log('Signal data:', JSON.stringify(data));
    });

    peer.on('stream', (stream) => {
      partnerVideo.current.srcObject = stream;
    });

    setPeer(peer);
  };

  const acceptCall = (signalData) => {
    const peer = new SimplePeer({
      initiator: false,
      trickle: false,
      stream: stream,
    });

    peer.on('signal', (data) => {
      // Send the signal data back to the caller
      console.log('Signal data:', JSON.stringify(data));
    });

    peer.on('stream', (stream) => {
      partnerVideo.current.srcObject = stream;
    });

    peer.signal(signalData);

    setPeer(peer);
    setCallAccepted(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Video Call</h1>
      <div className="flex flex-col items-center mb-6">
        <div className="w-full max-w-lg mb-4">
          <Webcam
            audio={true}
            ref={myVideo}
            screenshotFormat="image/jpeg"
            videoConstraints={{ facingMode: 'user' }}
            onUserMedia={stream => setStream(stream)}
          />
        </div>
        <div className="w-full max-w-lg">
          <video ref={partnerVideo} autoPlay playsInline className="w-full" />
        </div>
      </div>
      <div className="flex gap-4">
        <button
          onClick={startCall}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Start Call
        </button>
        <button
          onClick={() => acceptCall(prompt('Enter the signal data:'))}
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
        >
          Accept Call
        </button>
      </div>
    </div>
  );
}

export default VideoCall;
