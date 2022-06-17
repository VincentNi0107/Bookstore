import React from 'react';
import { List , Table , DatePicker , Input } from 'antd';
import * as orderService from '../services/orderService';

const {Search} = Input;
const {RangePicker} = DatePicker;
  
export class OrderList extends React.Component {
    constructor(props){
        super(props);
        this.state={
            orderItems:[],
            showOrders:[],
            filterText: '',
            startTime:'',
            endTime:''
        };
    }
    componentDidMount() {
        const callback =  (data) => {
            let orderItemList=[];
            for (let order of data){
                let totalPrice=0;
                let totalNum=0;
                for(let item of order.orderItemList){
                    totalPrice+=item.bookNumber*item.price;
                    totalNum+=item.bookNumber;
                    item.price='$'+(item.price/100).toFixed(2);
                }
                orderItemList.push({
                    orderDate:order.time.substring(0,10),
                    orderTime:order.time.substring(11,19),
                    buyer:order.username,
                    bookNum:totalNum,
                    cost:totalPrice,
                    bookList:order.orderItemList
                    });
            }
            this.setState({
                orderItems:orderItemList.reverse(),
                showOrders:orderItemList
            });
        };
        orderService.getOrder(callback);
    };

    searchChange = ({target: {value}}) => {
        this.setState({filterText: value});
        setTimeout(() => this.filterList(), 100);
    }

    filterList = () => {
        let arr = [];
        let list = this.state.orderItems;
        for (let orderitem of list) {
            let time = new Date(Date.parse(orderitem.orderDate));
            let startTime = new Date(Date.parse(this.state.startTime));
            let endTime = new Date(Date.parse(this.state.endTime));
            if((this.state.startTime===''|| time >= startTime) && (this.state.endTime==='' || time <= endTime)){
                for(let book of orderitem.bookList){
                    if(book.bookName.toLowerCase().indexOf(this.state.filterText.toLowerCase()) != -1){
                        arr.push(orderitem);
                        break;
                    }
                }
            }
        }                
        this.setState(
            {showOrders: arr}
        );
    }

    timeChange = (_, dateString) => {      
        const startTime = new Date(Date.parse(dateString[0]));
        const endTime = new Date(Date.parse(dateString[1]));
        this.setState({
            startTime:startTime,
            endTime:endTime
        });
        setTimeout(() => this.filterList(), 100);
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
                <br/>
                <br/>
                <Search value={this.state.searchValue} placeholder="Search for Orders by Book Name" onChange={this.searchChange}/>
                <br/>
                <br/>
                <RangePicker onChange={this.timeChange}/>
                <br/>
                <br/>
                <List
                    dataSource={this.state.showOrders}
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
                                description={`${item.bookNum} Books Ordered by ${item.buyer} , Total Cost $${(item.cost/100).toFixed(2)}`}
                            />
                            <Table columns={columns} dataSource={item.bookList} />
                        </List.Item>
                    )}
                />
            </div>
        );
    };
}
