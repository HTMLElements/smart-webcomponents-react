import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { ListMenu } from 'smart-webcomponents-react/listmenu';

const listMenuDataSource = [
  {
    label: 'OSI',
    items: [
      {
        label: 'Application Layer',
        items: [
          { label: 'SIP' },
          { label: 'DNS' },
          { label: 'FTP' },
          { label: 'RTP' },
          { label: 'DHCP' }
        ]
      },
      {
        label: 'Presentation Layer',
        items: [
          { label: 'SSL' },
          { label: 'TLS' }
        ]
      },
      {
        label: 'Session Layer',
        items: [
          { label: 'NetBIOS' },
          { label: 'SPDY' }
        ]
      },
      {
        label: 'Transport Layer',
        items: [
          { label: 'TCP' },
          { label: 'UDP' },
          { label: 'SCTP' }
        ]
      },
      {
        label: 'Network Layer',
        items: [
          { label: 'IP' },
          { label: 'ARP' },
          { label: 'ICMP' }
        ]
      },
      {
        label: 'Data Link Layer',
        items: [
          { label: 'ATM' },
          { label: 'SDLS' },
          { label: 'LLC' }
        ]
      },
      {
        label: 'Physical Layer',
        items: [
          { label: 'EIA/TIA-232' },
          { label: 'ITU-T V-Series' },
          { label: 'DSL' }
        ]
      }
    ]
  },
  {
    label: 'TCP/IP',
    items: [
      {
        label: 'Application Layer',
        items: [
          { label: 'DHCP' },
          { label: 'DNS' },
          { label: 'FTP' },
          { label: 'HTTP' },
          { label: 'IMAP' },
          { label: 'LDAP' },
          { label: 'XMPP' },
          { label: 'SSH' },
          { label: 'RIP' }
        ]
      },
      {
        label: 'Transport Layer',
        items: [
          { label: 'TCP' },
          { label: 'UDP' },
          { label: 'SCTP' }
        ]
      },
      {
        label: 'Internet Layer',
        items: [
          { label: 'IP' },
          { label: 'ICMP' },
          { label: 'ECN' }
        ]
      },
      {
        label: 'Link Layer',
        items: [
          { label: 'ARP' },
          { label: 'NDP' },
          { label: 'DSL' }
        ]
      }
    ]
  }
];

function App() {
  // No equivalent for init() or componentDidMount() since they're empty

  return (
    <div>
      <ListMenu id="listMenu" className="animation" dataSource={listMenuDataSource}></ListMenu>
    </div>
  );
}

export default App;