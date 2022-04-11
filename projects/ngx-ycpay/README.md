# Installation

To install the last active version:

```bash
npm install ngx-ycpay@latest
```

# Notice
**This library is a reserve until the youcan teams create a library for angular**

1. This package is only a short module for integration youcanpay card in your angular

2. You need to import `https://youcanpay.com/js/ycpay.js` to your angular.json

3. This package required your smile before installation 😏

**If you dont know angular.json (im also dont know 😅 ) follow me with this steps**
1. go to your project
2. scroll down behind of package.json you will see angular.json  (if you don't know package.json this library is not recommended for you)
3. is not important step
4. open angular.json
5. projects -> project-name -> architect -> options -> scripts
6. oh wow we finish




## Using the library
1. Import the `NgxYcpayModule` into your application
2. Import the `NgxYcpayModule` into your application
3. Import the `NgxYcpayModule` into your application
4. Import the `NgxYcpayModule` into your application

Repetition for Accessibility Knowledge 🍪

![image](https://user-images.githubusercontent.com/30184753/162644378-a8dd0eaf-91f9-4935-b34d-8e4906d8e074.png)



```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import the library
import { NgxYcpayModule } from 'ngx-ycpay';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgxYcpayModule,
    LibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

Now go to your component and 🤙 call `<ngx-ycpay [yc-publicKey]="'publicKey'"></ngx-ycpay>`

other params not required:


| Name     | Default Value       |
| -------  | ------------------- |
| yc-form  | ycForm              |
| yc-lang  | en                  |
| yc-error | ycError             |
| yc-class | `empty`             |
| class    | yc-group            |


The ngx-ycpay has only one event i call him `Pay`  for more explination when user click pay the event will emit a instance of YCPay in (Pay)="" Event

// component.html
```xml
<ngx-ycpay [yc-publicKey]="'publicKey'" (Pay)="MyMethodForCreatToken($event)"></ngx-ycpay>
```

// component.ts
```typescript
MyMethodForCreatToken(ycPay){
ycPay.pay(tokenId)
      .then(successCallback)
      .catch(errorCallback);
}
```


## Donation

Lah yrheem lawalidin is enough 👌
