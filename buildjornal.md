# Build Journal

- *24th June 2025*

- create `client` & `server` directories.

- in the `server` dir, create basic `package.json`

  ```bash
    npm init -y
  ```

- then install dependencies like `express`, `body-parser`, `nodemon`, `mongoose`, `cors`...

- move to client side and create vite app in place of create-react-app due to the deprecation

- install dependencies `axios`, `moment`, `redux`, `redux-thunk`, `react-file-base64`

- Verify that client app runs well.

- back to server side to create the routes folder and populate that with the post routes in `./server/routes/posts.js`

- create controllers folder to maintain proper structure in server side and populate it with logics for their respective routes

- create models folder to whip up the mongoose schema for project `// https://www.mongodb.com/cloud/atlas`

- verify that get route is functioning well on browser before moving on to frontend side to facilitate logic written in the server side
