import { Song } from "@/data/musicData";
import { Play, Pause, SkipBack, SkipForward, Volume2, Repeat, Shuffle } from "lucide-react";
import { useState, useEffect } from "react";

interface PlayerFooterProps {
  currentSong: Song | null;
  onPrevious: () => void;
  onNext: () => void;
}

const PlayerFooter = ({ currentSong, onPrevious, onNext }: PlayerFooterProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(70);

  // Auto-play when a new song is selected
  useEffect(() => {
    if (currentSong) {
      setIsPlaying(true);
      setProgress(0);
    }
  }, [currentSong]);

  // Simulate progress when playing
  useEffect(() => {
    if (isPlaying && currentSong) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsPlaying(false);
            onNext(); // Auto-advance to next song
            return 0;
          }
          return prev + 0.5;
        });
      }, 300);

      return () => clearInterval(interval);
    }
  }, [isPlaying, currentSong, onNext]);

  const handleVolumeChange = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setVolume(percentage);
  };

  const handleProgressChange = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setProgress(percentage);
  };

  const formatTime = (percentage: number, duration: string) => {
    if (!duration) return "0:00";
    const [minutes, seconds] = duration.split(':').map(Number);
    const totalSeconds = minutes * 60 + seconds;
    const currentSeconds = Math.floor((totalSeconds * percentage) / 100);
    const mins = Math.floor(currentSeconds / 60);
    const secs = currentSeconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

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
            className="p-2 rounded-full transition-all hover:scale-110 hover:bg-hover-bg"
            style={{ color: "hsl(var(--foreground))" }}
            onClick={onPrevious}
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
            className="p-2 rounded-full transition-all hover:scale-110 hover:bg-hover-bg"
            style={{ color: "hsl(var(--foreground))" }}
            onClick={onNext}
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
            {formatTime(progress, currentSong.duration)}
          </span>
          <div 
            className="flex-1 h-1 rounded-full cursor-pointer relative overflow-hidden group"
            style={{ background: "hsl(var(--muted))" }}
            onClick={handleProgressChange}
          >
            <div
              className="h-full rounded-full transition-all relative"
              style={{ 
                width: `${progress}%`,
                background: "hsl(var(--primary))"
              }}
            >
              <div 
                className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: "hsl(var(--primary))" }}
              />
            </div>
          </div>
          <span className="text-xs" style={{ color: "hsl(var(--muted-foreground))" }}>
            {currentSong.duration}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2 flex-1 justify-end">
        <Volume2 className="w-5 h-5" style={{ color: "hsl(var(--muted-foreground))" }} />
        <div 
          className="w-24 h-1 rounded-full cursor-pointer relative overflow-hidden group"
          style={{ background: "hsl(var(--muted))" }}
          onClick={handleVolumeChange}
        >
          <div
            className="h-full rounded-full transition-all relative"
            style={{ 
              width: `${volume}%`,
              background: "hsl(var(--primary))"
            }}
          >
            <div 
              className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ background: "hsl(var(--primary))" }}
            />
          </div>
        </div>
        <span className="text-xs w-8" style={{ color: "hsl(var(--muted-foreground))" }}>
          {Math.round(volume)}%
        </span>
      </div>
    </div>
  );
};

export default PlayerFooter;

