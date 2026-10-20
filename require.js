# Facebook SDK for JavaScript with RequireJS



In this tutorial, you'll learn how to incorporate the [Facebook SDK for JavaScript](https://developers.facebook.com/documentation/javascript/quickstart) with other JavaScript modules using RequireJS. Ordinarily, the JavaScript SDK isn't compatible with the [Asynchronous Module Definition](http://requirejs.org/docs/whyamd.html) (AMD) design pattern, so this tutorial covers writing a shim to provide the FB object created by the SDK.

This tutorial assumes you're familiar with RequireJS and JavaScript modules. [Find out more about RequireJS](http://requirejs.org).

## Configuration {#configuration}

Configure your other RequireJS scripts as normal, and add a new .js file for interaction with the Facebook SDK. This project assumes a directory structure like the one below:

```
- project/
   - index.html
   - scripts/
      - main.js
      - require.js
```

Add a new file for configuring and interacting with the SDK, as below:

```
- project/
    - index.html
    - scripts/
       - main.js
       - require.js
       - fb.js
```

You should be importing the `requirejs` script and declaring `main.js` as your data-main as follows:

```
<script data-main="scripts/main" src="scripts/require.js"></script>
```

## Adding a shim to the Facebook SDK

In your main project script, add a shim declaration to the `require.config`, as shown:

```
require.config({
  shim: {
    'facebook' : {
      exports: 'FB'
    }
  },
  paths: {
    'facebook': 'https://connect.facebook.net/en_US/sdk.js'
  }
})
require(['fb']);
```

This creates a `facebook` module, using the JavaScript SDK URL, and marks the `FB` object as the export for that module.

In your newly-created `fb.js`, you can instantiate and use the FB object as usual. Add the App ID for your app from the [App Dashboard](https://developers.facebook.com/apps).

You just need to wrap your code in a define block, passing the `facebook` shim module as a required dependency.

```
define(['facebook'], function(){
  FB.init({
    appId      : '{your-app-id}',
    version    : 'v26.0'
  });
  FB.getLoginStatus(function(response) {
    console.log(response);
  });
});
```

## See Also {#seealso}

* [Getting Started with the Facebook SDK for JavaScript](https://developers.facebook.com/documentation/javascript/quickstart)
* [JavaScript SDK Reference](https://developers.facebook.com/documentation/javascript)
