## Nirmohi's Vention Test 


[Video Demo](https://youtu.be/UJzgwfHnyNg "Demo")

### Running the App 
- `git clone https://github.com/nirmohi0605/vention-test.git`
- `npm install && cd client && npm install` 
- `npm run dev` in the root project folder



### Notes 

- Stack used - React/Redux, MongoDB, Node/ Express and the app is only setup for development for this test.
- Server 
    - Ordinarily the keys file with the `mongoURI` would be added to `.gitignore`. Since the app does not have add/delete product functionality (yet), I pushed the keys to Github so the app can be reviewed with all the product data already in my MongoDB cluster. Images are stored in Cloudinary.
    - All IP addresses have been whitelisted in MongoDB Atlas, but in case the database refuses to connect for you, please do let me know.

- Client
    - A proxy has been setup for development so `concurrently` can run the front and back-end development servers, well, concurrently.


- If anything seems obviously wrong or off with the setup while running the app please let me know so I can push a fix. 
- Lastly - this was fun to build, thank you!