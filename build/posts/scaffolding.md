# Scaffolding
_noun_ - [ref:](https://en.wikipedia.org/wiki/Scaffolding) `a temporary structure for holding workers and materials during construction`

After a while of trying to ramble around learning front end and mainly react, I have decided to make a stab at it, I am taking the advantage of a mentorship program developed within the company I work for (Pager), to learn from one of our amazing front end engineers, and decided to learn how to scaffold react applications so I can start web projects by my own.

This blog is the second lesson for this learning path, the first one was simply using create-react-app with typescript to recreate [my homepage](https://david.roncancio.me).

The idea for this blog is to still use create-react-app but then change a bit the layout, to resemble a blog, then create a couple of components to reflect the list of posts and a post by its own, learn hooks to navigate between posts

I want to start documenting my advancement and learning through this blog, and decided to use markdown a technology to write, I am aware of dozens of markdown based blogs technologies around, I could even use notion, but since what I am chasing is to learn I decided to reinvent the wheel.

Initially this blog will have two articles, the way this should work is to host both the blog and the posts in github, the posts themselves will be hardcoded initially in the main component (App) and will use fetch to consume the raw markdown from github, will also use some external library to parse the markdown and convert to html, and will learn hooks to navigate and fetch the content.

Future versions of this blog will use [maybe next.js](https://nextjs.org/blog/markdown) to process the articles on runtime and generate the static content.
