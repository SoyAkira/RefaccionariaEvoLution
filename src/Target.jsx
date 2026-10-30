import React from 'react';

function VideoPresentation() {
  return (
    <div className="target-presentation">
      <video 
        autoPlay 
        muted 
        loop 
        playsInline 
        disablePictureInPicture 
        controlsList="nodownload nofullscreen noremoteplayback"
      >
        <source src="/img/wFMmiD69RyWwGK5uxaG5_slide-v.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default VideoPresentation;