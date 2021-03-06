
![OpenSea.js Logo](https://storage.googleapis.com/opensea-static/opensea-js-logo.png "OpenSea.js Logo")

OpenSea.js
----------

[![https://badges.frapsoft.com/os/mit/mit.svg?v=102](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](https://opensource.org/licenses/MIT)

A JavaScript library for crypto-native ecommerce: buying, selling, and bidding on any cryptogood. [GitHub](https://github.com/ProjectOpenSea/opensea-js) | [npm](https://www.npmjs.com/package/opensea-js)

### Synopsis

This is the JavaScript SDK for [OpenSea](https://opensea.io), the largest marketplace for crypto collectibles. It allows developers to access the official orderbook, filter it, create buy orders (offers), create sell orders (auctions), and fulfill orders to complete trades, programmatically.

For the first time, you can build a **cryptocommerce dapp**.

You get started by instantiating your own seaport. Then you can create orders off-chain or fulfill orders on-chain, and listen to events (like `ApproveAllAssets` or `WrapEth`) in the process.

Happy seafaring! ⛵️

### Installation

In your project, run:

```bash
npm install --save opensea-js
```

Install [web3](https://github.com/ethereum/web3.js) too if you haven't already.

### Getting Started

To get started, create a new OpenSeaJS client, called an OpenSeaPort 🚢, using your Web3 provider:

```JavaScript
import * as Web3 from 'web3'
import { OpenSeaPort, Network } from 'opensea-js'

const provider = new Web3.providers.HttpProvider('https://mainnet.infura.io')

const seaport = new OpenSeaPort(provider, {
  networkName: Network.Main
})
```

Then, you can do this to make an offer on an asset:

```JavaScript
// An expirationTime of 0 means it will never expire
const offer = await seaport.createBuyOrder({ tokenId, tokenAddress, accountAddress, amountInEth, expirationTime: 0 })
```

To retrieve a list of offers and auction on an asset, you can use an instance of the `OpenSeaAPI` exposed on the client:

```JavaScript
import { OrderSide } from 'opensea-js/types'

// Get offers
const { orders, count } = await seaport.api.getOrders({
  tokenAddress, tokenId,
  side: OrderSide.Buy // == 0
})

// Get page 2 of all auctions
const { orders, count } = await seaport.api.getOrders({
  tokenAddress, tokenId,
  side: OrderSide.Sell // == 1
}, 2)
```

### Learning More

Detailed documentation is coming soon on [docs.opensea.io](https://docs.opensea.io).

In the meantime, visit the auto-generated documentation [here](https://projectopensea.github.io/opensea-js/), or contact the OpenSea devs for help! They're available every day on [Discord](https://discord.gg/XjwWYgU) in the `#developers` channel.

### Development Information

#### Setup

[Node >= v8.11.2](https://nodejs.org/en/) required.

Before any development, install the required NPM dependencies:

```bash
npm install
```

#### Build

Then, lint and build the library into the `lib` directory:

```bash
npm run build
```

Or run the barebones tests:

```bash
npm test
```

#### Generate Documentation

Generate html docs, also available for browsing [here](https://projectopensea.github.io/opensea-js/):

```bash
npm run docsHtml
```

Or generate markdown docs available for browsing on git repos:

```bash
npm run docsMarkdown
```

Or generate both:

```bash
npm run docs
```

#### Contributing

Contributions welcome! Please use GitHub issues for suggestions/concerns - if you prefer to express your intentions in code, feel free to submit a pull request.

## Index

### Enumerations

* [EventType](enums/eventtype.md)
* [FeeMethod](enums/feemethod.md)
* [OrderSide](enums/orderside.md)

### Classes

* [OpenSeaAPI](classes/openseaapi.md)
* [OpenSeaPort](classes/openseaport.md)

### Interfaces

* [EventData](interfaces/eventdata.md)
* [OpenSeaAPIConfig](interfaces/openseaapiconfig.md)
* [OpenSeaAccount](interfaces/openseaaccount.md)
* [OpenSeaAsset](interfaces/openseaasset.md)
* [Order](interfaces/order.md)
* [OrderJSON](interfaces/orderjson.md)
* [OrderbookResponse](interfaces/orderbookresponse.md)
* [PartialAbiDefinition](interfaces/partialabidefinition.md)
* [UnhashedOrder](interfaces/unhashedorder.md)
* [UnsignedOrder](interfaces/unsignedorder.md)
* [WyvernAsset](interfaces/wyvernasset.md)

### Type aliases

* [PartialReadonlyContractAbi](#partialreadonlycontractabi)
* [TxnCallback](#txncallback)
* [Web3Callback](#web3callback)
* [Web3RPCCallback](#web3rpccallback)

### Variables

* [API_BASE_MAINNET](#api_base_mainnet)
* [API_BASE_RINKEBY](#api_base_rinkeby)
* [API_PATH](#api_path)
* [API_VERSION](#api_version)
* [CanonicalWETH](#canonicalweth)
* [ERC20](#erc20)
* [ERC721](#erc721)
* [INVERSE_BASIS_POINT](#inverse_basis_point)
* [NULL_BLOCK_HASH](#null_block_hash)
* [ORDERBOOK_PATH](#orderbook_path)
* [ORDERBOOK_VERSION](#orderbook_version)
* [feeRecipient](#feerecipient)
* [txCallbacks](#txcallbacks)

### Functions

* [assetFromJSON](#assetfromjson)
* [confirmTransaction](#confirmtransaction)
* [estimateCurrentPrice](#estimatecurrentprice)
* [event](#event)
* [findAsset](#findasset)
* [getMethod](#getmethod)
* [getWyvernAsset](#getwyvernasset)
* [handleApiErrors](#handleapierrors)
* [makeBigNumber](#makebignumber)
* [orderFromJSON](#orderfromjson)
* [orderFromJSONv0](#orderfromjsonv0)
* [orderToJSON](#ordertojson)
* [parseSignatureHex](#parsesignaturehex)
* [personalSignAsync](#personalsignasync)
* [promisify](#promisify)
* [sendRawTransaction](#sendrawtransaction)
* [track](#track)

### Object literals

* [DECENTRALAND_AUCTION_CONFIG](#decentraland_auction_config)

---

## Type aliases

<a id="partialreadonlycontractabi"></a>

###  PartialReadonlyContractAbi

**ΤPartialReadonlyContractAbi**: *`Array`<`Readonly`<[PartialAbiDefinition](interfaces/partialabidefinition.md)>>*

*Defined in [types.ts:227](https://github.com/ProjectOpenSea/opensea-js/blob/b2e704f/src/types.ts#L227)*

___
<a id="txncallback"></a>

###  TxnCallback

**ΤTxnCallback**: *`function`*

*Defined in [types.ts:214](https://github.com/ProjectOpenSea/opensea-js/blob/b2e704f/src/types.ts#L214)*

#### Type declaration
▸(result: *`boolean`*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| result | `boolean` |

**Returns:** `void`

___
<a id="web3callback"></a>

###  Web3Callback

**ΤWeb3Callback**: *`function`*

*Defined in [types.ts:212](https://github.com/ProjectOpenSea/opensea-js/blob/b2e704f/src/types.ts#L212)*

Types related to Web3

#### Type declaration
▸(err: * `Error` &#124; `null`*, result: *`T`*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| err |  `Error` &#124; `null`|
| result | `T` |

**Returns:** `void`

___
<a id="web3rpccallback"></a>

###  Web3RPCCallback

**ΤWeb3RPCCallback**: *[Web3Callback](#web3callback)<`JSONRPCResponsePayload`>*

*Defined in [types.ts:213](https://github.com/ProjectOpenSea/opensea-js/blob/b2e704f/src/types.ts#L213)*

___

## Variables

<a id="api_base_mainnet"></a>

### `<Const>` API_BASE_MAINNET

**● API_BASE_MAINNET**: *"https://api.opensea.io"* = "https://api.opensea.io"

*Defined in [api.ts:9](https://github.com/ProjectOpenSea/opensea-js/blob/b2e704f/src/api.ts#L9)*

___
<a id="api_base_rinkeby"></a>

### `<Const>` API_BASE_RINKEBY

**● API_BASE_RINKEBY**: *"https://rinkeby-api.opensea.io"* = "https://rinkeby-api.opensea.io"

*Defined in [api.ts:10](https://github.com/ProjectOpenSea/opensea-js/blob/b2e704f/src/api.ts#L10)*

___
<a id="api_path"></a>

### `<Const>` API_PATH

**● API_PATH**: *`string`* =  `/api/v${ORDERBOOK_VERSION}`

*Defined in [api.ts:12](https://github.com/ProjectOpenSea/opensea-js/blob/b2e704f/src/api.ts#L12)*

___
<a id="api_version"></a>

### `<Const>` API_VERSION

**● API_VERSION**: *`number`* = 1

*Defined in [api.ts:7](https://github.com/ProjectOpenSea/opensea-js/blob/b2e704f/src/api.ts#L7)*

___
<a id="canonicalweth"></a>

### `<Const>` CanonicalWETH

**● CanonicalWETH**: *[PartialReadonlyContractAbi](#partialreadonlycontractabi)* =  [{'constant': true, 'inputs': [], 'name': 'name', 'outputs': [{'name': '', 'type': 'string'}], 'payable': false, 'stateMutability': 'view', 'type': 'function'}, {'constant': false, 'inputs': [{'name': 'guy', 'type': 'address'}, {'name': 'wad', 'type': 'uint256'}], 'name': 'approve', 'outputs': [{'name': '', 'type': 'bool'}], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function'}, {'constant': true, 'inputs': [], 'name': 'totalSupply', 'outputs': [{'name': '', 'type': 'uint256'}], 'payable': false, 'stateMutability': 'view', 'type': 'function'}, {'constant': false, 'inputs': [{'name': 'src', 'type': 'address'}, {'name': 'dst', 'type': 'address'}, {'name': 'wad', 'type': 'uint256'}], 'name': 'transferFrom', 'outputs': [{'name': '', 'type': 'bool'}], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function'}, {'constant': false, 'inputs': [{'name': 'wad', 'type': 'uint256'}], 'name': 'withdraw', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function'}, {'constant': true, 'inputs': [], 'name': 'decimals', 'outputs': [{'name': '', 'type': 'uint8'}], 'payable': false, 'stateMutability': 'view', 'type': 'function'}, {'constant': true, 'inputs': [{'name': '', 'type': 'address'}], 'name': 'balanceOf', 'outputs': [{'name': '', 'type': 'uint256'}], 'payable': false, 'stateMutability': 'view', 'type': 'function'}, {'constant': true, 'inputs': [], 'name': 'symbol', 'outputs': [{'name': '', 'type': 'string'}], 'payable': false, 'stateMutability': 'view', 'type': 'function'}, {'constant': false, 'inputs': [{'name': 'dst', 'type': 'address'}, {'name': 'wad', 'type': 'uint256'}], 'name': 'transfer', 'outputs': [{'name': '', 'type': 'bool'}], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function'}, {'constant': false, 'inputs': [], 'name': 'deposit', 'outputs': [], 'payable': true, 'stateMutability': 'payable', 'type': 'function'}, {'constant': true, 'inputs': [{'name': '', 'type': 'address'}, {'name': '', 'type': 'address'}], 'name': 'allowance', 'outputs': [{'name': '', 'type': 'uint256'}], 'payable': false, 'stateMutability': 'view', 'type': 'function'}, {'payable': true, 'stateMutability': 'payable', 'type': 'fallback'}, {'anonymous': false, 'inputs': [{'indexed': true, 'name': 'src', 'type': 'address'}, {'indexed': true, 'name': 'guy', 'type': 'address'}, {'indexed': false, 'name': 'wad', 'type': 'uint256'}], 'name': 'Approval', 'type': 'event'}, {'anonymous': false, 'inputs': [{'indexed': true, 'name': 'src', 'type': 'address'}, {'indexed': true, 'name': 'dst', 'type': 'address'}, {'indexed': false, 'name': 'wad', 'type': 'uint256'}], 'name': 'Transfer', 'type': 'event'}, {'anonymous': false, 'inputs': [{'indexed': true, 'name': 'dst', 'type': 'address'}, {'indexed': false, 'name': 'wad', 'type': 'uint256'}], 'name': 'Deposit', 'type': 'event'}, {'anonymous': false, 'inputs': [{'indexed': true, 'name': 'src', 'type': 'address'}, {'indexed': false, 'name': 'wad', 'type': 'uint256'}], 'name': 'Withdrawal', 'type': 'event'}]

*Defined in [abi/CanonicalWETH.ts:3](https://github.com/ProjectOpenSea/opensea-js/blob/b2e704f/src/abi/CanonicalWETH.ts#L3)*

___
<a id="erc20"></a>

### `<Const>` ERC20

**● ERC20**: *[PartialReadonlyContractAbi](#partialreadonlycontractabi)* =  [{'constant': true, 'inputs': [], 'name': 'name', 'outputs': [{'name': '', 'type': 'string'}], 'payable': false, 'type': 'function'}, {'constant': false, 'inputs': [{'name': '_spender', 'type': 'address'}, {'name': '_value', 'type': 'uint256'}], 'name': 'approve', 'outputs': [{'name': 'success', 'type': 'bool'}], 'payable': false, 'type': 'function'}, {'constant': true, 'inputs': [], 'name': 'totalSupply', 'outputs': [{'name': '', 'type': 'uint256'}], 'payable': false, 'type': 'function'}, {'constant': false, 'inputs': [{'name': '_from', 'type': 'address'}, {'name': '_to', 'type': 'address'}, {'name': '_value', 'type': 'uint256'}], 'name': 'transferFrom', 'outputs': [{'name': 'success', 'type': 'bool'}], 'payable': false, 'type': 'function'}, {'constant': true, 'inputs': [], 'name': 'decimals', 'outputs': [{'name': '', 'type': 'uint8'}], 'payable': false, 'type': 'function'}, {'constant': true, 'inputs': [], 'name': 'version', 'outputs': [{'name': '', 'type': 'string'}], 'payable': false, 'type': 'function'}, {'constant': true, 'inputs': [{'name': '_owner', 'type': 'address'}], 'name': 'balanceOf', 'outputs': [{'name': 'balance', 'type': 'uint256'}], 'payable': false, 'type': 'function'}, {'constant': true, 'inputs': [], 'name': 'symbol', 'outputs': [{'name': '', 'type': 'string'}], 'payable': false, 'type': 'function'}, {'constant': false, 'inputs': [{'name': '_to', 'type': 'address'}, {'name': '_value', 'type': 'uint256'}], 'name': 'transfer', 'outputs': [{'name': 'success', 'type': 'bool'}], 'payable': false, 'type': 'function'}, {'constant': false, 'inputs': [{'name': '_spender', 'type': 'address'}, {'name': '_value', 'type': 'uint256'}, {'name': '_extraData', 'type': 'bytes'}], 'name': 'approveAndCall', 'outputs': [{'name': 'success', 'type': 'bool'}], 'payable': false, 'type': 'function'}, {'constant': true, 'inputs': [{'name': '_owner', 'type': 'address'}, {'name': '_spender', 'type': 'address'}], 'name': 'allowance', 'outputs': [{'name': 'remaining', 'type': 'uint256'}], 'payable': false, 'type': 'function'}, {'inputs': [{'name': '_initialAmount', 'type': 'uint256'}, {'name': '_tokenName', 'type': 'string'}, {'name': '_decimalUnits', 'type': 'uint8'}, {'name': '_tokenSymbol', 'type': 'string'}], 'type': 'constructor'}, {'payable': false, 'type': 'fallback'}, {'anonymous': false, 'inputs': [{'indexed': true, 'name': '_from', 'type': 'address'}, {'indexed': true, 'name': '_to', 'type': 'address'}, {'indexed': false, 'name': '_value', 'type': 'uint256'}], 'name': 'Transfer', 'type': 'event'}, {'anonymous': false, 'inputs': [{'indexed': true, 'name': '_owner', 'type': 'address'}, {'indexed': true, 'name': '_spender', 'type': 'address'}, {'indexed': false, 'name': '_value', 'type': 'uint256'}], 'name': 'Approval', 'type': 'event'}]

*Defined in [abi/ERC20.ts:3](https://github.com/ProjectOpenSea/opensea-js/blob/b2e704f/src/abi/ERC20.ts#L3)*

___
<a id="erc721"></a>

### `<Const>` ERC721

**● ERC721**: *[PartialReadonlyContractAbi](#partialreadonlycontractabi)* =  [
  {
    'constant': true,
    'inputs': [],
    'name': 'name',
    'outputs': [
      {
        'name': '',
        'type': 'string',
      },
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function',
  },
  {
    'constant': true,
    'inputs': [
        {
          'name': '',
          'type': 'uint256',
        },
    ],
    'name': 'kittyIndexToApproved',
    'outputs': [
        {
          'name': '',
          'type': 'address',
        },
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function',
  },
  {
    'constant': true,
    'inputs': [
        {
          'name': '',
          'type': 'address',
        },
        {
          'name': '',
          'type': 'uint256',
        },
    ],
    'name': 'allowed',
    'outputs': [
        {
          'name': '',
          'type': 'address',
        },
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function',
  },
  {
    'constant': true,
    'inputs': [
      {
        'name': '_tokenId',
        'type': 'uint256',
      },
    ],
    'name': 'getApproved',
    'outputs': [
      {
        'name': '',
        'type': 'address',
      },
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function',
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': '_to',
        'type': 'address',
      },
      {
        'name': '_tokenId',
        'type': 'uint256',
      },
    ],
    'name': 'approve',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function',
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'totalSupply',
    'outputs': [
      {
        'name': '',
        'type': 'uint256',
      },
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function',
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': '_from',
        'type': 'address',
      },
      {
        'name': '_to',
        'type': 'address',
      },
      {
        'name': '_tokenId',
        'type': 'uint256',
      },
    ],
    'name': 'transferFrom',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function',
  },
  {
    'constant': true,
    'inputs': [
      {
        'name': '_owner',
        'type': 'address',
      },
      {
        'name': '_index',
        'type': 'uint256',
      },
    ],
    'name': 'tokenOfOwnerByIndex',
    'outputs': [
      {
        'name': '',
        'type': 'uint256',
      },
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function',
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': '_from',
        'type': 'address',
      },
      {
        'name': '_to',
        'type': 'address',
      },
      {
        'name': '_tokenId',
        'type': 'uint256',
      },
    ],
    'name': 'safeTransferFrom',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function',
  },
  {
    'constant': true,
    'inputs': [
      {
        'name': '_tokenId',
        'type': 'uint256',
      },
    ],
    'name': 'exists',
    'outputs': [
      {
        'name': '',
        'type': 'bool',
      },
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function',
  },
  {
    'constant': true,
    'inputs': [
      {
        'name': '_index',
        'type': 'uint256',
      },
    ],
    'name': 'tokenByIndex',
    'outputs': [
      {
        'name': '',
        'type': 'uint256',
      },
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function',
  },
  {
    'constant': true,
    'inputs': [
      {
        'name': '_tokenId',
        'type': 'uint256',
      },
    ],
    'name': 'ownerOf',
    'outputs': [
      {
        'name': '',
        'type': 'address',
      },
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function',
  },
  {
    'constant': true,
    'inputs': [
      {
        'name': '_owner',
        'type': 'address',
      },
    ],
    'name': 'balanceOf',
    'outputs': [
      {
        'name': '',
        'type': 'uint256',
      },
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function',
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'symbol',
    'outputs': [
      {
        'name': '',
        'type': 'string',
      },
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function',
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': '_to',
        'type': 'address',
      },
      {
        'name': '_approved',
        'type': 'bool',
      },
    ],
    'name': 'setApprovalForAll',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function',
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': '_from',
        'type': 'address',
      },
      {
        'name': '_to',
        'type': 'address',
      },
      {
        'name': '_tokenId',
        'type': 'uint256',
      },
      {
        'name': '_data',
        'type': 'bytes',
      },
    ],
    'name': 'safeTransferFrom',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function',
  },
  {
    'constant': true,
    'inputs': [
      {
        'name': '_tokenId',
        'type': 'uint256',
      },
    ],
    'name': 'tokenURI',
    'outputs': [
      {
        'name': '',
        'type': 'string',
      },
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function',
  },
  {
    'constant': true,
    'inputs': [
      {
        'name': '_owner',
        'type': 'address',
      },
      {
        'name': '_operator',
        'type': 'address',
      },
    ],
    'name': 'isApprovedForAll',
    'outputs': [
      {
        'name': '',
        'type': 'bool',
      },
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function',
  },
  {
    'inputs': [
      {
        'name': '_name',
        'type': 'string',
      },
      {
        'name': '_symbol',
        'type': 'string',
      },
    ],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'constructor',
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': true,
        'name': '_from',
        'type': 'address',
      },
      {
        'indexed': true,
        'name': '_to',
        'type': 'address',
      },
      {
        'indexed': false,
        'name': '_tokenId',
        'type': 'uint256',
      },
    ],
    'name': 'Transfer',
    'type': 'event',
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': true,
        'name': '_owner',
        'type': 'address',
      },
      {
        'indexed': true,
        'name': '_approved',
        'type': 'address',
      },
      {
        'indexed': false,
        'name': '_tokenId',
        'type': 'uint256',
      },
    ],
    'name': 'Approval',
    'type': 'event',
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': true,
        'name': '_owner',
        'type': 'address',
      },
      {
        'indexed': true,
        'name': '_operator',
        'type': 'address',
      },
      {
        'indexed': false,
        'name': '_approved',
        'type': 'bool',
      },
    ],
    'name': 'ApprovalForAll',
    'type': 'event',
  },
]

*Defined in [abi/ERC721v3.ts:3](https://github.com/ProjectOpenSea/opensea-js/blob/b2e704f/src/abi/ERC721v3.ts#L3)*

___
<a id="inverse_basis_point"></a>

### `<Const>` INVERSE_BASIS_POINT

**● INVERSE_BASIS_POINT**: *`10000`* = 10000

*Defined in [wyvern.ts:13](https://github.com/ProjectOpenSea/opensea-js/blob/b2e704f/src/wyvern.ts#L13)*

___
<a id="null_block_hash"></a>

### `<Const>` NULL_BLOCK_HASH

**● NULL_BLOCK_HASH**: *"0x0000000000000000000000000000000000000000000000000000000000000000"* = "0x0000000000000000000000000000000000000000000000000000000000000000"

*Defined in [wyvern.ts:9](https://github.com/ProjectOpenSea/opensea-js/blob/b2e704f/src/wyvern.ts#L9)*

___
<a id="orderbook_path"></a>

### `<Const>` ORDERBOOK_PATH

**● ORDERBOOK_PATH**: *`string`* =  `/wyvern/v${ORDERBOOK_VERSION}`

*Defined in [api.ts:11](https://github.com/ProjectOpenSea/opensea-js/blob/b2e704f/src/api.ts#L11)*

___
<a id="orderbook_version"></a>

### `<Const>` ORDERBOOK_VERSION

**● ORDERBOOK_VERSION**: *`number`* = 1

*Defined in [api.ts:6](https://github.com/ProjectOpenSea/opensea-js/blob/b2e704f/src/api.ts#L6)*

___
<a id="feerecipient"></a>

### `<Const>` feeRecipient

**● feeRecipient**: *"0x5b3256965e7c3cf26e11fcaf296dfc8807c01073"* = "0x5b3256965e7c3cf26e11fcaf296dfc8807c01073"

*Defined in [wyvern.ts:11](https://github.com/ProjectOpenSea/opensea-js/blob/b2e704f/src/wyvern.ts#L11)*

___
<a id="txcallbacks"></a>

### `<Const>` txCallbacks

**● txCallbacks**: *`object`*

*Defined in [wyvern.ts:17](https://github.com/ProjectOpenSea/opensea-js/blob/b2e704f/src/wyvern.ts#L17)*

#### Type declaration

[key: `string`]: [TxnCallback](#txncallback)[]

___

## Functions

<a id="assetfromjson"></a>

### `<Const>` assetFromJSON

▸ **assetFromJSON**(asset: *`any`*): [OpenSeaAsset](interfaces/openseaasset.md)

*Defined in [wyvern.ts:113](https://github.com/ProjectOpenSea/opensea-js/blob/b2e704f/src/wyvern.ts#L113)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| asset | `any` |

**Returns:** [OpenSeaAsset](interfaces/openseaasset.md)

___
<a id="confirmtransaction"></a>

### `<Const>` confirmTransaction

▸ **confirmTransaction**(web3: *`Web3`*, txHash: *`string`*): `Promise`<`Object`>

*Defined in [wyvern.ts:61](https://github.com/ProjectOpenSea/opensea-js/blob/b2e704f/src/wyvern.ts#L61)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| web3 | `Web3` |
| txHash | `string` |

**Returns:** `Promise`<`Object`>

___
<a id="estimatecurrentprice"></a>

###  estimateCurrentPrice

▸ **estimateCurrentPrice**(order: *[Order](interfaces/order.md)*, secondsToBacktrack?: *`number`*, shouldRoundUp?: *`boolean`*): `BigNumber`

*Defined in [wyvern.ts:378](https://github.com/ProjectOpenSea/opensea-js/blob/b2e704f/src/wyvern.ts#L378)*

Estimates the price of an order

**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| order | [Order](interfaces/order.md) | - |  The order to estimate price on |
| `Default value` secondsToBacktrack | `number` | 30 |  The number of seconds to subtract on current time, to fix race conditions |
| `Default value` shouldRoundUp | `boolean` | true |  Whether to round up fractional wei |

**Returns:** `BigNumber`

___
<a id="event"></a>

### `<Const>` event

▸ **event**(abi: *[PartialReadonlyContractAbi](#partialreadonlycontractabi)*, name: *`string`*): `object`

*Defined in [contracts.ts:7](https://github.com/ProjectOpenSea/opensea-js/blob/b2e704f/src/contracts.ts#L7)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| abi | [PartialReadonlyContractAbi](#partialreadonlycontractabi) |
| name | `string` |

**Returns:** `object`

___
<a id="findasset"></a>

### `<Const>` findAsset

▸ **findAsset**(web3: *`Web3`*, __namedParameters: *`object`*): `Promise`< "proxy" &#124; "account" &#124; "unknown" &#124; "other">

*Defined in [wyvern.ts:206](https://github.com/ProjectOpenSea/opensea-js/blob/b2e704f/src/wyvern.ts#L206)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| web3 | `Web3` |
| __namedParameters | `object` |

**Returns:** `Promise`< "proxy" &#124; "account" &#124; "unknown" &#124; "other">

___
<a id="getmethod"></a>

### `<Const>` getMethod

▸ **getMethod**(abi: *[PartialReadonlyContractAbi](#partialreadonlycontractabi)*, name: *`string`*): `object`

*Defined in [contracts.ts:3](https://github.com/ProjectOpenSea/opensea-js/blob/b2e704f/src/contracts.ts#L3)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| abi | [PartialReadonlyContractAbi](#partialreadonlycontractabi) |
| name | `string` |

**Returns:** `object`

___
<a id="getwyvernasset"></a>

###  getWyvernAsset

▸ **getWyvernAsset**(schema: *`any`*, tokenId: *`string`*, tokenAddress: *`string`*): `any`

*Defined in [wyvern.ts:412](https://github.com/ProjectOpenSea/opensea-js/blob/b2e704f/src/wyvern.ts#L412)*

Get the Wyvern representation of an asset

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| schema | `any` |  The WyvernSchema needed to access this asset |
| tokenId | `string` |  The token's id |
| tokenAddress | `string` |  The address of the token's contract |

**Returns:** `any`

___
<a id="handleapierrors"></a>

###  handleApiErrors

▸ **handleApiErrors**(response: *`Response`*): `Promise`<`Response`>

*Defined in [api.ts:203](https://github.com/ProjectOpenSea/opensea-js/blob/b2e704f/src/api.ts#L203)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| response | `Response` |

**Returns:** `Promise`<`Response`>

___
<a id="makebignumber"></a>

###  makeBigNumber

▸ **makeBigNumber**(arg: * `number` &#124; `string`*): `BigNumber`

*Defined in [wyvern.ts:283](https://github.com/ProjectOpenSea/opensea-js/blob/b2e704f/src/wyvern.ts#L283)*

Special fixes for making BigNumbers using web3 results

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| arg |  `number` &#124; `string`|  An arg or the result of a web3 call to turn into a BigNumber |

**Returns:** `BigNumber`

___
<a id="orderfromjson"></a>

### `<Const>` orderFromJSON

▸ **orderFromJSON**(order: *`any`*): [Order](interfaces/order.md)

*Defined in [wyvern.ts:128](https://github.com/ProjectOpenSea/opensea-js/blob/b2e704f/src/wyvern.ts#L128)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| order | `any` |

**Returns:** [Order](interfaces/order.md)

___
<a id="orderfromjsonv0"></a>

### `<Const>` orderFromJSONv0

▸ **orderFromJSONv0**(order: *`any`*): [Order](interfaces/order.md)

*Defined in [wyvern.ts:73](https://github.com/ProjectOpenSea/opensea-js/blob/b2e704f/src/wyvern.ts#L73)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| order | `any` |

**Returns:** [Order](interfaces/order.md)

___
<a id="ordertojson"></a>

### `<Const>` orderToJSON

▸ **orderToJSON**(order: * [Order](interfaces/order.md) &#124; [UnhashedOrder](interfaces/unhashedorder.md)*): [OrderJSON](interfaces/orderjson.md)

*Defined in [wyvern.ts:174](https://github.com/ProjectOpenSea/opensea-js/blob/b2e704f/src/wyvern.ts#L174)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| order |  [Order](interfaces/order.md) &#124; [UnhashedOrder](interfaces/unhashedorder.md)|

**Returns:** [OrderJSON](interfaces/orderjson.md)

___
<a id="parsesignaturehex"></a>

###  parseSignatureHex

▸ **parseSignatureHex**(signature: *`string`*): `ECSignature`

*Defined in [wyvern.ts:324](https://github.com/ProjectOpenSea/opensea-js/blob/b2e704f/src/wyvern.ts#L324)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| signature | `string` |

**Returns:** `ECSignature`

___
<a id="personalsignasync"></a>

###  personalSignAsync

▸ **personalSignAsync**(web3: *`Web3`*, message: *`string`*, signerAddress: *`string`*): `Promise`<`ECSignature`>

*Defined in [wyvern.ts:266](https://github.com/ProjectOpenSea/opensea-js/blob/b2e704f/src/wyvern.ts#L266)*

Sign messages using web3 personal signatures

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| web3 | `Web3` |  Web3 instance |
| message | `string` |  message to sign |
| signerAddress | `string` |  web3 address signing the message |

**Returns:** `Promise`<`ECSignature`>

___
<a id="promisify"></a>

###  promisify

▸ **promisify**T(inner: *`function`*): `Promise`<`T`>

*Defined in [wyvern.ts:24](https://github.com/ProjectOpenSea/opensea-js/blob/b2e704f/src/wyvern.ts#L24)*

Promisify a callback-syntax web3 function

**Type parameters:**

#### T 
**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| inner | `function` |  callback function that accepts a Web3 callback function and passes it to the Web3 function |

**Returns:** `Promise`<`T`>

___
<a id="sendrawtransaction"></a>

###  sendRawTransaction

▸ **sendRawTransaction**(web3: *`Web3`*, __namedParameters: *`object`*): `Promise`<`Object`>

*Defined in [wyvern.ts:302](https://github.com/ProjectOpenSea/opensea-js/blob/b2e704f/src/wyvern.ts#L302)*

Send a transaction to the blockchain and optionally confirm it

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| web3 | `Web3` |  Web3 instance |
| __namedParameters | `object` |

**Returns:** `Promise`<`Object`>

___
<a id="track"></a>

### `<Const>` track

▸ **track**(web3: *`Web3`*, txHash: *`string`*, onFinalized: *[TxnCallback](#txncallback)*): `void`

*Defined in [wyvern.ts:35](https://github.com/ProjectOpenSea/opensea-js/blob/b2e704f/src/wyvern.ts#L35)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| web3 | `Web3` |
| txHash | `string` |
| onFinalized | [TxnCallback](#txncallback) |

**Returns:** `void`

___

## Object literals

<a id="decentraland_auction_config"></a>

### `<Const>` DECENTRALAND_AUCTION_CONFIG

**DECENTRALAND_AUCTION_CONFIG**: *`object`*

*Defined in [contracts.ts:11](https://github.com/ProjectOpenSea/opensea-js/blob/b2e704f/src/contracts.ts#L11)*

<a id="decentraland_auction_config.1"></a>

####  1

**● 1**: *`string`* = "0xf87e31492faf9a91b02ee0deaad50d51d56d5d4d"

*Defined in [contracts.ts:12](https://github.com/ProjectOpenSea/opensea-js/blob/b2e704f/src/contracts.ts#L12)*

___

___

