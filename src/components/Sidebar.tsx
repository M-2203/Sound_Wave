import { Playlist } from "@/data/musicData";
import { Music2 } from "lucide-react";

interface SidebarProps {
  playlists: Playlist[];
  activePlaylistId: number;
  onPlaylistClick: (id: number) => void;
}

const Sidebar = ({ playlists, activePlaylistId, onPlaylistClick }: SidebarProps) => {
  return (
    <div className="sidebar">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-6">
          <Music2 className="w-8 h-8" style={{ color: "hsl(var(--primary))" }} />
          <h1 className="text-2xl font-bold gradient-text">Soundwave</h1>
        </div>
        <p className="text-sm" style={{ color: "hsl(var(--muted-foreground))" }}>
          Your music, your vibe
        </p>
      </div>

      <div>
        <h2 className="text-xs uppercase font-bold mb-4" style={{ color: "hsl(var(--muted-foreground))" }}>
          Playlists
        </h2>
        <div>
          {playlists.map((playlist) => (
            <div
              key={playlist.id}
              className={`playlist-item ${activePlaylistId === playlist.id ? "active" : ""}`}
              onClick={() => onPlaylistClick(playlist.id)}
            >
              <span className="text-2xl">{playlist.icon}</span>
              <span>{playlist.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 p-4 rounded-lg glow" style={{ background: "hsl(var(--card))" }}>
        <h3 className="font-semibold mb-2">Premium Features</h3>
        <p className="text-xs mb-3" style={{ color: "hsl(var(--muted-foreground))" }}>
          Unlock unlimited skips and offline playback
        </p>
        <button
          className="w-full py-2 px-4 rounded-lg font-semibold transition-all hover:scale-105"
          style={{
            background: "var(--gradient-primary)",
            color: "hsl(var(--primary-foreground))",
          }}
        >
          Upgrade Now
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
