import React from 'react';
import { List , Table } from 'antd';
import * as orderService from '../services/orderService';

const data = [
    {
      time: '2022-5-15 13:00:11',
      bookName: 'Life Force',
      amount: 2,
      totalPrice:"$20.00",
    },
    
  ];
  
export class OrderList extends React.Component {
    constructor(props){
        super(props);
        this.state={
            OrderItems:[],
        };
    }
    componentDidMount() {
        const callback =  (data) => {
            let orderItemList=[];
            for (let order of data){
                let totalPrice=0;
                let totalNum=0;
                for(let book of order.orderItemList){
                    totalPrice+=book.bookNumber*book.price;
                    totalNum+=book.bookNumber;
                    book.price='$'+book.price.toFixed(2);
                }
                orderItemList.push({
                    orderDate:order.time.substring(0,10),
                    orderTime:order.time.substring(11,19),
                    buyer:order.userName,
                    bookNum:totalNum,
                    cost:totalPrice.toFixed(2),
                    bookList:order.orderItemList
                    });
            }
           this.setState({OrderItems:orderItemList.reverse()});
        };
        orderService.getOrder(callback);
    }
    render(){
        const columns = [
            {
                title: 'Title',
                dataIndex: 'bookName',
                key: 'bookName',
            },
            {
                title: 'Number',
                dataIndex: 'bookNumber',
                key: 'bookNumber',
            },
            {
                title: 'Price/per',
                dataIndex: 'price',
                key: 'price',
            },
 
        ];
        return(
            <div>
                <List
                    dataSource={this.state.OrderItems}
                    pagination={{
                        onChange: page => {
                          console.log(page);
                        },
                        pageSize: 4,
                      }}
                    renderItem={item =>(
                        <List.Item>
                            <List.Item.Meta
                                title={`Date:${item.orderDate}  Time: ${item.orderTime}`}
                                description={`${item.bookNum} Books Ordered by ${item.buyer} , Total Cost $${item.cost}`}
                            />
                            <Table columns={columns} dataSource={item.bookList} />
                        </List.Item>
                    )}
                />
            </div>
        );
    };
}
