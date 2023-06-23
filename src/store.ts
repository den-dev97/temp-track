import { createStore } from 'vuex';

export type Record = {
    id: number;
    temperature: number;
}

export default createStore({
    state: {
        records: JSON.parse(localStorage.getItem('records') || '[]') as Record[],
    },
    mutations: {
        addRecord(state, record: Record) {
            state.records.unshift(record);
            localStorage.setItem('records', JSON.stringify(state.records));
        },
        removeRecord(state, recordId: number) {
            state.records = state.records.filter(r => r.id !== recordId);
            localStorage.setItem('records', JSON.stringify(state.records));
        },
        updateRecord(state, record: Record) {
            const index = state.records.findIndex(item => item.id === record.id);
            if (index > -1) {
                state.records[index] = record;
                localStorage.setItem('records', JSON.stringify(state.records));
            }
        }
    },
    actions: {},
    modules: {}
})
