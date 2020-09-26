# bryant-bookmarks-app

*****as of this push none of the user stories are working******
the app can render the starting screen
the app can render a screen where the user will be able to create a new bookmark
(there is a console log that shows that the data is posting).
There are functions to retrieve the bookmarks and delete bookmarks but they have not been implimented



********************* user story targets for reference *********************
As a user:

I can add bookmarks to my bookmark list. Bookmarks contain:

title
url link
description
rating (1-5)
I can see a list of my bookmarks when I first open the app

All bookmarks in the list default to a "condensed" view showing only title and rating
I can click on a bookmark to display the "detailed" view

Detailed view expands to additionally display description and a "Visit Site" link
I can remove bookmarks from my bookmark list

I receive appropriate feedback when I cannot submit a bookmark

Check all validations in the API documentation (e.g. title and url field required)
I can select from a dropdown (a <select> element) a "minimum rating" to filter the list by all bookmarks rated at or above the chosen selection
