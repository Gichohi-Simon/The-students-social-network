import {makeStyles} from '@material-ui/core/styles'

export default makeStyles((theme) => ({
    root:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    main:{
        width:'80%',
        height:'auto',   
    },
    cardMedia:{
        height:'400px',
    },
    cardActions:{

    },
    avatar:{
        width:theme.spacing(21),
        height:theme.spacing(21),
        position:'relative',
        left:'40px',
        top:'-100px'
    },
    CardActionsContent:{
        
    },
    button:{
        
    },
    grid:{

    },
    gridItem:{
        height:'200px',
        width:'200px'
    }
}))
