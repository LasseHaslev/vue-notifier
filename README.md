# @lassehaslev/vue-notifier
> Notification plugin for vue

## Installation
Run ```npm install @lassehaslev/vue-notifier --save``` in your project folder

## Usage
The notify container watches for all ```notify``` events from children and shows a notification bar at top.
The container can also call ```notify``` on it self.
``` html
<template>

    <!-- Notify element -->
    <notifier></notifier>

    <button @click="notify">Notify me!</button>
    <button @click="notify( 'Custom message' )">Notify with custom message!</button>

    <!-- Notify with different types -->
    <h3>Notification types</h3>
    <button @click="notifyPrimary">Primary</button>
    <button @click="notifyInfo">Info</button>
    <button @click="notifySuccess">Success</button>
    <button @click="notifyWarning">Warning</button>
    <button @click="notifyDanger">Danger</button>

</template>

<script>
// The notifier object
import Notifier from '@lassehaslev/vue-notifier';

// This mixin watches for notification events and pass it on to the notifier element
import { NotifierContainerMixin } from '@lassehaslev/vue-notifier';

// This mixin adds notify functions to the element 
// { notify, notifyPrimary, notifySuccess, notifyInfo, notifyWarning, notifyDanger }
import { NotifierMixin } from '@lassehaslev/vue-notifier';

export default {

    mixins: [ NotifierContainerMixin, NotifierMixin ],

    components: {
        Notifier,
    }

}
</script>
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For more information see the [docs for vueify](https://github.com/vuejs/vueify).
