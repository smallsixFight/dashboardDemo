import React, { Component } from 'react';
import { Button, Input, Select, Divider } from '../../node_modules/antd';
import ArticleEditor from '../components/articleEdit/ArticleEditor';
import style from './ArticleEdit.less';
import { connect } from 'dva';

@connect(({ articles }) => ({ editData: articles.editData }))
export default class ArticleEdit extends Component {
    render() {
        document.title = "文章编辑";
        const Option = Select.Option;
        const { editData } = this.props;
        return (
            <div>
                <Divider orientation="left">文章编辑</Divider>
                <form className={style.formClass}>
                    <div className={ style.buttonDiv }>
                        <Button type="primary" name="savedraft" className={ style.button }>存为草稿</Button>
                        <Button type="primary" name="release" className={ style.button }>发布文章</Button>
                    </div>
                    <div style={{ marginBottom: '10px'}}>
                        <Input id="title" placeholder="请输入标题" className={ style.inputTitle } defaultValue= {editData.title && editData.title} />
                        <span style={{ paddingRight: '10px'}}>自定义路径</span>
                        <Input id="slug" placeholder="自定义访问路径" style={{ width: '140px' }} defaultValue= {editData.slug && editData.slug} />
                        <span className={ style.spanText}>选择分类</span>
                        <Select defaultValue={ editData.category || "默认分类" } style={{ width: 120 }}>
                            <Option value="defalut">默认分类</Option>
                            <Option value="随记">随记</Option>
                        </Select>
                        <span className={ style.spanText}>创建时间</span>
                        <Input id="createdTime" disabled={ true } defaultValue= {editData.createdTime && editData.createdTime} style={{ width: '120px', backgroundColor:' #fff', color: '#000' }} />
                    </div>
                    <ArticleEditor></ArticleEditor>
                </form>
                
            </div>
    )
  }
}
