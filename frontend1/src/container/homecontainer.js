import ProductScreen from '../screens/ProductScreen'
import {connect} from 'react-redux'
import {addToCart} from '../actions/cart'


const mapStateToProps =state => ({

})
const mapDispatchToProps =dispatch => ({
    addToCartHandler:data => dispatch(addToCart(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(ProductScreen)

