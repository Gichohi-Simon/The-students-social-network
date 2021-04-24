import {makeStyles} from '@material-ui/core/styles' 

export default makeStyles((theme) =>({
    main:{
        diplay:'flex',
        justifyContent:'center',
    },
    card:{
        display:'flex',
        flexDirection: 'column',
        borderRadius: '15px',
        height: '100%',
        width:'100%',
    },
    header:{
        diplay:'flex',
        justifyContent:'space-between'
    },
    headerContainer:{
        padding:'20px',
        display:'flex',
    },
    avatar:{
        width:theme.spacing(7),
        height:theme.spacing(7),
      },
    headerContent:{
        marign:'30px',
        padding:'30px'
    },
    edit:{
        position:'relative',
        left:'10px'
    },
    media: {
        paddingTop: '56.25%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backgroundBlendMode: 'darken',
      },
    cardActions:{
        diplay:'flex',
        justifyContent:'space-between'
    },
    // comments:{
    //     borderRadius:'15px',
    //     diplay:'flex',
    //     justifyContent:'center',
    //     alignItems:'center'
    // }
}))