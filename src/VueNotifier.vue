<template>
<div v-if="show" transition="Responder" class="Responder"
    :class="{
        'Responder--primary': type == 'primary',
        'Responder--info': type == 'info',
        'Responder--success': type == 'success',
        'Responder--warning': type == 'warning',
        'Responder--danger': type == 'danger',
    }">
    <i class="fa" :class="{
        'fa-check' : type == 'primary',
        'fa-check' : type == 'success',
        'fa-info-circle' : type == 'info',
        'fa-exclamation-triangle' : type == 'warning',
        'fa-warning' : type == 'danger'
        }"></i> {{ message }}
</div>
<slot></slot>
</template>

<script>
export default {

    props: {

        'display-time': {

            type: Number,
            default: 4,

        },

    },

    data: function() {

        return {

            show: false,
            message: 'There is no response messages yet',
            type: 'success',

            defaultMessages: {
                primary: 'Primary',
                info: 'Info',
                success: 'Success',
                warning: 'Warning',
                danger: 'Danger',
            }

        }

    },

    ready: function() {
        var self = this;
        // self.showResponse();
        // window.setInterval( function() {
            // self.showResponse();
        // }, 5000 );

    },

    events: {

        'Notifier::notify': function( message, type ) {

            // Set the type
            type = type ? type : 'primary';

            // Clean message
            console.log( typeof message );
            message = typeof message == 'string' ? message : this.defaultMessages[ type ];

            console.log('responder::'+ type + ' Message: ' + message);

            this.$set( 'message', message );
            this.$set( 'type', 'danger' );

            this.showResponse();

        },

    },

    methods: {

        showResponse: function() {
            var self = this;

            this.$set( 'show', true );

            var timeout = window.setTimeout( function() {
                self.$set( 'show', false );
            }, this.displayTime*1000 );

        },

    },

}
</script>

<style lang="stylus">
$responder-width = 60%;
$responder-padding = 6px 12px;
.Responder
    width: $responder-width
    position:fixed
    z-index: 999999
    color: white

    padding: $responder-padding

    margin-left: -( $responder-width /2 )
    left: 50%

    &__primary
        background-color: $brand-primary
    &__info
        background-color: $brand-info
    &__success
        background-color: $brand-success
    &__warning
        background-color: $brand-warning
    &__danger
        background-color: $brand-danger

    &-transition
        /* @extend #responder; */
        /* opacity: 1; */
        transition: all .3s ease;
        top:0;

    &-enter, &-leave
        /* opacity: 0; */
        top: -40px;
</style>
