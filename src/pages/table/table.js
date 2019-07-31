import React from 'react';
import { Table, Divider, Tag,Pagination,Button,Card } from 'antd';
import "./table.css";


class Tables extends React.Component {

  constructor(props) {
    super(props);
    this.state = { total:16,current:1 };
  }


  onChange = (page, pageSize)=>{
    console.log(page, pageSize)
    this.setState({
      current: page,
    });
  }

  render() {


    const columns = [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
        // render: text => <a href="javascript:;">{text}</a>,
      },
      {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: '地址',
        dataIndex: 'address',
        key: 'address',
      },
      {
        title: '标签',
        key: 'tags',
        dataIndex: 'tags',
        render: tags => (
          <span>
            {tags.map(tag => {
              let color = tag.length > 5 ? 'geekblue' : 'green';
              if (tag === 'loser') {
                color = 'volcano';
              }
              return (
                <Tag color={color} key={tag}>
                  {tag.toUpperCase()}
                </Tag>
              );
            })}
          </span>
        ),
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <span>
            <Button type="link" >操作</Button>
            <Button type="link" >删除</Button>
            {/* <Divider type="vertical" /> */}
          </span>
        ),
      },
    ];

    const data = [
      {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
      },
      {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
      },
      {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
      },
      {
        key: '4',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
      },
      {
        key: '5',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
      },
      {
        key: '6',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
      },
      {
        key: '7',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
      },
      {
        key: '8',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
      },
      {
        key: '9',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
      },
      {
        key: '10',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
      },
      {
        key: '11',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
      },
      {
        key: '12',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
      },
      {
        key: '13',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
      },
    ];


    return (
      <div className="table">
        <Card title="游戏" bordered={false} >
          <Table columns={columns} dataSource={data} loading={false} bordered   
            pagination={{
              onChange: this.onChange,
              pageSize:10,
              current:this.state.current,
              total:this.state.total
            }}
          /> 
          {/* <Pagination current={this.state.current} onChange={this.onChange} total={this.state.total} /> */}
        </Card>

      </div>
    );
  }
}

export default Tables;
