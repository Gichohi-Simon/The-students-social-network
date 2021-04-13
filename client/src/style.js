import {makeStyles} from '@material-ui/core/styles';

export default makeStyles(() => ({
    appBar:{
        backgroundColor:'#ffffff',
        color:'#000000',
        fontWeight:'bold'
    },
    button:{
        backgroundColor:"#00ACEE", 
        color:'#ffffff',
        display:'flex',
        flexDirection:'row',
        margin:10,
    
    },
    userInfo:{
        display:'flex',
        flexDirection:'row-reverse',
      
    },
    userName:{
        margin:10,
    }
}));
