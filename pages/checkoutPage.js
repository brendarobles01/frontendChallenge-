import { Selector, t } from 'testcafe';

class CheckoutPage{
    constructor(){
        this.checkoutPage = Selector('.subheader').withText('Checkout: Your Information').nth(0);
        this.firstName = Selector('#first-name');
        this.lastName = Selector('#last-name');
        this.postalCode = Selector('#postal-code');
        this.submit = Selector('input[type="submit"]');
        this.errorIcon = Selector('.error-button');
    }
    async checkoutPageLoaded(){
        return this.checkoutPage
    }
    async fillDataUser(name,lastname,code){
        await t
        .typeText(this.firstName,name)
        .typeText(this.lastName,lastname)
        .typeText(this.postalCode,code)
    }
    async submitCheckout(){
        await t
        .click(this.submit)
    }
    async errorData(){
        return this.errorIcon
    }

}

export default new CheckoutPage();