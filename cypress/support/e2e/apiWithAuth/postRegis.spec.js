// describe('API Testing', () => {
//     it('User registration', () => {
//       cy.request({
//         method: 'POST',
//         url: 'https://apingweb.com/api/register',
//         headers: {
//           Authorization: 'Basic MTIzNDU='
//         },
//         body: {
//           name: 'Clark Kent',
//           email: 'superman@gmail.com',
//           phone: '5555551234',
//           password: '123456',
//           password_confirmation: '123456'
//         }
//       }).then((response) => {
//         expect(response.status).to.eq(200)
//         expect(response.body).to.have.property('message', 'User registered successfully.')
//       })
//     })
//   })
  