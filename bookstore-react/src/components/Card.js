import React from 'react';
export class Card extends React.Component{
    constructor(props){
        super(props);
        this.showEditor=this.showEditor.bind(this);
        this.save=this.save.bind(this);
    }
    showEditor(e){
        this.props.onEdit(e.target.dataset);
    }
    save(e){
        e.preventDefault();
        this.props.onSave(e.target.firstChild);
    }
    render(){
        const rows = [];
        const filterText = this.props.filterText;
        this.props.products.map((product,idx) => {
            if (product.title.toLowerCase().indexOf(filterText) === -1) {
                return;
            }
            let contentTitle=(<h2 className="product-brand" onDoubleClick={this.showEditor} data-cate='title' data-idx={idx}>{product.title}</h2>);
            let contentAuthor=(<p className="product-short-des" data-idx={idx} data-cate="author" onDoubleClick={this.showEditor}>{product.author}</p>);
            let contentPrice=(<span className="price" data-idx={idx} data-cate="price" onDoubleClick={this.showEditor}>{product.price}</span>);
            let contentOP=(<span className="actual-price" data-idx={idx} data-cate="originPrice" onDoubleClick={this.showEditor}>{product.originPrice}</span>);
            let edit=this.props.edit;
            if(edit&&edit.idx===idx){
                switch(edit.cate){
                    case 'title':
                        contentTitle=(
                            <form onSubmit={this.save}>
                                <input type="text" defaultValue={product.title}/>
                            </form>
                            );
                        break;
                    case 'author':
                        contentAuthor=(
                            <form onSubmit={this.save}>
                                <input type="text" defaultValue={product.author}/>
                            </form>
                            );
                        break;
                    case 'price':
                        contentPrice=(
                            <form onSubmit={this.save}>
                                <input type="text" defaultValue={product.price}/>
                            </form>
                        );
                        break;
                    case 'originPrice':
                        contentOP=(
                            <form onSubmit={this.save}>
                                <input type="text" defaultValue={product.originPrice}/>
                            </form>
                        );
                        break;
                    default:
                        break;
                }
            }
            rows.push(
                <div className="product-card" key={idx}>
                    <div className="product-image">
                        <span className="discount-tag">{product.discount}% off</span>
                        <img src={product.picture} className="product-thumb" alt=""/>
                        <button className="card-btn">Add To Cart</button>
                    </div>
                    <div className="product-info">
                        {contentTitle}
                        {contentAuthor}
                        {contentPrice}
                        {contentOP}
                    </div>
                </div>
            );
        });
        return(
            <div className="product-container">
                {rows}
            </div>      
            );
    }
}