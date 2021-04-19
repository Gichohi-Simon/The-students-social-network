import {makeStyles} from '@material-ui/core/styles'

export default makeStyles((theme) => ({
    main:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    root:{
        width:'50%'
    },
    header:{
      
    },
    avatar:{
        width:theme.spacing(7),
        height:theme.spacing(7),
    },
    media:{
        height: 0,
        paddingTop: '56.25%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backgroundBlendMode: 'darken',

    },
    content:{

    },

    actions:{
        display:'flex',
        justifyContent:'space-between'
    },

}))