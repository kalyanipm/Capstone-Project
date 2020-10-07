define([
    'jquery',
    'Magento_Payment/js/view/payment/cc-form'
],
function ($, Component) {
    'use strict';

    return Component.extend({
        defaults: {
            template: 'Capstone_Payment1/payment/payment1'
        },

        context: function() {
            return this;
        },

        getCode: function() {
            return 'capstone_payment1';
        },

        isActive: function() {
            return true;
        }
    });
}
);