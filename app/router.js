import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
    location: config.locationType,
    rootURL: config.rootURL
});

Router.map(function () {
  this.route('say-hi', {path: '/'});
  this.route('skills');
  this.route('calculator');
  this.route('about');
  this.route('posts', function () {
      this.route('show', {path: '/:post_id'});
  });
  this.route('currencies');
  this.route('post-body');
  this.route('photos');
});
export default Router;
