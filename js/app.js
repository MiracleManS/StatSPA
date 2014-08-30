App = Ember.Application.create();

var players = [{
  id: '1',
  name: 'Alexander Ovechkin',
  team_id: '1',
  position: 'RW'
}, {
  id: '2',
  name: 'Jonathan Toews',
  team_id: '2',
  position: 'C'
}, {
  id: '3',
  name: 'Braden Holtby',
  team_id: '1',
  position: 'G'
}, {
  id: '4',
  name: 'Brooks Laich',
  team_id: '1',
  position: 'C'
}, {
  id: '5',
  name: 'Mike Green',
  team_id: '1',
  position: 'D'
}, {
  id: '6',
  name: 'Nick Backstrom',
  team_id: '1',
  position: 'C'
}];

var teams = [{
  id: '1',
  name: 'Washington Capitals',
  locat: 'Washington, DC',
}, {
  id: '2',
  name: 'Chicago Blackhawks',
  locat: 'Chicago, IL',
}];

App.Router.map(function() {
  // put your routes here
  this.resource('start');
  this.resource('about');
  this.resource('teams');
  this.resource('team', { path: 'team/:team_id'});
});

App.IndexRoute = Ember.Route.extend({
  setupController: function(controller) {
    controller.set('title', "My App");
  }
})

App.TeamsRoute = Ember.Route.extend({
  actions: {
    gotoTeam: function(team) {
      var data = $.grep(players, function(v) { return v.team_id === team.id; });
      this.transitionTo('team', team.id);
    }
  },
  model: function() {
    return teams;
  }
});

App.TeamRoute = Ember.Route.extend({
  model: function(params) {
    return $.grep(players, function(v) { return v.team_id === params.team_id; });
  }
});
