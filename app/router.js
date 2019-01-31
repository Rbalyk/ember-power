import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
    location: config.locationType,
    rootURL: config.rootURL
});

Router.map(function () {
  this.route('say-hi');
  this.route('skills');
  this.route('calculator');
  this.route('posts', function () {
      this.route('show', {path: '/:post_id'});
  });
  this.route('currencies');
  this.route('about');
  this.route('photos');
  this.route('weather');
  this.route('shop');
  this.route('page-not-found', {path:'/*wildcard'});
  this.route('office');
  this.route('login',{path: '/'});
  this.route('articles');
});
export default Router;
