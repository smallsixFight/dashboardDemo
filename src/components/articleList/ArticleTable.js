import React, { Component } from 'react'
import { Button, Table, Modal } from 'antd';
import { connect } from 'dva';

let dispatch;

const EditModal = (props) => {
    return (
        <Modal title='编辑' visible={ props.visible } onOk={ goToEdit.bind(this, props.articleId) } onCancel={ cancelEdit }>
            <p>是否对 id 为 {props.articleId} 进行编辑？</p>
        </Modal>
    )
};

const DeleteMoal = (props) => {
    return (
        <Modal title='删除' visible={ props.visible } onOk= { deleteOneArticle.bind(this, props.articleId) } onCancel= { cancelDelete }>
            <p>是否删除 id 为 {props.articleId} 的文章？</p>
        </Modal>
    )
}

const columns = [
    {
        title: 'id',
        dataIndex: 'id',
        key: 'id'
    },
    {
        title: '文章标题',
        dataIndex: 'title',
        key: 'title'
    },
    {
        title: '创建时间',
        dataIndex: 'createdTime',
        key: 'createdTime'
    },
    {
        title: '上次修改时间',
        dataIndex: 'updateTime',
        key: 'updateTime'
    },
    {
        title: '状态',
        dataIndex: 'status',
        key: 'status'
    },
    {
        title: '操作',
        key: 'action',
        render : (text, record) => (
            <span>
                <Button size='small' onClick={showEditModal.bind(this, record.id)}>编辑</Button>
                <Button size='small' onClick={showDeleteModal.bind(this, record.id)}>删除</Button>
            </span>
        )
    }
];

function showEditModal(id) {
    dispatch({
        type: 'articles/changeEditModalVisible',
        payload: {id}
    });

};

function showDeleteModal(id) {
    dispatch({
        type: 'articles/changeDeleteModalVisible',
        payload: {id}
    });
};

function goToEdit(id) {
    console.log('id => ' + id);
    dispatch({
        type: 'articles/edit',
        payload: { id }
    });
};

function deleteOneArticle(id) {
    console.log(id)
    dispatch({
        type: 'articles/delete',
        payload: { id }
    });
};

function cancelEdit() {
    dispatch({
        type: 'articles/changeEditModalVisible',
        payload: {}
      });
};

function cancelDelete() {
    dispatch({
        type: 'articles/changeDeleteModalVisible',
        payload: {}
      });
}

@connect(({articles}) => ({data: articles.tableData, editVisible: articles.editVisible, delVisible: articles.delVisible, articleId: articles.articleId}))
export default class ArticleTable extends Component {
    render() {
        const { data, editVisible, delVisible, articleId } = this.props;
        dispatch = this.props.dispatch;
        return (
            <div>
                <Table columns={ columns } dataSource={ data }>

                </Table>
                <EditModal visible={ editVisible } articleId = { articleId }></EditModal>
                <DeleteMoal visible={ delVisible } articleId = { articleId }></DeleteMoal>
            </div>
        )
    }
}
