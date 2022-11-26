(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{496:function(t,e,o){"use strict";o.r(e);var a=o(1),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"submitting-a-governance-proposal"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#submitting-a-governance-proposal"}},[t._v("#")]),t._v(" Submitting a Governance Proposal")]),t._v(" "),o("p",[t._v("If you have a final draft of your proposal ready to submit, you may want to push your proposal live on the testnet first. These are the three primary steps to getting your proposal live on-chain.")]),t._v(" "),o("ol",[o("li",[t._v("("),o("strong",[t._v("Optional")]),t._v(") "),o("a",{attrs:{href:"#hosting-supplementary-materials"}},[t._v("Hosting supplementary materials")]),t._v(" for your proposal with IPFS (InterPlanetary File System)")]),t._v(" "),o("li",[o("a",{attrs:{href:"#formatting-the-json-file-for-the-governance-proposal"}},[t._v("Formatting the JSON file")]),t._v(" for the governance proposal transaction that will be on-chain")]),t._v(" "),o("li",[o("a",{attrs:{href:"#sending-the-transaction-that-submits-your-governance-proposal"}},[t._v("Sending the transaction")]),t._v(" that submits your governance proposal on-chain")])]),t._v(" "),o("h2",{attrs:{id:"hosting-supplementary-materials"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#hosting-supplementary-materials"}},[t._v("#")]),t._v(" Hosting supplementary materials")]),t._v(" "),o("p",[t._v("In general we try to minimize the amount of data pushed to the blockchain.\nHence, detailed documentation about a proposal is usually hosted on a separate\ncensorship resistant data-hosting platform, like IPFS.")]),t._v(" "),o("p",[t._v("Once you have drafted your proposal, ideally as a Markdown file, you\ncan upload it to the IPFS network:\n"),t._v("\n2. either by "),o("a",{attrs:{href:"https://ipfs.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("running an IPFS node and the IPFS software"),o("OutboundLink")],1),t._v(", or\n2. using a service such as "),o("a",{attrs:{href:"https://pinata.cloud",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://pinata.cloud"),o("OutboundLink")],1)]),t._v(" "),o("p",[t._v('Ensure that you "pin" the file so that it continues to be available on the network. You should get a URL like this: https://ipfs.io/ipfs/QmbkQNtCAdR1CNbFE8ujub2jcpwUcmSRpSCg8gVWrTHSWD\nThe value QmbkQNtCAdR1CNbFE8ujub2jcpwUcmSRpSCg8gVWrTHSWD is called the '),o("code",[t._v("CID")]),t._v(" of\nyour file - it is effectively the file's hash.\n")]),t._v(" "),o("p",[t._v("If you uploaded a markdown file, you can use the IPFS markdown viewer to render\nthe document for better viewing. Links for the markdown viewer look like\n"),o("code",[t._v("https://ipfs.io/ipfs/QmTkzDwWqPbnAh5YiV5VwcTLnGdwSNsNTn2aDxdXBFca7D/example#/ipfs/<CID>")]),t._v(", where "),o("code",[t._v("<CID>")]),t._v(" is your CID. For instance the link above would be:\nhttps://ipfs.io/ipfs/QmTkzDwWqPbnAh5YiV5VwcTLnGdwSNsNTn2aDxdXBFca7D/example#/ipfs/QmbkQNtCAdR1CNbFE8ujub2jcpwUcmSRpSCg8gVWrTHSWD")]),t._v(" "),o("p",[t._v("Share the URL with others and verify that your file is publicly accessible.")]),t._v(" "),o("p",[t._v("The reason we use IPFS is that it is a decentralized means of storage, making it resistant to censorship or single points of failure. This increases the likelihood that the file will remain available in the future.")]),t._v(" "),o("h2",{attrs:{id:"formatting-the-json-file-for-the-governance-proposal"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#formatting-the-json-file-for-the-governance-proposal"}},[t._v("#")]),t._v(" Formatting the JSON file for the governance proposal")]),t._v(" "),o("p",[t._v("Prior to sending the transaction that submits your proposal on-chain, you must create a JSON file. This file will contain the information that will be stored on-chain as the governance proposal. Begin by creating a new text (.txt) file to enter this information. Use "),o("RouterLink",{attrs:{to:"/governance/best-practices.html"}},[t._v("these best practices")]),t._v(" as a guide for the contents of your proposal. When you're done, save the file as a .json file. See the examples that follow to help format your proposal.")],1),t._v(" "),o("p",[t._v("Each proposal type is unique in how the JSON should be formatted.\nSee the relevant section for the type of proposal you are drafting:")]),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/governance/formatting.html"}},[t._v("Text Proposals")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/governance/formatting.html"}},[t._v("Community Pool Spend Proposals")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/governance/formatting.html"}},[t._v("Parameter Change Proposals")])],1)]),t._v(" "),o("p",[t._v("Once on-chain, most people will rely upon network explorers to interpret this information with a graphical user interface (GUI).")]),t._v(" "),o("p",[o("strong",[t._v("Note")]),t._v(": In future, this formatting "),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/issues/5783",target:"_blank",rel:"noopener noreferrer"}},[t._v("may be changed to be more standardized"),o("OutboundLink")],1),t._v(" with other the types of governance proposals.")]),t._v(" "),o("h2",{attrs:{id:"sending-the-transaction-that-submits-your-governance-proposal"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#sending-the-transaction-that-submits-your-governance-proposal"}},[t._v("#")]),t._v(" Sending the transaction that submits your governance proposal")]),t._v(" "),o("p",[t._v("For information on how to use gaiad (the command line interface) to submit an on-chain proposal through the governance module, please refer to the "),o("RouterLink",{attrs:{to:"/hub-tutorials/gaiad.html"}},[t._v("gaiad resource")]),t._v(" for the Cosmos Hub documentation.")],1),t._v(" "),o("h3",{attrs:{id:"walkthrough-example"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#walkthrough-example"}},[t._v("#")]),t._v(" Walkthrough example")]),t._v(" "),o("p",[t._v("This is the command format for using gaiad (the command-line interface) to submit your proposal on-chain:")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"Z2FpYWQgdHggZ292IHN1Ym1pdC1wcm9wb3NhbCBcCiAgLS10aXRsZT0mbHQ7dGl0bGUmZ3Q7IFwKICAtLWRlc2NyaXB0aW9uPSZsdDtkZXNjcmlwdGlvbiZndDsgXAogIC0tdHlwZT0mcXVvdDtUZXh0JnF1b3Q7IFwKICAtLWRlcG9zaXQ9JnF1b3Q7MTAwMDAwMHVhdG9tJnF1b3Q7IFwKICAtLWZyb209Jmx0O25hbWUmZ3Q7IFwKICAtLWNoYWluLWlkPSZsdDtjaGFpbl9pZCZndDsK"}}),t._v(" "),o("p",[t._v("If "),o("code",[t._v("<proposal type>")]),t._v(" is left blank, the type will be a Text proposal. Otherwise, it can be set to "),o("code",[t._v("param-change")]),t._v(" or "),o("code",[t._v("community-pool-spend")]),t._v(". Use "),o("code",[t._v("--help")]),t._v(" to get more info from the tool.")]),t._v(" "),o("p",[t._v("For instance, this is the complete command that I could use to submit a "),o("strong",[t._v("testnet")]),t._v(" parameter-change proposal right now:\n"),o("code",[t._v("gaiad tx gov submit-proposal param-change param.json --from gavin --chain-id gaia-13007 --node 45.77.218.219:26657")])]),t._v(" "),o("p",[t._v("This is the complete command that I could use to submit a "),o("strong",[t._v("mainnet")]),t._v(" parameter-change proposal right now:\n"),o("code",[t._v("gaiad tx gov submit-proposal param-change param.json --from gavin --gas 500000 --fees 7500uatom --chain-id cosmoshub-3 --node cosmos-node-1.figment.io:26657")])]),t._v(" "),o("ol",[o("li",[o("code",[t._v("gaiad")]),t._v(" is the command-line interface client that is used to send transactions and query the Cosmos Hub")]),t._v(" "),o("li",[o("code",[t._v("tx gov submit-proposal param-change")]),t._v(" indicates that the transaction is submitting a parameter-change proposal")]),t._v(" "),o("li",[o("code",[t._v("--from gavin")]),t._v(" is the account key that pays the transaction fee and deposit amount")]),t._v(" "),o("li",[o("code",[t._v("--gas 500000")]),t._v(" is the maximum amount of gas permitted to be used to process the transaction\n"),o("ul",[o("li",[t._v("the more content there is in the description of your proposal, the more gas your transaction will consume")]),t._v(" "),o("li",[t._v("if this number isn't high enough and there isn't enough gas to process your transaction, the transaction will fail")]),t._v(" "),o("li",[t._v("the transaction will only use the amount of gas needed to process the transaction")])])]),t._v(" "),o("li",[o("code",[t._v("--fees")]),t._v(" is a flat-rate incentive for a validator to process your transaction\n"),o("ul",[o("li",[t._v("the network still accepts zero fees, but many nodes will not transmit your transaction to the network without a minimum fee")]),t._v(" "),o("li",[t._v("many nodes (including the Figment node) use a minimum fee to disincentivize transaction spamming")]),t._v(" "),o("li",[t._v("7500uatom is equal to 0.0075 ATOM")])])]),t._v(" "),o("li",[o("code",[t._v("--chain-id cosmoshub-3")]),t._v(" is Cosmos Hub 3. For current and past chain-id's, please look at the "),o("a",{attrs:{href:"https://github.com/cosmos/mainnet",target:"_blank",rel:"noopener noreferrer"}},[t._v("cosmos/mainnet resource"),o("OutboundLink")],1),t._v(" "),o("ul",[o("li",[t._v("the testnet chain ID is "),o("a",{attrs:{href:"https://hubble.figment.io/cosmos/chains/gaia-13007",target:"_blank",rel:"noopener noreferrer"}},[t._v("gaia-13007"),o("OutboundLink")],1),t._v(". For current and past testnet information, please look at the "),o("a",{attrs:{href:"https://github.com/cosmos/testnets",target:"_blank",rel:"noopener noreferrer"}},[t._v("testnet repository"),o("OutboundLink")],1)])])]),t._v(" "),o("li",[o("code",[t._v("--node cosmos-node-1.figment.io:26657")]),t._v(" is using Figment Networks' node to send the transaction to the Cosmos Hub 3 network")])]),t._v(" "),o("p",[o("strong",[t._v("Note")]),t._v(": be careful what you use for "),o("code",[t._v("--fees")]),t._v(". A mistake here could result in spending hundreds or thousands of ATOMs accidentally, which cannot be recovered.")]),t._v(" "),o("h3",{attrs:{id:"verifying-your-transaction"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#verifying-your-transaction"}},[t._v("#")]),t._v(" Verifying your transaction")]),t._v(" "),o("p",[t._v("After posting your transaction, your command line interface (gaiad) will provide you with the transaction's hash, which you can either query using gaiad or by searching the transaction hash using "),o("a",{attrs:{href:"https://www.mintscan.io/cosmos/txs/0506447AE8C7495DE970736474451CF23536DF8EA837FAF1CF6286565589AB57",target:"_blank",rel:"noopener noreferrer"}},[t._v("Mintscan"),o("OutboundLink")],1),t._v(". The hash should look something like this: "),o("code",[t._v("0506447AE8C7495DE970736474451CF23536DF8EA837FAF1CF6286565589AB57")])]),t._v(" "),o("h3",{attrs:{id:"troubleshooting-a-failed-transaction"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting-a-failed-transaction"}},[t._v("#")]),t._v(" Troubleshooting a failed transaction")]),t._v(" "),o("p",[t._v("There are a number of reasons why a transaction may fail. Here are two examples:")]),t._v(" "),o("ol",[o("li",[o("p",[o("strong",[t._v("Running out of gas")]),t._v(" - The more data there is in a transaction, the more gas it will need to be processed. If you don't specify enough gas, the transaction will fail.")])]),t._v(" "),o("li",[o("p",[o("strong",[t._v("Incorrect denomination")]),t._v(" - You may have specified an amount in 'utom' or 'atom' instead of 'uatom', causing the transaction to fail.")])])]),t._v(" "),o("p",[t._v("If you encounter a problem, try to troubleshoot it first, and then ask for help on the Cosmos Hub forum: "),o("a",{attrs:{href:"https://forum.cosmos.network/c/hub-proposals/25",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://forum.cosmos.network"),o("OutboundLink")],1),t._v(". We can learn from failed attempts and use them to improve upon this guide.")]),t._v(" "),o("h3",{attrs:{id:"depositing-funds-after-a-proposal-has-been-submitted"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#depositing-funds-after-a-proposal-has-been-submitted"}},[t._v("#")]),t._v(" Depositing funds after a proposal has been submitted")]),t._v(" "),o("p",[t._v("Sometimes a proposal is submitted without having the minimum token amount deposited yet. In these cases you would want to be able to deposit more tokens to get the proposal into the voting stage. In order to deposit tokens, you'll need to know what your proposal ID is after you've submitted your proposal. You can query all proposals by the following command:")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"Z2FpYWQgcSBnb3YgcHJvcG9zYWxzCg=="}}),t._v(" "),o("p",[t._v("If there are a lot of proposals on the chain already, you can also filter by your own address. For the proposal above, that would be:")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"Z2FpYWQgcSBnb3YgcHJvcG9zYWxzIC0tZGVwb3NpdG9yIGNvc21vczFoeHY3bXB6dHZsbjQ1ZWdoZXo2ZXZ3MnlwY3c0dmptc21yOGNkeAo="}}),t._v(" "),o("p",[t._v("Once you have the proposal ID, this is the command to deposit extra tokens:")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"Z2FpYWQgdHggZ292IGRlcG9zaXQgJmx0O3Byb3Bvc2FsLWlkJmd0OyAmbHQ7ZGVwb3NpdCZndDsgLS1mcm9tICZsdDtuYW1lJmd0Owo="}}),t._v(" "),o("p",[t._v("In our case above, the "),o("code",[t._v("<proposal-id>")]),t._v(" would be 59 as queried earlier.\nThe "),o("code",[t._v("<deposit>")]),t._v(" is written as "),o("code",[t._v("500000uatom")]),t._v(", just like the example above.")]),t._v(" "),o("h3",{attrs:{id:"submitting-your-proposal-to-the-testnet"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#submitting-your-proposal-to-the-testnet"}},[t._v("#")]),t._v(" Submitting your proposal to the testnet")]),t._v(" "),o("p",[t._v("You may want to submit your proposal to the testnet chain before the mainnet for a number of reasons:")]),t._v(" "),o("ol",[o("li",[t._v("To see what the proposal description will look like")]),t._v(" "),o("li",[t._v("To signal that your proposal is about to go live on the mainnet")]),t._v(" "),o("li",[t._v("To share what the proposal will look like in advance with stakeholders")]),t._v(" "),o("li",[t._v("To test the functionality of the governance features")])]),t._v(" "),o("p",[t._v("Submitting your proposal to the testnet increases the likelihood that you will discover a flaw before deploying your proposal on mainnet. A few things to keep in mind:")]),t._v(" "),o("ul",[o("li",[t._v("you'll need testnet tokens for your proposal (ask around for a faucet)")]),t._v(" "),o("li",[t._v("the parameters for testnet proposals are different (eg. voting period timing, deposit amount, deposit denomination)")]),t._v(" "),o("li",[t._v("the deposit denomination is in 'muon' instead of 'uatom'")])])],1)}),[],!1,null,null,null);e.default=n.exports}}]);