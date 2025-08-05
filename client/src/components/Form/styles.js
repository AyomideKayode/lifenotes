export const useStyles = () => ({
  root: {
    '& .MuiTextField-root': {
      margin: '8px 0', // Changed to vertical margin only
    },
  },
  paper: {
    padding: '24px', // Increased padding
    borderRadius: '15px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  },
  form: {
    display: 'flex',
    flexDirection: 'column', // Changed to column layout
    gap: '16px', // Added gap between elements
  },
  fileInput: {
    width: '100%',
    margin: '8px 0',
    padding: '8px',
    border: '2px dashed #ddd',
    borderRadius: '8px',
    textAlign: 'center',
  },
  buttonSubmit: {
    marginTop: '16px',
    padding: '12px',
    borderRadius: '8px',
  },
  heading: {
    color: '#333',
    marginBottom: '16px',
    textAlign: 'center',
  },
});

export default useStyles;
