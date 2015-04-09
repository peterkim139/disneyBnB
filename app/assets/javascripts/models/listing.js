disneyBnB.Models.Listing = Backbone.Model.extend({
  urlRoot: '/api/listings',

  locations: function(){
    if (!this._locations) {
      this._locations = new disneyBnB.Collections.Locations([], {listing: this});
    }
    return this._locations;
  }
});
