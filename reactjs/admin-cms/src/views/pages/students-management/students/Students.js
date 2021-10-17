import React, { useEffect, useState } from 'react'
import { Table, Tag, Input, Space, Typography } from 'antd';

import { useDispatch, useSelector } from 'react-redux'

import "./students.css"
import { FetchStudentsAction } from '../../../../redux/actions/students';

const { Text } = Typography;

const { Search } = Input;

/**
* @author
* @function Students
**/

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Class',
        key: 'classes',
        dataIndex: 'classes',
        render: classes => (
            <>
                {classes.map((aClass, index) => {
                    let color = 'geekblue';
                    return (
                        <Tag color={color} key={index}>
                            {aClass.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },
    {
        title: 'Actions',
        key: 'action',
        render: () => (
            <Space size="middle">
                <a>Edit</a>
                <a>Delete</a>
            </Space>
        ),
    },
];

// const data = [
//     {
//         "id": "DH1",
//         "name": "Hoang Duy",
//         "classes": ["REACTJS2107", "NODEJS2101"],
//         "address": "HN",
//         "age": 20
//     },
//     {
//         "id": "DH2",
//         "name": "Hoang Van Hoc",
//         "classes": ["REACTJS2107"],
//         "address": "HN",
//         "age": 21
//     },
//     {
//         "id": "DH3",
//         "name": "Nguyen Van Duc",
//         "classes": ["REACTJS2107", "NODEJS2101"],
//         "address": "HN",
//         "age": 22
//     },
//     {
//         "id": "DH4",
//         "name": "Pham Duy Hung",
//         "classes": ["REACTJS2107", "NODEJS2101"],
//         "address": "HN",
//         "age": 20
//     }
// ];

export const Students = (props) => {
    const [pageSize, setPageSize] = useState(2)
    const [current, setCurrent] = useState(1)

    const onSearch = value => console.log(value);
    const dispatch = useDispatch()

    const { loading, message, data, total } = useSelector((state) => {
        return state.students.students
    })

    useEffect(() => {
        dispatch(FetchStudentsAction({ _page: current, _limit: pageSize}))
    }, [current, pageSize])

    const onPageChange = (value) => {
        setCurrent(value)
    }

    return (
        <div id="student-list">
            <div className="search-input" >
                <Search placeholder="input search text" onSearch={onSearch} enterButton />
            </div>
            <Text type="danger">{message}</Text>
            <Table className="table"
                columns={columns}
                dataSource={data}
                loading={loading}
                pagination={{
                    pageSize,
                    current,
                    onChange: onPageChange,
                    total
                }}
            />
        </div>
    )
}
