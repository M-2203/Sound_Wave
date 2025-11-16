import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import MainView from "@/components/MainView";
import PlayerFooter from "@/components/PlayerFooter";
import { playlists, songs, Song } from "@/data/musicData";

const Index = () => {
  const [activePlaylistId, setActivePlaylistId] = useState(1);
  const [currentSong, setCurrentSong] = useState<Song | null>(null);

  const filteredSongs = songs.filter((song) => song.playlistId === activePlaylistId);
  const activePlaylist = playlists.find((p) => p.id === activePlaylistId);

  const handlePlaylistClick = (id: number) => {
    setActivePlaylistId(id);
  };

  const handleSongPlay = (song: Song) => {
    setCurrentSong(song);
  };

  return (
    <div className="player-container">
      <Sidebar
        playlists={playlists}
        activePlaylistId={activePlaylistId}
        onPlaylistClick={handlePlaylistClick}
      />
      <MainView
        songs={filteredSongs}
        playlistName={activePlaylist?.name || ""}
        onSongPlay={handleSongPlay}
      />
      <PlayerFooter currentSong={currentSong} />
    </div>
  );
};

export default Index;
