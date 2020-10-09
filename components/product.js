import styles from '../styles/Product.module.css'
import Checkout from './checkout';
  
export default function Product(props) {
    return (
        <div className={styles.product}>
            <img className={styles.productimage} src="https://images.unsplash.com/photo-1576616074021-f6b73bbabde4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
            <p>{props.data.description}</p>
            <p><strong>{props.data.price}</strong></p>
              <Checkout/>
        </div>
    )
}