import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { MainPageInfoI } from '@/models/mainPageModel';

type MainPageT = {
    newswire: MainPageInfoI
    main_live_feed_insight: object[];
    main_live_success_feed: object[];
    main_live_chat_flood: object[];
}

const initialState: MainPageT = {
    newswire: {
        main_leaderboard: [],
        main_important_news: [],
    },
    main_live_feed_insight: [],
    main_live_success_feed: [],
    main_live_chat_flood: [],
};

export const NewswireSlice = createSlice({
    name: 'newswire',
    initialState,
    reducers: {
        setNewswire: (state, action: PayloadAction<MainPageInfoI>) => {
            state.newswire = action.payload
        },
    }
});

export const selectCompany = (state: RootState) => state.company.company;
export const selectEmployee = (state: RootState) => state.company.employee;
export const selectActiveCompanyId = (state: RootState) => state.company.activeCompanyId;

// export const { setCompany, setEmployee, setActiveCompanyId } = UserSlice.actions;

// export default UserSlice.reducer;