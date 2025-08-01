import { useDispatch } from "react-redux";
import { addCartItem } from "../store/cartItem.slice";
import { addWishListItem } from "../store/wishList.slice";

export default function Products({ id, title, rating, price, image }) {
  const dispatch = useDispatch();
  return (
    <div className="product">
      <div className="product-image">
        <img src={image} alt={title} />
      </div>
      <div className="title-container">
        <h3>
          <a href="#">{title}</a>
        </h3>
      </div>
      <div className="price-rating-container">
        <p className="rating">{+rating.rate} ★ ★ ★ ★</p>
        <p className="price">${price}</p>
      </div>
      <div className="cta-container">
        <button
          className="pink-button"
          onClick={() => {
            dispatch(
              addCartItem({
                productId: id,
                title,
                rating,
                price,
                image,
                quantity: 1,
              })
            );
          }}
        >
          Add to Cart
        </button>
        <button
          className="blue-button"
          onClick={() => {
            dispatch(
              addWishListItem({ productId: id, title, rating, price, image })
            );
          }}
        >
          Add to Wishlist
        </button>
      </div>
    </div>
  );
}
