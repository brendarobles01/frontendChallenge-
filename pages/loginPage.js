import { Selector, t } from 'testcafe';

class LoginPage{
    constructor(){
        this.userName = Selector('#user-name');
        this.pass = Selector('#password');
        this.submitBtn = Selector('input[value="LOGIN"]');
        this.errorBtn = Selector('.error-button');
        this.loginContainer= Selector('#login_button_container')
        
    }
    async login(email,pass){
        await t
            .typeText(this.userName, email)
            .typeText(this.pass, pass)
            .click(this.submitBtn);
    }
    async loginError(){
        return this.errorBtn
    }
    async loginPageLoaded(){
        return this.loginContainer
    }
    

}

export default new LoginPage();