import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { ConnectWiseClient, ConfigurationError } from '../src/index.js'

describe('Deferred Configuration', () => {
  const mockConfig = {
    baseUrl: 'https://test.connectwise.com',
    auth: {
      username: 'company+publicKey',
      password: 'privateKey'
    },
    clientId: 'test-client-id'
  }

  describe('Client Initialization', () => {
    it('creates unconfigured client when no config provided', () => {
      const client = new ConnectWiseClient()
      expect(client.isConfigured()).toBe(false)
    })

    it('creates configured client when config provided', () => {
      const client = new ConnectWiseClient(mockConfig)
      expect(client.isConfigured()).toBe(true)
    })
  })

  describe('configure() method', () => {
    it('sets client to configured state', () => {
      const client = new ConnectWiseClient()
      expect(client.isConfigured()).toBe(false)

      client.configure(mockConfig)
      expect(client.isConfigured()).toBe(true)
    })

    it('can reconfigure an already configured client', () => {
      const client = new ConnectWiseClient(mockConfig)
      expect(client.isConfigured()).toBe(true)

      const newConfig = {
        ...mockConfig,
        baseUrl: 'https://new-instance.connectwise.com'
      }
      client.configure(newConfig)
      expect(client.isConfigured()).toBe(true)
    })
  })

  describe('ConfigurationError', () => {
    let client: ConnectWiseClient

    beforeEach(() => {
      client = new ConnectWiseClient()
    })

    it('throws ConfigurationError on list() without config', async () => {
      await expect(client.service.tickets.list()).rejects.toThrow(ConfigurationError)
    })

    it('throws ConfigurationError on get() without config', async () => {
      await expect(client.service.tickets.get(1)).rejects.toThrow(ConfigurationError)
    })

    it('throws ConfigurationError on create() without config', async () => {
      await expect(client.service.tickets.create({} as never)).rejects.toThrow(ConfigurationError)
    })

    it('throws ConfigurationError on update() without config', async () => {
      await expect(client.service.tickets.update(1, [])).rejects.toThrow(ConfigurationError)
    })

    it('throws ConfigurationError on delete() without config', async () => {
      await expect(client.service.tickets.delete(1)).rejects.toThrow(ConfigurationError)
    })

    it('throws ConfigurationError on count() without config', async () => {
      await expect(client.service.tickets.count()).rejects.toThrow(ConfigurationError)
    })

    it('error has correct name and message', async () => {
      try {
        await client.service.tickets.list()
        expect.fail('Should have thrown')
      } catch (error) {
        expect(error).toBeInstanceOf(ConfigurationError)
        expect((error as ConfigurationError).name).toBe('ConfigurationError')
        expect((error as ConfigurationError).message).toBe(
          'Client not configured. Call configure() before making API requests.'
        )
      }
    })
  })

  describe('Configured client', () => {
    let client: ConnectWiseClient
    let fetchMock: ReturnType<typeof vi.fn>

    beforeEach(() => {
      fetchMock = vi.fn().mockResolvedValue({
        ok: true,
        status: 200,
        text: () => Promise.resolve('[]')
      })
      vi.stubGlobal('fetch', fetchMock)

      client = new ConnectWiseClient()
      client.configure(mockConfig)
    })

    afterEach(() => {
      vi.unstubAllGlobals()
    })

    it('does not throw ConfigurationError after configure()', async () => {
      await expect(client.service.tickets.list()).resolves.not.toThrow()
      expect(fetchMock).toHaveBeenCalled()
    })

    it('makes request with correct authorization header', async () => {
      await client.service.tickets.list()

      const callArgs = fetchMock.mock.calls[0]
      const requestUrl = callArgs[0]
      const requestOptions = callArgs[1]

      expect(requestUrl).toContain('https://test.connectwise.com')
      expect(requestUrl).toContain('/v4_6_release/apis/3.0')
      expect(requestOptions.headers.Authorization).toMatch(/^Basic /)
      expect(requestOptions.headers.clientId).toBe('test-client-id')
    })
  })
})
