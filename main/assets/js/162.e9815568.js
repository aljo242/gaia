(window.webpackJsonp=window.webpackJsonp||[]).push([[162],{506:function(a,e,t){"use strict";t.r(e);var o=t(1),s=Object(o.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"service-providers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#service-providers"}},[a._v("#")]),a._v(" Service Providers")]),a._v(" "),t("p",[a._v("'Service Providers' are defined as entities that provide services for end-users that involve some form of interaction with the Cosmos Hub. More specifically, this document is focused on interactions with tokens.")]),a._v(" "),t("p",[a._v("Service Providers are expected to act as trusted points of contact to the blockchain for their end-users. This Service Providers section does not apply to wallet builders that want to provide Light Client functionalities.")]),a._v(" "),t("p",[a._v("This document describes:")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#connection-options"}},[a._v("Connection Options")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#running-a-full-node"}},[a._v("Running a Full Node")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#what-is-a-full-node"}},[a._v("What is a Full Node?")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#installation-and-configuration"}},[a._v("Installation and Configuration")])])])]),a._v(" "),t("li",[t("a",{attrs:{href:"#command-line-interface"}},[a._v("Command-Line Interface")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#available-commands"}},[a._v("Available Commands")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#remote-access-to-gaiad"}},[a._v("Remote Access to gaiad")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#create-a-key-pair"}},[a._v("Create a Key pair")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#check-your-account"}},[a._v("Check your Account")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#check-your-balance"}},[a._v("Check your Balance")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#send-coins-using-the-cli"}},[a._v("Send coins using the CLI")])])])]),a._v(" "),t("li",[t("a",{attrs:{href:"#rest-api"}},[a._v("REST API")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#listen-for-incoming-transaction"}},[a._v("Listen for incoming transactions")])])])])]),a._v(" "),t("h2",{attrs:{id:"connection-options"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#connection-options"}},[a._v("#")]),a._v(" Connection Options")]),a._v(" "),t("p",[a._v("There are four main technologies to consider to connect to the Cosmos Hub:")]),a._v(" "),t("ul",[t("li",[a._v("Full Nodes: Interact with the blockchain.")]),a._v(" "),t("li",[a._v("REST Server: Serves for HTTP calls.")]),a._v(" "),t("li",[a._v("REST API: Use available endpoints for the REST Server.")]),a._v(" "),t("li",[a._v("GRPC: Connect to the Cosmos Hub using gRPC.")])]),a._v(" "),t("h2",{attrs:{id:"running-a-full-node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#running-a-full-node"}},[a._v("#")]),a._v(" Running a Full Node")]),a._v(" "),t("h3",{attrs:{id:"what-is-a-full-node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#what-is-a-full-node"}},[a._v("#")]),a._v(" What is a Full Node?")]),a._v(" "),t("p",[a._v("A Full Node is a network node that syncs up with the state of the blockchain. It provides blockchain data to others by using RESTful APIs, a replica of the database by exposing data with interfaces. A Full Node keeps in syncs with the rest of the blockchain nodes and stores the state on disk. If the full node does not have the queried block on disk the full node can go find the blockchain where the queried data lives.")]),a._v(" "),t("h3",{attrs:{id:"installation-and-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installation-and-configuration"}},[a._v("#")]),a._v(" Installation and Configuration")]),a._v(" "),t("p",[a._v("This section describes the steps to run and interact with a full node for the Cosmos Hub.")]),a._v(" "),t("p",[a._v("First, you need to "),t("RouterLink",{attrs:{to:"/getting-started/installation.html"}},[a._v("install the software")]),a._v(".")],1),a._v(" "),t("p",[a._v("Consider running your own "),t("RouterLink",{attrs:{to:"/hub-tutorials/join-mainnet.html"}},[a._v("Cosmos Hub Full Node")]),a._v(".")],1),a._v(" "),t("h2",{attrs:{id:"command-line-interface"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#command-line-interface"}},[a._v("#")]),a._v(" Command-Line Interface")]),a._v(" "),t("p",[a._v("The command-line interface (CLI) is the most powerful tool to access the Cosmos Hub and use gaia.\nTo use the CLI, you must install the latest version of "),t("code",[a._v("gaia")]),a._v(" on your machine.")]),a._v(" "),t("p",[a._v("Compare your version with the "),t("a",{attrs:{href:"https://github.com/cosmos/gaia/releases",target:"_blank",rel:"noopener noreferrer"}},[a._v("latest release version"),t("OutboundLink")],1)]),a._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgdmVyc2lvbiAtLWxvbmcK"}}),a._v(" "),t("h3",{attrs:{id:"available-commands"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#available-commands"}},[a._v("#")]),a._v(" Available Commands")]),a._v(" "),t("p",[a._v("All available CLI commands are shown when you run the "),t("code",[a._v("gaiad")]),a._v(" command:")]),a._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQK"}}),a._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"U3RhcmdhdGUgQ29zbW9zIEh1YiBBcHAKClVzYWdlOgogIGdhaWFkIFtjb21tYW5kXQoKQXZhaWxhYmxlIENvbW1hbmRzOgoKCiAgYWRkLWdlbmVzaXMtYWNjb3VudCBBZGQgYSBnZW5lc2lzIGFjY291bnQgdG8gZ2VuZXNpcy5qc29uCiAgY29sbGVjdC1nZW50eHMgICAgICBDb2xsZWN0IGdlbmVzaXMgdHhzIGFuZCBvdXRwdXQgYSBnZW5lc2lzLmpzb24gZmlsZQogIGRlYnVnICAgICAgICAgICAgICAgVG9vbCBmb3IgaGVscGluZyB3aXRoIGRlYnVnZ2luZyB5b3VyIGFwcGxpY2F0aW9uCiAgZXhwb3J0ICAgICAgICAgICAgICBFeHBvcnQgc3RhdGUgdG8gSlNPTgogIGdlbnR4ICAgICAgICAgICAgICAgR2VuZXJhdGUgYSBnZW5lc2lzIHR4IGNhcnJ5aW5nIGEgc2VsZiBkZWxlZ2F0aW9uCiAgaGVscCAgICAgICAgICAgICAgICBIZWxwIGFib3V0IGFueSBjb21tYW5kCiAgaW5pdCAgICAgICAgICAgICAgICBJbml0aWFsaXplIHByaXZhdGUgdmFsaWRhdG9yLCBwMnAsIGdlbmVzaXMsIGFuZCBhcHBsaWNhdGlvbiBjb25maWd1cmF0aW9uIGZpbGVzCiAga2V5cyAgICAgICAgICAgICAgICBNYW5hZ2UgeW91ciBhcHBsaWNhdGlvbidzIGtleXMKICBtaWdyYXRlICAgICAgICAgICAgIE1pZ3JhdGUgZ2VuZXNpcyB0byBhIHNwZWNpZmllZCB0YXJnZXQgdmVyc2lvbgogIHF1ZXJ5ICAgICAgICAgICAgICAgUXVlcnlpbmcgc3ViY29tbWFuZHMKICBzdGFydCAgICAgICAgICAgICAgIFJ1biB0aGUgZnVsbCBub2RlCiAgc3RhdHVzICAgICAgICAgICAgICBRdWVyeSByZW1vdGUgbm9kZSBmb3Igc3RhdHVzCiAgdGVuZGVybWludCAgICAgICAgICBUZW5kZXJtaW50IHN1YmNvbW1hbmRzCiAgdGVzdG5ldCAgICAgICAgICAgICBJbml0aWFsaXplIGZpbGVzIGZvciBhIHNpbWFwcCB0ZXN0bmV0CiAgdHggICAgICAgICAgICAgICAgICBUcmFuc2FjdGlvbnMgc3ViY29tbWFuZHMKICB1bnNhZmUtcmVzZXQtYWxsICAgIFJlc2V0cyB0aGUgYmxvY2tjaGFpbiBkYXRhYmFzZSwgcmVtb3ZlcyBhZGRyZXNzIGJvb2sgZmlsZXMsIGFuZCByZXNldHMgZGF0YS9wcml2X3ZhbGlkYXRvcl9zdGF0ZS5qc29uIHRvIHRoZSBnZW5lc2lzIHN0YXRlCiAgdmFsaWRhdGUtZ2VuZXNpcyAgICB2YWxpZGF0ZXMgdGhlIGdlbmVzaXMgZmlsZSBhdCB0aGUgZGVmYXVsdCBsb2NhdGlvbiBvciBhdCB0aGUgbG9jYXRpb24gcGFzc2VkIGFzIGFuIGFyZwogIHZlcnNpb24gICAgICAgICAgICAgUHJpbnQgdGhlIGFwcGxpY2F0aW9uIGJpbmFyeSB2ZXJzaW9uIGluZm9ybWF0aW9uCgpGbGFnczoKICAtaCwgLS1oZWxwICAgICAgICAgICAgICAgIGhlbHAgZm9yIGdhaWFkCiAgICAgIC0taG9tZSBzdHJpbmcgICAgICAgICBkaXJlY3RvcnkgZm9yIGNvbmZpZyBhbmQgZGF0YSAoZGVmYXVsdCAmcXVvdDsvVXNlcnMvdG9iaWFzLy5nYWlhJnF1b3Q7KQogICAgICAtLWxvZ19mb3JtYXQgc3RyaW5nICAgVGhlIGxvZ2dpbmcgZm9ybWF0IChqc29ufHBsYWluKSAoZGVmYXVsdCAmcXVvdDtwbGFpbiZxdW90OykKICAgICAgLS1sb2dfbGV2ZWwgc3RyaW5nICAgIFRoZSBsb2dnaW5nIGxldmVsICh0cmFjZXxkZWJ1Z3xpbmZvfHdhcm58ZXJyb3J8ZmF0YWx8cGFuaWMpIChkZWZhdWx0ICZxdW90O2luZm8mcXVvdDspCiAgICAgIC0tdHJhY2UgICAgICAgICAgICAgICBwcmludCBvdXQgZnVsbCBzdGFjayB0cmFjZSBvbiBlcnJvcnMKClVzZSAmcXVvdDtnYWlhZCBbY29tbWFuZF0gLS1oZWxwJnF1b3Q7IGZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IGEgY29tbWFuZC4K"}}),a._v(" "),t("p",[a._v("For each displayed command, you can use the "),t("code",[a._v("--help")]),a._v(" flag to get further information.")]),a._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgcXVlcnkgLS1oZWxwClVzYWdlOgogIGdhaWFkIHF1ZXJ5IFtmbGFnc10KICBnYWlhZCBxdWVyeSBbY29tbWFuZF0KCkFsaWFzZXM6CiAgcXVlcnksIHEKCkF2YWlsYWJsZSBDb21tYW5kczoKICBhY2NvdW50ICAgICAgICAgICAgICAgICAgUXVlcnkgZm9yIGFjY291bnQgYnkgYWRkcmVzcwogIGF1dGggICAgICAgICAgICAgICAgICAgICBRdWVyeWluZyBjb21tYW5kcyBmb3IgdGhlIGF1dGggbW9kdWxlCiAgYmFuayAgICAgICAgICAgICAgICAgICAgIFF1ZXJ5aW5nIGNvbW1hbmRzIGZvciB0aGUgYmFuayBtb2R1bGUKICBibG9jayAgICAgICAgICAgICAgICAgICAgR2V0IHZlcmlmaWVkIGRhdGEgZm9yIGEgdGhlIGJsb2NrIGF0IGdpdmVuIGhlaWdodAogIGRpc3RyaWJ1dGlvbiAgICAgICAgICAgICBRdWVyeWluZyBjb21tYW5kcyBmb3IgdGhlIGRpc3RyaWJ1dGlvbiBtb2R1bGUKICBldmlkZW5jZSAgICAgICAgICAgICAgICAgUXVlcnkgZm9yIGV2aWRlbmNlIGJ5IGhhc2ggb3IgZm9yIGFsbCAocGFnaW5hdGVkKSBzdWJtaXR0ZWQgZXZpZGVuY2UKICBnb3YgICAgICAgICAgICAgICAgICAgICAgUXVlcnlpbmcgY29tbWFuZHMgZm9yIHRoZSBnb3Zlcm5hbmNlIG1vZHVsZQogIGliYyAgICAgICAgICAgICAgICAgICAgICBRdWVyeWluZyBjb21tYW5kcyBmb3IgdGhlIElCQyBtb2R1bGUKICBpYmMtdHJhbnNmZXIgICAgICAgICAgICAgSUJDIGZ1bmdpYmxlIHRva2VuIHRyYW5zZmVyIHF1ZXJ5IHN1YmNvbW1hbmRzCiAgbWludCAgICAgICAgICAgICAgICAgICAgIFF1ZXJ5aW5nIGNvbW1hbmRzIGZvciB0aGUgbWludGluZyBtb2R1bGUKICBwYXJhbXMgICAgICAgICAgICAgICAgICAgUXVlcnlpbmcgY29tbWFuZHMgZm9yIHRoZSBwYXJhbXMgbW9kdWxlCiAgc2xhc2hpbmcgICAgICAgICAgICAgICAgIFF1ZXJ5aW5nIGNvbW1hbmRzIGZvciB0aGUgc2xhc2hpbmcgbW9kdWxlCiAgc3Rha2luZyAgICAgICAgICAgICAgICAgIFF1ZXJ5aW5nIGNvbW1hbmRzIGZvciB0aGUgc3Rha2luZyBtb2R1bGUKICB0ZW5kZXJtaW50LXZhbGlkYXRvci1zZXQgR2V0IHRoZSBmdWxsIHRlbmRlcm1pbnQgdmFsaWRhdG9yIHNldCBhdCBnaXZlbiBoZWlnaHQKICB0eCAgICAgICAgICAgICAgICAgICAgICAgUXVlcnkgZm9yIGEgdHJhbnNhY3Rpb24gYnkgaGFzaCBpbiBhIGNvbW1pdHRlZCBibG9jawogIHR4cyAgICAgICAgICAgICAgICAgICAgICBRdWVyeSBmb3IgcGFnaW5hdGVkIHRyYW5zYWN0aW9ucyB0aGF0IG1hdGNoIGEgc2V0IG9mIGV2ZW50cwogIHVwZ3JhZGUgICAgICAgICAgICAgICAgICBRdWVyeWluZyBjb21tYW5kcyBmb3IgdGhlIHVwZ3JhZGUgbW9kdWxlCgpGbGFnczoKICAgICAgLS1jaGFpbi1pZCBzdHJpbmcgICBUaGUgbmV0d29yayBjaGFpbiBJRAogIC1oLCAtLWhlbHAgICAgICAgICAgICAgIGhlbHAgZm9yIHF1ZXJ5CgpHbG9iYWwgRmxhZ3M6CiAgICAgIC0taG9tZSBzdHJpbmcgICAgICAgICBkaXJlY3RvcnkgZm9yIGNvbmZpZyBhbmQgZGF0YSAoZGVmYXVsdCAmcXVvdDsvVXNlcnMvdG9iaWFzLy5nYWlhJnF1b3Q7KQogICAgICAtLWxvZ19mb3JtYXQgc3RyaW5nICAgVGhlIGxvZ2dpbmcgZm9ybWF0IChqc29ufHBsYWluKSAoZGVmYXVsdCAmcXVvdDtwbGFpbiZxdW90OykKICAgICAgLS1sb2dfbGV2ZWwgc3RyaW5nICAgIFRoZSBsb2dnaW5nIGxldmVsICh0cmFjZXxkZWJ1Z3xpbmZvfHdhcm58ZXJyb3J8ZmF0YWx8cGFuaWMpIChkZWZhdWx0ICZxdW90O2luZm8mcXVvdDspCiAgICAgIC0tdHJhY2UgICAgICAgICAgICAgICBwcmludCBvdXQgZnVsbCBzdGFjayB0cmFjZSBvbiBlcnJvcnMKClVzZSAmcXVvdDtnYWlhZCBxdWVyeSBbY29tbWFuZF0gLS1oZWxwJnF1b3Q7IGZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IGEgY29tbWFuZC4K"}}),a._v(" "),t("h3",{attrs:{id:"remote-access-to-gaiad"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#remote-access-to-gaiad"}},[a._v("#")]),a._v(" Remote Access to gaiad")]),a._v(" "),t("p",[a._v("When choosing to remote access a Full Node and gaiad, you need a Full Node running and gaia installed on your local machine.")]),a._v(" "),t("p",[t("code",[a._v("gaiad")]),a._v(" is the tool that enables you to interact with the node that runs on the Cosmos Hub network, whether you run it yourself or not.")]),a._v(" "),t("p",[a._v("To set up "),t("code",[a._v("gaiad")]),a._v(" on a local machine and connect to an existing full node, use the following command:")]),a._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgY29uZmlnICZsdDtmbGFnJmd0OyAmbHQ7dmFsdWUmZ3Q7Cg=="}}),a._v(" "),t("p",[a._v("First, set up the address of the full node you want to connect to:")]),a._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgY29uZmlnIG5vZGUgJmx0O2hvc3QmZ3Q7OiZsdDtwb3J0CgovLyBleGFtcGxlOiBnYWlhZCBjb25maWcgbm9kZSBodHRwczovLzc3Ljg3LjEwNi4zMzoyNjY1NyAobm90ZTogdGhpcyBpcyBhIHBsYWNlaG9sZGVyKQo="}}),a._v(" "),t("p",[a._v("If you run your own full node locally, use "),t("code",[a._v("tcp://localhost:26657")]),a._v(" as the address.")]),a._v(" "),t("p",[a._v("Finally, set the "),t("code",[a._v("chain-id")]),a._v(" of the blockchain you want to interact with:")]),a._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgY29uZmlnIGNoYWluLWlkIGNvc21vc2h1Yi00Cg=="}}),a._v(" "),t("p",[a._v("Next, learn to use CLI commands to interact with the full node.\nYou can run these commands as remote control or when you are running it on your local machine.")]),a._v(" "),t("h3",{attrs:{id:"create-a-key-pair"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-a-key-pair"}},[a._v("#")]),a._v(" Create a Key Pair")]),a._v(" "),t("p",[a._v("The default key is "),t("code",[a._v("secp256k1 elliptic curve")]),a._v(". Use the "),t("code",[a._v("gaiad keys")]),a._v(" command to list the keys and generate a new key.")]),a._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQga2V5cyBhZGQgJmx0O3lvdXJfa2V5X25hbWUmZ3Q7Cg=="}}),a._v(" "),t("p",[a._v("You will be asked to create a password (at least 8 characters) for this key-pair. This will return the information listed below:")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("NAME")]),a._v(": Name of your key")]),a._v(" "),t("li",[t("code",[a._v("TYPE")]),a._v(": Type of your key, always "),t("code",[a._v("local")]),a._v(".")]),a._v(" "),t("li",[t("code",[a._v("ADDRESS")]),a._v(": Your address. Used to receive funds.")]),a._v(" "),t("li",[t("code",[a._v("PUBKEY")]),a._v(": Your public key. Useful for validators.")]),a._v(" "),t("li",[t("code",[a._v("MNEMONIC")]),a._v(": 24-word phrase. "),t("strong",[a._v("Save this mnemonic somewhere safe")]),a._v(". This phrase is required to recover your private key in case you forget the password. The mnemonic is displayed at the end of the output.")])]),a._v(" "),t("p",[a._v("You can see all available keys by typing:")]),a._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQga2V5cyBsaXN0Cg=="}}),a._v(" "),t("p",[a._v("Use the "),t("code",[a._v("--recover")]),a._v(" flag to add a key that imports a mnemonic to your keyring.")]),a._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQga2V5cyBhZGQgJmx0O3lvdXJfa2V5X25hbWUmZ3Q7IC0tcmVjb3Zlcgo="}}),a._v(" "),t("h4",{attrs:{id:"check-your-account"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#check-your-account"}},[a._v("#")]),a._v(" Check your Account")]),a._v(" "),t("p",[a._v("You can view your account by using the "),t("code",[a._v("query account")]),a._v(" command.")]),a._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgcXVlcnkgYWNjb3VudCAmbHQ7WU9VUl9BRERSRVNTJmd0Owo="}}),a._v(" "),t("p",[a._v("It will display your account type, account number, public key and current account sequence.")]),a._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"J0B0eXBlJzogL2Nvc21vcy5hdXRoLnYxYmV0YTEuQmFzZUFjY291bnQKYWNjb3VudF9udW1iZXI6ICZxdW90O3h4eHgmcXVvdDsKYWRkcmVzczogY29zbW9zeHh4eApwdWJfa2V5OgogICdAdHlwZSc6IC9jb3Ntb3MuY3J5cHRvLnNlY3AyNTZrMS5QdWJLZXkKICBrZXk6IHh4eApzZXF1ZW5jZTogJnF1b3Q7eCZxdW90Owo="}}),a._v(" "),t("h3",{attrs:{id:"check-your-balance"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#check-your-balance"}},[a._v("#")]),a._v(" Check your Balance")]),a._v(" "),t("p",[a._v("Query the account balance with the command:")]),a._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgcXVlcnkgYmFuayBiYWxhbmNlcyAmbHQ7WU9VUl9BRERSRVNTJmd0Owo="}}),a._v(" "),t("p",[a._v("The response contains keys "),t("code",[a._v("balances")]),a._v(" and "),t("code",[a._v("pagination")]),a._v(".\nEach "),t("code",[a._v("balances")]),a._v(" entry contains an "),t("code",[a._v("amount")]),a._v(" held, connected to a "),t("code",[a._v("denom")]),a._v(" identifier.\nThe typical $ATOM token is identified by the denom "),t("code",[a._v("uatom")]),a._v(". Where 1 "),t("code",[a._v("uatom")]),a._v(" is 0.000001 ATOM.")]),a._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"YmFsYW5jZXM6Ci0gYW1vdW50OiAmcXVvdDsxMjM0NTY3OCZxdW90OwogIGRlbm9tOiB1YXRvbQpwYWdpbmF0aW9uOgogIG5leHRfa2V5OiBudWxsCiAgdG90YWw6ICZxdW90OzAmcXVvdDsK"}}),a._v(" "),t("p",[a._v("When you query an account that has not received any token yet, the "),t("code",[a._v("balances")]),a._v(" entry is shown as an empty array.")]),a._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"YmFsYW5jZXM6IFtdCnBhZ2luYXRpb246CiAgbmV4dF9rZXk6IG51bGwKICB0b3RhbDogJnF1b3Q7MCZxdW90Owo="}}),a._v(" "),t("h4",{attrs:{id:"send-coins-using-the-cli"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#send-coins-using-the-cli"}},[a._v("#")]),a._v(" Send Coins Using the CLI")]),a._v(" "),t("p",[a._v("To send coins using the CLI:")]),a._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgdHggYmFuayBzZW5kIFtmcm9tX2tleV9vcl9hZGRyZXNzXSBbdG9fYWRkcmVzc10gW2Ftb3VudF0gW2ZsYWdzXQo="}}),a._v(" "),t("p",[a._v("Parameters:")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("<from_key_or_address>")]),a._v(": Key name or address of sending account.")]),a._v(" "),t("li",[t("code",[a._v("<to_address>")]),a._v(": Address of the recipient.")]),a._v(" "),t("li",[t("code",[a._v("<amount>")]),a._v(": This parameter accepts the format "),t("code",[a._v("<value|coinName>")]),a._v(", such as "),t("code",[a._v("1000000uatom")]),a._v(".")])]),a._v(" "),t("p",[a._v("Flags:")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("--chain-id")]),a._v(": This flag allows you to specify the id of the chain. There are different ids for different testnet chains and mainnet chains.")]),a._v(" "),t("li",[t("code",[a._v("--gas-prices")]),a._v(": This flag allows you to specify the gas prices you pay for the transaction. The format is used as "),t("code",[a._v("0.0025uatom")])])]),a._v(" "),t("h2",{attrs:{id:"rest-api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rest-api"}},[a._v("#")]),a._v(" REST API")]),a._v(" "),t("p",[a._v("The "),t("a",{attrs:{href:"https://v1.cosmos.network/rpc/v0.44.5",target:"_blank",rel:"noopener noreferrer"}},[a._v("REST API documents"),t("OutboundLink")],1),a._v(" list all the available endpoints that you can use to interact\nwith your full node. Learn "),t("RouterLink",{attrs:{to:"/hub-tutorials/join-mainnet.html#enable-the-rest-api"}},[a._v("how to enable the REST API")]),a._v(" on your full node.")],1),a._v(" "),t("h3",{attrs:{id:"listen-for-incoming-transactions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#listen-for-incoming-transactions"}},[a._v("#")]),a._v(" Listen for Incoming Transactions")]),a._v(" "),t("p",[a._v("The recommended way to listen for incoming transactions is to periodically query the blockchain by using the following HTTP endpoint:")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://cosmos.network/rpc/",target:"_blank",rel:"noopener noreferrer"}},[t("code",[a._v("/cosmos/bank/v1beta1/balances/{address}")]),t("OutboundLink")],1)])],1)}),[],!1,null,null,null);e.default=s.exports}}]);