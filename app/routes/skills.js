import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        let skills = ['HTML5/CSS3','LESS/SCSS','BOOTSTRAP','SVG-ANIMATION','JS/JQUERY','WORDPRESS','DRUPAL AND TWIG','REACT.JS','GIT'];
        return skills
    }
});
