export default {

    events: {

        'Notifier::notify'( message, type ) {
            this.$broadcast( 'Notifier::notify', message, type );
        },

    }

}
