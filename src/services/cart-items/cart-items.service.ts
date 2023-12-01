// Initializes the `cartItems` service on path `/cartItems`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { CartItems } from './cart-items.class';
import createModel from '../../models/cart-items.model';
import hooks from './cart-items.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'cartItems': CartItems & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    // $sort: { createdAt:-1},
  };

  // Initialize our service with any options it requires
  app.use('/cartItems', new CartItems(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('cartItems');

  service.hooks(hooks);
}
