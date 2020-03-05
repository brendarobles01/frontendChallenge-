import { Selector, t } from 'testcafe';

class CartPage{
    constructor(){
        this.cartPage = Selector('.cart_quantity_label')
        this.cartItem = Selector('.cart_item')
        this.checkoutBtn = Selector('.checkout_button')
    
    }
    async cartPageLoaded(){
        return this.cartPage
    }
    async cartProducts(){
        return this.cartItem
    }
    async checkout(){
        await t
         .click(this.checkoutBtn)
    }


}

export default new CartPage();