export default {
    namespace: 'products',
    state: [],
    reducers: {
        'delete'(state, { payload: id }) {
            console.log('id2：'+ id);
            return state.filter(item => item.id !== id);
        }
    }
}