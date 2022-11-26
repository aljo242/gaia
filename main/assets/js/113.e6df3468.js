(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{523:function(e,t,o){"use strict";o.r(t);var a=o(1),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"join-the-public-testnet"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#join-the-public-testnet"}},[e._v("#")]),e._v(" Join the Public Testnet")]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("Current Upgrade")]),e._v(" "),o("th",[e._v("Chain Id")]),e._v(" "),o("th",[e._v("Upgrade Block Height")]),e._v(" "),o("th",[e._v("Upgrade Date")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[e._v("Theta")]),e._v(" "),o("td",[o("code",[e._v("theta-testnet-001")])]),e._v(" "),o("td",[e._v("9283650")]),e._v(" "),o("td",[e._v("March 17 2021")])])])]),e._v(" "),o("h2",{attrs:{id:"background"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#background"}},[e._v("#")]),e._v(" Background")]),e._v(" "),o("p",[e._v("The current Cosmos Hub Testnet is running on the "),o("a",{attrs:{href:"https://interchain-io.medium.com/preparing-for-the-cosmos-hub-v7-theta-upgrade-2fc41ce34787",target:"_blank",rel:"noopener noreferrer"}},[e._v("Theta Upgrade"),o("OutboundLink")],1),e._v(". Visit the "),o("a",{attrs:{href:"https://explorer.theta-testnet.polypore.xyz/",target:"_blank",rel:"noopener noreferrer"}},[e._v("testnet explorer"),o("OutboundLink")],1),e._v(" to view all on chain activity.")]),e._v(" "),o("p",[e._v("For those who just need instructions on performing the upgrade, see the "),o("a",{attrs:{href:"#upgrading"}},[e._v("Upgrade")]),e._v(" section.")]),e._v(" "),o("h2",{attrs:{id:"releases"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#releases"}},[e._v("#")]),e._v(" Releases")]),e._v(" "),o("p",[e._v("If syncing before the Theta update, checkout "),o("a",{attrs:{href:"https://github.com/cosmos/gaia/tree/v6.0.0",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("v6.0.0")]),o("OutboundLink")],1),e._v(". Until a release is cut for the upgrade, feel free to track the "),o("code",[e._v("theta-prepare")]),e._v(" branch (deleted).")]),e._v(" "),o("h2",{attrs:{id:"prerequisites"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),o("p",[o("strong",[e._v("Hardware")])]),e._v(" "),o("p",[e._v("It's recommended that public testnet nodes are running on machines with at least "),o("code",[e._v("16GB")]),e._v(" of RAM.")]),e._v(" "),o("p",[o("strong",[e._v("Make sure Go & Gaia are "),o("RouterLink",{attrs:{to:"/getting-started/installation.html"}},[e._v("properly installed")]),e._v(". The most recent Gaia version for the Theta Testnet is "),o("a",{attrs:{href:"https://github.com/cosmos/gaia/tree/v7.0.0-rc0",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("v7.0.0-rc0")]),o("OutboundLink")],1),e._v(".")],1)]),e._v(" "),o("p",[e._v("This tutorial will provide all necessary instructions for joining the current public testnet. If you're interested in more advanced configuration and synchronization options, see "),o("RouterLink",{attrs:{to:"/hub-tutorials/join-mainnet.html"}},[e._v("Join Mainnet")]),e._v(" for a detailed walkthrough.")],1),e._v(" "),o("h2",{attrs:{id:"sync-options"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#sync-options"}},[e._v("#")]),e._v(" Sync Options")]),e._v(" "),o("p",[e._v("There are two ways to sync a testnet node, Fastsync and State Sync. "),o("a",{attrs:{href:"https://docs.tendermint.com/v0.34/tendermint-core/fast-sync.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Fastsync"),o("OutboundLink")],1),e._v(" syncs the chain from genesis by downloading blocks in paralell and then verifying them. "),o("a",{attrs:{href:"https://docs.tendermint.com/v0.34/tendermint-core/state-sync.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("State Sync"),o("OutboundLink")],1),e._v(" will look for snapshots from peers at a trusted height and then verifying a minimal set of snapshot chunks against the network.")]),e._v(" "),o("p",[e._v("State Sync is far faster and more efficient than Blocksync, but Blocksync offers higher data integrity and more robust history. For those who are concerned about storage and costs, State Sync can be the better option as it minimizes storage usage when rebuilding initial state.")]),e._v(" "),o("h3",{attrs:{id:"configuration-setup"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#configuration-setup"}},[e._v("#")]),e._v(" Configuration & Setup")]),e._v(" "),o("p",[e._v("To get started, you'll need to install and configure the Gaia binary using the script below. "),o("strong",[e._v("For Blocksync, it is important to checkout Gaia "),o("code",[e._v("release/v6.0.0")]),e._v(". For State Sync checkout the most recent "),o("a",{attrs:{href:"https://github.com/cosmos/gaia/tree/v6.0.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("testnet release"),o("OutboundLink")],1),e._v(" until the upgrade is performed")])]),e._v(" "),o("p",[e._v("This example is using the Theta testnet genesis. For up to date values like "),o("code",[e._v("seeds")]),e._v(", visit the "),o("a",{attrs:{href:"https://github.com/cosmos/testnets",target:"_blank",rel:"noopener noreferrer"}},[e._v("testnet repository"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("blockquote",[o("p",[o("strong",[e._v("Note")]),e._v(": Cosmos Hub recommends running "),o("code",[e._v("gaiad")]),e._v(" or "),o("code",[e._v("cosmovisor")]),e._v(" with the "),o("code",[e._v("--x-crisis-skip-assert-invariants")]),e._v(" flag. If checking for invariants, operators are likely to see "),o("code",[e._v("rounding error withdrawing rewards from validator")]),e._v(". These are expected. For more information see "),o("RouterLink",{attrs:{to:"/hub-tutorials/join-mainnet.html#verify-mainnet"}},[e._v("Verify Mainnet")])],1)]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"IyBCdWlsZCBnYWlhZCBiaW5hcnkgYW5kIGluaXRpYWxpemUgY2hhaW4KY2QgJEhPTUUKZ2l0IGNsb25lIC1iIHJlbGVhc2UvJmx0O3JlbGVhc2VfdmVyc2lvbiZndDsgaHR0cHM6Ly9naXRodWIuY29tL2Nvc21vcy9nYWlhCmNkIGdhaWEKbWFrZSBpbnN0YWxsCmdhaWFkIGluaXQgJmx0O2N1c3RvbV9tb25pa2VyJmd0OwoKIyBQcmVwYXJlIGdlbmVzaXMgZmlsZQp3Z2V0IGh0dHBzOi8vZ2l0aHViLmNvbS9oeXBoYWNvb3AvdGVzdG5ldHMvcmF3L2FkZC10aGV0YS10ZXN0bmV0L3Y3LXRoZXRhL3B1YmxpYy10ZXN0bmV0L2dlbmVzaXMuanNvbi5negpnemlwIC1kIGdlbmVzaXMuanNvbi5negptdiBnZW5lc2lzLmpzb24gJEhPTUUvLmdhaWEvY29uZmlnL2dlbmVzaXMuanNvbgoKIyBTZXQgbWluaW11bSBnYXMgcHJpY2UgJmFtcDsgcGVlcnMKY2QgJEhPTUUvLmdhaWEvY29uZmlnCnNlZCAtaSAncy9taW5pbXVtLWdhcy1wcmljZXMgPSAmcXVvdDsmcXVvdDsvbWluaW11bS1nYXMtcHJpY2VzID0gJnF1b3Q7MC4wMDF1YXRvbSZxdW90Oy8nIGFwcC50b21sCnNlZCAtaSAncy9wZXJzaXN0ZW50X3BlZXJzID0gJnF1b3Q7JnF1b3Q7L3BlcnNpc3RlbnRfcGVlcnMgPSAmcXVvdDsmbHQ7cGVyc2lzdGVudF9wZWVyX25vZGVfaWRfMUBwZXJzaXN0ZW50X3BlZXJfYWRkcmVzc18xOnAycF9wb3J0Jmd0OywmbHQ7cGVyc2lzdGVudF9wZWVyX25vZGVfaWRfMkBwZXJzaXN0ZW50X3BlZXJfYWRkcmVzc18yOnAycF9wb3J0Jmd0OyZxdW90Oy8nIGNvbmZpZy50b21sCg=="}}),e._v(" "),o("h3",{attrs:{id:"state-sync"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#state-sync"}},[e._v("#")]),e._v(" State Sync")]),e._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",[e._v("State Sync requires Gaia version "),o("a",{attrs:{href:"https://github.com/cosmos/gaia/tree/v6.0.0",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("v6.0.0")]),o("OutboundLink")],1),e._v(" until the upgrade is performed.")])]),e._v(" "),o("p",[o("strong",[e._v("Check out the "),o("a",{attrs:{href:"https://github.com/cosmos/testnets/tree/master/public",target:"_blank",rel:"noopener noreferrer"}},[e._v("quickstart script"),o("OutboundLink")],1),e._v(" to bootstrap a Theta testnet node and configure as needed")])]),e._v(" "),o("p",[e._v("There will need to be additional configuration to enable State Sync on the testnet. State Sync requires setting an initial list of "),o("code",[e._v("persistent_peers")]),e._v(" to fetch snapshots from. For the sake of simplicity, this step is already done in the "),o("a",{attrs:{href:"#configuration-amp=-setup"}},[e._v("Configuration & Setup")]),e._v(" section.")]),e._v(" "),o("p",[e._v("Visit a "),o("a",{attrs:{href:"https://explorer.theta-testnet.polypore.xyz/",target:"_blank",rel:"noopener noreferrer"}},[e._v("testnet explorer"),o("OutboundLink")],1),e._v(" to get a recent block height and corresponding hash. A node operator can choose any height/hash in the current bonding period, but as the recommended snapshot period is 1000 blocks, it is advised to choose something close to current height - 1000. Set these parameters in the code snippet below "),o("code",[e._v("<BLOCK_HEIGHT>")]),e._v(" and "),o("code",[e._v("<BLOCK_HASH>")])]),e._v(" "),o("p",[e._v("For up to date values like "),o("code",[e._v("rpc_servers")]),e._v(", visit the current "),o("a",{attrs:{href:"https://github.com/cosmos/testnets",target:"_blank",rel:"noopener noreferrer"}},[e._v("testnet repository"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"Y2QgJEhPTUUvLmdhaWEvY29uZmlnCnNlZCAtaSAncy9lbmFibGUgPSBmYWxzZS9lbmFibGUgPSB0cnVlLycgY29uZmlnLnRvbWwKc2VkIC1pICdzL3RydXN0X2hlaWdodCA9IDAvdHJ1c3RfaGVpZ2h0ID0gJmx0O0JMT0NLX0hFSUdIVCZndDsvJyBjb25maWcudG9tbApzZWQgLWkgJ3MvdHJ1c3RfaGFzaCA9ICZxdW90OyZxdW90Oy90cnVzdF9oYXNoID0gJnF1b3Q7Jmx0O0JMT0NLX0hBU0gmZ3Q7JnF1b3Q7LycgY29uZmlnLnRvbWwKc2VkIC1pICdzL3JwY19zZXJ2ZXJzID0gJnF1b3Q7JnF1b3Q7L3JwY19zZXJ2ZXJzID0gJnF1b3Q7Jmx0O3JwY19hZGRyZXNzXzEmZ3Q7OjI2NjU3LCZsdDtycGNfYWRkcmVzc18yJmd0OzoyNjY1NyZxdW90Oy8nIGNvbmZpZy50b21sCg=="}}),e._v(" "),o("p",[e._v("Now run "),o("code",[e._v("gaiad start --x-crisis-skip-assert-invariants")]),e._v(" or if using "),o("a",{attrs:{href:"#using-cosmovisor"}},[e._v("Cosmovisor")]),e._v(",  "),o("code",[e._v("cosmovisor start --x-crisis-skip-assert-invariants")]),e._v(". Once a snapshot is found and verified, the chain will start syncing via regular consensus within minutes.")]),e._v(" "),o("h3",{attrs:{id:"using-cosmovisor"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#using-cosmovisor"}},[e._v("#")]),e._v(" Using Cosmovisor")]),e._v(" "),o("p",[e._v("Cosmovisor is a process manager that monitors the governance module for incoming chain upgrade proposals. When a proposal is approved, Cosmovisor can automatically download the new binary, stop the chain when it hits the upgrade height, switch to the new binary, and restart the daemon. This tutorial will provide instructions for the most efficient way to sync via Cosmovisor. For more information on configuration, check out the Cosmos SDK's "),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/tree/v0.45.0/cosmovisor#auto-download",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cosmovisor repository documentation"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("Cosmovisor can be used when syncing with Blocksync or State Sync. Make sure to follow the Cosmovisor setup below, and then run "),o("code",[e._v("cosmovisor start")]),e._v(" in place of "),o("code",[e._v("gaiad start")]),e._v(".")]),e._v(" "),o("p",[e._v("Cosmovisor requires the creation the following directory structure:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"LgrilJzilIDilIAgY3VycmVudCAtJmd0OyBnZW5lc2lzIG9yIHVwZ3JhZGVzLyZsdDtuYW1lJmd0OwrilJzilIDilIAgZ2VuZXNpcwrilIIgICDilJTilIDilIAgYmluCuKUgiAgICAgICDilJTilIDilIAgZ2FpYWQK4pSU4pSA4pSAIHVwZ3JhZGVzCiAgICDilJTilIDilIAgdjctVGhldGEKICAgICAgICDilJzilIDilIAgYmluCiAgICAgICAg4pSCICAg4pSU4pSA4pSAIGdhaWFkCiAgICAgICAg4pSU4pSA4pSAIHVwZ3JhZGUtaW5mby5qc29uCg=="}}),e._v(" "),o("p",[e._v("It is possible to enable autodownload for the new binary, but for the purpose of this tutorial, the setup instructions will include how to do this manually. For more information on autodownload with Cosmovisor, see the full docs on "),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/tree/v0.45.0/cosmovisor/README.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("setting up Cosmosvisor"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("The following script installs, configures and starts Cosmovisor:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"IyBJbnN0YWxsIENvc21vdmlzb3IKZ28gaW5zdGFsbCBnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL2Nvc21vdmlzb3IvY21kL2Nvc21vdmlzb3IK"}}),e._v(" "),o("blockquote",[o("p",[e._v("NOTE: If you ran a full node on a previous testnet, please skip to "),o("a",{attrs:{href:"#upgrading-from-previous-testnet"}},[e._v("Upgrading From Previous Testnet")]),e._v(".")])]),e._v(" "),o("p",[e._v("To start a new node, the mainnet instructions apply:")]),e._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/hub-tutorials/join-mainnet.html"}},[e._v("Join the mainnet")])],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/validators/validator-setup.html"}},[e._v("Deploy a validator")])],1)]),e._v(" "),o("p",[e._v("The only difference is the SDK version and genesis file. See the "),o("a",{attrs:{href:"https://github.com/cosmos/testnets",target:"_blank",rel:"noopener noreferrer"}},[e._v("testnet repo"),o("OutboundLink")],1),e._v(" for information on testnets, including the correct version of the Cosmos-SDK to use and details about the genesis file.")]),e._v(" "),o("h2",{attrs:{id:"upgrading-your-node"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#upgrading-your-node"}},[e._v("#")]),e._v(" Upgrading Your Node")]),e._v(" "),o("p",[e._v("These instructions are for full nodes that have ran on previous versions of and would like to upgrade to the latest testnet.")]),e._v(" "),o("p",[e._v("When the chain reaches the upgrade block height, the chain will halt and you will have to download the new binary and move it to the correct folder. For the "),o("code",[e._v("Theta")]),e._v(" upgrade, this would look like:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"IyBQcmVwYXJlIFRoZXRhIHVwZ3JhZGUgZGlyZWN0b3J5Cm1rZGlyIC1wIH4vLmdhaWEvY29zbW92aXNvci91cGdyYWRlcy9UaGV0YS9iaW4KCiMgRG93bmxvYWQgYW5kIGluc3RhbGwgdGhlIG5ldyBiaW5hcnkgdmVyc2lvbi4KY2QgJEhPTUUvZ2FpYQpnaXQgcHVsbApnaXQgY2hlY2tvdXQgJmx0O3VwZ3JhZGUtcmVsZWFzZSZndDsKbWFrZSBpbnN0YWxsCgojIE1vdmUgdGhlIG5ldyBiaW5hcnkgdG8gdGhlIFRoZXRhIHVwZ3JhZGUgZGlyZWN0b3J5CmNwICRHT1BBVEgvYmluL2dhaWFkIH4vLmdhaWEvY29zbW92aXNvci91cGdyYWRlcy9UaGV0YS9iaW4K"}}),e._v(" "),o("p",[e._v("Your node is now in a pristine state while keeping the original "),o("code",[e._v("priv_validator.json")]),e._v(" and "),o("code",[e._v("config.toml")]),e._v(". If you had any sentry nodes or full nodes setup before,\nyour node will still try to connect to them, but may fail if they haven't also\nbeen upgraded.")]),e._v(" "),o("h3",{attrs:{id:"blocksync"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#blocksync"}},[e._v("#")]),e._v(" Blocksync")]),e._v(" "),o("p",[e._v("Blocksync will require navigating the Theta upgrade either via "),o("a",{attrs:{href:"#using-cosmovisor"}},[e._v("Cosmovisor")]),e._v(" or manually.")]),e._v(" "),o("p",[e._v("Manually updating "),o("code",[e._v("gaiad")]),e._v(" will require stopping the chain and installing the new binary once it halts at the expected block height (some time on March 17, TBA).")]),e._v(" "),o("p",[e._v("Logs will show "),o("code",[e._v('ERR UPGRADE "Theta" NEEDED at height: XXXX')]),e._v(". Stop "),o("code",[e._v("gaiad")]),e._v(" and run the following:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"Y2QgJEhPTUUvZ2FpYQpnaXQgY2hlY2tvdXQgJmx0O3RoZXRhIHJlbGVhc2UgY2FuZGlkYXRlJmd0OwptYWtlIGluc3RhbGwK"}}),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",[o("em",[e._v("NOTE")]),e._v(": If you have issues at this step, please check that you have the latest stable version of GO installed.")])]),e._v(" "),o("p",[e._v("Note we use "),o("code",[e._v("master")]),e._v(" here since it contains the latest stable release.\nSee the "),o("a",{attrs:{href:"https://github.com/cosmos/testnets",target:"_blank",rel:"noopener noreferrer"}},[e._v("testnet repo"),o("OutboundLink")],1),e._v(" for details on which version is needed for which testnet, and the "),o("a",{attrs:{href:"https://github.com/cosmos/gaia/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gaia release page"),o("OutboundLink")],1),e._v(" for details on each release.")]),e._v(" "),o("p",[e._v("Once the new binary is installed, restart the Gaia daemon. Logs will show "),o("code",[e._v('INF applying upgrade "Theta" at height: XXXXX')]),e._v(". After a few minutes, the node will start syncing blocks.")])],1)}),[],!1,null,null,null);t.default=n.exports}}]);