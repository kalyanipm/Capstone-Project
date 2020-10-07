define([
    'uiComponent',
    'Magento_Checkout/js/model/payment/renderer-list'
],
function (Component, rendererList) {
    'use strict';

    rendererList.push(
        {
            type: 'capstone_payment1',
            component: 'Capstone_Payment1/js/view/payment/method-renderer/payment1'
        }
    );

    /** Add view logic here if needed */
    return Component.extend({});
});