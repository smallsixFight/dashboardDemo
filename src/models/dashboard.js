import * as dashboardService from '../services/dashboard';
export default {
    namespace: 'dashboard',
    state: {
        articleInfo: {},
        commentInfo: {},
        logInfo: {},
        otherInfo: {}
    },
    reducers: {
        save(state, { payload: { articleInfo, commentInfo, logInfo, otherInfo } }) {
            return { ...state, articleInfo, commentInfo, logInfo, otherInfo };
        }
    },
    effects: {
        *fetch(action, {put, call}) {
            const response = yield call(dashboardService.query);
            yield put({
                type: 'save',
                payload: {
                    articleInfo: response.data.articleInfo,
                    commentInfo: response.data.commentInfo,
                    logInfo: response.data.logInfo,
                    otherInfo: response.data.otherInfo
                }
            })
        }
    },
    subscriptions: {
        setup( {dispatch, history }) {
            return history.listen(({ pathname }) => {
                if (pathname === '/') {
                    dispatch({ type: 'fetch' });
                }
            })
        }
    }
}