import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import BaseLayout from './layout/BaseLayout';
import ArticleList from './routes/ArticleList';
import ArticleEdit from './routes/ArticleEdit';
import Login from './routes/Login';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" exact component={Login} /> 
        <Route>
          <BaseLayout>
            <Route path="/" exact component={IndexPage} />
            <Route path="/articleList" exact component={ArticleList} />
            <Route path="/articleEdit" exact component={ ArticleEdit } />
          </BaseLayout>
        </Route>
      </Switch>
      
    </Router>
  );
}

export default RouterConfig;
