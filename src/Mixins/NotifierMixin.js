export default {

    methods: {

        notify( message, type ) {
            this.$dispatch( 'Notifier::notify', message, type );
        },

        /*
         * Primary
         */
        notifyPrimary( message ) {
            this.notify( message, 'primary' );
        },

        /*
         * Info
         */
        notifyInfo( message ) {
            this.notify( message, 'info' );
        },

        /*
         * Success
         */
        notifySuccess( message ) {
            this.notify( message, 'success' );
        },

        /*
         * Warning
         */
        notifyWarning( message ) {
            this.notify( message, 'warning' );
        },

        /*
         * Danger
         */
        notifyDanger( message ) {
            this.notify( message, 'danger' );
        },

    }

}
