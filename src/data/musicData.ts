export interface Song {
  id: number;
  title: string;
  artist: string;
  album: string;
  duration: string;
  albumArt: string;
  playlistId: number;
}

export interface Playlist {
  id: number;
  name: string;
  icon: string;
}

export const playlists: Playlist[] = [
  { id: 1, name: "Chill Vibes", icon: "🌊" },
  { id: 2, name: "Workout Mix", icon: "💪" },
  { id: 3, name: "Focus Flow", icon: "🎯" },
  { id: 4, name: "Night Drive", icon: "🌙" },
  { id: 5, name: "Party Hits", icon: "🎉" },
];

export const songs: Song[] = [
  // Chill Vibes
  {
    id: 1,
    title: "Ocean Breeze",
    artist: "Azure Dreams",
    album: "Coastal Winds",
    duration: "3:42",
    albumArt: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=300&h=300&fit=crop",
    playlistId: 1,
  },
  {
    id: 2,
    title: "Sunset Memories",
    artist: "Golden Hour",
    album: "Evening Light",
    duration: "4:15",
    albumArt: "https://images.unsplash.com/photo-1495954484750-af469f2f9be5?w=300&h=300&fit=crop",
    playlistId: 1,
  },
  {
    id: 3,
    title: "Lazy Sunday",
    artist: "The Weekenders",
    album: "Slow Motion",
    duration: "3:58",
    albumArt: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop",
    playlistId: 1,
  },
  {
    id: 4,
    title: "Gentle Rain",
    artist: "Nature Sounds Co",
    album: "Ambient Collection",
    duration: "5:12",
    albumArt: "https://images.unsplash.com/photo-1428908728789-d2de25dbd4e2?w=300&h=300&fit=crop",
    playlistId: 1,
  },
  
  // Workout Mix
  {
    id: 5,
    title: "Power Up",
    artist: "Energy Surge",
    album: "Maximum Intensity",
    duration: "3:28",
    albumArt: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=300&h=300&fit=crop",
    playlistId: 2,
  },
  {
    id: 6,
    title: "Beast Mode",
    artist: "Iron Will",
    album: "No Limits",
    duration: "4:01",
    albumArt: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=300&h=300&fit=crop",
    playlistId: 2,
  },
  {
    id: 7,
    title: "Adrenaline Rush",
    artist: "Peak Performance",
    album: "Push Harder",
    duration: "3:45",
    albumArt: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=300&h=300&fit=crop",
    playlistId: 2,
  },
  
  // Focus Flow
  {
    id: 8,
    title: "Deep Work",
    artist: "Concentration Station",
    album: "Productivity Zone",
    duration: "6:20",
    albumArt: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=300&fit=crop",
    playlistId: 3,
  },
  {
    id: 9,
    title: "Code Flow",
    artist: "Binary Beats",
    album: "Developer Mode",
    duration: "5:47",
    albumArt: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=300&h=300&fit=crop",
    playlistId: 3,
  },
  {
    id: 10,
    title: "Study Session",
    artist: "Academic Tunes",
    album: "Brain Power",
    duration: "4:33",
    albumArt: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=300&h=300&fit=crop",
    playlistId: 3,
  },
  
  // Night Drive
  {
    id: 11,
    title: "Neon Lights",
    artist: "Synthwave City",
    album: "Retro Future",
    duration: "4:28",
    albumArt: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=300&fit=crop",
    playlistId: 4,
  },
  {
    id: 12,
    title: "Midnight Highway",
    artist: "Night Cruiser",
    album: "After Hours",
    duration: "5:15",
    albumArt: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=300&h=300&fit=crop",
    playlistId: 4,
  },
  {
    id: 13,
    title: "City Glow",
    artist: "Urban Nights",
    album: "Downtown",
    duration: "3:52",
    albumArt: "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?w=300&h=300&fit=crop",
    playlistId: 4,
  },
  
  // Party Hits
  {
    id: 14,
    title: "Dance All Night",
    artist: "The Party Starters",
    album: "Club Anthems",
    duration: "3:35",
    albumArt: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop",
    playlistId: 5,
  },
  {
    id: 15,
    title: "Electric Dreams",
    artist: "DJ Nova",
    album: "Summer Nights",
    duration: "4:22",
    albumArt: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&h=300&fit=crop",
    playlistId: 5,
  },
  {
    id: 16,
    title: "Feel Good",
    artist: "Happy Vibes",
    album: "Good Times",
    duration: "3:18",
    albumArt: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
    playlistId: 5,
  },
];
