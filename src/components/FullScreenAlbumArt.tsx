import { Song } from "@/data/musicData";
import { X } from "lucide-react";

interface FullScreenAlbumArtProps {
  song: Song;
  onClose: () => void;
}

const FullScreenAlbumArt = ({ song, onClose }: FullScreenAlbumArtProps) => {
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in"
      style={{ background: "hsla(var(--background) / 0.95)" }}
      onClick={onClose}
    >
      <button
        className="absolute top-4 right-4 p-2 rounded-full transition-all hover:scale-110"
        style={{ background: "hsl(var(--card))" }}
        onClick={onClose}
      >
        <X className="w-6 h-6" style={{ color: "hsl(var(--foreground))" }} />
      </button>
      
      <div className="max-w-3xl w-full animate-scale-in" onClick={(e) => e.stopPropagation()}>
        <img
          src={song.albumArt}
          alt={song.album}
          className="w-full h-auto rounded-2xl shadow-2xl animate-pulse-glow"
        />
        <div className="text-center mt-6">
          <h2 className="text-3xl font-bold gradient-text mb-2">{song.title}</h2>
          <p className="text-xl" style={{ color: "hsl(var(--muted-foreground))" }}>
            {song.artist}
          </p>
          <p className="text-lg mt-1" style={{ color: "hsl(var(--muted-foreground))" }}>
            {song.album}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FullScreenAlbumArt;
