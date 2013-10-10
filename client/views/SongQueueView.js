// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function(params) {
    this.collection = params.collection;
    this.collection.on('add', this.render);  //start listening immediately
    this.collection.on('remove', this.render);
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
