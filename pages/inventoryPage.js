import { Selector, t } from 'testcafe';

class InventoryPage{
    constructor(){
        this.inventoryContainer = Selector('#inventory_container');
        this.addCart = Selector('.btn_inventory').withText('ADD TO CART').nth(0);
        this.addCartShirt = Selector('.btn_inventory').withText('ADD TO CART').nth(2);
        this.addCartOnesie = Selector('.btn_inventory').withText('ADD TO CART').nth(3);
        this.cartBtn = Selector('.shopping_cart_link');
        this.backpack = Selector ('img[src="./img/sauce-backpack-1200x1500.jpg]');
        this.hamburguerMenu = Selector('.bm-burger-button');
        this.logoutBtn = Selector('#logout_sidebar_link');
        
    }
    async pageLoaded(){
        return this.inventoryContainer
    }
    async navigateToCart(){
        await t
        .click(this.cartBtn)
    }
    async addToCart(){
        await t
        .click(this.addCart)
        .click(this.cartBtn)
    }
    async addMultiple(){
        await t
        .click(this.addCartShirt)
        .click(this.addCartOnesie)
        .click(this.cartBtn)
    }
    async logout(){
        await t
        .click(this.hamburguerMenu)
        .click(this.logoutBtn)

    }

}

export default new InventoryPage();