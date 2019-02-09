# A (relatively) short explanation

###### To Start

1. you need to have [NodeJs](https://nodejs.org/en/download/) installed in your computer
2. open a `cmd` or `bash shell`. and go to the root folder of this project
3. run `npm i` _this needs to be done only the first time_
4. run `npm run start` _this will start the project locally on a dev server. You need to do that every time you want to develop something new_


###### To build
1. You need to have [NodeJs](https://nodejs.org/en/download/) installed on your computer. if you have done this previously you don't need to do it again
2. open a `cmd` or `bash shell`. and go to the root folder of this project
3. run `npm i` _this needs to be done only the first time. If you have done this previously you don't need to do it again_
4. run `npm run build` _it will create a /build folder with all the built assets_



###### File structure

```
/root
	/node_modules
    /public
    /build
    /src
    	/actions
        /reducers
        /store
        /icons
        /components
        	/component1
            	component1.js
                component1.css
        /pages
        	/page1
            	page1.js
                page1.css
        index.js
        index.css
```

The project was created with create-react-app cli tool. This is my go to way of starting a react project, since it makes initial setup very easy and fast.

The file structure is the on shown above. A short description of what each folder is there for follows:

`node_modules` i don't think this needs much explanation. It is folder containing all npm packages installed.

`public` this folder is a source artifact of cra (create-react-app). It is used by the build scripts and it doesn't need to be deployed to your server and has no special meaning after you build the project.

`build` this folder is produced by the build script of cra. The contents of this folder is what needs to be published on a server to have the app 'published'

`src` this is the most important folder. It contains all of the source code files of the project. In 99% of cases the contents of this folder is the only thing you will need to edit while developing

`src/actions` contains all actions definitions of the Redux store. I use a seperate file for each 'set' of seperate actions. In this current example project i only have a single file because the project is small enough that i did not need to split it further. However i chose to keep the sctructure as it would have been on a larger project so i can show the way i usually organise my react projects

`src/reduces` similarly to 'src/actions' this folder contains all the reducers of the Redux store. Again i keep a single file for each sub-set of reducers plus a rootReducer file that is responsible for composing all sub-reducers into one. Again this project is small and only has 1 sub-reducer but i chose to keep the sctructure.

`src/store` contains the Redux store configuration file

`src/icons` holds all icons and images that i use through the app.

`src/components` these are react components i use through the app. i usually create one of there whenever i need to re-use a component multiple times to avoid having the same or similar piece of code in multiple places. For example, i usually create components for \<Button\>. That way all the buttons in the app will look the same and behave the same without having  to type the same code again. This is a basic idea of OOP. In essence 'src/components' holds the building blocks of the whole app. For each component i have a folder that holds a .js and a .css file, as shown in the example above.

`src/pages` holds page components. Page components are different from simple 'components' because they are aware of the  routing state of the app. I usually have a page component per Route my app has and i tend not to re-use those the way i do with simpler building block components. Again, for each page i have a folder that contains a js and css file.


`src/index.js` entry point of the application

`src/index.css` contains more general css that i use multiple times across the app.
