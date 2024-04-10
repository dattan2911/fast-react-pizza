import Button from '../../ui/Button';
import { useDispatch } from 'react-redux';
import { decreaseItemQuantity, increaseItemQuantity } from './cartSlice';

function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();

  function handleDecreaseQuantity() {
    dispatch(decreaseItemQuantity(pizzaId));
  }

  function handleIncreaseQuantity() {
    dispatch(increaseItemQuantity(pizzaId));
  }

  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button type="round" onClick={handleDecreaseQuantity}>
        -
      </Button>
      <span className="text-sm font-medium"> {currentQuantity} </span>
      <Button type="round" onClick={handleIncreaseQuantity}>
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
