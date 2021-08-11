describe ("Suite", function(){
    it("test1", function() {

        browser.get('http://nimbus-251.iaas.cgm.ag:8080/cgmg3/login.html');
        browser.sleep(5000);
        browser.manage().window().maximize();
        expect(browser.getCurrentUrl()).toBe('http://nimbus-251.iaas.cgm.ag:8080/cgmg3/login.html?redirect=true#/basShellSecurity/loginDialog/login/main/basShellSecurity/loginDialog/authentication/default');
        
    });
});