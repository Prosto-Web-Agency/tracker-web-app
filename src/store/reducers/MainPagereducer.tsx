const SET_INSAITS = 'SET_INSAITS';
const SET_LEADERBOARD = 'SET_LEADERBOARD';

type MainPageT = {
    main_leaderboard: string[],
    main_important_news: object[],
    main_insaits: string[];
    main_live_success_feed: object[];
    main_live_chat_flood: object[];
}

const initialState: MainPageT = {
    main_leaderboard: [
        'Внезапное бодрое утро в 10! Просто открыл глаза и встал.',
        'Утренняя рутина - душ, чай, сборы вещей',
        'Залип в новый выпуск плюшек, поугарал с Зубарева.',
        'Встреча с моими криптанами.',
        'Проснулся и выспался!!! Вчера лег в 12',
        'Дообсудили с ребятами по проектам'
    ],
    main_important_news: [],
    main_insaits: [
        'Внезапное бодрое утро в 10! Просто открыл глаза и встал.',
        'Утренняя рутина - душ, чай, сборы вещей',
        'Залип в новый выпуск плюшек, поугарал с Зубарева.',
        'Встреча с моими криптанами.',
        'Проснулся и выспался!!! Вчера лег в 12',
        'Дообсудили с ребятами по проектам'
    ],
    main_live_success_feed: [],
    main_live_chat_flood: [],
};

let MainPageReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_INSAITS:
            return {
                ...state,
                main_insaits: [...action.data]
            }
        case SET_LEADERBOARD:
            return {
                ...state,
                main_leaderboard: [...action.data]
            }
        default:
            return state
    }
}

export let updateInsaits = (data: []) => ({ type: SET_INSAITS, data })
export let updateLeaderboard = (data: []) => ({ type: SET_LEADERBOARD, data })

export default MainPageReducer;