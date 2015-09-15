# PhoneGap & React.js Starter Kit

Want to get up and running building a mobile app on the latest technology *fast*? You've come to the right place.

## The basics

Everything is all set up, except you need to do the following to prime the repo:

    git clone https://github.com/jmather/phonegap-react-starter-kit
    cd phonegap-react-starter-kit
    npm install
    npm run build-app
    open www/desktop.html
    
## Dev Process

If you run `./bin/watch-and-run.js`, you will start three processes to help your dev work:

1. Watchify on the JavaScript code to auto-rebuild your JS.
2. PostCSS in Watch mode for your CSS compiling.
3. Local Test Server, on port 3001 (or env variable PORT, if defined)

## Working with IOS

To initialize IOS, run:

    npm run init-ios
    
After that, to do a full rebuild, run:

    npm run build-ios
    
Or you can only update the .js file with:

    npm run update-ios
    
If you have Xcode open to the project, I made a helper that will update the .js file and then rebuild your project:

    npm run rebuild-ios
    
    
# Todos

Make update-ios copy css files as well
    