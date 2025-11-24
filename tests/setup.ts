import { ConnectWiseClient } from '../src/index.js'

export const client = new ConnectWiseClient({
  baseUrl: process.env.CW_BASE_URL!,
  clientId: process.env.CW_CLIENT_ID!,
  auth: {
    username: process.env.CW_USERNAME!,
    password: process.env.CW_PASSWORD!,
  },
})
