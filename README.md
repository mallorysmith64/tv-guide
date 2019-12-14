# Tv Guide

**Check this project out here:** https://tv-guide-mallorysmith64.netlify.com/  </br>

**TV Guide Features** </br>

**Homepage contains list of all top-rated TV shows** and returns them from this API </br>
 https://api.themoviedb.org/3/tv/top_rated?api_key=<<api_key>>&language=en-US&page=1 </br>
 
Highlights a **random top-rated TV show on the homepage** </br>
 
Created a second page, /tv/:showId, that **shows all the details for a given show and the cast of that show**. The cast and crew endpoint is https://api.themoviedb.org/3/tv/{tv_id}/credits?api_key=<<api_key>>&language=en-US </br>
