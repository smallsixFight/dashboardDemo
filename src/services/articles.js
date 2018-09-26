import request from '../utils/request';

export function query() {
    return request('/api/articlesInfo');
};
export function queryById(id) {
    return request('/api/queryById');
}