import { useRef } from "react";

function MediaSection() {
  const audioRef = useRef(null);

  const enableAudio = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(() => {});
    }
    window.removeEventListener("pointerdown", enableAudio);
  };

  return (
    <section className="media" onPointerDown={enableAudio}>
      <h2>Descobreix Joanetes</h2>

      <div className="media-row">
        <video autoPlay muted loop playsInline className="promo-video">
          <source src="/media/video.mp4" type="video/mp4" />
        </video>

        <img src="/media/joanetes.jpg" alt="Vista de Joanetes" className="promo-image" />
      </div>

      <audio ref={audioRef} loop>
        <source src="/media/audio.mp3" type="audio/mpeg" />
      </audio>
    </section>
  );
}

export default MediaSection;
