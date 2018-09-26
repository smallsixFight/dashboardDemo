import React, { Component } from 'react';
import { connect } from 'dva';
import { Card, Row, Col } from 'antd';

@connect(({dashboard}) => ({articleInfo: dashboard.articleInfo, commentInfo: dashboard.commentInfo, logInfo: dashboard.logInfo, otherInfo: dashboard.otherInfo}))
export default class ArticleInfo extends Component {
    

    render() {
        const { articleInfo, commentInfo, logInfo, otherInfo} = this.props;
        const articleContent = articleInfo.content;
        const commentContent = commentInfo.content;
        const logConent = logInfo.content;
        const otherContent = otherInfo.content;

        let articleData = articleContent && articleContent.map((item, i) => (
            <p key={i}>
                {item.title}    {item.date}
            </p>
        ));
        let commentData = commentContent && commentContent.map((item, i) => (
            <p key={i}>
                {item.title}    {item.date}
            </p>
        ));
        let logData = logConent && logConent.map((item, i) => (
            <p key={i}>
                {item.title}
            </p>
        ));
        let otherData = otherContent && otherContent.map((item, i) => (
            <p key={i}>
                {item.title}
            </p>
        ))
        return (
            <div style={{ padding: '30px' }}>
                <Row gutter={48}>
                    <Col span={12}>
                        <Card title={'发出了 ' + articleInfo.total + ' 篇文章'}
                        >
                            { articleData || '没有任何文章信息' }
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card title={'共收获了 ' + commentInfo.total + ' 条评论'}
                        >
                            { commentData || '目前还未收到评论' }
                        </Card>
                    </Col>
                </Row>
                <Row gutter={48} style= {{ marginTop: '30px' }}>
                    <Col span={12}>
                        <Card title={'目前共有 ' + logInfo.total + ' 条系统日志'}
                        >
                            { logData || '暂无系统日志信息' }
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card title='其他信息'
                        >
                            { otherData || '暂无其他信息' }
                        </Card>
                    </Col>
                </Row>
            </div>
    )
  }
}
