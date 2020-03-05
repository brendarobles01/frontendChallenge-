import LoginPage from '../pages/loginPage.js'
import InventoryPage from '../pages/inventoryPage.js'
import CartPage from '../pages/cartPage.js'
import CheckoutPage from '../pages/checkoutPage.js'
import CheckoutTwoPage from '../pages/checkoutTwoPage.js'
import CheckoutCompletePage from '../pages/checkoutCompletePage.js'

const EMAIL_STANDAR = 'standard_user'
const EMAIL_LOCKED = 'locked_out_user'
const PASS = 'secret_sauce'
const NAME = 'Brenda'
const LASTNAME = 'Robles'
const CODE = '44333'

fixture`Challaenge framework`
    .page`https://www.saucedemo.com/`;


test('Login with an invialid user', async t => {
        
        await LoginPage.login(EMAIL_LOCKED, PASS);
        await t.expect(await LoginPage.loginError()).ok();
});
test('Login with a valid user', async t => {
    await LoginPage.login(EMAIL_STANDAR, PASS);
    await t.expect(await InventoryPage.pageLoaded()).ok();
});
test
    .page`https://www.saucedemo.com/inventory.html`
    ('Navigate to the shopping cart', async t => {
    await InventoryPage.navigateToCart();
    await t.expect((await CartPage.cartPageLoaded()).exists).ok();
});
test
    .page`https://www.saucedemo.com/inventory.html`
    ('Add a single item to the shopping cart', async t => {
    await InventoryPage.addToCart();
    await t.expect((await CartPage.cartProducts()).exists).ok();
});
test
    .page`https://www.saucedemo.com/inventory.html`
    ('Add multiple items to the shopping cart', async t => {
    await InventoryPage.addMultiple();
    await t.expect((await CartPage.cartProducts()).exists).ok();
    await CartPage.checkout()
    await t.expect((await CheckoutPage.checkoutPageLoaded()).exists).ok();
});
test
    .page`https://www.saucedemo.com/checkout-step-one.html`
    ('Continue with missing mail information', async t => {
    await CheckoutPage.submitCheckout()
    await t.expect((await CheckoutPage.errorData()).exists).ok();
});
test
    .page`https://www.saucedemo.com/checkout-step-one.html`
    ('Fill user’s information', async t => {
    await CheckoutPage.fillDataUser(NAME,LASTNAME,CODE);
    await CheckoutPage.submitCheckout();
    await CheckoutTwoPage.checkProduct();
});

test
    .page`https://www.saucedemo.com/checkout-step-two.html`
    ('Final order items', async t => {
    await CheckoutTwoPage.checkProduct();
    await CheckoutTwoPage.finishCheckout();
});

test
    .page`https://www.saucedemo.com/checkout-complete.html`
    ('Complete a purchase', async t => {
    await t.expect((await CheckoutCompletePage.checkoutCompletePageLoaded()).exists).ok();

});
test
    .page`https://www.saucedemo.com/checkout-complete.html`
    ('Logout', async t => {
    await InventoryPage.logout();
    await t.expect((await LoginPage.loginPageLoaded()).exists).ok();

});





