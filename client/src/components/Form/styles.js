export const useStyles = () => ({
  root: {
    '& .MuiTextField-root': {
      margin: '8px', // replaced theme.spacing(1) with fixed value
    },
  },
  paper: {
    padding: '16px', // replaced theme.spacing(2) with fixed value
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
  },
  heading: {
    color: '#333',
    marginBottom: '16px',
  },
});

export default useStyles;
