# Task List
https://www.fullstackreact.com/articles/how-to-get-create-react-app-to-work-with-your-rails-api/
[x] generate Rails api app
[ ] create-react-app
[x] generate models: venue, venue_comment, suggestion
  `rails g model`
[x] set up migrations & run them
[x] create seed data
  red rocks
  madison square garden
  brooklyn steel
  irving plaza
  bowery ballroom
[x] set up models
[ ] set up controllers
  [ ] venues
    [x] index
    [x] show
    [ ] update
  [ ] suggestions
    [x] index
    [ ] create
    [ ] update
  [ ] reviews
    [x] index
    [ ] create
    [ ] update
[x] set up routes
  [x] venues
  [x] suggestions (should probably be nested under venues?)
  [x] reviews (should probably be nested under venues?)
[x] set up AMS
[x] set up serializers
  [x] address
  [x] category
  [x] location
  [x] venues list - name, location_id, avg_rating, capacity
    + don't think it needs to have the reviews or suggestions associations listed here, only location
  [x] venue show - name, location_id, avg_rating, capacity with all associations
  [x] suggestion list - all fields
    NAME location avg_price
    Category | Upvotes Downvotes
  [x] review list - all fields
    Rating
    Content
[x] test JSON
[ ] figure out why the timestamp data is showing up for location
