class locators {
    //Login page locators
    static userNameFieldLocator = "input#username"
    static passwordFieldLocator = "input#password"
    static loginButtonLocator = "button.radius"
    static loginInvalidUserErrorTextLocator = "#flash"

    //Dynamic loading page locators 
    static startButtonLocator = "text=Start"
    static helloWorldLocator = "#finish h4"

    //File upload page locators 
    static chooseFileButtonLocator = "#file-upload"
    static uploadFileButtonLocator = "#file-submit"
    static uploadFileSuccessMsgLocator = "h3"

} module.exports = { locators };