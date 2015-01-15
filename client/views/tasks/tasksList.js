Template['tasks.tasksList'].helpers({
  items: function() {
    return Tasks.find({});
  }
});
