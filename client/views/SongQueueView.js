// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    var self = this;
    this.collection.on('add', this.render, this);  //start listening immediately
    this.collection.on('remove', this.render, this);
    this.render();
  },

  render: function() {
    this.$el.children().detach();
    return this.$el.html('<th>Song Queue</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
