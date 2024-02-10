




export default function MenuMobileReducer(status= false, action){


    switch (action.type) {
        case "OPEN":
            return true;
        case "CLOSE":
            return false;
    
        default:
            return status;
    }
}