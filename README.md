# Deviget Front-end code test

## Installation

clone the repository

`$ yarn install`
and then run!
`$ yarn dev`

alternatively, the working application can be found here:
https://deviget-fe-challenge-franco-tegaldi.vercel.app/

## Stack used
I used React and Redux (toolkit) as requested. For styling I used styled-components and for animations react-spring.
The desition to use redux toolkit was very straight forward, it is way faster to implement. Styled components is a personal preference and react spring is just one of the many animation libraries out there.

## Functionalities
I covered most of the requested functionalities, plus a few ones I thought were needed. At the bottom of this readme file you can find a list that I used as a guide as I was developing this site. 

# Incompletes
- I couldn't cover tests. To be honest they are hard to implement on NextJS and I was running out of time. Also, I'm not very proefficient in that aspect. There's still a long way to go for me.
- Animations: I managed to put animations on the sidebar and the main content. As for the cards, I couldn't figure out how to animate something that is being unmounted. Perhaps the problem relies on how I'm managing state or the way I implemented animations. I actually tried several libraries with no results and ended up wasting a lot of time on this step, so I left it as it is now.
- The video showed that the sidebar could be opened by swiping right on the side of the screen on mobile. I really don't know how to implement that. I know that the framer-motion library has a hook for listening to drags and swipes but again, I have already wasted a lot of time on animations by that time. For this reason, I had to add a button to open the sidebar.
- The "posted xxxx hours ago" label is not working properly. I honestly tried a lot but I couldn't figure out how to make it work. The function used to try to calculate and return a proper string is in the helpers folder.

# Things that I would do with more time/knowledge
- Definitely finish the incompletes.
- I would implement a better looking design. I wanted to use reddit's color palette. I don't know if I really managed to accomplish that.
- If I were to actually use the redux selector I wrote, I would've used lodash's throttle to prevent saving the state (and serializing it in the process) over and over as it is a very expensive calculation.
- For most of the styles I used relative units (rem and vh/vw). This is mostly because I didn't have an specific design to follow and I just calculated things on the go. As for media queries, I took for reference the viewports' widths that the chrome developer tools provide.
- Sidebar has a z-index to it so that it can go through the open sidebar button. It is a bad practice but a quick fix. Doing so made me add a z-index to the modal and its background too.
- Some buttons could've been translated to a single, reusable component button. They all present slight style changes but nothing too complex.
- I would've made a check for posts that are no longer on the top posts listing so that they can be replaced/updated. The re-fetch posts functionality kind of resolves this, but it's not the same.
- I would've liked to add a functionality to select how many posts you would request to reddit's api. That would make sense to implement with the pagination (that I neither did).
- Previous/next post reducer actions are written but not implemented.

## Caveats
- I had to use different components for my images. The jsx img tag does not support local images in the public folder; or at least not without a complex nextjs config. That's why you will see some images being rendered with the next/image component.
- Sometimes it happened to me that the reddit api would not give a valid response to the top posts endpoint (it can bring no posts at all), so in some commits you will see me use mocked data or a diferent url (for example /r/memes). The deployed site is running with the fetching pointing to the top posts url. If for some reason it fails to respond with a list of posts, I suggest pointing the request to the memes or another subreddit e.g https://reddit.com/r/memes/top.json?count=50. Let's hope it doesn't fail while you review it!

## Final comments
Thanks for taking the time to review my challenge! I honestly learned a lot while doing it and I also enjoyed its process. I know that there are a lot of things that are not there, others that could be implemented in a better way or making use of better practices. This is my current knowledge and whether it is enough or not for the challenge to be considered successful, I know I will continue to improve over time.
Again, thanks a lot.

-Franco

### Functionalities / TODO list

* [ ] Minnimum
  * [ ] Frontend
    * [x] Basic components
    * [x] Finish styling
    * [x] App state implementation
    * [x] App state preservation
    * [x] App state restoration
    * [x] Indicator of unread/read post
    * [x] Dismiss post button
    * [x] Dismiss All button
    * [x] Support for split layout
    * [x] Responsive design
    * [ ] Pagination support
    * [x] Go to full size picture
    * [ ] Saving pictures in picture gallery <--- still not sure about correct functionality
    * [x] ANIMATIONS 💫
    * [x] 404 ⛔️
  * [x] API
    * [x] Get top 50 posts
    * [x] Process raw data to be usable for the frontend
    * [x] 404 ⛔️
  * [x] Deploy to vercel △
  * [ ] Tests 🤖
  * [x] Cleanup 🧹

* [ ] Extra
  * [ ] Frontend
    * [x] Undo dismiss button
    * [x] Config menu
      * [x] Modal
      * [ ] Number of posts
      * [x] Restore posts
      * [x] Refetch posts
      * [ ] Fix sidebar position?
      * [ ] Reset sidebar position?
    * [ ] Previous/Next?
    * [x] Create redux selector for better performance (created but not implemented)
  * [ ] API
    * [ ] Number of posts
  * [ ] Cleanup 🧹