<template>

    <h1>Vue notification</h1>
    <p>Click buttons below to check the funcitonality</p>

    <notifier></notifier>

    <button @click="notify">Notify!</button>
    <button @click="notify( 'Custom message' )">Notify with message!</button>

    <br>
    <h3>Notification types</h3>
    <button @click="notifyPrimary">Primary</button>
    <button @click="notifyInfo">Info</button>
    <button @click="notifySuccess">Success</button>
    <button @click="notifyWarning">Warning</button>
    <button @click="notifyDanger">Danger</button>
    
</template>

<script>
import Notifier from './VueNotifier.vue'
import NotifyContainerMixin from './Mixins/ContainerMixin'
import NotifierMixin from './Mixins/NotifierMixin'
export default {

    mixins: [ NotifyContainerMixin, NotifierMixin ],

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
