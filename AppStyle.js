import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container:   { padding: 20, backgroundColor: '#1A1A2E' },
  title:       { fontSize: 22, fontWeight: 'bold', color: '#fff', marginBottom: 20 },
  item:        { flexDirection: 'row', alignItems: 'center',
                 backgroundColor: '#16213E', borderRadius: 12,
                 padding: 14, marginBottom: 10, borderLeftWidth: 4 },
  emoji:       { fontSize: 28, marginRight: 12 },
  info:        { flex: 1 },
  songTitle:   { fontSize: 16, fontWeight: '700', color: '#fff' },
  artist:      { fontSize: 13, color: '#888', marginTop: 2 },
  duration:    { fontSize: 13, color: '#888', marginRight: 8 },
  arrow:       { fontSize: 14, color: '#555' },

   screen: {
    flex: 1,
    backgroundColor: '#1A1A2E',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  artwork: {
    width: 200,
    height: 200,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 28,
  },
  artworkEmoji: { fontSize: 80 },
  title: { fontSize: 26, fontWeight: 'bold', color: '#fff', marginBottom: 6 },
  artist: { fontSize: 15, color: '#888', marginBottom: 32 },
  progressWrap: { width: '100%', marginBottom: 32 },
  progressBg: {
    height: 6,
    backgroundColor: '#333',
    borderRadius: 3,
    overflow: 'hidden',
    marginBottom: 8,
  },
  progressFill: { height: '100%', backgroundColor: '#F9C74F', borderRadius: 3 },
  timeRow: { flexDirection: 'row', justifyContent: 'space-between' },
  time: { fontSize: 12, color: '#666' },
  playBtn: {
    width: 72,
    height: 72,
    borderRadius: 36,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  playIcon: { fontSize: 28 },
  backBtn: { padding: 12 },
  backText: { fontSize: 15, color: '#555' },
});


export default styles;