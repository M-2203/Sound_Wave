import { Playlist } from "@/data/musicData";
import { Music2, Plus } from "lucide-react";
import { useState } from "react";

interface SidebarProps {
  playlists: Playlist[];
  activePlaylistId: number;
  onPlaylistClick: (id: number) => void;
  onCreatePlaylist: (name: string) => void;
}

const Sidebar = ({ playlists, activePlaylistId, onPlaylistClick, onCreatePlaylist }: SidebarProps) => {
  const [isCreating, setIsCreating] = useState(false);
  const [newPlaylistName, setNewPlaylistName] = useState("");

  const handleCreatePlaylist = () => {
    if (newPlaylistName.trim()) {
      onCreatePlaylist(newPlaylistName.trim());
      setNewPlaylistName("");
      setIsCreating(false);
    }
  };

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
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xs uppercase font-bold" style={{ color: "hsl(var(--muted-foreground))" }}>
            Playlists
          </h2>
          <button
            onClick={() => setIsCreating(true)}
            className="p-1 rounded-full transition-all hover:scale-110"
            style={{ background: "hsl(var(--card))" }}
            title="Create playlist"
          >
            <Plus className="w-4 h-4" style={{ color: "hsl(var(--primary))" }} />
          </button>
        </div>

        {isCreating && (
          <div className="mb-4 animate-fade-in">
            <input
              type="text"
              placeholder="Playlist name..."
              value={newPlaylistName}
              onChange={(e) => setNewPlaylistName(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleCreatePlaylist()}
              className="w-full px-3 py-2 rounded-lg text-sm mb-2"
              style={{
                background: "hsl(var(--card))",
                color: "hsl(var(--foreground))",
                border: "1px solid hsl(var(--border))"
              }}
              autoFocus
            />
            <div className="flex gap-2">
              <button
                onClick={handleCreatePlaylist}
                className="px-3 py-1 rounded text-sm font-semibold flex-1"
                style={{
                  background: "hsl(var(--primary))",
                  color: "hsl(var(--primary-foreground))"
                }}
              >
                Create
              </button>
              <button
                onClick={() => {
                  setIsCreating(false);
                  setNewPlaylistName("");
                }}
                className="px-3 py-1 rounded text-sm flex-1"
                style={{ color: "hsl(var(--muted-foreground))" }}
              >
                Cancel
              </button>
            </div>
          </div>
        )}

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
