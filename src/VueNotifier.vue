<template>
<div v-if="show" transition="Notifier" class="Notifier"
    :class="{
        'Notifier--primary': type == 'primary',
        'Notifier--info': type == 'info',
        'Notifier--success': type == 'success',
        'Notifier--warning': type == 'warning',
        'Notifier--danger': type == 'danger',
    }"> {{ message }}
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
            type = type ? type : 'success';

            // Clean message
            message = typeof message == 'string' ? message : this.defaultMessages[ type ];

            this.$set( 'message', message );
            this.$set( 'type', type );

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
$brand-primary = darken( #428bca, 33.5% );
$brand-info = #5bc0de;
$brand-success = #5cb85c;
$brand-warning = #f0ad4e;
$brand-danger = #d9534f;
$responder-width = 60%;
$responder-padding = 6px 12px;
.Notifier
    width: $responder-width
    position:fixed
    z-index: 999999
    color: white

    padding: $responder-padding

    margin-left: -( $responder-width /2 )
    left: 50%

    &--primary
        background-color: $brand-primary
    &--info
        background-color: $brand-info
    &--success
        background-color: $brand-success
    &--warning
        background-color: $brand-warning
    &--danger
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
