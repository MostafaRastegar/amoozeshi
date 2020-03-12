
import {createUseStyles} from 'react-jss';
export const useStyles = createUseStyles({
  authorImageSize: {
    width: 180,
    height:180,
  },
  border:{
    border:'1px solid rgba(0,0,0,0.125)'
  },
  tagsItem:{
    marginLeft:'10px',
    padding: '3px 10px',
  },
  notification:{
    zIndex: '9999',
    position: 'fixed',
    '& .toast':{
      display: 'none',
      '&:last-child':{
        display: 'block'
      }
    }
  }
});