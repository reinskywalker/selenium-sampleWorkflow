require("chromedriver");

const swd = require("selenium-webdriver");
const opt = swd.Options;
const browser = new swd.Builder();
const tab = browser.forBrowser("chrome").build();

opt.add_argument("--headless")

let { username, password } = require("./uname.json");
let asterix = ""


let tabToOpen =
    tab.get("https://demo.opencart.com/admin/");
tabToOpen
    .then(function() {
        let findTimeOutP =
            tab.manage().setTimeouts({
                implicit: 10000,
            });
        return findTimeOutP;
    })
    .then(function() {

        let promiseUsernameBox =
            tab.findElement(swd.By.xpath("//input[@id='input-username']"));
        return promiseUsernameBox;
    })
    .then(function(usernameBox) {
        let promiseFillUsername =
            usernameBox.sendKeys(username);
        return promiseFillUsername;
    })
    .then(function() {
        console.log(
            "username entered succesfully : " + username
        );

        let promisePasswordBox =
            tab.findElement(swd.By.css("#input-password"));
        return promisePasswordBox;
    })
    .then(function(passwordBox) {

        let promiseFillPassword =
            passwordBox.sendKeys(password);
        return promiseFillPassword;
    })
    .then(function() {
        for (let i = 0; i < password.length; i += 1) {
            asterix += "*";
        }
        console.log(
            "password entered successfully : ", asterix
        );

        let promiseSignInBtn = tab.findElement(
            swd.By.className("btn btn-primary")
        );
        return promiseSignInBtn;
    })
    .then(function(signInBtn) {
        let promiseClickSignIn = signInBtn.click();
        return promiseClickSignIn;
    })
    .then(function() {
        console.log("signed in");
    })
    .catch(function(err) {
        console.log("Error ", err, " occurred!");
    });