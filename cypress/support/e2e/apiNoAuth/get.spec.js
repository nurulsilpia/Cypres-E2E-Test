describe('Petstore API Inventory Testing', () => {
    it('get store inventory - GET', () => {
        cy.request('/store/inventory').as('getInventory');
        cy.get('@getInventory').then(inventory => {
            expect(inventory.status).to.equal(200);
        })
    })
})

describe('Find pet', () => {
    it('find pet by status - GET', () => {
        cy.request({
            method: 'GET',
            url: '/pet/findByStatus',
            qs: {
                status: 'available'
            }
        }).as('petByStatus');
        cy.get('@petByStatus').then(petByStatus => {
            expect(petByStatus.status).to.eq(200);
        });
    });

    // negative case
    it('find pet by invalid id', () => {
        cy.request({
          method: 'GET',
          url: '/pet/9223372036854742000',
          failOnStatusCode: false, // to prevent Cypress from throwing an error on non-2xx status code
        }).then((response) => {
          expect(response.status).to.eq(404),
          expect(response.body.message).to.eq('Pet not found')
        })
      })
})