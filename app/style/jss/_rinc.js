import {createUseStyles} from 'react-jss';
const color = {
  primary: '#293039',
  secondary: '#3b2eb2',
  success: '#1CBD2F',
  tag: '#21974E',
  toggle: '#4ad964',
  danger: '#e1373c',
  warning: '#f79e40',
  info: '#039be5',
  black: '#000000',
  white: '#fff',
  disable: '#e4e4e4',
  light: '#f5f5f5',
  yellow: '#FFD500',
  org: '#414367',
  highlight: '#9fa02b',
  gray0:'#94a1ac',
  gray1:'#666666',
}
export const jssRinc = createUseStyles({
    'white': {
      color: '#fff'
    },
    'bgWhite': {
      backgroundColor: '#fff'
    },
    'black': {
      color: '#000'
    },
    'bgBlack': {
      backgroundColor: '#000'
    },
    'green': {
      color: color.success
    },
    'bgGreen': {
      backgroundColor: color.success
    },
    'red': {
      color: color.danger
    },
    'bgRed': {
      backgroundColor: color.danger
    },
    'blue': {
      color: color.info
    },
    'bgBlue': {
      backgroundColor: color.info
    },
    'org': {
      color: color.org
    },
    'bgOrg': {
      backgroundColor: color.org
    },
    'primary': {
      color: color.primary
    },
    'primaryBg': {
      backgroundColor: color.primary
    },
    'secondary': {
      color: color.secondary
    },
    'secondaryBg': {
      backgroundColor: color.secondary
    },
    'success': {
      color: color.success
    },
    'successBg': {
      backgroundColor: color.success
    },
    'tag': {
      color: color.tag
    },
    'tagBg': {
      backgroundColor: color.tag
    },
    'info': {
      color: color.info
    },
    'infoBg': {
      backgroundColor: color.info
    },
    'danger': {
      color: color.danger
    },
    'dangerBg': {
      backgroundColor: color.danger
    },
    'warning': {
      color: color.secondary
    },
    'warningBg': {
      backgroundColor: color.secondary
    },
    'yellow': {
      color: color.warning
    },
    'yellowBg': {
      backgroundColor: color.yellow
    },
    'disable': {
      color: color.disable
    },
    'disableBg': {
      backgroundColor: color.disable
    },
    'light': {
      color: color.light
    },
    'lightBg': {
      backgroundColor: color.light
    },
    'highlight': {
      color: color.highlight
    },
    'highlightBg': {
      backgroundColor: color.highlight
    },
    'gray0': {
      color: color.gray0
    },
    'gray0Bg': {
      backgroundColor: color.gray0
    },
    'gray1': {
      color: color.gray1
    },
    'gray1Bg': {
      backgroundColor: color.gray1
    },
    'debug': {
      backgroundColor: '#f9d7e1'
    },
    'd': {
      backgroundColor: '#C8CA2633'
    },
    'f': {
      backgroundColor: '#ff00aa33'
    },
    'reset': {
      boxSizing: 'border-box',
      margin: '0',
      padding: '0',
      border: 'none',
      listStyle: 'none',
      textDecoration: 'none'
    },
    'wFull': {
      width: '100%'
    },
    'hFull': {
      height: '100%'
    },
    'vhFull': {
      height: '100vh'
    },
    'whFull': {
      width: '100%',
      height: '100%'
    },
    'stretchChild': {
      alignItems: 'stretch'
    },
    'bold': {
      fontWeight: 'bold'
    },
    'largeText': {
      fontSize: 16
    },
    'bigText': {
      fontSize: 14
    },
    'midText': {
      fontSize: 11
    },
    'tinyText': {
      fontSize: 8
    },
    'text8': {
      fontSize: 8
    },
    'text10': {
      fontSize: 10
    },
    'text12': {
      fontSize: 12
    },
    'text14': {
      fontSize: 14
    },
    'text15': {
      fontSize: 15
    },
    'text16': {
      fontSize: 16
    },
    'text18': {
      fontSize: 18
    },
    'text20': {
      fontSize: 20
    },
    'text22': {
      fontSize: 22
    },
    'text25': {
      fontSize: 25
    },
    'text28': {
      fontSize: 28
    },
    'text30': {
      fontSize: 30
    },
    'text40': {
      fontSize: 40
    },
    'text50': {
      fontSize: 50
    },
    'overLine': {
      textDecoration: 'line-through'
    },
    'underLine': {
      textDecoration: 'underline'
    },
    'rightText': {
      textAlign: 'right'
    },
    'leftText': {
      textAlign: 'left'
    },
    'centerText': {
      textAlign: 'center'
    },
    'rtl': {
      direction: 'rtl'
    },
    'ltr': {
      direction: 'ltr'
    },
    'flex': {
      display: 'flex'
    },
    'dblock': {
      display: 'block'
    },
    'dInlineBlock': {
      display: 'inline-block'
    },
    'rRow': {
      flexDirection: 'row'
    },
    'rRowReverse': {
      flexDirection: 'row-reverse'
    },
    'rCol': {
      flexDirection: 'column'
    },
    'center': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    'vCenter': {
      display: 'flex',
      justifyContent: 'center'
    },
    'hCenter': {
      display: 'flex',
      alignItems: 'center'
    },
    'hInherit': {
      height: 'inherit'
    },
    'column': {
      display: 'flex',
      flexDirection: 'column'
    },
    'rightContent': {
      display: 'flex',
      justifyContent: 'flex-start'
    },
    'leftContent': {
      display: 'flex',
      justifyContent: 'flex-end'
    },
    'selfCenter': {
      alignSelf: 'center'
    },
    'spaceAround': {
      justifyContent: 'space-around'
    },
    'spaceBetween': {
      justifyContent: 'space-between'
    },
    'rightItems': {
      alignItems: 'flex-end'
    },
    'leftItems': {
      alignItems: 'flex-start'
    },
    'line': {
      height: '1',
      backgroundColor: '#adb9c7'
    },
    'overhide': {
      overflow: 'hidden'
    },
    'scroll': {
      overflow: 'scroll'
    },
    'rotate90': {
      transform: '{ rotate: 90deg}'
    },
    'round3': {
      borderRadius: 3
    },
    'round5': {
      borderRadius: 5
    },
    'round7': {
      borderRadius: 7
    },
    'round10': {
      borderRadius: 10
    },
    'round15': {
      borderRadius: 15
    },
    'round20': {
      borderRadius: 20
    },
    'round30': {
      borderRadius: 30
    },
    'round50': {
      borderRadius: '50%'
    },
    'zIndex0': {
      zIndex: '0'
    },
    'zIndex1': {
      zIndex: '1'
    },
    'zIndex2': {
      zIndex: '2'
    },
    'zIndex3': {
      zIndex: '3'
    },
    'zIndex4': {
      zIndex: '4'
    },
    'zIndex5': {
      zIndex: '5'
    },
    'zIndex10': {
      zIndex: '10'
    },
    'i2': {
      width: '50%'
    },
    'i3': {
      width: '33.3333%'
    },
    'i4': {
      width: '25%'
    },
    'i5': {
      width: '20%'
    },
    'i6': {
      width: '16.666666%'
    },
    'i2-3': {
      width: '66.666667%'
    },
    'w98': {
      width: '98%'
    },
    'w95': {
      width: '95%'
    },
    'w90': {
      width: '90%'
    },
    'w85': {
      width: '85%'
    },
    'w80': {
      width: '80%'
    },
    'w75': {
      width: '75%'
    },
    'w70': {
      width: '70%'
    },
    'w60': {
      width: '60%'
    },
    'w50': {
      width: '50%'
    },
    'absolute': {
      position: 'absolute'
    },
    'relative': {
      position: 'relative'
    },
    'top': {
      top: '0'
    },
    'left': {
      left: '0'
    },
    'bottom': {
      bottom: '0'
    },
    'right': {
      right: '0'
    },
    'cover': {
      backgroundSize: 'cover'
    },
    'contain': {
      backgroundSize: 'contain'
    },
    'centerBg': {
      backgroundPosition: 'center'
    },
    'padd0': {
      padding: 0
    },
    'padd2': {
      padding: 2
    },
    'padd3': {
      padding: 3
    },
    'padd5': {
      padding: 5
    },
    'padd7': {
      padding: 7
    },
    'padd10': {
      padding: 10
    },
    'padd15': {
      padding: 15
    },
    'padd20': {
      padding: 20
    },
    'padd30': {
      padding: 30
    },
    'padd40': {
      padding: 40
    },
    'margin0': {
      margin: 0
    },
    'margin2': {
      margin: 2
    },
    'margin3': {
      margin: 3
    },
    'margin5': {
      margin: 5
    },
    'margin7': {
      margin: 7
    },
    'margin10': {
      margin: 10
    },
    'margin15': {
      margin: 15
    },
    'margin20': {
      margin: 20
    },
    'margin30': {
      margin: 30
    },
    'margin40': {
      margin: 40
    },
    'rightP': {
      paddingRight: '0'
    },
    'rightP3': {
      paddingRight: 3
    },
    'rightP5': {
      paddingRight: 5
    },
    'rightP10': {
      paddingRight: 10
    },
    'rightP15': {
      paddingRight: 15
    },
    'rightP20': {
      paddingRight: 20
    },
    'rightP30': {
      paddingRight: 30
    },
    'rightP40': {
      paddingRight: 40
    },
    'leftP': {
      paddingLeft: '0'
    },
    'leftP3': {
      paddingLeft: 3
    },
    'leftP5': {
      paddingLeft: 5
    },
    'leftP10': {
      paddingLeft: 10
    },
    'leftP15': {
      paddingLeft: 15
    },
    'leftP20': {
      paddingLeft: 20
    },
    'leftP30': {
      paddingLeft: 30
    },
    'leftP40': {
      paddingLeft: 40
    },
    'rightMauto': {
      marginRight: 'auto'
    },
    'rightM2': {
      marginRight: 2
    },
    'rightM3': {
      marginRight: 3
    },
    'rightM5': {
      marginRight: 5
    },
    'rightM10': {
      marginRight: 10
    },
    'rightM15': {
      marginRight: 15
    },
    'rightM20': {
      marginRight: 20
    },
    'rightM30': {
      marginRight: 30
    },
    'rightM40': {
      marginRight: 40
    },
    'leftMauto': {
      marginLeft: 'auto'
    },
    'leftM2': {
      marginLeft: 2
    },
    'leftM3': {
      marginLeft: 3
    },
    'leftM5': {
      marginLeft: 5
    },
    'leftM10': {
      marginLeft: 10
    },
    'leftM15': {
      marginLeft: 15
    },
    'leftM20': {
      marginLeft: 20
    },
    'leftM30': {
      marginLeft: 30
    },
    'leftM40': {
      marginLeft: 40
    },
    'topP2': {
      paddingTop: 2
    },
    'topP3': {
      paddingTop: 3
    },
    'topP5': {
      paddingTop: 5
    },
    'topP10': {
      paddingTop: 10
    },
    'topP15': {
      paddingTop: 15
    },
    'topP20': {
      paddingTop: 20
    },
    'topP25': {
      paddingTop: 25
    },
    'topP30': {
      paddingTop: 30
    },
    'topP40': {
      paddingTop: 40
    },
    'topP70': {
      paddingTop: 70
    },
    'topMauto':{
      marginTop:'auto'
    },
    'topM2': {
      marginTop: 2
    },
    'topM3': {
      marginTop: 3
    },
    'topM5': {
      marginTop: 5
    },
    'topM8': {
      marginTop: 8
    },
    'topM10': {
      marginTop: 10
    },
    'topM15': {
      marginTop: 15
    },
    'topM20': {
      marginTop: 20
    },
    'topM30': {
      marginTop: 30
    },
    'topM40': {
      marginTop: 40
    },
    'topM50': {
      marginTop: 50
    },
    'topM60': {
      marginTop: 60
    },
    'topM70': {
      marginTop: 70
    },
    'topM80': {
      marginTop: 80
    },
    'topM90': {
      marginTop: 90
    },
    'topM100': {
      marginTop: 100
    },
    'bottomP': {
      paddingBottom: '0'
    },
    'bottomP3': {
      paddingBottom: 3
    },
    'bottomP5': {
      paddingBottom: 5
    },
    'bottomP10': {
      paddingBottom: 10
    },
    'bottomP15': {
      paddingBottom: 15
    },
    'bottomP20': {
      paddingBottom: 20
    },
    'bottomP30': {
      paddingBottom: 30
    },
    'bottomP40': {
      paddingBottom: 40
    },
    'bottomP50': {
      paddingBottom: 50
    },
    'bottomP60': {
      paddingBottom: 60
    },
    'bottomP70': {
      paddingBottom: 70
    },
    'bottomM': {
      marginBottom: '0'
    },
    'bottomM3': {
      marginBottom: 3
    },
    'bottomM5': {
      marginBottom: 5
    },
    'bottomM10': {
      marginBottom: 10
    },
    'bottomM20': {
      marginBottom: 20
    },
    'bottomM30': {
      marginBottom: 30
    },
    'bottomM40': {
      marginBottom: 40
    },
    'bottomM50': {
      marginBottom: 50
    },
    'bottomM70': {
      marginBottom: 70
    },
    'vM3': {
      marginTop: 3,
      marginBottom: 3
    },
    'vM5': {
      marginTop: 5,
      marginBottom: 5
    },
    'vM7': {
      marginTop: 7,
      marginBottom: 7
    },
    'vM10': {
      marginTop: 10,
      marginBottom: 10
    },
    'vM20': {
      marginTop: 20,
      marginBottom: 20
    },
    'vM30': {
      marginTop: 30,
      marginBottom: 30
    },
    'vM40': {
      marginTop: 40,
      marginBottom: 40
    },
    'vM50': {
      marginTop: 50,
      marginBottom: 50
    },
    'vM70': {
      marginTop: 70,
      marginBottom: 70
    },
    'hM3': {
      marginRight: 3,
      marginLeft: 3
    },
    'hM5': {
      marginRight: 5,
      marginLeft: 5
    },
    'hM10': {
      marginRight: 10,
      marginLeft: 10
    },
    'hM20': {
      marginRight: 20,
      marginLeft: 20
    },
    'hM30': {
      marginRight: 30,
      marginLeft: 30
    },
    'hM40': {
      marginRight: 40,
      marginLeft: 40
    },
    'hM50': {
      marginRight: 50,
      marginLeft: 50
    },
    'hM70': {
      marginRight: 70,
      marginLeft: 70
    },
    'vP3': {
      paddingTop: 3,
      paddingBottom: 3
    },
    'vP5': {
      paddingTop: 5,
      paddingBottom: 5
    },
    'vP7': {
      paddingTop: 7,
      paddingBottom: 7
    },
    'vP10': {
      paddingTop: 10,
      paddingBottom: 10
    },
    'vP15': {
      paddingTop: 15,
      paddingBottom: 15
    },
    'vP20': {
      paddingTop: 20,
      paddingBottom: 20
    },
    'vP30': {
      paddingTop: 30,
      paddingBottom: 30
    },
    'vP40': {
      paddingTop: 40,
      paddingBottom: 40
    },
    'vP50': {
      paddingTop: 50,
      paddingBottom: 50
    },
    'vP70': {
      paddingTop: 70,
      paddingBottom: 70
    },
    'hP3': {
      paddingRight: 3,
      paddingLeft: 3
    },
    'hP5': {
      paddingRight: 5,
      paddingLeft: 5
    },
    'hP10': {
      paddingRight: 10,
      paddingLeft: 10
    },
    'hP15': {
      paddingRight: 15,
      paddingLeft: 15
    },
    'hP20': {
      paddingRight: 20,
      paddingLeft: 20
    },
    'hP30': {
      paddingRight: 30,
      paddingLeft: 30
    },
    'hP40': {
      paddingRight: 40,
      paddingLeft: 40
    },
    'hP50': {
      paddingRight: 50,
      paddingLeft: 50
    },
    'hP70': {
      paddingRight: 70,
      paddingLeft: 70
    },
    'boxShadow1': {
      boxShadow: '0px 3px 10px rgba(0,0,0,0.1)'
    },
    'boxShadow2': {
      boxShadow: '0px 5px 20px rgba(0,0,0,0.2)'
    },
    'boxShadow3': {
      boxShadow: '0px 7px 30px rgba(0,0,0,0.22)'
    },
    'boxShadow4': {
      boxShadow: '0px 7px 40px rgba(0,0,0,0.25)'
    },
    'none': {
      display: 'none'
    }
});
