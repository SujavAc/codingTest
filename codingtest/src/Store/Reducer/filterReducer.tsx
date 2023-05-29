const initialState = {
    filterData: {},
    filterResultData: [],
    defaultItemDesktopDisplay: 6,
    defaultItemMobileDisplay: 3,
};

const filterReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case "SET_FILTER_DATA":
            return {
                ...state,
                filterData: action.payload,
                // when filter tab click will default number of items
                defaultItemDesktopDisplay: 6,
                defaultItemMobileDisplay: 3,
            };
        case "SET_FILTER_RESULT_DATA":
            return {
                ...state,
                filterResultData: action.payload,
            };
        case "LOAD_MORE_FILTER_DATA":
            return {
                ...state,
                defaultItemDesktopDisplay: state.defaultItemDesktopDisplay + action.payload,
                defaultItemMobileDisplay: state.defaultItemMobileDisplay + action.payload,
            };
        default:
            return state;
    }
};
export default filterReducer;
