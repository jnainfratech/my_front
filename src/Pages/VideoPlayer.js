import React from 'react';

const VideoPlayer = () => {
  const videoId = '1DbUpqKk3NWgbSJvVXmq43e0symdUuome'; // Replace with your actual Google Drive file ID
  // https://drive.google.com/file/d/1DbUpqKk3NWgbSJvVXmq43e0symdUuome/view
  return (
    <div>
      <iframe
        title="Google Drive Video"
        width="640"
        height="360"
        src={`https://drive.google.com/uc?id=${videoId}`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
