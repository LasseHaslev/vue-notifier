<template>

    <h1>Vue notification</h1>
    <p>Click buttons below to check the funcitonality</p>

    <notifier :time="parseFloat( displayTime )"></notifier>
    <button @click="notify">Notify!</button>
    <br>
    <br>
    
    <input type="text" style="width: 250px;" v-model="customNotifierString">
    <button @click="notify( customNotifierString )">Notify with message!</button>

    <h3>Notification types</h3>
    <button @click="notifyPrimary">Primary</button>
    <button @click="notifyInfo">Info</button>
    <button @click="notifySuccess">Success</button>
    <button @click="notifyWarning">Warning</button>
    <button @click="notifyDanger">Danger</button>

    <h3>Notification time</h3>
    <input type="number" style="width: 250px;" v-model="displayTime">
    
</template>

<script>
import Notifier from './VueNotifier'
import { NotifierMixin, NotifierContainerMixin } from './VueNotifier'

export default {

    mixins: [ NotifierContainerMixin, NotifierMixin ],

    data() {
        return {
            displayTime: 4,
            customNotifierString: 'This is a custom text. So... Hello Vue!!!',
        }
    },

    ready() {
        var self = this;
        window.setTimeout( function() {
            self.notify( 'Yey! A non destracting notification for VueJS!' )
        }, 1000 );
    },

    components: {
        Notifier,
    },

}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
