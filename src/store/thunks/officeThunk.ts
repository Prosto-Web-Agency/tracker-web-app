import { OfficeAPI } from "../api/officePage"
import { setProductivity } from "../reducers/OfficeReducer"

export const getProductivityThunk = () => (dispatch: any) => {
    OfficeAPI.getProductivityGrowth()
    .then((response) => {
        console.log(response);
        
        dispatch(setProductivity(response.data))
    })
}