# Zizoo challenge

```Hello :)```

## Run project
```bash
npm install
npm start # starts dev server
npm run build # builds
```
## About this challenge;

#### How I started?
- I started this project using `create-react-app`.
- First, I get `Styleguide` from Zeplin and implemented. However, later I realized that I need color palette, mostly.
- Second, I created single `BoatCard` component and wrote `SCSS` as design requires.
- I created a mock data and created a `PropType` for it.
- After that I pick relatively complex parts and make functional components with them.
- And a lot of refactoring during this phase :)

#### What I assumed?
- My nearly all assumptions was about data, you can check in [`mock/data/boats.js`](src/mock/data/boats.js) comments.

#### What I completed?
- I created a BoatCard component for mobile and desktop.
- I
- I mostly followed design guide except desktop design of `price` part. I liked it better this way.

#### What I failed to do?
- I failed some namings because I am not familiar with boats :)

#### Which difficulties I faced?
- Not much except namings, and creating mock data.

#### Problems with design assets.
- Most of the design assets was missing fonts I guess. So `SVG`s is broken. I downloaded them from https://www.flaticon.com/ and edited them if it is necessary as design requires. 
- I had to used PNG images for `View Details` button for same reason.

#### What this project trying to show? and not?
- This project shows I am able to implement moderately complex layouts with react. 
- This project does not demonstrate an ideal, scalable project structure. Little taste of it, maybe.

#### I could done better!
- I could use `styled components` for better composition.
or
- I could use better `SCSS` variables and `mixins` for reduce code duplication.
- I like atomic components, If I had more time I could implement `Atomic design pattern`.

Thanks for your time.