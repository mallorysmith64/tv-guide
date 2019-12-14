# Tv Guide

Stay in and watch TV
This will use an API, and few pages to display what is currently showing.

Objectives
- Work with an API to display data
- Work with React and React Router

Requirements
- Use this API
- You will have to create an account to get a key, Feel free to use the address and phone number of campus to sign up with
- Use React Router to create the pages.

Explorer Mode:
- Create a home page that has:
 the list of all "Top-Rated" TV shows, returned from this API https://api.themoviedb.org/3/tv/top_rated?api_key=<<api_key>>&language=en-US&page=1
 this page should also highlight a random "Top-Rated" TV show at the top of the page
 
- Create a /tv/:showId page that shows all the details for a given show and the cast of the show. The cast and crew endpoint is https://api.themoviedb.org/3/tv/{tv_id}/credits?api_key=<<api_key>>&language=en-US

Adventure Mode:
- Add a page to view all the TV shows for a cast member. This page should show as much as you get from the API about this actor. HINT: Use the People section of the API for this
- Allow the user to add a rating for the TV show.
