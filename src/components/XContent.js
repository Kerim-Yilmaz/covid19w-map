import React, { useContext, useState } from 'react'
import { Covid19Data } from '../components/context/Covid19';
import { Table, Tag, Input, Spin } from 'antd'
const { Search } = Input;
const XContent = () => {

  const { results, isLoading } = useContext(Covid19Data)
  const [value, setValue] = useState('')
  const data = results.filter(x => x.Country.toLowerCase().indexOf(value) > -1)

  const columns = [
    {
      title: 'Name',
      dataIndex: 'Country',
      sorter: (a, b) => (a.Country < b.Country ? -1 : 1),

    },
    {
      title: 'New Cases',
      dataIndex: 'Cases_new',

      sorter: (a, b) => a.Cases_new - b.Cases_new,
      render: (Cases_new) => <Tag color='cyan' >{Cases_new}</Tag>

    },
    {
      title: 'Critical Cases',
      dataIndex: 'Cases_critical',

      sorter: (a, b) => a.Cases_critical - b.Cases_critical,

    },
    {
      title: 'Recovered Cases',
      dataIndex: 'Cases_recovered',

      sorter: (a, b) => a.Cases_recovered - b.Cases_recovered,
      render: (Cases_recovered) => <Tag color='green' >{Cases_recovered}</Tag>

    },
    {
      title: 'New Deaths',
      dataIndex: 'Deaths_new',

      sorter: (a, b) => a.Deaths_new - b.Deaths_new,

    },
    {
      title: 'Total Deaths',
      dataIndex: 'Deaths_total',

      sorter: (a, b) => a.Cases_critical - b.Cases_critical,
      render: (Deaths_total) => <Tag color='red' >{Deaths_total}</Tag>
    }
  ];
  return (
    <>
      {isLoading ? <Spin size="large" /> : <>
        <Search placeholder="Search Name" onChange={(e) => setValue(e.target.value.toLowerCase())} style={{ width: 200 }} />
        <Table columns={columns} dataSource={data} size="small" rowKey='Key' scroll={{ y: 370 }} />

      </>

      }
    </>

  )
}

export default XContent
