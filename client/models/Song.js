// Song.js - Defines a backbone model class for songs.
var Song = Backbone.Model.extend({

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  ended: function(){
    this.trigger('ended');
  },

  dequeue: function(){
    this.trigger('dequeue', this);
  },

  enqueue: function(){
    this.trigger('enqueue', this);
  }

});
