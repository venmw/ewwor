Hey there!

the error begins with the module "glob" or "glob-promise", i specified the details in the discord message itself, heres the error in detail.

```js
Microsoft Windows [Version 10.0.22635.3500]
(c) Microsoft Corporation. All rights reserved.

C:\Users\RaRaes\Desktop\bot shiet\on going\rn>node .
Error loading commands: TypeError: glob is not a function
    at C:\Users\RaRaes\Desktop\bot shiet\on going\rn\node_modules\glob-promise\lib\index.js:5:5
    at new Promise (<anonymous>)
    at promise (C:\Users\RaRaes\Desktop\bot shiet\on going\rn\node_modules\glob-promise\lib\index.js:4:10)
    at Util.loadCommands (C:\Users\RaRaes\Desktop\bot shiet\on going\rn\structures\Util.js:19:36)
    at valbound.start (C:\Users\RaRaes\Desktop\bot shiet\on going\rn\structures\valbound.js:38:20)
    at Object.<anonymous> (C:\Users\RaRaes\Desktop\bot shiet\on going\rn\index.js:4:5)
    at Module._compile (node:internal/modules/cjs/loader:1376:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1435:10)
    at Module.load (node:internal/modules/cjs/loader:1207:32)
    at Module._load (node:internal/modules/cjs/loader:1023:12)
Error loading events: TypeError: glob is not a function
    at C:\Users\RaRaes\Desktop\bot shiet\on going\rn\node_modules\glob-promise\lib\index.js:5:5
    at new Promise (<anonymous>)
    at promise (C:\Users\RaRaes\Desktop\bot shiet\on going\rn\node_modules\glob-promise\lib\index.js:4:10)
    at Util.loadEvents (C:\Users\RaRaes\Desktop\bot shiet\on going\rn\structures\Util.js:36:34)
    at valbound.start (C:\Users\RaRaes\Desktop\bot shiet\on going\rn\structures\valbound.js:39:20)
    at Object.<anonymous> (C:\Users\RaRaes\Desktop\bot shiet\on going\rn\index.js:4:5)
    at Module._compile (node:internal/modules/cjs/loader:1376:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1435:10)
    at Module.load (node:internal/modules/cjs/loader:1207:32)
    at Module._load (node:internal/modules/cjs/loader:1023:12)
Connected to MongoDB Successfully!
```
