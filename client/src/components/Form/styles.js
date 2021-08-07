import {makeStyles} from '@material-ui/core/styles'

export default makeStyles((theme) => ({

    main:{
        display:'flex',        
        justifyContent:'center',
    },
    paper:{
        width:'100%',
        height:'300px',
        marginBottom:'20px',
        padding:'20px'
    },
   form:{
       margin:'10px',
   },
   textField:{
       margin:'10px',
       width:'100%',
       color:'blue',
   },
   text:{
       width:'100%'
   },
   button:{
       fontSize:'small',
       [theme.breakpoints.down('sm')]:{
        fontSize:'small'
       },
   },
   loginPrompt:{
       height:'100px',
       width:'100%',
       margin:'20px',
       textAlign:'center'
   }
}))




