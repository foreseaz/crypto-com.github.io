(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{229:function(t,e,a){"use strict";a.r(e);var s=a(0),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"local-full-node-development"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#local-full-node-development"}},[t._v("#")]),t._v(" Local Full Node Development")]),t._v(" "),a("p",[t._v("We will need the following to run a local full node:")]),t._v(" "),a("ul",[a("li",[a("strong",[a("a",{attrs:{href:"https://crypto-com.github.io/getting-started/genesis.html#tendermint-extra-information",target:"_blank",rel:"noopener noreferrer"}},[t._v("Genesis"),a("OutboundLink")],1),t._v(":")]),t._v(" Defining the initial state of the blockchain;")]),t._v(" "),a("li",[a("strong",[a("a",{attrs:{href:"https://crypto-com.github.io/getting-started/consensus.html#client-interacting-with-the-blockchain",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tendermint Node"),a("OutboundLink")],1),t._v(":")]),t._v(" Performing consensus operations;")]),t._v(" "),a("li",[a("strong",[a("a",{attrs:{href:"https://crypto-com.github.io/getting-started/enclave-architecture.html#transaction-validation",target:"_blank",rel:"noopener noreferrer"}},[t._v("Transaction Enclave"),a("OutboundLink")],1),t._v(":")]),t._v(" Validating transactions;")]),t._v(" "),a("li",[a("strong",[a("a",{attrs:{href:"https://docs.tendermint.com/master/spec/abci/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Application BlockChain Interface ("),a("em",[t._v("ABCI")]),t._v(")"),a("OutboundLink")],1)]),t._v(": Connecting between Tendermint and applications.")])]),t._v(" "),a("h2",{attrs:{id:"step-1-generate-genesis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-1-generate-genesis"}},[t._v("#")]),t._v(" Step 1. Generate Genesis")]),t._v(" "),a("p",[t._v("Genesis describes the initial funding distributions as well as other configurations such as validators setup.\nFirstly, we will need a wallet to receive the genesis funds.")]),t._v(" "),a("a",{attrs:{id:"wallet"}}),t._v(" "),a("h3",{attrs:{id:"step-1a-create-a-wallet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-1a-create-a-wallet"}},[t._v("#")]),t._v(" Step 1a) Create a Wallet")]),t._v(" "),a("p",[t._v("To create a wallet, currently, we have "),a("a",{attrs:{href:"https://github.com/crypto-com/chain/tree/master/client-rpc",target:"_blank",rel:"noopener noreferrer"}},[t._v("client-rpc"),a("OutboundLink")],1),t._v(" and "),a("RouterLink",{attrs:{to:"/wallets/client-cli.html"}},[t._v("client-cli")]),t._v(" available for this purpose. We will be using "),a("RouterLink",{attrs:{to:"/wallets/client-cli.html"}},[t._v("client-cli")]),t._v(" in this guide.")],1),t._v(" "),a("ul",[a("li",[a("p",[t._v("Create a new "),a("em",[t._v("basic")]),t._v(' wallet with the name "Default" by running')]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ ./target/debug/client-cli wallet new --name Default --type basic\n")])])]),a("p",[t._v("You will be prompted to enter a passphrase.")]),t._v(" "),a("p",[a("strong",[t._v("Note")]),t._v(": The client-cli also supports HD wallet with mnemonic seed. Kindly follow this "),a("RouterLink",{attrs:{to:"/wallets/client-cli.html#wallet-new-create-a-new-wallet"}},[t._v("instruction")]),t._v(" to create your HD wallet.")],1)]),t._v(" "),a("li",[a("p",[t._v("Generate a staking address for the wallet to receive genesis funds. You will be prompted to enter the wallet passphrase again to verify.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ ./target/debug/client-cli address new --name Default --type Staking\nEnter authentication token: "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## Insert your authentication token ##")]),t._v("\nNew address: 0x3a102b53a12334e984ef51fda0baab1768116363\n")])])])])]),t._v(" "),a("p",[t._v("We will be distributing funds to our newly-created wallet address "),a("code",[t._v("0x3a102...8116363")]),t._v(".")]),t._v(" "),a("h4",{attrs:{id:"step-1b-initialize-tendermint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-1b-initialize-tendermint"}},[t._v("#")]),t._v(" Step 1b)   Initialize Tendermint")]),t._v(" "),a("ul",[a("li",[t._v("Initialise the Tendermint root directory by running:")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("   tendermint init\n")])])]),a("p",[t._v("It initialises a fresh Tendermint Core data directory to be used by a full node. Specifically,  it creates  a new validator private key ("),a("code",[t._v("priv_validator.json")]),t._v("), and a genesis file ("),a("code",[t._v("genesis.json")]),t._v(").")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("If you have previously initialized a Tendermint node, you may need to reset it by running:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("tendermint unsafe_reset_all\n")])])])])]),t._v(" "),a("p",[a("strong",[t._v("Caution:")]),t._v(" Only use this rest command in development as it removes the data directory, and all blockchain data will be lost.")]),t._v(" "),a("p",[t._v("Details and field definitions of "),a("code",[t._v("genesis.json")]),t._v(" can be found  "),a("a",{attrs:{href:"https://docs.tendermint.com/master/tendermint-core/using-tendermint.html#fields",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1),t._v(".  Note that as in the "),a("a",{attrs:{href:"https://docs.tendermint.com/master/tendermint-core/using-tendermint.html#sample-genesis-json",target:"_blank",rel:"noopener noreferrer"}},[t._v("sample genesis"),a("OutboundLink")],1),t._v(", "),a("code",[t._v("app_hash")]),t._v(" is initially left as empty. The missing configuration will be completed in the next step.")]),t._v(" "),a("h4",{attrs:{id:"step-1c-create-a-genesis-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-1c-create-a-genesis-configuration"}},[t._v("#")]),t._v(" Step 1c) Create a Genesis configuration")]),t._v(" "),a("p",[t._v("We  will use  the development tool  "),a("a",{attrs:{href:"https://github.com/crypto-com/chain/tree/master/dev-utils",target:"_blank",rel:"noopener noreferrer"}},[t._v("dev-utils"),a("OutboundLink")],1),t._v(" to generate the completed"),a("code",[t._v("genesis.json")]),t._v(":")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Create a  configuration file "),a("code",[t._v("dev-conf.json")]),t._v(" in  "),a("code",[t._v("~/chain/dev-utils/")])])]),t._v(" "),a("li",[a("p",[t._v("Obtain the following information for generating the configuration of our Genesis file:")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Address to Receive Genesis Funds")]),t._v(": We have just created one in the "),a("a",{attrs:{href:"#wallet"}},[t._v("previous step")])]),t._v(" "),a("li",[a("strong",[t._v("Genesis Time")]),t._v(": Copy the "),a("code",[t._v("genesis_time")]),t._v(" from "),a("code",[t._v("~/.tendermint/config/genesis.json")])]),t._v(" "),a("li",[a("strong",[t._v("Validator Pub Key")]),t._v(": Copy the "),a("code",[t._v("pub_key.value")]),t._v(" from "),a("code",[t._v("~/.tendermint/config/priv_validator_key.json")])])])]),t._v(" "),a("li",[a("p",[t._v("Replace "),a("code",[t._v("{WALLET_ADDRESS}")]),t._v(", "),a("code",[t._v("{PUB_KEY}")]),t._v(" and "),a("code",[t._v("{GENESIS_TIME}")]),t._v(" with the information obtained above.")])])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[t._v("\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"distribution"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"{WALLET_ADDRESS}"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2500000000000000000"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"0x3ae55c16800dc4bd0e3397a9d7806fb1f11639de"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1250000000000000000"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"unbonding_period"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"required_council_node_stake"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1250000000000000000"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"jailing_config"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"jail_duration"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("86400")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"block_signing_window"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"missed_block_threshold"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"slashing_config"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"liveness_slash_percent"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"byzantine_slash_percent"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"slash_wait_period"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10800")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"rewards_config"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"monetary_expansion_cap"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"6250000000000000000"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"distribution_period"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("86400")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"monetary_expansion_r0"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("450")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"monetary_expansion_tau"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("14500000000000000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"monetary_expansion_decay"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("999860")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"initial_fee_policy"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"base_fee"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"per_byte_fee"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.25"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"council_nodes"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"0x3ae55c16800dc4bd0e3397a9d7806fb1f11639de"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"security@example.com"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tendermint/PubKeyEd25519"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"value"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{PUB_KEY}"')]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"genesis_time"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{GENESIS_TIME}"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("a",{attrs:{id:"app-hash"}}),t._v(" "),a("ul",[a("li",[a("p",[t._v("Next, we generate the Genesis configuration based on the above configuration file.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ ./target/debug/dev-utils genesis generate --genesis_dev_config_path ./dev-utils/dev-conf.json -i\n")])])])])]),t._v(" "),a("h2",{attrs:{id:"step-2-start-transaction-enclaves"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-2-start-transaction-enclaves"}},[t._v("#")]),t._v(" Step 2.  Start Transaction Enclaves")]),t._v(" "),a("p",[t._v("We also need the transaction enclave for validating transactions; it can run on the hardware platform or a virtual machine. Follow the instructions in "),a("a",{attrs:{href:"https://github.com/crypto-com/chain-tx-enclave",target:"_blank",rel:"noopener noreferrer"}},[t._v("Crypto.com Chain Transaction Enclaves"),a("OutboundLink")],1),t._v(" to build and run the Chain Transaction Enclaves.")]),t._v(" "),a("h2",{attrs:{id:"step-3-start-chain-abci"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-3-start-chain-abci"}},[t._v("#")]),t._v(" Step 3. Start Chain ABCI")]),t._v(" "),a("p",[t._v("To start the Chain ABCI, we will need two pieces of data:")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("App Hash")]),t._v(": Prepared in the "),a("a",{attrs:{href:"#app-hash"}},[t._v("Generate Genesis")]),t._v(" step")]),t._v(" "),a("li",[a("strong",[t._v("Full Chain ID")]),t._v(": Copy the "),a("code",[t._v("chain_id")]),t._v(" found in "),a("code",[t._v("~/.tendermint/config/genesis.json")]),t._v(" (e.g. test-chain-y3m1e6-AB)")])]),t._v(" "),a("p",[t._v("We can start the ABCI by running:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v(" chain-abci -g "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("APP_HASHx"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" -c "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("FULL_CHAIN_ID"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" --enclave_server tcp://127.0.0.1:25933\n")])])]),a("p",[t._v("If you need backtrace or logging, you may set the environment variables before it:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("RUST_BACKTRACE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("RUST_LOG")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("info "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\nchain-abci "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-g "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("APP_HASH"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-c "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("FULL_CHAIN_ID"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--enclave_server tcp://127.0.0.1:25933\n")])])]),a("h2",{attrs:{id:"final-step-start-tendermint-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#final-step-start-tendermint-node"}},[t._v("#")]),t._v(" Final Step: Start Tendermint Node")]),t._v(" "),a("p",[t._v("Once we have the "),a("strong",[t._v("transaction enclave")]),t._v(" and "),a("strong",[t._v("chain-abci")]),t._v(" running, we can start our tendermint node simply by :")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("tendermint node\n")])])]),a("p",[t._v("Or alternatively, we can start a basic "),a("a",{attrs:{href:"https://docs.tendermint.com/master/tendermint-core/light-client-protocol.html#light-client-protocol",target:"_blank",rel:"noopener noreferrer"}},[t._v("lite-client node"),a("OutboundLink")],1),t._v("\nby running")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("tendermint lite\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);