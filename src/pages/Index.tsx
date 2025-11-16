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

  const handleNext = () => {
    if (!currentSong) return;
    
    const currentIndex = filteredSongs.findIndex((s) => s.id === currentSong.id);
    if (currentIndex < filteredSongs.length - 1) {
      setCurrentSong(filteredSongs[currentIndex + 1]);
    } else {
      // Loop back to first song
      setCurrentSong(filteredSongs[0]);
    }
  };

  const handlePrevious = () => {
    if (!currentSong) return;
    
    const currentIndex = filteredSongs.findIndex((s) => s.id === currentSong.id);
    if (currentIndex > 0) {
      setCurrentSong(filteredSongs[currentIndex - 1]);
    } else {
      // Loop to last song
      setCurrentSong(filteredSongs[filteredSongs.length - 1]);
    }
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
      <PlayerFooter 
        currentSong={currentSong} 
        onNext={handleNext}
        onPrevious={handlePrevious}
      />
    </div>
  );
};

export default Index;
