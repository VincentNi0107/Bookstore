import React from 'react';
import {Button, Modal , Form , Input , message , Table , Popconfirm} from 'antd';
import { PlusOutlined , SearchOutlined } from '@ant-design/icons';
import { getBooks , addBook , deleteBook , editBook } from "../services/bookService";
import Highlighter from 'react-highlight-words';

export class BookSalesTable extends React.Component {
    formRef = React.createRef();
    constructor(props){
        super(props);
        this.state={
            bookList: [],
            searchText: '',
            searchedColumn: '',
            edit:false,
            isModalVisiable:false,
            bookId:'',
            bookName:'',
            author:'',
            isbn:'',
            price:'',
            originPrice:'',
            description:'',
            imageUrl:'',
            inventory:'',
        };
    }
    componentDidMount() {
        this.fetchBooks();
    };

    fetchBooks = () => {
        console.log("fetchbook");
        const callback =  (data) => {
            this.setState({bookList:data});
        };
 
        getBooks({"search":null}, callback);
    }

    handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        this.setState({
            searchText: selectedKeys[0],
            searchedColumn: dataIndex,
        });
    };

    handleReset = (clearFilters, confirm) => {
        clearFilters();
        this.setState({searchText: ''});
        confirm();

    };

    getColumnSearchProps = dataIndex => ({
        filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters}) => (
            <div style={{padding: 8}}>
                <Input
                    ref={node => {
                        this.searchInput = node;
                    }}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{width: 188, marginBottom: 8, display: 'block'}}
                />
                <Button
                    type="primary"
                    onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                    icon={<SearchOutlined/>}
                    size="small"
                    style={{width: 90, marginRight: 8}}
                >
                    Search
                </Button>
                <Button onClick={() => this.handleReset(clearFilters,confirm)} size="small" style={{width: 90}}>
                    Reset
                </Button>
            </div>
        ),

        filterIcon: filtered => <SearchOutlined style={{color: filtered ? '#1890ff' : undefined}}/>,

        onFilter: (value, record) => record[dataIndex] ?
            record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()) : '',

        onFilterDropdownVisibleChange: visiable => {
            if (visiable) {
                setTimeout(() => this.searchInput.select());
            }
        },

        render: text =>
            this.state.searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{backgroundColor: '#ffc069', padding: 0}}
                    searchWords={[this.state.searchText]}
                    autoEscape
                    textToHighlight={text.toString()}
                />
            ) : (
                text
            ),
    });

    handleAdd = () => {
        this.setState({
            isModalVisiable:true,
            edit:false,
            bookName:'',
            author:'',
            isbn:'',
            price:'',
            originPrice:'',
            description:'',
            imageUrl:'',
            inventory:'',
        });
        this.formRef.current.setFieldsValue({
            bookName:'',
            author:'',
            isbn:'',
            price:'',
            originPrice:'',
            description:'',
            imageUrl:'',
            inventory:'',
        });
    }

    handleEdit = (record) => {
        this.setState({
            isModalVisiable:true,
            edit:true,
            bookId:record.bookId,
            bookName:record.bookName,
            author:record.author,
            isbn:record.isbn,
            price:record.price,
            originPrice:record.originPrice,
            description:record.description,
            imageUrl:record.imageUrl,
            inventory:record.inventory,
        });
        this.formRef.current.setFieldsValue({
            bookName:record.bookName,
            author:record.author,
            isbn:record.isbn,
            price:record.price,
            originPrice:record.originPrice,
            description:record.description,
            imageUrl:record.imageUrl,
            inventory:record.inventory,
          });
    }
    handleOk = () => {
        this.setState({
            isModalVisiable:false,
        })
        if(this.state.edit){
            let requestBody = {
                bookId:this.state.bookId,
                bookName:this.state.bookName,
                author:this.state.author,
                isbn:this.state.isbn,
                price:this.state.price,
                originPrice:this.state.originPrice,
                description:this.state.description,
                imageUrl:this.state.imageUrl,
                inventory:this.state.inventory,
            };
            const callback =  (data) => {
                if(data.status==0){
                    message.success(data.msg);
                }
                else{
                    message.error(data.msg);
                }
            };
            editBook(requestBody,callback);
        }
        else{
            let requestBody = {
                bookName:this.state.bookName,
                author:this.state.author,
                isbn:this.state.isbn,
                price:this.state.price,
                originPrice:this.state.originPrice,
                description:this.state.description,
                imageUrl:this.state.imageUrl,
                inventory:this.state.inventory,
            };
            const callback =  (data) => {
                if(data.status==0){
                    message.success(data.msg);
                }
                else{
                    message.error(data.msg);
                }
            };
            addBook(requestBody,callback);
        }
        setTimeout(() => this.fetchBooks(), 100);
    }

    handleCancel = () => {
        this.setState({
            isModalVisiable:false,
        })
    }
    handleDelete = (record) => {
        console.log(record);
        const callback =  (data) => {
            if(data.status==0){
                message.success(data.msg);
            }
            else{
                message.error(data.msg);
            }
         };
        deleteBook(record.bookId, callback);
        setTimeout(() => this.fetchBooks(), 100);
    }
    render(){
        const columns = [
            {
                title: 'BookName',
                dataIndex: 'bookName',
                key: 'bookName',
                ...this.getColumnSearchProps('bookName'),
            },
            {
                title: 'Author',
                dataIndex: 'author',
                key: 'author',
            },
            {
                title: 'Image',
                dataIndex: 'imageUrl',
                key: 'imageUrl',
                render: (text) =>
                    (<img alt={'book face'} src={text} height={40} width={40}/>)
            },
            {
                title: 'ISBN',
                dataIndex: 'isbn',
                key: 'isbn',
            },
            {
                title: 'Price',
                dataIndex: 'price',
                key: 'price',
            },
            {
                title: 'Inventory',
                dataIndex: 'inventory',
                key: 'inventory',
            },
            {
                title: 'operation',
                dataIndex: 'operation',
                render: (text, record) => (
                    <div>
                        <Button
                            onClick={() => {
                                console.log(record);
                                this.handleEdit(record);
                            }}>Edit
                        </Button>
                        <Popconfirm
                            title="Are you sure to delete this book?"
                            onConfirm={() => this.handleDelete(record)}
                            okText="Yes"
                            cancelText="No"
                        >
                            <Button type="primary" danger >Delete</Button>
                        </Popconfirm>
                    </div>
                )
            },
        ];
        return(
            <div>
                <Button type="primary" onClick={this.handleAdd} icon={<PlusOutlined />}>
                    Add a New Book
                </Button>
                <br/>
                <br/>
                <Table
                    bordered
                    dataSource={this.state.bookList}
                    columns={columns}
                />
                <Modal title="Add Book" visible={this.state.isModalVisiable} onOk={this.handleOk} onCancel={this.handleCancel}>
                    <Form 
                        ref={this.formRef}
                        name="basic"
                        labelCol={{
                            span: 8,
                        }}
                        wrapperCol={{
                            span: 16,
                        }}
                        initialValues={{
                            remember: true,
                        }}
                        autoComplete="off"
                        >
                        <Form.Item
                            label="BookName"
                            name="bookName"
                            rules={[
                            {
                                required: true,
                                message: 'Please input bookname!',
                            },
                            ]}
                        >
                            <Input placeholder="Please enter bookname" onChange={(e) => this.setState({bookName: e.target.value})} />
                        </Form.Item>

                        <Form.Item
                            label="Price"
                            name="price"
                            rules={[
                            {
                                required: true,
                                message: 'Please input Price!',
                            },
                            ]}
                        >
                            <Input placeholder="Please enter price" onChange={(e) => this.setState({price: e.target.value})} />
                        </Form.Item>

                        <Form.Item
                            label="OriginPrice"
                            name="originPrice"
                            rules={[
                            {
                                required: true,
                                message: 'Please input Origin Price!',
                            },
                            ]}
                        >
                            <Input placeholder="Please enter originPrice" onChange={(e) => this.setState({originPrice: e.target.value})} />
                        </Form.Item>

                        <Form.Item
                            label="ISBN"
                            name="isbn"
                            rules={[
                            {
                                required: true,
                                message: 'Please input isbn!',
                            },
                            ]}
                        >
                            <Input placeholder="Please enter isbn" onChange={(e) => this.setState({isbn: e.target.value})} />
                        </Form.Item>

                        <Form.Item
                            label="Author"
                            name="author"
                            rules={[
                            {
                                required: true,
                                message: 'Please input author!',
                            },
                            ]}
                        >
                            <Input placeholder="Please enter author" onChange={(e) => this.setState({author: e.target.value})} />
                        </Form.Item>

                        <Form.Item
                            label="Inventory"
                            name="inventory"
                            rules={[
                            {
                                required: true,
                                message: 'Please input inventory!',
                            },
                            ]}
                        >
                            <Input placeholder="Please enter inventory" onChange={(e) => this.setState({inventory: e.target.value})} />
                        </Form.Item>

                        <Form.Item
                            label="ImageUrl"
                            name="imageUrl"
                            rules={[
                            {
                                required: true,
                                message: 'Please input imageUrl!',
                            },
                            ]}
                        >
                            <Input placeholder="Please enter imageUrl" onChange={(e) => this.setState({imageUrl: e.target.value})} />
                        </Form.Item>

                        <Form.Item
                            label="Description"
                            name="description"
                            rules={[
                            {
                                required: true,
                                message: 'Please input description!',
                            },
                            ]}
                        >
                            <Input placeholder="Please enter description" onChange={(e) => this.setState({description: e.target.value})} />
                        </Form.Item>

                    </Form>
                </Modal>
            </div>
        );
    };

}