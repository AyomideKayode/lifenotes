export const useStyles = () => ({
  media: {
    height: 240,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    backgroundBlendMode: 'darken',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    transition: 'box-shadow 0.3s ease',
    '&:hover': {
      boxShadow: '0 8px 16px rgba(0,0,0,0.15)',
    },
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
    background: 'rgba(0, 0, 0, 0.5)',
    borderRadius: '8px',
    padding: '8px 12px',
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
    zIndex: 2,
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },
  title: {
    padding: '0 16px',
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  heading: {
    color: '#333',
    marginBottom: '16px',
  },
});

export default useStyles;
