import { Selector, t } from 'testcafe';

class CheckoutTwoPage{
    constructor(){
        this.checkoutPage = Selector('.subheader').withText('Checkout: Overview').nth(0);
        this.inventoryShirt= Selector('.inventory_item_name').withText('Sauce Labs Onesie').nth(0);
        this.inventoryOnesie= Selector('.inventory_item_name').withText('Sauce Labs Bolt T-Shirt').nth(0);
        this.finishBtn = Selector('.cart_button');
        this.checkoutCompletePa = Selector('#checkout_complete_container');
    
    }
    async checkoutTwoPageLoaded(){
        return this.checkoutPage
    }
    async checkProduct(){
        await t
        .expect(this.inventoryShirt).ok()
        .expect(this.inventoryOnesie).ok();
    }
    async finishCheckout(){
        await t
        .click(this.finishBtn);
    }
  
  

}

export default new CheckoutTwoPage();