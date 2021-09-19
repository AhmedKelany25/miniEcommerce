import { Fragment } from "react/cjs/react.production.min";
import classes from "./products.module.css"
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ProductName } from "../store/Products-slice";
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import { IconName } from "react-icons/bs


function Products() {
  
    const dispatch = useDispatch();

    const OnClickHandler = (e)=>{
      // console.dir(e.target.parentNode.childNodes[0].innerText)

      // console.dir(e.target.parentNode.childNodes[1].innerText)
      // console.dir(e.target.parentNode.childNodes[2].innerText)
      // console.dir(e.target.parentNode.childNodes[3].innerText)
      // console.dir(e.target.parentNode.childNodes[4].innerText)
      // console.dir(e.target.parentNode.parentNode.childNodes[0].textContent)

      dispatch(ProductName.productInfo(e.target.parentNode.parentNode.childNodes[0].textContent));
    }



    return (
        <Fragment>
        <div className={classes.header}>
        <div className={classes.map}>
          <h4 className={classes.subTitle}>Working chair</h4>
          <h2 className={classes.title}>The Mine</h2>
          <span>$180</span>

          <button className={classes.buy}> Buy </button>
        </div>
    </div>

    <div className={classes.midTitle}> 
    <em> <strong>Lean </strong> <span>too</span> <span>Far</span></em>
    </div>

    <div className={classes.gridcontainer}>
      <div className={classes.item1}>
        Ingird
        <Link dataset={0} className={classes.more} to="/product" onClick={OnClickHandler}> <span className={classes.moreback} ></span> <span className={classes.moreInfo}> More info  <i class="bi bi-arrow-right"></i></span>    
 </Link>
      
        </div>
      <div className={classes.item2}>
        Shell
        <Link className={classes.more} to="/product"  onClick={OnClickHandler}> <span className={classes.moreback} ></span> <span className={classes.moreInfo}> More info <i class="bi bi-arrow-right"></i></span></Link>

        </div>
      <div className={classes.item3}>
        Leifarne
        <Link className={classes.more} to="/product" onClick={OnClickHandler}> <span className={classes.moreback} ></span> <span className={classes.moreInfo}> More info <i class="bi bi-arrow-right"></i></span></Link>
        
        </div>  
      <div className={classes.item4}>
        Gronild
        <Link className={classes.more} to="/product" onClick={OnClickHandler}> <span className={classes.moreback} ></span> <span className={classes.moreInfo}> More info <i class="bi bi-arrow-right"></i></span></Link>

        </div>
      <div className={classes.item5}>
        Ekepol
        <Link className={classes.more} to="/product" onClick={OnClickHandler}> <span className={classes.moreback} ></span> <span className={classes.moreInfo}> More info <i class="bi bi-arrow-right"></i></span></Link>

        </div>
      <div className={classes.item6}>
        Lallerod
        <Link className={classes.more} to="/product" onClick={OnClickHandler}> <span className={classes.moreback} ></span> <span className={classes.moreInfo}> More info <i class="bi bi-arrow-right"></i></span></Link>

        </div>
      <div className={classes.item7}>
        Vejmod
        <Link className={classes.more} to="/product" onClick={OnClickHandler}> <span className={classes.moreback} ></span> <span className={classes.moreInfo}> More info <i class="bi bi-arrow-right"></i></span></Link>

        </div>

    </div>
    </Fragment>
    );
}

export default Products
