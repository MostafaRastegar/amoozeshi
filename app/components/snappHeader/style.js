import {createUseStyles} from 'react-jss';
export const useStyles = createUseStyles({
  customNav: {
    '& .navbar-nav':{
      marginLeft:'auto'
    }
  },
  mainHeader:{
    background:'url(http://placehold.it/1900x1080) no-repeat center center',
    backgroundSize:'cover',
    width:'100%',
    height:'470px',
    marginTop:'-54px',
    marginBottom:'100px'
  },
  headerResBg:{
    background:'transparent'
  },
  btnTransparent: {
    marginLeft:'30px'
  },
  '@media screen and (max-width: 768px)': {
    mainHeader: {
      height:'270px',
      marginTop:'0px',
      marginBottom:'30px'
    },
    headerResBg:{
      background:'#666',
    },
    btnTransparent: {
      marginLeft:0
    },
  }
});