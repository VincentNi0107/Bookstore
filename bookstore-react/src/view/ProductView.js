import React from 'react';
import Footer from '../components/Footer';
import {Nav} from '../components/Nav';
import '../styles/product.css';
import card1 from '../assets/card1-1.png';
import card2 from '../assets/card1-2.png';
import card3 from '../assets/card1-3.png';
import card4 from '../assets/card1-4.png';


const images=[card1,card2,card3,card4];
const prices=['$2','$4','$10','$5'];
const originPrices=['$4','$8','$20','$10'];
export class ProductView extends React.Component{
    constructor(props){
        super(props);
        this.state={
            backgroundImage:images[0],
            active:0,
            checked:0,
            prices:prices,
            originPrices:originPrices
        };
    }
    
    changeActiveimage=(e)=>{
        let idx=parseInt(e.target.dataset.idx,10);
        this.setState({
            active:idx,
            backgroundImage:images[idx],
        });
    }
    
    changeVersion=(e)=>{
        let idx=parseInt(e.target.dataset.idx,10);
        this.setState({
            checked:idx,
        });
    }

    render(){
        return(
            <div>
                <Nav/>
                <section className="product-details">
                    <div className="image-slider" style={{ backgroundImage: `url(${this.state.backgroundImage})` }}>
                        <div className="product-images">
                            <img src={card1} data-idx='0' onClick={this.changeActiveimage} className={this.state.active===0?"active":null} alt=""/>
                            <img src={card2} data-idx='1' onClick={this.changeActiveimage} className={this.state.active===1?"active":null} alt=""/>
                            <img src={card3} data-idx='2' onClick={this.changeActiveimage} className={this.state.active===2?"active":null} alt=""/>
                            <img src={card4} data-idx='3' onClick={this.changeActiveimage} className={this.state.active===3?"active":null} alt=""/>
                        </div>
                    </div>
                    <div className="details">
                        <h2 className="product-brand">Life Force: How New Breakthroughs in Precision Medicine Can Transform the Quality of Your Life & Those You Love</h2>
                        <p className="product-short-des">by Tony Robbins, Peter H. Diamandis, Robert Hariri</p>
                        <span className="product-price">{this.state.prices[this.state.checked]}</span>
                        <span className="product-actual-price">{this.state.originPrices[this.state.checked]}</span>
                        <span className="product-discount">( 50% off )</span>
                
                        <p className="product-sub-heading">Select formats and editions</p>
                
                        <input type="radio" name="size" value="s"  hidden id="s-size"/>
                        <label className={this.state.checked===0?"size-radio-btn check":"size-radio-btn"} data-idx='0' onClick={this.changeVersion}>PDF</label>
                        <input type="radio" name="size" value="m"  hidden id="m-size"/>
                        <label className={this.state.checked===1?"size-radio-btn check":"size-radio-btn"} data-idx='1' onClick={this.changeVersion}>Audiobook</label>
                        <input type="radio" name="size" value="l"  hidden id="l-size"/>
                        <label className={this.state.checked===2?"size-radio-btn check":"size-radio-btn"} data-idx='2' onClick={this.changeVersion}>Hardcover</label>
                        <input type="radio" name="size" value="xl"  hidden id="xl-size"/>
                        <label className={this.state.checked===3?"size-radio-btn check":"size-radio-btn"} data-idx='3' onClick={this.changeVersion}>Audio CD</label>
                
                        <button className="btn cart-btn">add to cart</button>
                        <button className="btn">add to wishlist</button>
                    </div>
                </section>
                <section className="detail-des">
                    <h2 className="headingp">Description</h2>
                    <p className="des">
                        <span>
                            Transform your life or the life of someone you love with Life Force—the newest breakthroughs in health technology to help maximize your energy and strength, prevent disease, and extend your health span—from Tony Robbins, author of the #1 New York Times bestseller Money: Master the Game.
                        </span>
                    </p>
                    <p className="des">
                        What if there were scientific solutions that could wipe out your deepest fears of falling ill, receiving a life-threatening diagnosis, or feeling the effects of aging? What if you had access to the same cutting-edge tools and technology used by peak performers and the world’s greatest athletes?
                    </p>   
                    <p className="des"> 
                        In a world full of fear and uncertainty about our health, it can be difficult to know where to turn for actionable advice you can trust. Today, leading scientists and doctors in the field of regenerative medicine are developing diagnostic tools and safe and effective therapies that can free you from fear.
                    </p>    
                    <p className="des">    
                        In this book, Tony Robbins, the world’s #1 life and business strategist who has coached more than fifty million people, brings you more than 100 of the world’s top medical minds and the latest research, inspiring comeback stories, and amazing advancements in precision medicine that you can apply today to help extend the length and quality of your life.
                    </p> 
                    <p className="des">   
                        This book is the result of Robbins going on his own life-changing journey. After being told that his health challenges were irreversible, he experienced firsthand how new regenerative technology not only helped him heal but made him stronger than ever before.
                    </p>
                    <p className="des">  
                        Life Force will show you how you can wake up every day with increased energy, a more bulletproof immune system, and the know-how to help turn back your biological clock. This is a book for everyone, from peak performance athletes, to the average person who wants to increase their energy and strength, to those looking for healing. Life Force provides answers that can transform and even save your life, or that of someone you love.
                    </p>
                </section>
                <Footer/>
            </div>
        );
    }
}