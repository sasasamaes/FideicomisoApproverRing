describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://example.cypress.io");
  });
});
describe("Homepage", () => {
  beforeEach(() => {
    cy.visit("/");  // Visit your app's root URL
  });

  it("should load successfully", () => {
    cy.get("h1").should("be.visible");
    // Add more meaningful assertions
  });

  // Add more test cases for homepage functionality
});