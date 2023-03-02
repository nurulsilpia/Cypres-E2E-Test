describe('GET all user', () => {
    it('Get all uesr', () => {
      cy.request({
        method: 'GET',
        url: 'https://dummyapi.io/data/v1/user',
        headers: {
            'app-id': '62bcba8780a0bc81337dddc1'
        }
      }).then((response) => {
        expect(response.status).to.eq(200)
        cy.log(response.body);
        // expect(response.body).to.have.property('message', 'User registered successfully.')
      })
    })
  })
  