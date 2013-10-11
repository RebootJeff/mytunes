// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', function(){
      this.models.length === 1 && this.playFirst();
    });
    this.on('ended', this.removeFirst);
    this.on('enqueue', this.enqueue, this);
    this.on('dequeue', this.dequeue, this);
  },

  playFirst: function(){
    if(this.models.length){
      this.first().play();
    }
  },

  removeFirst: function(){
    this.remove(this.first());
    if(this.models.length){
      this.playFirst();
    }
  },

  dequeue: function(song){
    if(_(this.models).contains(song)){   // return to this
       this.remove(song);
    }
  },

  enqueue: function(song){
    this.add(song);
  }

});
