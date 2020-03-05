import { Selector, t } from 'testcafe';

class CheckoutCompletePage{
    constructor(){
        this.checkoutComplete= Selector('#checkout_complete_container');
    }
    async checkoutCompletePageLoaded(){
        return this.checkoutComplete
    }

}
export default new CheckoutCompletePage();