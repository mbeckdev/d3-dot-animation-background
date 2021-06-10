# d3-dot-animation-background

An animated background using D3

## Directions

- reload the page to see new art made from D3 dots!

## Original Intent

Ah geez, I thought this would work, and maybe it can. Here's where I'm at:

- Trying to put multiple dots on the page with D3 library = done
- Trying to make dots move and put lines between them if dots are close,
  - wait, how do I make things move? Idea1: css transitions, idea2: use canvas
  - If I use transitions, I'll need to know:
    - All dot locations so I can draw lines between them
    - Lines can be little rotated rectangles
    - starting and end points of all circles and lines - could calculate them probably
    - It'll have to repeat the transition to make it look cool
    - Can I create a position at certain times? Sounds like a tick() that might be easier in canvas.

## D3? CSS? canvas?

- Wait, this d3 thing is nice for making circles, but I can see making the shapes in CSS.
- If I use D3 or CSS I can put this section in more than once, because canvas only is allowed once per page. I was thinking of using this as a header, but it might be sweet to use it more than once one a page.

## Project Status

- I'm going to try this in canvas in a new repo and get that working and maybe come back to CSS or D3 way of doing it.
- It's a shame that I named this with d3 in the title, (let that be a lesson to me for naming it like that) so I'm going to start a new repository.
- Enjoy this epic svg art that changes when you reload
