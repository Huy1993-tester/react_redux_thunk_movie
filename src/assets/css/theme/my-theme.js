import {createMuiTheme} from '@material-ui/core';

export const Theme = createMuiTheme({
    palette:{
        primary:{
            light:"#da9fc2",
            main:"#ce348f",// khi chưa hover
            dark:"#7d4566",// khi hover vào
            contrastText:"#000000",
        },
        secondary:{
            light:"#ef7575",
            main:"#ea1010",
            dark:"#691c1c",
            contrastText:"#ffffff",
        }
    }
})