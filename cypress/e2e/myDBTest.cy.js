///<reference types="cypress"/>
describe("data base",()=>{
it("Testing DB",()=>{
cy.task

   ( "queryDb", "select * from ankurdb.employee;").then(res => {
    var rec=res
    const results=Object.values(rec[0])
    cy.log(results[0])
    cy.log(results[1])
  });
})
})