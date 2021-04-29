import {makeStyles} from '@material-ui/core/styles'

export default makeStyles((theme) => ({
    root:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    main:{
        width:'70%',
        height:'420px',   
    },
    cardMedia:{
        height:'420px',
        width:'auto'
    },
    edit:{
        margin:'20px',
    },
    avatar:{
        width:theme.spacing(25),
        height:theme.spacing(25),
        position:'relative',
        left:'900px',
        top:'270px',
        // border:'solid 3px lightblue'
        // background:'linear-gradient( rgba(0, 0, 0, 1), rgba(0, 0, 0, 1)'
    },
    profile:{
        padding:'30px'
    }

}))
