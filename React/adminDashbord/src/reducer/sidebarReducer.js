export default (state, action) => {
    if (action !== undefined) {


        if (action.type === "TOGGLE_SIDEBAR") {
            return {
                ...state,
                isSidebarOpen: !state.isSidebarOpen
            }
        }
        throw new Error(`No maching "${action.type}" action type`);
    }


    
}