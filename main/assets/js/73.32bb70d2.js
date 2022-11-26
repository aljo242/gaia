(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{604:function(t,a,e){"use strict";e.r(a);var s=e(1),c=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"join-mainnet-quick-start"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#join-mainnet-quick-start"}},[t._v("#")]),t._v(" Join Mainnet Quick Start")]),t._v(" "),e("p",[e("strong",[t._v("Bootstrap a  "),e("code",[t._v("cosmoshub-4")]),t._v(" mainnet node")])]),t._v(" "),e("h3",{attrs:{id:"prerequisites"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[t._v("#")]),t._v(" Prerequisites")]),t._v(" "),e("blockquote",[e("p",[e("strong",[t._v("Note")]),t._v(": Make sure the "),e("RouterLink",{attrs:{to:"/getting-started/installation.html"}},[t._v("Gaia CLI is installed")]),t._v(".")],1)]),t._v(" "),e("h3",{attrs:{id:"sync-options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sync-options"}},[t._v("#")]),t._v(" Sync Options")]),t._v(" "),e("p",[t._v("To quickly get started, node operators can choose to sync via State Sync or by downloading a snapshot from Quicksync. State Sync works by replaying larger chunks of application state directly rather than replaying individual blocks or consensus rounds. Quicksync is a service provided courtesy of ChainLayer, and offers historical state of the chain available for download every 24 hours. For more advanced information on setting up a node, see the Sync Options section of the full "),e("RouterLink",{attrs:{to:"/hub-tutorials/join-mainnet.html"}},[t._v("Joining Mainnet Tutorial")])],1),t._v(" "),e("tabs",{attrs:{options:{useUrlFragment:!1}}},[e("tab",{attrs:{name:"State Sync"}},[e("p",[t._v("To enable state sync, visit an "),e("a",{attrs:{href:"https://www.mintscan.io/cosmos/blocks",target:"_blank",rel:"noopener noreferrer"}},[t._v("explorer"),e("OutboundLink")],1),t._v(" to get a recent block height and corresponding hash. A node operator can choose any height/hash in the current bonding period, but as the recommended snapshot period is 1000 blocks, it is advised to choose something close to current height - 1000. Set these parameters in the code snippet below "),e("code",[t._v("<BLOCK_HEIGHT>")]),t._v(" and "),e("code",[t._v("<BLOCK_HASH>")])]),t._v(" "),e("p",[t._v("For reference, the list of "),e("code",[t._v("rpc_servers")]),t._v(" and "),e("code",[t._v("persistent")]),t._v(" peers can be found in the "),e("a",{attrs:{href:"https://github.com/cosmos/chain-registry/blob/master/cosmoshub/chain.json",target:"_blank",rel:"noopener noreferrer"}},[t._v("cosmos hub chain-registry repo"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"IyBCdWlsZCBnYWlhZCBiaW5hcnkgYW5kIGluaXRpYWxpemUgY2hhaW4KY2QgJEhPTUUKZ2l0IGNsb25lIC1iIHY3LjAuMCBodHRwczovL2dpdGh1Yi5jb20vY29zbW9zL2dhaWEgLS1kZXB0aD0xCmNkIGdhaWFkCm1ha2UgaW5zdGFsbApnYWlhZCBpbml0IENVU1RPTV9NT05JS0VSIC0tY2hhaW4taWQgY29zbW9zaHViLTQKCiNTZXQgbWluaW11bSBnYXMgcHJpY2UgJmFtcDsgcGVlcnMKc2VkIC1pJycgJ3MvbWluaW11bS1nYXMtcHJpY2VzID0gJnF1b3Q7JnF1b3Q7L21pbmltdW0tZ2FzLXByaWNlcyA9ICZxdW90OzAuMDAyNXVhdG9tJnF1b3Q7LycgJEhPTUUvLmdhaWEvY29uZmlnL2FwcC50b21sCnNlZCAtaScnICdzL3BlcnNpc3RlbnRfcGVlcnMgPSAmcXVvdDsmcXVvdDsvcGVyc2lzdGVudF9wZWVycyA9ICZxdW90OzZlMDhiMjMzMTVhOWYwZTFiMjNjN2VkODQ3OTM0ZjdkNmY4NDhjOGJAMTY1LjIzMi4xNTYuODY6MjY2NTYsZWUyNzI0NWQ4OGM2MzJhNTU2Y2Y3MmNjN2YzNTg3MzgwYzA5YjQ2OUA0NS43OS4yNDkuMjUzOjI2NjU2LDUzOGViZTAwODZmMGY1ZTljYTkyMmRhZTA0NjJjYzg3ZTIyZjBhNTBAMzQuMTIyLjM0LjY3OjI2NjU2LGQzMjA5YjlmODhlZWM2NGYxMDU1NWExMWVjYmY3OTdiYjBmYTI5ZjRAMzQuMTI1LjE2OS4yMzM6MjY2NTYsYmRjMmMzZDQxMGNhNzczMTQxMWI3ZTQ2YTI1MjAxMjMyM2ZiYmYzN0AzNC44My4yMDkuMTY2OjI2NjU2LDU4NTc5NDczN2U2YjMxODk1NzA4OGU2NDVlMTdjMDY2OWYzYjExZmNANTQuMTYwLjEyMy4zNDoyNjY1Niw1YjRlZDQ3NmUwMWM0OWIyMzg1MTI1OGQ4NjdjYzBjZmMwYzEwZTU4QDIwNi4xODkuNC4yMjc6MjY2NTYmcXVvdDsvJyAkSE9NRS8uZ2FpYS9jb25maWcvY29uZmlnLnRvbWwKCiMgQ29uZmlndXJlIFN0YXRlIHN5bmMKc2VkIC1pJycgJ3MvZW5hYmxlID0gZmFsc2UvZW5hYmxlID0gdHJ1ZS8nICRIT01FLy5nYWlhL2NvbmZpZy9jb25maWcudG9tbApzZWQgLWknJyAncy90cnVzdF9oZWlnaHQgPSAwL3RydXN0X2hlaWdodCA9ICZsdDtCTE9DS19IRUlHSFQmZ3Q7LycgJEhPTUUvLmdhaWEvY29uZmlnL2NvbmZpZy50b21sCnNlZCAtaScnICdzL3RydXN0X2hhc2ggPSAmcXVvdDsmcXVvdDsvdHJ1c3RfaGFzaCA9ICZxdW90OyZsdDtCTE9DS19IQVNIJmd0OyZxdW90Oy8nICRIT01FLy5nYWlhL2NvbmZpZy9jb25maWcudG9tbApzZWQgLWknJyAncy9ycGNfc2VydmVycyA9ICZxdW90OyZxdW90Oy9ycGNfc2VydmVycyA9ICZxdW90O2h0dHBzOlwvXC9ycGMuY29zbW9zLm5ldHdvcms6NDQzLGh0dHBzOlwvXC9ycGMuY29zbW9zLm5ldHdvcms6NDQzJnF1b3Q7LycgJEhPTUUvLmdhaWEvY29uZmlnL2NvbmZpZy50b21sCgojU3RhcnQgR2FpYQpnYWlhZCBzdGFydCAtLXgtY3Jpc2lzLXNraXAtYXNzZXJ0LWludmFyaWFudHMK"}})],1),t._v(" "),e("tab",{attrs:{name:"Quicksync"}},[e("blockquote",[e("p",[e("strong",[t._v("Note")]),t._v(": Make sure to set the "),e("code",[t._v("--home")]),t._v(" flag when initializing and starting "),e("code",[t._v("gaiad")]),t._v(" if mounting quicksync data externally.")])]),t._v(" "),e("h4",{attrs:{id:"create-gaia-home-config"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-gaia-home-config"}},[t._v("#")]),t._v(" Create Gaia Home & Config")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"bWtkaXIgJEhPTUUvLmdhaWEvY29uZmlnIC1wCg=="}}),t._v(" "),e("h4",{attrs:{id:"start-quicksync-download"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#start-quicksync-download"}},[t._v("#")]),t._v(" Start Quicksync Download")]),t._v(" "),e("p",[t._v("Node Operators can decide how much of historical state they want to preserve by choosing between "),e("code",[t._v("Pruned")]),t._v(", "),e("code",[t._v("Default")]),t._v(", and "),e("code",[t._v("Archive")]),t._v(". See the "),e("a",{attrs:{href:"https://quicksync.io/networks/cosmos.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Quicksync.io downloads"),e("OutboundLink")],1),t._v(" for up to date snapshot sizes.")]),t._v(" "),e("tabs",{attrs:{options:{useUrlFragment:!1}}},[e("tab",{attrs:{name:"Default"}},[e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash=",base64:"c3VkbyBhcHQtZ2V0IGluc3RhbGwgd2dldCBsaWJsejQtdG9vbCBhcmlhMiBqcSAteQoKZXhwb3J0IFVSTD1gY3VybCAtTCBodHRwczovL3F1aWNrc3luYy5pby9jb3Ntb3MuanNvbnxqcSAtciAnLltdIHxzZWxlY3QoLmZpbGU9PSZxdW90O2Nvc21vc2h1Yi00LWRlZmF1bHQmcXVvdDspfC51cmwnYAoKZWNobyAkVVJMCgpjZCAkSE9NRS8uZ2FpYQoKYXJpYTJjIC14NSAkVVJMCg=="}})],1),t._v(" "),e("tab",{attrs:{name:"Pruned"}},[e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash=",base64:"c3VkbyBhcHQtZ2V0IGluc3RhbGwgd2dldCBsaWJsejQtdG9vbCBhcmlhMiBqcSAteQoKZXhwb3J0IFVSTD1gY3VybCAtTCBodHRwczovL3F1aWNrc3luYy5pby9jb3Ntb3MuanNvbnxqcSAtciAnLltdIHxzZWxlY3QoLmZpbGU9PSZxdW90O2Nvc21vc2h1Yi00LXBydW5lZCZxdW90Oyl8LnVybCdgCgplY2hvICRVUkwKCmNkICRIT01FLy5nYWlhCgphcmlhMmMgLXg1ICRVUkwK"}})],1),t._v(" "),e("tab",{attrs:{name:"Archive"}},[e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash=",base64:"c3VkbyBhcHQtZ2V0IGluc3RhbGwgd2dldCBsaWJsejQtdG9vbCBhcmlhMiBqcSAteQoKZXhwb3J0IFVSTD1gY3VybCAtTCBodHRwczovL3F1aWNrc3luYy5pby9jb3Ntb3MuanNvbnxqcSAtciAnLltdIHxzZWxlY3QoLmZpbGU9PSZxdW90O2Nvc21vc2h1Yi00LWFyY2hpdmUmcXVvdDspfC51cmwnYAoKZWNobyAkVVJMCgpjZCAkSE9NRS8uZ2FpYQoKYXJpYTJjIC14NSAkVVJMCg=="}})],1)],1),t._v(" "),e("p",[e("strong",[t._v("The download logs should look like the following")])]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"MDEvMTEgMDc6NDg6MTcgW05PVElDRV0gRG93bmxvYWRpbmcgMSBpdGVtKHMpClsjN2NjYTVhIDQ4NE1pQi8yNzFHaUIoMCUpIENOOjUgREw6MTA4TWlCIEVUQTo0Mm00MXNdCg=="}}),t._v(" "),e("p",[e("strong",[t._v("Completed Download Process:")])]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"WyM3Y2NhNWEgMjcxR2lCLzI3MUdpQig5OSUpIENOOjEgREw6NzdNaUJdCjAxLzExIDA4OjMyOjE5IFtOT1RJQ0VdIERvd25sb2FkIGNvbXBsZXRlOiAvbW50L3F1aWNrc3luY18wMS9jb3Ntb3NodWItNC1wcnVuZWQuMjAyMjAxMTEuMDMxMC50YXIubHo0CgpEb3dubG9hZCBSZXN1bHRzOgpnaWQgICB8c3RhdHxhdmcgc3BlZWQgIHxwYXRoL1VSSQo9PT09PT0rPT09PSs9PT09PT09PT09PSs9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09CjdjY2E1YXxPSyAgfCAgIDEwNU1pQi9zfC9tbnQvcXVpY2tzeW5jXzAxL2Nvc21vc2h1Yi00LXBydW5lZC4yMDIyMDExMS4wMzEwLnRhci5sejQKClN0YXR1cyBMZWdlbmQ6CihPSyk6ZG93bmxvYWQgY29tcGxldGVkLgo="}}),t._v(" "),e("h4",{attrs:{id:"unzip"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#unzip"}},[t._v("#")]),t._v(" Unzip")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"bHo0IC1jIC1kIGBiYXNlbmFtZSAkVVJMYCB8IHRhciB4ZiAtCg=="}}),t._v(" "),e("h4",{attrs:{id:"copy-address-book-quicksync"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#copy-address-book-quicksync"}},[t._v("#")]),t._v(" Copy Address Book Quicksync")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Y3VybCBodHRwczovL3F1aWNrc3luYy5pby9hZGRyYm9vay5jb3Ntb3MuanNvbiAmZ3Q7ICRIT01FLy5nYWlhL2NvbmZpZy9hZGRyYm9vay5qc29uCg=="}}),t._v(" "),e("h4",{attrs:{id:"start-gaia"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#start-gaia"}},[t._v("#")]),t._v(" Start Gaia")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgc3RhcnQgLS14LWNyaXNpcy1za2lwLWFzc2VydC1pbnZhcmlhbnRzCgo="}})],1)],1)],1)}),[],!1,null,null,null);a.default=c.exports}}]);