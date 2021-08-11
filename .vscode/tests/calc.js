let homepage = require('../tests/homepage');

describe('democalc test', function(){
    it('addition test',function(){
        //browser.get('https://juliemr.github.io/protractor-demo/');
        homepage.get('https://juliemr.github.io/protractor-demo/');
        homepage.enterFirstNumber('4');
        homepage.enterSecondNumber('3');
        homepage.clickGo();
        homepage.verifyresult('7');
        browser.sleep(10000);




        //element(by.css('[ng-model="first"]')).sendKeys('5');
        //element(by.model('second')).sendKeys('3');
        //element(by.css('[ng-click="doAddition()"]')).click();
       // var result = element(by.cssContainingText('.ng-binding','8'));
       // expect(result.getText()).toEqual('8');
        
        


        //browser.sleep(10000);

    });

        it('addition test',function(){
            //browser.get('https://juliemr.github.io/protractor-demo/');
            homepage.get('https://juliemr.github.io/protractor-demo/');
            homepage.enterFirstNumber('4');
            homepage.enterSecondNumber('3');
            homepage.clickGo();
            homepage.verifyresult('8');
            
    
    
    
            //element(by.css('[ng-model="first"]')).sendKeys('5');
            //element(by.model('second')).sendKeys('3');
            //element(by.css('[ng-click="doAddition()"]')).click();
           // var result = element(by.cssContainingText('.ng-binding','8'));
           // expect(result.getText()).toEqual('8');
            
            
    
    
            browser.sleep(10000);
        
        
        
    });
});