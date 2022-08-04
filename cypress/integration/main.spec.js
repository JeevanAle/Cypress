import * as mainObj from '../pageObject/mainObj'


describe('log in',()=> {
    before(()=>
    {
        cy.visit('https://elearning.ekbana.net/login/index.php')
    })
    it ('',()=>{
        mainObj.mainObj()
    })
})