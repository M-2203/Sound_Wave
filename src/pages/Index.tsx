import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import MainView from "@/components/MainView";
import PlayerFooter from "@/components/PlayerFooter";
import FullScreenAlbumArt from "@/components/FullScreenAlbumArt";
import { playlists as initialPlaylists, songs as initialSongs, Song, Playlist } from "@/data/musicData";
import { toast } from "sonner";

const Index = () => {
  const [playlists, setPlaylists] = useState<Playlist[]>(initialPlaylists);
  const [songs, setSongs] = useState<Song[]>(initialSongs);
  const [activePlaylistId, setActivePlaylistId] = useState(1);
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [queue, setQueue] = useState<Song[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [fullScreenSong, setFullScreenSong] = useState<Song | null>(null);

  const filteredSongs = songs
    .filter((song) => song.playlistId === activePlaylistId)
    .filter((song) => 
      searchQuery === "" ||
      song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      song.artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
      song.album.toLowerCase().includes(searchQuery.toLowerCase())
    );
  const activePlaylist = playlists.find((p) => p.id === activePlaylistId);

  const handlePlaylistClick = (id: number) => {
    setActivePlaylistId(id);
    setSearchQuery("");
  };

  const handleSongPlay = (song: Song) => {
    setCurrentSong(song);
  };

  const handleCreatePlaylist = (name: string) => {
    const newPlaylist: Playlist = {
      id: Math.max(...playlists.map(p => p.id)) + 1,
      name,
      icon: "🎵"
    };
    setPlaylists([...playlists, newPlaylist]);
    toast.success(`Created playlist: ${name}`);
  };

  const handleAddToQueue = (song: Song) => {
    setQueue([...queue, song]);
    toast.success(`Added "${song.title}" to queue`);
  };

  const handleNext = () => {
    if (queue.length > 0) {
      // Play from queue first
      setCurrentSong(queue[0]);
      setQueue(queue.slice(1));
      return;
    }

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
    <>
      <div className="player-container">
        <Sidebar
          playlists={playlists}
          activePlaylistId={activePlaylistId}
          onPlaylistClick={handlePlaylistClick}
          onCreatePlaylist={handleCreatePlaylist}
        />
        <MainView
          songs={filteredSongs}
          playlistName={activePlaylist?.name || ""}
          onSongPlay={handleSongPlay}
          onAddToQueue={handleAddToQueue}
          onAlbumArtClick={setFullScreenSong}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />
        <PlayerFooter 
          currentSong={currentSong} 
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      </div>
      
      {fullScreenSong && (
        <FullScreenAlbumArt 
          song={fullScreenSong} 
          onClose={() => setFullScreenSong(null)} 
        />
      )}
    </>
  );
};

export default Index;
