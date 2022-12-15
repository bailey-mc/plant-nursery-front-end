# Plant-Nursery-Front-End
## An app used to list different types of plants for sale.
- Backend hosted at https://ancient-lowlands-69118.herokuapp.com/
- Backend GitHub Repo https://github.com/texasmami/PLant-Nursery-Back-End
- Frontend hosted at https://sunshine-nursery.netlify.app/
- Frontend GitHub Repo https://github.com/texasmami/plant-nursery-front-end


## Technologies used:

- Bootstrap, React Router, React, Express, MongoDB, Heroku

## Sources:

- For the original react router nav link source here: `https://reacttraining.com/blog/react-router-v6-pre/`

  - `https://v5.reactrouter.com/web/guides/quick-start` is the original link but when you install React Router with, it installs the latest version of v6, so we had to change `Switch` to `Routes`.

  - To use: `npm install react-router-dom` and `import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"`

  - A `<Router>` must wraps around the entire JSX.

  - The `navigate()` function was used in `App.js`, `login.js` and `newuser.js` for the routes to `Log in/out, Creat a new user, and go to Home and About`.

  - React Router gives the illusion that it's multiple pages, but it's just a single page with different routes.

  - The `<Link to>` values in the `<Router>` was automatically displayed on the URL when the user clicks on the nav links.

  - The nav links bring you to the specified route without needing to refresh the page.


- Bootstrap to style the card and card body on the `show plants` page. 

- Bootstrap modal to prompt whether the user is sure about delete the listing. 

- Bootstrap modal for the `Filter` plants feature.

- For the background image fade effect here: `https://www.digitalocean.com/community/tutorials/how-to-change-a-css-background-images-opacity`


## Difficulties/Struggles:

- Emon had difficulties using React Router. Learning to read the documentation and realizing that the verson she installed was the newer version as opposed to the version in the documentation she was looking at.

- Deploying with netlify gave Bailey some difficulties. She had to read over the documentation multiple times to understand what build specifications she should use. 
    - Netlify also gave us it's fair share of failed builds. While annoying, Netlify does hold you accountable for keeping your code clean and making sure you use all of the variables, hooks, functions, etc in your code.

## User Stories:
- As a user, I want to land on a homepage that shows some inventory, has link a link to an about page, and allows me to filter the results I see.
- As a user, I want to be able to filter the plants that I see by different categories.
- As a user, when I am looking at a plant, I want to see relevant information about care instructions, price, and if it is in stock.
- As a shop owner, I want to be able to login to access edit capabilities.
- As a shop owner, I want to be able to add new items to inventory.
- As a shopw owner, I want to be able to edit items already posted.
- As a shop owner, I want to have the ability to delete items that we do not carry any more.
- As a shop owner, I want to have the ability to log out and view the changes I've made to my site as a casual browser would.