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
  [ ] es6 promise (?)
  [ ] prop-types
  [x] react-router
  [x] redux thunk
  [x] react-redux
  [x] redux
[ ] React Components
  [x] homepage
  + Venue
    [x] VenueListContainer
    [x] VenueList
    [x] Venue - contains the venue data (this can be reused in the list view and on the broader page since the layout will be the same)
  + Suggestion
    [x] SuggestionListContainer
    [x] SuggestionList
    [/] Suggestion (is this where the form goes?)
      [x] update upvote/downvote to like/dislike display
      [/] add functionality for liking/disliking a suggestion
        [x] buttons with icons
        [x] triggers updateSuggestion action that updates the number of likes/dislikes
        [ ] why is it "new headers" and not just "header" in PATCH action?
        [x] need to fix request params. they are not being passed properly so the update is rejected
        [ ] add error messaging when update isn't possible
    [/] SuggestionNew (the form)
      + need to understand nested forms and components in order to do this. Does the address part of the form mean it gets it's own component that just displays within the Suggestion form components?
      [x] need to fix the address event handler so that what you type continuously updates state properly
      [x] fix form styling
        [x] Vote radio buttons not displaying properly
      [x] figure out how to do radio buttons
      [x] move things into SuggestionContainer/make it stateless
      [x] address is only picking up the last thing again
      [x] figure out how to submit nested data
        + was able to submit data via Postman but the custom writers don't seem to have worked
        + `[active_model_serializers] Rendered ActiveModel::Serializer::Null with Hash` - tried removing the location_id column and that didn't stop the error. when you use Postman it seems to work just fine so there's gotta be something in the data that I'm submitting directly from State that is causing the error...Also why does it keep saying "Suggestion Exists" - Removing the validation in the model made that go away but still getting the error. Is it because Category stuff is null? No the suggestion_params still aren't capturing the category_attributes and address_attributes even when you don't just pass through state and pass through an object. Somehow it's not coming through as a permitted param.
        + Figure out how to get the category and address attributes passed into the suggestion_params. They are in the regular params but don't get include in the strong params for some reason. If you remove `require(:suggestion)` then you don't have an issue with creating a suggestion.
      + it works if i pass {suggestion: suggestionData}. not sure if that's the best way to solve the problem in the end, but works for now.
      [ ] figure out how to have a text field but also the list of categories
        [ ] use react-select for the autosuggest?
      [ ] fetch the list of categories and have the radio buttons feed off of that

  + Review
    [x] ReviewListContainer
    [x] ReviewList
    [/] Review (is this where the form goes?)
      [x] have the text wrap within the Card
    [/] ReviewNew (the form)
      [ ] rating element
      [x] send venue data with form
      [x] hook up form submit with API
      [/] handle errors - right now only using an error message, eventually want to have the form not clear out when you fail to submit properly
        [x] when there's an error don't update the ReviewList
        [ ] don't clear out the form, show what the inputs were
        [ ] have client-side validation errors?
      [x] fix submit button styling
      [ ] figure out how to trigger the venue rating update
    + Category
      [ ] CategoryContainer
        [ ] fetch list of categories from API
        [ ] figure out why the categories fetch isn't working properly
[ ] add a loading icon/screen for pages while API data is being fetched - need to fix this so that it actually displays (use componentWillUpdate?)
[ ] use snackbars for error/success messages in forms (https://material-ui.com/demos/snackbars/)
[ ] consider autocomplete for things: (https://material-ui.com/demos/autocomplete/)
[ ] ratings (https://www.npmjs.com/package/react-star-rating-component)  
https://www.npmjs.com/package/react-stars
[ ] make pages responsive. Cards start to overlap at different browser widths
[ ] add prop-types for the Material-UI stuff?
[x] set up routes in React w react-router (App.js)
[/] figure out where the props and state stuff goes
[/] start creating different pages for app https://reactjs.org/docs/thinking-in-react.html
  [x] Venue List - just a list of the venues as links
  [x] Venue Show - display the venue, reviews, and suggestions
    [x] Venue data
    [x] Review data
    [x] Review form
    [x] Suggestion data
    [x] Suggestion form
  [x] Homepage - static view
[/] Redux - need to start using Redux so that I can set up the links properly
  [x] create store
  [ ] actions
    [/] addReview
    [x] addSuggestion
    [/] updateSuggestion (when voting)
    [ ] updateVenue (rating)
    [x] fetchVenues
  [ ] reducers
    [/] venues
    [/] reviews
    [/] suggestions
[x] fix issue where if you load the /venues/:venueId page on its own and don't come from the /venues page, data doesn't load properly
[ ] Design
  [x] look at different websites for inspiration before choosing a framework
  [x] Material Design https://material.io/
  [x] https://github.com/armincifuentes/YDNAD (great resource)
  * [ ] Material UI https://material-ui.com/
    + look here for support and tutorials
    https://material.io/design/layout/responsive-layout-grid.html#
    https://material.io/design/layout/responsive-layout-grid.html#
  [x] Semantic UI https://react.semantic-ui.com/elements/button (has like buttons but doesn't use npm)
  [x] http://polaris.shopify.com/ - like a lot of the options, but not sure it's the right fit
    + like the filter options.
    + could also consider doing a modal for the forms?
    + the list formats aren't bad either
    + like the loading design for pages with text
    + alerts style is nice
    + like the design principles too
  [x] https://react-bootstrap.github.io/ - never really had any success working with bootstrap, but willing to try
    + like the form validations
    + think that it's nice and basic and the Polaris one might get too complicated? It also looks really similar to the bootstrap stuff, just styled slightly differently at times

having a loading indicator
when component mounts it'll call fetchVenues()
within fetchVenues() there will be a few actions
1) LOADING_VENUES which will cause the state to be {isLoading: true, venues: []}
2) FETCH_VENUES will send the request to the API and when it finishes it will update state to be {isLoading: false, venues: [venue data from API]}

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
