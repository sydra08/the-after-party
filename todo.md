# Task List
https://www.fullstackreact.com/articles/how-to-get-create-react-app-to-work-with-your-rails-api/
[x] generate Rails api app
[x] create-react-app
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
[x] set up controllers
  [x] venues
    [x] index
    [x] show
    [x] update
  [x] suggestions
    [x] index
    [x] create
    [x] update
  [x] reviews
    [x] index
    [x] create
    [x] update
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
[x] figure out why the timestamp data is showing up for location
[x] update README with proper install and usage instructions
[x] packages
  [x] isomorphic fetch
  [x] es6 promise (?)
  [ ] prop-types
  [x] react-router
  [x] redux thunk
  [x] react-redux
  [x] redux
[ ] React Components
  [ ] homepage
  + Venue
    [x] VenueListContainer
    [x] VenueList
    [x] Venue - contains the venue data (this can be reused in the list view and on the broader page since the layout will be the same)
  + Suggestion
    [x] SuggestionListContainer
    [x] SuggestionList
    [x] Suggestion (is this where the form goes?)
    [ ] SuggestionNew (the form)
      + need to understand nested forms and components in order to do this. Does the address part of the form mean it gets it's own component that just displays within the Suggestion form components?
  + Review
    [x] ReviewListContainer
    [x] ReviewList
    [x] Review (is this where the form goes?)
    [ ] ReviewNew (the form)
      [ ] rating element
      [ ] send venue data with form
      [ ] hook up form submit with API
[ ] add a loading icon/screen for pages while API data is being fetched
[ ] ratings (https://www.npmjs.com/package/react-star-rating-component)  
[ ] set up routes in React w react-router (App.js)
[ ] figure out where the props and state stuff goes
[ ] start creating different pages for app https://reactjs.org/docs/thinking-in-react.html
  [ ] Venue List - just a list of the venues as links
  [ ] Venue Show - display the venue, reviews, and suggestions
    [ ] Venue data
    [ ] Review data
    [ ] Review form
    [ ] Suggestion data
    [ ] Suggestion form
  [ ] Homepage - static view
[ ] Redux - need to start using Redux so that I can set up the links properly
  [ ] create store
  [ ] actions
    [ ] addReview
    [ ] addSuggestion
    [ ] updateSuggestion (when voting)
    [ ] updateVenue (rating)
  [ ] reducers
[ ] Design
  [ ] http://polaris.shopify.com/ - like a lot of the options, but not sure it's the right fit
    + like the filter options.
    + could also consider doing a modal for the forms?
    + the list formats aren't bad either
    + like the loading design for pages with text
    + alerts style is nice
    + like the design principles too
  [ ] https://react-bootstrap.github.io/ - never really had any success working with bootstrap, but willing to try
    + like the form validations
    + think that it's nice and basic and the Polaris one might get too complicated? It also looks really similar to the bootstrap stuff, just styled slightly differently at times

    state = {
      venues: [
      {
        name: "Irving Plaza",
        address: {
          street: "123 Main Street",
          city: "New York",
          state: "New York"
        },
        avg_rating: 5,
        reviews: [
        {
          content: "I love it",
          rating: 5
        },
        {
          content: "Best place ever",
          rating: 5
        }
        ],
        suggestions: [
        {
          name: Artichoke Pizza,
          category: Fast Casual,
          address: {
            street: "133 Main Street",
            city: "New York",
            state: "New York"
          },
          upvotes: 12341,
          downvotes: 34
        },
        {
          name: Halal Guys,
          category: Fast Casual,
          address: {
            street: "143 Main Street",
            city: "New York",
            state: "New York"
          },
          upvotes: 132341,
          downvotes: 1
        }
        ]
      },
      {
        name: "Brooklyn Steel",
        address: {
          street: "1133 Main Street",
          city: "Brooklyn",
          state: "New York"
        },
        avg_rating: 4,
        reviews: [
        {
          content: "Great Brooklyn venue",
          rating: 3
        },
        {
          content: "Awesome acoustics",
          rating: 5
        }
        ],
        suggestions: [
        {
          name: One Stop Beer Shop,
          category: Beer Bar,
          address: {
            street: "1343 Main Street",
            city: "Brooklyn",
            state: "New York"
          },
          upvotes: 123,
          downvotes: 5
        }
        ]
      }
      ]
    }
