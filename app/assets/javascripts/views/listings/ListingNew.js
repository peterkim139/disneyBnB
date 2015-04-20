disneyBnB.Views.ListingNew = Backbone.View.extend({
  tagName: 'div class=form-container',
  template: JST['listing/listingForm'],

  initialize: function(){
    this.listenTo(this.model, 'sync', this.render);
  },

  events: {
    'submit': 'createListing'
  },

  render: function() {
    var content = this.template({
      listing: this.model
    });
    this.$el.html(content);
    return this;
  },

  createListing: function(event){
    event.preventDefault();
    var data = $(this.$el.find('.listing-form')).serializeJSON();
    this.model.save(data, {
      success: function(){
        console.log('create listing!');
        this.collection.add(this.model, {merge: true});
        Backbone.history.navigate('listing/' + this.model.id, {trigger: true});
      }.bind(this),
      error: function(model, response){
        console.log('error!');
        var errMessage = $('.listing-new-error');
        errMessage.html($('<p>All fields must be filled out!</p>'));
      }.bind(this)
    });
  }
});
