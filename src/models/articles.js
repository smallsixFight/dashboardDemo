import * as articleService from '../services/articles';
import { Redirect, routerRedux } from '../../node_modules/dva/router';

export default {
    namespace: 'articles',
    state: {
        tableData: [],
        editVisible: false,
        delVisible: false,
        articleId: -1,
        editData: {}
    },
    reducers: {
        save (state, { payload: {tableData} }) {
            return { ...state, tableData };
        },
        changeEditModalVisible ( state,{ payload: {id} }) {
            state.articleId = id;
            state.editVisible = ! state.editVisible;
            return { ...state };
        },
        changeDeleteModalVisible ( state, {payload: { id } }) {
            state.articleId = id;
            state.delVisible = ! state.delVisible;
            return { ...state };
        },
        delOneArticle( state, {payload: { id }}) {
            console.log( 'id => ' + id);
            state.tableData = state.tableData.filter( item => item.id !== id);
            return { ...state };
        },
        saveEditData (state, { payload: {editData} }) {
            return { ...state, editData };
        }
    },
    effects: {
        *fetch(action, { put, call }) {
            const response = yield call(articleService.query);
            yield put({
                type: 'save',
                payload: {
                    tableData: response.data
                }
            });
        },
        *delete({ payload }, { put, call }) {
            const { id } = payload;
            yield put({
                type: 'delOneArticle',
                payload: { id }
            });
            yield put({
                type: 'changeDeleteModalVisible',
                payload: {}
            });
        },
        *edit({ payload }, { put, call }) {
            let response = yield call(articleService.queryById, payload.id);
            yield put({
                type: 'saveEditData',
                payload: {
                    editData: response.data
                }
            });
            yield put({
                type: 'changeEditModalVisible',
                payload: {}
            });
            yield put(routerRedux.push('/articleEdit'));
        }
    },
    subscriptions: {
        setup( { dispatch, history }) {
            return history.listen(( { pathname }) => {
                if (pathname === '/articleList') {
                    dispatch( { type: 'fetch' });
                }
            });
        }
    }
}