// Initializes the `query` service on path `/query`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Query } from './query.class';
import createModel from '../../models/query.model';
import hooks from './query.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'query': Query & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/query', new Query(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('query');

  service.hooks(hooks);
}
