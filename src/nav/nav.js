import classes from "./nav.module.css"
function Nav (){
    return (
        <nav>
          <h2>The Furnish</h2>
          <ul className={classes.list}>
              <li>Shop</li>
              <li>Collection</li>

          </ul>
        </nav>
      );

}


export default Nav;