import React, { useEffect, useState } from 'react'
import { Table, Tag, Input, Space, Typography } from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'

import "./students.css"
import { DeleteStudentAction, FetchStudentsAction } from '../../../../redux/actions/students';
import { debounce } from '../../../../helpers'

const { Text } = Typography;
const { Search } = Input;

/**
* @author
* @function Students
**/

const Students = (props) => {

    const history = useHistory()

    const [pageSize, setPageSize] = useState(10)
    const [current, setCurrent] = useState(1)
    const [keyword, setKeyword] = useState("")
    const [columns] = useState([
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
            render: (data) => (
                <Space size="middle">
                    <a onClick={() => editStudent(data)}>Edit</a>
                    <a onClick={() => deleteStudent(data)}>Delete</a>
                </Space>
            ),
        },
    ])
    const dispatch = useDispatch()

    const { success } = useSelector((state) => state.students.deleteStudent)

    useEffect(() => {
        if (success) {
            setCurrent(1)
            dispatch(FetchStudentsAction({ _page: 1, _limit: pageSize, keyword }))
        }
    }, [success])

    const editStudent = (data) => {
        const { id } = data
        history.push(`/student/edit/${id}`)
    }

    const deleteStudent = (data) => {
        console.log(data.id)
        dispatch(DeleteStudentAction(data.id))
    }

    const onSearch = value => {
        searchDebounce({ keyword: value })
    }

    const onSearchChange = (event) => {
        setTimeout(() => {
            let value = event.target.value
            searchDebounce({ keyword: value })
        }, 500)
    }

    const search = ({ keyword }) => {
        setCurrent(1)
        setKeyword(keyword)
        dispatch(FetchStudentsAction({ _page: 1, _limit: pageSize, keyword }))
    }
    const searchDebounce = debounce(search, 500)

    const { loading, message, data, total } = useSelector((state) => {
        return state.students.students
    })

    useEffect(() => {
        dispatch(FetchStudentsAction({ _page: current, _limit: pageSize, keyword }))
    }, [current, pageSize])

    const onPageChange = (value) => {
        setCurrent(value)
    }

    return (
        <div id="student-list">
            <div className="search-input" >
                <Search placeholder="input search text" onSearch={onSearch} onChange={onSearchChange} enterButton />
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

export default Students