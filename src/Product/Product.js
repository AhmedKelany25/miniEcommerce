import { Fragment } from "react/cjs/react.production.min";
import classes from "./Product.module.css"
import { useSelector } from "react-redux";
import {  useState } from "react";


function Product(){

    const question = useSelector((state) =>
        state.product
            )


    return(
        <Fragment>
            <div className={classes.product} >
                <div className={classes.img}>
                    <img src={`assets/${question}.png`}   />
                    <div className={classes.productName}>
                        <h3>Dining chair</h3>
                        <h1>{question}</h1>
                        <h6>$ 180</h6>
                    </div>  

                    <button>Buy</button>
                </div>
                <div className={classes.productInfo}>
                    <section className={classes.productIntro}>
                        <h4>Into</h4>
                        <p>lorem lorem lorem loremVV lorem lorem lorem lorem V lorem lorem lorem lorem lorem lorem lorem loremVV lorem lorem lorem lorem V lorem lorem lorem lorem</p>
                    </section>
                    <section className={classes.productData}>
                        <h4 >Product Information</h4>
                        <aside>
                            <div><strong>Dimintion</strong></div>
                            <p>5*15*25</p>
                         
                        </aside>
                        <hr/>
                        <aside>
                            <div><strong>Matrials</strong></div>
                            <div> 
                                <p>loremloreml oremloremVV </p>
                                <p>loremloreml</p>
                                <p>oremloremVV</p>
                            </div>
                     
                        </aside>
                        <hr/>
                        <aside>
                            <div><strong>Good To Know</strong></div>
                            <p>5*15*25</p>
                            
                        </aside>
                        <hr/>
                    </section>
                </div>
            </div>

        </Fragment>
    )
}

export default Product