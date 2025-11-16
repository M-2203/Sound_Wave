import { Song } from "@/data/musicData";
import { Play, Pause, SkipBack, SkipForward, Volume2, Repeat, Shuffle } from "lucide-react";
import { useState } from "react";

interface PlayerFooterProps {
  currentSong: Song | null;
}

const PlayerFooter = ({ currentSong }: PlayerFooterProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  if (!currentSong) {
    return (
      <div className="player-footer">
        <div className="flex items-center gap-4">
          <div 
            className="w-14 h-14 rounded-lg flex items-center justify-center"
            style={{ background: "hsl(var(--muted))" }}
          >
            <Play className="w-6 h-6" style={{ color: "hsl(var(--muted-foreground))" }} />
          </div>
          <div>
            <div className="font-semibold" style={{ color: "hsl(var(--muted-foreground))" }}>
              No song selected
            </div>
            <div className="text-sm" style={{ color: "hsl(var(--muted-foreground))" }}>
              Choose a track to start playing
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="player-footer">
      <div className="flex items-center gap-4 flex-1">
        <img
          src={currentSong.albumArt}
          alt={currentSong.album}
          className="album-art-small animate-pulse-glow"
        />
        <div className="min-w-0">
          <div className="font-semibold truncate" style={{ color: "hsl(var(--foreground))" }}>
            {currentSong.title}
          </div>
          <div className="text-sm truncate" style={{ color: "hsl(var(--muted-foreground))" }}>
            {currentSong.artist}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-2 flex-1">
        <div className="flex items-center gap-4">
          <button 
            className="p-2 rounded-full transition-all hover:scale-110"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            <Shuffle className="w-4 h-4" />
          </button>
          <button 
            className="p-2 rounded-full transition-all hover:scale-110"
            style={{ color: "hsl(var(--foreground))" }}
          >
            <SkipBack className="w-5 h-5" />
          </button>
          <button
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
            style={{ 
              background: "hsl(var(--primary))",
              color: "hsl(var(--primary-foreground))"
            }}
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? (
              <Pause className="w-5 h-5" fill="currentColor" />
            ) : (
              <Play className="w-5 h-5" fill="currentColor" />
            )}
          </button>
          <button 
            className="p-2 rounded-full transition-all hover:scale-110"
            style={{ color: "hsl(var(--foreground))" }}
          >
            <SkipForward className="w-5 h-5" />
          </button>
          <button 
            className="p-2 rounded-full transition-all hover:scale-110"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            <Repeat className="w-4 h-4" />
          </button>
        </div>

        <div className="w-full max-w-md flex items-center gap-2">
          <span className="text-xs" style={{ color: "hsl(var(--muted-foreground))" }}>
            0:00
          </span>
          <div 
            className="flex-1 h-1 rounded-full cursor-pointer relative overflow-hidden"
            style={{ background: "hsl(var(--muted))" }}
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const percentage = (x / rect.width) * 100;
              setProgress(percentage);
            }}
          >
            <div
              className="h-full rounded-full transition-all"
              style={{ 
                width: `${progress}%`,
                background: "hsl(var(--primary))"
              }}
            />
          </div>
          <span className="text-xs" style={{ color: "hsl(var(--muted-foreground))" }}>
            {currentSong.duration}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2 flex-1 justify-end">
        <Volume2 className="w-5 h-5" style={{ color: "hsl(var(--muted-foreground))" }} />
        <div 
          className="w-24 h-1 rounded-full"
          style={{ background: "hsl(var(--muted))" }}
        >
          <div
            className="h-full rounded-full"
            style={{ 
              width: "70%",
              background: "hsl(var(--primary))"
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PlayerFooter;
