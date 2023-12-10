const SET_PRODUCTIVITY = 'SET_PRODUCTIVITY';

type TOfficePage = {
    productivuty: {}

}

const initialState: TOfficePage = {
    productivuty: {
        label: [],
        data: []
    }
};

let OfficeReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_PRODUCTIVITY:
            return {
                ...state,
                productivuty: {
                    data: [...action.data],
                    label: [...action.label]
                }
            }
        default:
            return state
    }
}

export let setProductivity = (array: []) => {
    let label: [] = []
    let data: [] = []
    array.map(({report_date, task_count}: any) => {
        //@ts-ignore
        label.push(report_date)
        //@ts-ignore
        data.push(task_count)
    })
    console.log(data, label);
    
    return { type: SET_PRODUCTIVITY, data, label }}

export default OfficeReducer;