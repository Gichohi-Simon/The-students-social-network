import {makeStyles} from '@material-ui/core/styles'

export default makeStyles((theme) => ({
    root:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    main:{
        width:'80%',
        height:'420px',   
    },
    cardMedia:{
        height:'420px',
        width:'auto'
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

        margin:'20px',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    },
    gridCard:{

    },
    gridItem:{
        padding:'20px',
        margin:'20px',
        height:'400px',
        width:'400px'
    },
    gridImage:{
        height:'200px',
        width:'400px'
    }
}))
