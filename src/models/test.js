
export default {
    namespace: 'test',
    state: {
        testdata : [
            {name: 'testdata11', id: 1111},
            {name: 'testdata22', id: 2222}
        ]
    },
    reducers: {
        'delete'(state, { payload: id }) {
            state.testdata = state.testdata.filter( item => item.id !== id );
            return { ...state };
        }
    }
}