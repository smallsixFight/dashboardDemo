
export default {
    'GET /api/dashBoardInfo': { 
        "articleInfo": {"total": 5, "content": [ {"title": "标题1", "date": "2018-01-01"}, {"title": "标题2", "date": "2018-02-02"} ] },
        "commentInfo": {"total": 3, "content": [ {"title": "you are great", "date": "2018-01-01"}, {"title": "so fun", "date": "2018-02-02"} ] },
        "logInfo": {"total": 4, "content": [ {"title": "09-18 登陆后台"},{"title": "09-18 新增文章"} ]},
        "otherInfo": {}
    },
    'GET /api/articlesInfo': [
        {"key": 1, "id": 1, "title": "标题1", "createdTime": "2018", "updateTime": "2019", "status": "发布"},
        {"key": 2, "id": 2, "title": "标题2", "createdTime": "2017", "updateTime": "2019", "status": "草稿"},
        {"key": 3, "id": 3, "title": "标题3", "createdTime": "2016", "updateTime": "2020", "status": "发布"},
        {"key": 4, "id": 4, "title": "标题4", "createdTime": "2011", "updateTime": "2014", "status": "发布"},
        {"key": 5, "id": 5, "title": "标题5", "createdTime": "2002", "updateTime": "2008", "status": "草稿"},
        {"key": 6, "id": 6, "title": "标题6", "createdTime": "2009", "updateTime": "2014", "status": "发布"}
    ],
    'GET /api/queryById': {
        "id": 88, "title": "编辑测试", "createdTime": "2011", "updateTime": "2035", "category": "随记", "content": "要编辑的内容"
    }
};
