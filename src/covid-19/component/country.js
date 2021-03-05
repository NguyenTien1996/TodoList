import React from 'react';
import {Table} from 'antd';
import MyContext from '../context/my-context';
import {Skeleton} from 'antd';

const ListCountry = () => {
    const column = [
        {
            title:'Quoc gia',
            dataIndex:'Country',
            key:'Country'
        },
        {
            title:'Ma QG',
            dataIndex:'CountryCode',
            key:'CountryCode'
        },
        {
            title:'Moi nhiem',
            dataIndex:'NewConfirmed',
            key:'NewConfirmed'
        },
        {
            title:'Tong ca nhiem',
            dataIndex:'TotalConfirmed',
            key:'TotalConfirmed'
        },
        {
            title:'Tu vong',
            dataIndex:'NewDeaths',
            key:'NewDeaths'
        },
        {
            title:'Tong tu vong',
            dataIndex:'TotalDeaths',
            key:'TotalDeaths'
        },
        {
            title:'Khoi benh',
            dataIndex:'NewRecovered',
            key:'NewRecovered'
        },
        {
            title:'Tong khoi',
            dataIndex:'TotalRecovered',
            key:'TotalRecovered'
        },
    ];
    return(
        <MyContext.Consumer>
            {context => {
                if(context.loading || context.virus.Countries === undefined){
                    return(
                        <Skeleton active/>
                    )
                }
                return(
                    <Table 
                    dataSource={context.virus.Countries} 
                    columns={column} 
                    rowKey="CountryCode"
                    pagination={{
                        defaultPageSize:10, 
                        showSizeChanger:true,
                        pageSizeOptions:['10','20','30']
                    }}
                    />
                )
            }}
        </MyContext.Consumer>
    )
}

export default React.memo(ListCountry)