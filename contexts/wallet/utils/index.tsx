import * as crypto from "crypto"

const generateWalletHex = crypto.randomBytes(32).toString("hex")
