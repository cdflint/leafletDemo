#### Example site powered by node, leaflet, react, es6 and more cutting edge tech than I can list [HERE](https://cdflint.github.io/WiHD/#map)

###### Download and install [Node.js](https://nodejs.org/en/download/)

> Primarily node and npm are command line driven.

> On windows use cmd.exe on mac or linux use terminal.

> Once installed some helpful packages include:

> `express` and `nodemon`

> There are many more packages that can be found [HERE](https://www.npmjs.com/).

> A good introduction to node for beginners can be found [HERE](https://www.nodebeginner.org/).

###### Make an account at [GitHub](https://github.com/)

> a thorough tutorial on github [HERE](http://product.hubspot.com/blog/git-and-github-tutorial-for-beginners)

> git command line [cheat sheet](https://services.github.com/on-demand/downloads/github-git-cheat-sheet.pdf)

###### Text editor [Atom](https://atom.io/), [Sublime](https://www.sublimetext.com/), [Notepad++](https://notepad-plus-plus.org/), [Emacs](https://www.gnu.org/s/emacs/) ... and many more `pick one that your comfortable using`

> not sure what to use? ask a geek...the one to your left.

###### Finally the topic of the day `Leaflet`

> Leaflet is a lightweight web mapping application that is the core of what you will learn to use with this Demo.

> On leaflet's site they have simple tutorials [HERE](http://leafletjs.com/examples.html), but many more things can be done with their extensive [API](http://leafletjs.com/reference-1.2.0.html)

> Even the 400 pound gorilla of the GIS world `ESRI` has developed plugins for leaflet [HERE](https://esri.github.io/esri-leaflet/examples/)

> and can be installed with the npm package managing system also.

###### Basics

> What projection should I use?

###### Basemaps

> Leaflet can serve many tiled basemaps.

> A good resource for basemaps can be found [HERE](https://leaflet-extras.github.io/leaflet-providers/preview/).

> The leaflet-providers basemaps can serve most people but maybe you want to utilize a [Google basemap](http://bl.ocks.org/crofty/2197701).

> If you look hard enough you can find any basemap you could ever want.

###### Content

> While Leaflet and websites can serve alot of types of content.

> We will be working with `html`, `javascript`, `geojson` files.

> Like any website knowledge of `css` and `DOM` can be a game changer.

> Some tools for [advanced web application development](https://www.keycdn.com/blog/web-development-tools/)

###### Organization

> Properly using a Folder/File structure, naming convention and comments go a long way in web development.

> ```html
> <div>
>  <p> This is some html </p>
> </div>
> <!-- This is a comment in HTML -->
> ```

> ```javascript
> export default function() {
>  const = 'This is a Javascript variable type'
>  let = 'This is a Javascript variable type'
>  var = 'This is a Javascript variable type'
>  // This is a comment in Javascript
>  /*
>     This is a multi line JS comment
>  */
> }
> ```

> Sample project folder structure
> ```
> project
> │   README.md
> │   .nojekyll    
> │   index.html
> │
> └───public
> │   │   
> │   └───img
> |   |   |
> |   |   └─── some image files
> │   │   
> │   └───json
> |       |
> |       └─── some json files
> │   
> └───src
>     │   
>     └───css
>     |   |
>     |   └─── some style sheet files
>     │   
>     └───js
>     |   |
>     |   └─── your custom javascript files
>     │   
>     └───leaflet
>         |
>         └─── leaflet source code
> ```

###### Project/Content ideas

> [Elevation profile](http://mrmufflon.github.io/Leaflet.Elevation/)
>
> [Drawing plugin](https://github.com/Wildhoney/Leaflet.FreeDraw)
>
> [Time slider](http://dwilhelm89.github.io/LeafletSlider/)
>
> [Search query](https://github.com/stefanocudini/leaflet-search)
>
> [GeoJSON Selector](https://github.com/stefanocudini/leaflet-geojson-selector)
>
> [Sidebar popup](https://github.com/turbo87/leaflet-sidebar/)
>
> [Sidebar v2 tabbed version](https://github.com/turbo87/sidebar-v2/)
>
> [Screen print](https://github.com/rowanwins/leaflet-easyPrint)
>
> [Routing control](https://github.com/Turistforeningen/leaflet-routing)

###### Examples

> [Trip Risk Viewer](http://www.triprisk.com.au/)
>
> [Donut Holes in International Waters](http://donutholes.ch/)
>
> [Incarceration Trends](http://trends.vera.org/incarceration-rates?year=1970)
