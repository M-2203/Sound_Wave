import { Song } from "@/data/musicData";
import { Play, Clock } from "lucide-react";

interface MainViewProps {
  songs: Song[];
  playlistName: string;
  onSongPlay: (song: Song) => void;
}

const MainView = ({ songs, playlistName, onSongPlay }: MainViewProps) => {
  return (
    <div className="main-view">
      <div className="mb-8 animate-slide-in">
        <div 
          className="inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4"
          style={{ 
            background: "hsl(var(--active-bg))",
            color: "hsl(var(--primary))"
          }}
        >
          Playlist
        </div>
        <h1 className="text-5xl font-bold mb-2 gradient-text">{playlistName}</h1>
        <p style={{ color: "hsl(var(--muted-foreground))" }}>
          {songs.length} {songs.length === 1 ? "song" : "songs"}
        </p>
      </div>

      <div className="mb-4" style={{ color: "hsl(var(--muted-foreground))" }}>
        <div className="song-row text-xs uppercase font-semibold">
          <div>#</div>
          <div>Title</div>
          <div>Album</div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
          </div>
          <div></div>
        </div>
      </div>

      <div className="space-y-1">
        {songs.map((song, index) => (
          <div key={song.id} className="song-row animate-slide-in" style={{ animationDelay: `${index * 0.05}s` }}>
            <div className="flex items-center justify-center">
              <span className="song-number" style={{ color: "hsl(var(--muted-foreground))" }}>
                {index + 1}
              </span>
              <button
                className="play-btn"
                onClick={() => onSongPlay(song)}
                aria-label={`Play ${song.title}`}
              >
                <Play className="w-5 h-5" fill="currentColor" />
              </button>
            </div>

            <div className="flex items-center gap-3">
              <img
                src={song.albumArt}
                alt={song.album}
                className="album-art-small"
              />
              <div>
                <div className="font-semibold" style={{ color: "hsl(var(--foreground))" }}>
                  {song.title}
                </div>
                <div className="text-sm" style={{ color: "hsl(var(--muted-foreground))" }}>
                  {song.artist}
                </div>
              </div>
            </div>

            <div className="text-sm">{song.album}</div>
            <div className="text-sm">{song.duration}</div>
            <div></div>
          </div>
        ))}
      </div>

      {songs.length === 0 && (
        <div className="text-center py-20">
          <p className="text-xl" style={{ color: "hsl(var(--muted-foreground))" }}>
            No songs in this playlist
          </p>
        </div>
      )}
    </div>
  );
};

export default MainView;
