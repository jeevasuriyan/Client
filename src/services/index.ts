import { Application } from '../declarations';
import users from './users/users.service';
import query from './query/query.service';
import cartItems from './cart-items/cart-items.service';
import orders from './orders/orders.service';
// Don't remove this comment. It's needed to format import lines nicely.

export default function (app: Application): void {
  app.configure(users);
  app.configure(query);
  app.configure(cartItems);
  app.configure(orders);
}
