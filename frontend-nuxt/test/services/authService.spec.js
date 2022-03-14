import axios from 'axios'
import authService from '@/services/authService'

jest.mock('axios')

describe('authService.js', () => {
  let result
  let error

  beforeEach(() => {
    process.env.API_URL = 'apiUrl'
  })

  describe('passwordReset', () => {
    describe('when result is returned', () => {
      beforeEach(async () => {
        axios.post.mockResolvedValue({ data: { some: 'value' } })
        result = await authService.passwordReset(axios, {
          key: 'key',
          password: 'password'
        })
      })

      it('triggers axios.post', () => {
        expect(axios.post).toHaveBeenCalledWith(`apiUrl/user/password-reset`, {
          key: 'key',
          password: 'password'
        })
      })

      it('return expected value', () => {
        expect(result).toStrictEqual({ some: 'value' })
      })
    })

    describe('when throw exception', () => {
      beforeEach(async () => {
        axios.post.mockRejectedValue(new Error('something happened'))

        try {
          result = await authService.passwordReset(
            axios,
            'username',
            'password'
          )
        } catch (e) {
          error = e
        }
      })

      it('throws exception', () => {
        expect(error).toStrictEqual(new Error('something happened'))
      })
    })
  })

  describe('passwordResetRequest', () => {
    describe('when result is returned', () => {
      beforeEach(async () => {
        axios.post.mockResolvedValue({ data: { some: 'value' } })
        result = await authService.passwordResetRequest(axios, {
          email: 'my@email.com'
        })
      })

      it('triggers axios.post', () => {
        expect(axios.post).toHaveBeenCalledWith(
          `apiUrl/user/password-reset-request`,
          {
            email: 'my@email.com'
          }
        )
      })

      it('return expected value', () => {
        expect(result).toStrictEqual({ some: 'value' })
      })
    })

    describe('when throw exception', () => {
      beforeEach(async () => {
        axios.post.mockRejectedValue(new Error('something happened'))

        try {
          result = await authService.passwordResetRequest(axios, {
            email: 'my@email.com'
          })
        } catch (e) {
          error = e
        }
      })

      it('throws exception', () => {
        expect(error).toStrictEqual(new Error('something happened'))
      })
    })
  })

  describe('register', () => {
    describe('when result is returned', () => {
      beforeEach(async () => {
        axios.post.mockResolvedValue({ data: { some: 'value' } })
        result = await authService.register(axios, {
          username: 'username',
          email: 'my@email.com',
          password: '123456',
          firstName: 'Chris',
          lastName: 'Lee'
        })
      })

      it('triggers axios.post', () => {
        expect(axios.post).toHaveBeenCalledWith(`apiUrl/user/register`, {
          username: 'username',
          email: 'my@email.com',
          password: '123456',
          first_name: 'Chris',
          last_name: 'Lee'
        })
      })

      it('return expected value', () => {
        expect(result).toStrictEqual({ some: 'value' })
      })
    })

    describe('when throw exception', () => {
      beforeEach(async () => {
        axios.post.mockRejectedValue(new Error('something happened'))

        try {
          result = await authService.register(axios, {
            username: 'username',
            email: 'my@email.com',
            password: '123456',
            firstName: 'Chris',
            lastName: 'Lee'
          })
        } catch (e) {
          error = e
        }
      })

      it('throws exception', () => {
        expect(error).toStrictEqual(new Error('something happened'))
      })
    })
  })
})
