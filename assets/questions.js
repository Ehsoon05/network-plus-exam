const QUESTIONS = [
  {
    "id": 1,
    "question": "Which of the following types of hubs does not regenerate the signal and therefore is not a repeater?",
    "options": [
      {
        "id": "A",
        "text": "Active hub"
      },
      {
        "id": "B",
        "text": "Hybrid hub"
      },
      {
        "id": "C",
        "text": "Passive hub"
      },
      {
        "id": "D",
        "text": "Switching hub"
      }
    ],
    "answers": [
      "C"
    ]
  },
  {
    "id": 2,
    "question": "What is the Microsoft term for a peer-to-peer network?",
    "options": [
      {
        "id": "A",
        "text": "Client-server"
      },
      {
        "id": "B",
        "text": "Domain"
      },
      {
        "id": "C",
        "text": "Workgroup"
      },
      {
        "id": "D",
        "text": "Active Directory"
      }
    ],
    "answers": [
      "C"
    ]
  },
  {
    "id": 3,
    "question": "Which type of server is responsible for storing files for users on the network?",
    "options": [
      {
        "id": "A",
        "text": "File and print server"
      },
      {
        "id": "B",
        "text": "Web server"
      },
      {
        "id": "C",
        "text": "Directory server"
      },
      {
        "id": "D",
        "text": "Application server"
      }
    ],
    "answers": [
      "A"
    ]
  },
  {
    "id": 4,
    "question": "What is the well-known port number for the HTTP service?",
    "options": [
      {
        "id": "A",
        "text": "20"
      },
      {
        "id": "B",
        "text": "21"
      },
      {
        "id": "C",
        "text": "80"
      },
      {
        "id": "D",
        "text": "25"
      }
    ],
    "answers": [
      "C"
    ]
  },
  {
    "id": 5,
    "question": "Which network service is responsible for assigning IP addresses to systems on the network when they boot up?",
    "options": [
      {
        "id": "A",
        "text": "DNS"
      },
      {
        "id": "B",
        "text": "WINS"
      },
      {
        "id": "C",
        "text": "DHCP"
      },
      {
        "id": "D",
        "text": "Server"
      }
    ],
    "answers": [
      "C"
    ]
  },
  {
    "id": 6,
    "question": "Which protocol is responsible for sending e-mail across the Internet?",
    "options": [
      {
        "id": "A",
        "text": "POP3"
      },
      {
        "id": "B",
        "text": "IMAP4"
      },
      {
        "id": "C",
        "text": "HTTP"
      },
      {
        "id": "D",
        "text": "SMTP"
      }
    ],
    "answers": [
      "D"
    ]
  },
  {
    "id": 7,
    "question": "Which protocol is responsible for connection-oriented communication?",
    "options": [
      {
        "id": "A",
        "text": "TCP"
      },
      {
        "id": "B",
        "text": "IP"
      },
      {
        "id": "C",
        "text": "UDP"
      },
      {
        "id": "D",
        "text": "ICMP"
      }
    ],
    "answers": [
      "A"
    ]
  },
  {
    "id": 8,
    "question": "Which protocol is responsible for error reporting and status information?",
    "options": [
      {
        "id": "A",
        "text": "ICMP"
      },
      {
        "id": "B",
        "text": "TCP"
      },
      {
        "id": "C",
        "text": "UDP"
      },
      {
        "id": "D",
        "text": "IP"
      }
    ],
    "answers": [
      "A"
    ]
  },
  {
    "id": 9,
    "question": "Which protocol is responsible for logical addressing and delivery of packets?",
    "options": [
      {
        "id": "A",
        "text": "ICMP"
      },
      {
        "id": "B",
        "text": "TCP"
      },
      {
        "id": "C",
        "text": "IP"
      },
      {
        "id": "D",
        "text": "UDP"
      }
    ],
    "answers": [
      "C"
    ]
  },
  {
    "id": 10,
    "question": "Which protocol is defined to use TCP port 23?",
    "options": [
      {
        "id": "A",
        "text": "Telnet"
      },
      {
        "id": "B",
        "text": "FTP"
      },
      {
        "id": "C",
        "text": "HTTP"
      },
      {
        "id": "D",
        "text": "SMTP"
      }
    ],
    "answers": [
      "A"
    ]
  },
  {
    "id": 11,
    "question": "Which of the following represents an application-layer protocol?",
    "options": [
      {
        "id": "A",
        "text": "SMTP"
      },
      {
        "id": "B",
        "text": "IP"
      },
      {
        "id": "C",
        "text": "UDP"
      },
      {
        "id": "D",
        "text": "TCP"
      }
    ],
    "answers": [
      "A"
    ]
  },
  {
    "id": 12,
    "question": "Which utility is used to facilitate file transfers between two remote hosts?",
    "options": [
      {
        "id": "A",
        "text": "FTP"
      },
      {
        "id": "B",
        "text": "Telnet"
      },
      {
        "id": "C",
        "text": "Ping"
      },
      {
        "id": "D",
        "text": "None of the above"
      }
    ],
    "answers": [
      "A"
    ]
  },
  {
    "id": 13,
    "question": "Which of the following DHCP settings defines the range of dynamic IP addresses?",
    "options": [
      {
        "id": "A",
        "text": "Exclusions"
      },
      {
        "id": "B",
        "text": "Pool"
      },
      {
        "id": "C",
        "text": "Reservations"
      },
      {
        "id": "D",
        "text": "Scope options"
      }
    ],
    "answers": [
      "B"
    ]
  },
  {
    "id": 14,
    "question": "Which of the following is not a layer in the OSI model?",
    "options": [
      {
        "id": "A",
        "text": "Physical"
      },
      {
        "id": "B",
        "text": "Transport"
      },
      {
        "id": "C",
        "text": "Network"
      },
      {
        "id": "D",
        "text": "Data transmission"
      }
    ],
    "answers": [
      "D"
    ]
  },
  {
    "id": 15,
    "question": "Which of the following functions can be performed at layer 6 of the OSI model? (Choose all that apply.)",
    "options": [
      {
        "id": "A",
        "text": "Routing of the message"
      },
      {
        "id": "B",
        "text": "Compression"
      },
      {
        "id": "C",
        "text": "Encryption"
      },
      {
        "id": "D",
        "text": "Converting the message to a format that is understood by the destination"
      }
    ],
    "answers": [
      "B",
      "C",
      "D"
    ]
  },
  {
    "id": 16,
    "question": "Which layer of the OSI model is responsible for converting the packet to an electrical signal that will be placed on the wire?",
    "options": [
      {
        "id": "A",
        "text": "Layer 1"
      },
      {
        "id": "B",
        "text": "Layer 4"
      },
      {
        "id": "C",
        "text": "Layer 3"
      },
      {
        "id": "D",
        "text": "Layer 2"
      }
    ],
    "answers": [
      "A"
    ]
  },
  {
    "id": 17,
    "question": "Which layer of the OSI model does a router run at?",
    "options": [
      {
        "id": "A",
        "text": "Layer 4"
      },
      {
        "id": "B",
        "text": "Layer 1"
      },
      {
        "id": "C",
        "text": "Layer 3"
      },
      {
        "id": "D",
        "text": "Layer 2"
      }
    ],
    "answers": [
      "C"
    ]
  },
  {
    "id": 18,
    "question": "Which of the following layers does a gateway run at? (Choose the best answer.)",
    "options": [
      {
        "id": "A",
        "text": "Layer 4"
      },
      {
        "id": "B",
        "text": "Layer 1"
      },
      {
        "id": "C",
        "text": "Layer 5"
      },
      {
        "id": "D",
        "text": "All layers"
      }
    ],
    "answers": [
      "D"
    ]
  },
  {
    "id": 19,
    "question": "Which layer of the OSI model does the IP protocol run at?",
    "options": [
      {
        "id": "A",
        "text": "Layer 2"
      },
      {
        "id": "B",
        "text": "Layer 3"
      },
      {
        "id": "C",
        "text": "Layer 4"
      },
      {
        "id": "D",
        "text": "Layer 5"
      }
    ],
    "answers": [
      "B"
    ]
  },
  {
    "id": 20,
    "question": "Which of the following describes the function of Layer 3 of the OSI model?",
    "options": [
      {
        "id": "A",
        "text": "It provides sequencing and acknowledgments for connection-oriented communication."
      },
      {
        "id": "B",
        "text": "It provides connectionless communication using logical addressing."
      },
      {
        "id": "C",
        "text": "It provides error detection through the FCS for frames transmitted."
      },
      {
        "id": "D",
        "text": "It provides encryption and compression for data received."
      }
    ],
    "answers": [
      "B"
    ]
  },
  {
    "id": 21,
    "question": "Which of the following statements about the OSI model is true?",
    "options": [
      {
        "id": "A",
        "text": "The application layer does not need to know what type of network is being used because that is dealt with by a layer below it."
      },
      {
        "id": "B",
        "text": "The network layer deals with the network cabling and network device interface compatibility."
      },
      {
        "id": "C",
        "text": "The transport layer deals with how the data is transported from one router to another based on the IP header."
      },
      {
        "id": "D",
        "text": "The model consists of four layers that describe the requirements a technician follows to troubleshoot and support a network."
      }
    ],
    "answers": [
      "A"
    ]
  },
  {
    "id": 22,
    "question": "Which of the following protocols are layer-3 protocols? (Choose two.)",
    "options": [
      {
        "id": "A",
        "text": "ICMP"
      },
      {
        "id": "B",
        "text": "TCP"
      },
      {
        "id": "C",
        "text": "IP"
      },
      {
        "id": "D",
        "text": "UDP"
      }
    ],
    "answers": [
      "A",
      "C"
    ]
  },
  {
    "id": 23,
    "question": "Your team is troubleshooting connectivity issues, and your coworker has asked you what the layer-2 address of one of the laptops on the network is. Which of the following addresses would you give?",
    "options": [
      {
        "id": "A",
        "text": "COMPUTER1"
      },
      {
        "id": "B",
        "text": "00-02-3F-6B-25-13"
      },
      {
        "id": "C",
        "text": "192.168.3.200"
      },
      {
        "id": "D",
        "text": "www.gleneclarke.com"
      }
    ],
    "answers": [
      "B"
    ]
  },
  {
    "id": 24,
    "question": "Which of the following protocols are transport-layer protocols? (Choose two.)",
    "options": [
      {
        "id": "A",
        "text": "ICMP"
      },
      {
        "id": "B",
        "text": "TCP"
      },
      {
        "id": "C",
        "text": "IP"
      },
      {
        "id": "D",
        "text": "UDP"
      }
    ],
    "answers": [
      "B",
      "D"
    ]
  },
  {
    "id": 25,
    "question": "You need to configure one of the routers in the office with a layer-3 address. Which of the following addresses would you use?",
    "options": [
      {
        "id": "A",
        "text": "COMPUTER1"
      },
      {
        "id": "B",
        "text": "00-02-3F-6B-25-13"
      },
      {
        "id": "C",
        "text": "192.168.3.200"
      },
      {
        "id": "D",
        "text": "www.gleneclarke.com"
      }
    ],
    "answers": [
      "C"
    ]
  },
  {
    "id": 26,
    "question": "Which of the following protocols are layer-4 protocols? (Choose all that apply.)",
    "options": [
      {
        "id": "A",
        "text": "TCP"
      },
      {
        "id": "B",
        "text": "IP"
      },
      {
        "id": "C",
        "text": "ARP"
      },
      {
        "id": "D",
        "text": "UDP"
      }
    ],
    "answers": [
      "A",
      "D"
    ]
  },
  {
    "id": 27,
    "question": "Which protocol is responsible for converting the IP address to a MAC address?",
    "options": [
      {
        "id": "A",
        "text": "IP"
      },
      {
        "id": "B",
        "text": "TCP"
      },
      {
        "id": "C",
        "text": "ARP"
      },
      {
        "id": "D",
        "text": "ICMP"
      }
    ],
    "answers": [
      "C"
    ]
  },
  {
    "id": 28,
    "question": "Which dynamic routing protocol is a distance vector protocol?",
    "options": [
      {
        "id": "A",
        "text": "OSPF"
      },
      {
        "id": "B",
        "text": "DIP"
      },
      {
        "id": "C",
        "text": "RIP"
      },
      {
        "id": "D",
        "text": "NIP"
      }
    ],
    "answers": [
      "C"
    ]
  },
  {
    "id": 29,
    "question": "Which dynamic routing protocol monitors the state of the links?",
    "options": [
      {
        "id": "A",
        "text": "OSPF"
      },
      {
        "id": "B",
        "text": "SIP"
      },
      {
        "id": "C",
        "text": "RIP"
      },
      {
        "id": "D",
        "text": "SLIP"
      }
    ],
    "answers": [
      "A"
    ]
  },
  {
    "id": 30,
    "question": "What type of NAT allows a number of internal systems to use the same public IP address?",
    "options": [
      {
        "id": "A",
        "text": "Static NAT"
      },
      {
        "id": "B",
        "text": "SNAT"
      },
      {
        "id": "C",
        "text": "TNAT"
      },
      {
        "id": "D",
        "text": "NAT overloading"
      }
    ],
    "answers": [
      "D"
    ]
  },
  {
    "id": 31,
    "question": "What mechanism does NAT use to allow multiple systems on the network to use the same public IP address when connecting to the Internet?",
    "options": [
      {
        "id": "A",
        "text": "SNAT"
      },
      {
        "id": "B",
        "text": "PAT"
      },
      {
        "id": "C",
        "text": "TNAT"
      },
      {
        "id": "D",
        "text": "JNAT"
      }
    ],
    "answers": [
      "B"
    ]
  },
  {
    "id": 32,
    "question": "What type of NAT involves having a single public IP address mapped to a single private address?",
    "options": [
      {
        "id": "A",
        "text": "Static NAT"
      },
      {
        "id": "B",
        "text": "PAT"
      },
      {
        "id": "C",
        "text": "TNAT"
      },
      {
        "id": "D",
        "text": "NAT overloading"
      }
    ],
    "answers": [
      "A"
    ]
  },
  {
    "id": 33,
    "question": "Router A learns the same route from two different neighbors, one of the neighbor routers is an OSPF neighbor and the other is an EIGRP neighbor. What is the administrative distance of the route that will be installed in the routing table?",
    "options": [
      {
        "id": "A",
        "text": "20"
      },
      {
        "id": "B",
        "text": "90"
      },
      {
        "id": "C",
        "text": "110"
      },
      {
        "id": "D",
        "text": "115"
      }
    ],
    "answers": [
      "B"
    ]
  },
  {
    "id": 34,
    "question": "Which utility can be used to display and modify the table that maintains the TCP/IP address-to-MAC address translation?",
    "options": [
      {
        "id": "A",
        "text": "NBTSTAT"
      },
      {
        "id": "B",
        "text": "Telnet"
      },
      {
        "id": "C",
        "text": "ARP"
      },
      {
        "id": "D",
        "text": "SNMP"
      }
    ],
    "answers": [
      "C"
    ]
  },
  {
    "id": 35,
    "question": "How many bits in an IP address?",
    "options": [
      {
        "id": "A",
        "text": "8 bits"
      },
      {
        "id": "B",
        "text": "32 bits"
      },
      {
        "id": "C",
        "text": "48 bits"
      },
      {
        "id": "D",
        "text": "96 bits"
      }
    ],
    "answers": [
      "B"
    ]
  },
  {
    "id": 36,
    "question": "How many octets in an IP address?",
    "options": [
      {
        "id": "A",
        "text": "1"
      },
      {
        "id": "B",
        "text": "2"
      },
      {
        "id": "C",
        "text": "3"
      },
      {
        "id": "D",
        "text": "4"
      }
    ],
    "answers": [
      "D"
    ]
  },
  {
    "id": 37,
    "question": "A computer with a subnet mask of 255.255.255.0 has how many octets for the network ID?",
    "options": [
      {
        "id": "A",
        "text": "1"
      },
      {
        "id": "B",
        "text": "2"
      },
      {
        "id": "C",
        "text": "3"
      },
      {
        "id": "D",
        "text": "4"
      }
    ],
    "answers": [
      "C"
    ]
  },
  {
    "id": 38,
    "question": "A computer with the IP address of 134.67.89.12 and a subnet mask of 255.255.0.0 is on the same network with which of the following systems?",
    "options": [
      {
        "id": "A",
        "text": "134.76.89.11"
      },
      {
        "id": "B",
        "text": "134.67.112.23"
      },
      {
        "id": "C",
        "text": "13.4.67.34"
      },
      {
        "id": "D",
        "text": "109.67.45.10"
      }
    ],
    "answers": [
      "B"
    ]
  },
  {
    "id": 39,
    "question": "Which network address class supports 65,534 hosts?",
    "options": [
      {
        "id": "A",
        "text": "Class A"
      },
      {
        "id": "B",
        "text": "Class B"
      },
      {
        "id": "C",
        "text": "Class C"
      },
      {
        "id": "D",
        "text": "Class D"
      }
    ],
    "answers": [
      "B"
    ]
  },
  {
    "id": 40,
    "question": "What is the default subnet mask for a class C network?",
    "options": [
      {
        "id": "A",
        "text": "255.0.0.0"
      },
      {
        "id": "B",
        "text": "225.225.0.0"
      },
      {
        "id": "C",
        "text": "255.255.255.0"
      },
      {
        "id": "D",
        "text": "225.255.255.255"
      }
    ],
    "answers": [
      "C"
    ]
  },
  {
    "id": 41,
    "question": "Which address is reserved for internal loopback functions?",
    "options": [
      {
        "id": "A",
        "text": "0.0.0.0"
      },
      {
        "id": "B",
        "text": "1.0.0.1"
      },
      {
        "id": "C",
        "text": "121.0.0.1"
      },
      {
        "id": "D",
        "text": "127.0.0.1"
      }
    ],
    "answers": [
      "D"
    ]
  },
  {
    "id": 42,
    "question": "Which of the following addresses is a private IP address? (Choose all that apply.)",
    "options": [
      {
        "id": "A",
        "text": "10.0.0.34"
      },
      {
        "id": "B",
        "text": "191.167.34.5"
      },
      {
        "id": "C",
        "text": "172.16.7.99"
      },
      {
        "id": "D",
        "text": "12.108.56.7"
      }
    ],
    "answers": [
      "A",
      "C"
    ]
  },
  {
    "id": 43,
    "question": "What is the subnet mask for 171.103.2.30?",
    "options": [
      {
        "id": "A",
        "text": "255.0.0.0"
      },
      {
        "id": "B",
        "text": "255.255.0.0"
      },
      {
        "id": "C",
        "text": "255.255.255.0"
      },
      {
        "id": "D",
        "text": "255.255.255.255"
      }
    ],
    "answers": [
      "B"
    ]
  },
  {
    "id": 44,
    "question": "You have a network ID of 131.107.0.0 and you would like to subnet your network into six networks. What is your new subnet mask?",
    "options": [
      {
        "id": "A",
        "text": "255.224.0.0"
      },
      {
        "id": "B",
        "text": "255.255.224.0"
      },
      {
        "id": "C",
        "text": "255.192.0.0"
      },
      {
        "id": "D",
        "text": "255.255.192.0"
      }
    ],
    "answers": [
      "B"
    ]
  },
  {
    "id": 45,
    "question": "You want to divide your network into eight networks. How many bits will you need to take from the host ID portion of the subnet mask?",
    "options": [
      {
        "id": "A",
        "text": "2"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "4"
      },
      {
        "id": "D",
        "text": "6"
      }
    ],
    "answers": [
      "B"
    ]
  },
  {
    "id": 46,
    "question": "In binary, how do you calculate the broadcast address of a network range?",
    "options": [
      {
        "id": "A",
        "text": "All host bits set to 0"
      },
      {
        "id": "B",
        "text": "All host bits set to 0, except for the low-order bit"
      },
      {
        "id": "C",
        "text": "All host bits set to 1, except for the low-order bit"
      },
      {
        "id": "D",
        "text": "All host bits set to 1"
      }
    ],
    "answers": [
      "D"
    ]
  },
  {
    "id": 47,
    "question": "In binary, how do you calculate the network ID of a network range?",
    "options": [
      {
        "id": "A",
        "text": "All host bits set to 0"
      },
      {
        "id": "B",
        "text": "All host bits set to 0, except for the low-order bit"
      },
      {
        "id": "C",
        "text": "All host bits set to 1, except for the low-order bit"
      },
      {
        "id": "D",
        "text": "All host bits set to 1"
      }
    ],
    "answers": [
      "A"
    ]
  },
  {
    "id": 48,
    "question": "The last valid address of a subnet is always:",
    "options": [
      {
        "id": "A",
        "text": "One more than the broadcast address"
      },
      {
        "id": "B",
        "text": "One less than the broadcast address"
      },
      {
        "id": "C",
        "text": "One more than the network ID"
      },
      {
        "id": "D",
        "text": "One less than the network ID"
      }
    ],
    "answers": [
      "B"
    ]
  },
  {
    "id": 49,
    "question": "Which of the following is an example of CIDR notation?",
    "options": [
      {
        "id": "A",
        "text": "16/10.34.56.78"
      },
      {
        "id": "B",
        "text": "10.34.56.78"
      },
      {
        "id": "C",
        "text": "10.34.56.0"
      },
      {
        "id": "D",
        "text": "10.34.56.78/16"
      }
    ],
    "answers": [
      "D"
    ]
  },
  {
    "id": 50,
    "question": "Your router has the IP address of 216.83.11.65/27. You wish to connect a new system on the network. Which of the following addresses would you assign to that new system?",
    "options": [
      {
        "id": "A",
        "text": "216.83.11.45"
      },
      {
        "id": "B",
        "text": "216.83.11.87"
      },
      {
        "id": "C",
        "text": "216.83.11.95"
      },
      {
        "id": "D",
        "text": "216.83.11.96"
      }
    ],
    "answers": [
      "B"
    ]
  },
  {
    "id": 51,
    "question": "Which of the following would be the MOST efficient subnet mask for a point-to-point link?",
    "options": [
      {
        "id": "A",
        "text": "/28"
      },
      {
        "id": "B",
        "text": "/29"
      },
      {
        "id": "C",
        "text": "/31"
      },
      {
        "id": "D",
        "text": "/32"
      }
    ],
    "answers": [
      "D"
    ]
  },
  {
    "id": 52,
    "question": "Which of the following answers lists the dotted-decimal notation (DDN) equivalent of /30?",
    "options": [
      {
        "id": "A",
        "text": "255.255.255.192"
      },
      {
        "id": "B",
        "text": "255.255.255.252"
      },
      {
        "id": "C",
        "text": "255.255.255.240"
      },
      {
        "id": "D",
        "text": "255.255.254.0"
      },
      {
        "id": "E",
        "text": "255.255.255.0"
      }
    ],
    "answers": [
      "B"
    ]
  },
  {
    "id": 53,
    "question": "Which of the following statements is true about classless IP addressing concepts?",
    "options": [
      {
        "id": "A",
        "text": "Uses a 128-bit IP address"
      },
      {
        "id": "B",
        "text": "Applies only for Class A and B networks"
      },
      {
        "id": "C",
        "text": "Separates IP addresses into network, subnet, and host parts"
      },
      {
        "id": "D",
        "text": "Ignores Class A, B, and C network rules"
      }
    ],
    "answers": [
      "D"
    ]
  },
  {
    "id": 54,
    "question": "Which of the following masks, when used as the only mask within a Class B network, would supply enough subnet bits to support 100 subnets? (Choose two.)",
    "options": [
      {
        "id": "A",
        "text": "/24"
      },
      {
        "id": "B",
        "text": "255.255.255.252"
      },
      {
        "id": "C",
        "text": "/20"
      },
      {
        "id": "D",
        "text": "255.255.252.0"
      }
    ],
    "answers": [
      "B",
      "D"
    ]
  },
  {
    "id": 55,
    "question": "Which of the following is the resident subnet ID for IP address 10.7.99.133/24?",
    "options": [
      {
        "id": "A",
        "text": "10.0.0.0"
      },
      {
        "id": "B",
        "text": "10.7.0.0"
      },
      {
        "id": "C",
        "text": "10.7.99.0"
      },
      {
        "id": "D",
        "text": "10.7.99.128"
      }
    ],
    "answers": [
      "C"
    ]
  },
  {
    "id": 56,
    "question": "Which of the following is the resident subnet for IP address 192.168.44.97/30?",
    "options": [
      {
        "id": "A",
        "text": "192.168.44.0"
      },
      {
        "id": "B",
        "text": "192.168.44.64"
      },
      {
        "id": "C",
        "text": "192.168.44.96"
      },
      {
        "id": "D",
        "text": "192.168.44.128"
      }
    ],
    "answers": [
      "C"
    ]
  },
  {
    "id": 57,
    "question": "Which of the following is the subnet broadcast address for the subnet in which IP address 172.31.77.201/27 resides?",
    "options": [
      {
        "id": "A",
        "text": "172.31.201.255"
      },
      {
        "id": "B",
        "text": "172.31.255.255"
      },
      {
        "id": "C",
        "text": "172.31.77.223"
      },
      {
        "id": "D",
        "text": "172.31.77.207"
      }
    ],
    "answers": [
      "C"
    ]
  },
  {
    "id": 58,
    "question": "A fellow engineer tells you to configure the DHCP server to lease the last 100 usable IP addresses in subnet 10.1.4.0/23. Which of the following IP addresses could be leased as a result of your new configuration?",
    "options": [
      {
        "id": "A",
        "text": "10.1.4.156"
      },
      {
        "id": "B",
        "text": "10.1.4.254"
      },
      {
        "id": "C",
        "text": "10.1.5.200"
      },
      {
        "id": "D",
        "text": "10.1.7.200"
      },
      {
        "id": "E",
        "text": "10.1.255.200"
      }
    ],
    "answers": [
      "C"
    ]
  },
  {
    "id": 59,
    "question": "A network administrator is configuring the 172.16.40.0/22 network for a new building. Which of the following is the number of hosts that will be supported on this network?",
    "options": [
      {
        "id": "A",
        "text": "510"
      },
      {
        "id": "B",
        "text": "512"
      },
      {
        "id": "C",
        "text": "1022"
      },
      {
        "id": "D",
        "text": "1024"
      },
      {
        "id": "E",
        "text": "2046 F. 2048"
      }
    ],
    "answers": [
      "C"
    ]
  },
  {
    "id": 60,
    "question": "Which wireless mode involves two laptops connecting directly to one another?",
    "options": [
      {
        "id": "A",
        "text": "Infrastructure mode"
      },
      {
        "id": "B",
        "text": "Ad hoc mode"
      },
      {
        "id": "C",
        "text": "La ptop mode"
      },
      {
        "id": "D",
        "text": "Enter prise mode"
      }
    ],
    "answers": [
      "B"
    ]
  },
  {
    "id": 61,
    "question": "A company has offices in Halifax and Toronto. Both networks are connected to allow the two locations to communicate. This is considered what type of network?",
    "options": [
      {
        "id": "A",
        "text": "LAN"
      },
      {
        "id": "B",
        "text": "JAN"
      },
      {
        "id": "C",
        "text": "MAN"
      },
      {
        "id": "D",
        "text": "WAN"
      }
    ],
    "answers": [
      "C"
    ]
  },
  {
    "id": 62,
    "question": "The physical layout of computers, cables, and other components on a network is known as what?",
    "options": [
      {
        "id": "A",
        "text": "Segment"
      },
      {
        "id": "B",
        "text": "Backbone"
      },
      {
        "id": "C",
        "text": "Topology"
      },
      {
        "id": "D",
        "text": "Protocol"
      }
    ],
    "answers": [
      "C"
    ]
  },
  {
    "id": 63,
    "question": "Which topology has a centralized location in which all of the cables come together to a central point such that a failure at this point brings down the entire network?",
    "options": [
      {
        "id": "A",
        "text": "Bus"
      },
      {
        "id": "B",
        "text": "Star"
      },
      {
        "id": "C",
        "text": "Mesh"
      },
      {
        "id": "D",
        "text": "Ring"
      },
      {
        "id": "E",
        "text": "Wireless"
      }
    ],
    "answers": [
      "B"
    ]
  },
  {
    "id": 64,
    "question": "Which topology has a layout in which every workstation or peripheral has a direct connection to every other workstation or peripheral on the network?",
    "options": [
      {
        "id": "A",
        "text": "Bus"
      },
      {
        "id": "B",
        "text": "Star"
      },
      {
        "id": "C",
        "text": "Mesh"
      },
      {
        "id": "D",
        "text": "Ring"
      },
      {
        "id": "E",
        "text": "Wireless"
      }
    ],
    "answers": [
      "C"
    ]
  },
  {
    "id": 65,
    "question": "Which of the following network topologies is primarily used to connect servers to large network disk arrays?",
    "options": [
      {
        "id": "A",
        "text": "SAN"
      },
      {
        "id": "B",
        "text": "MAN"
      },
      {
        "id": "C",
        "text": "CAN"
      },
      {
        "id": "D",
        "text": "PAN"
      },
      {
        "id": "E",
        "text": "LAN"
      }
    ],
    "answers": [
      "A"
    ]
  },
  {
    "id": 66,
    "question": "Which of the following wireless standards does not fall into the Wi-Fi standard?",
    "options": [
      {
        "id": "A",
        "text": "802.11n"
      },
      {
        "id": "B",
        "text": "802.11g"
      },
      {
        "id": "C",
        "text": "802.11b"
      },
      {
        "id": "D",
        "text": "802.11a"
      }
    ],
    "answers": [
      "D"
    ]
  },
  {
    "id": 67,
    "question": "Which wireless standard runs at 54 Mbps per second at the 2.4 GHz frequency?",
    "options": [
      {
        "id": "A",
        "text": "802.11n"
      },
      {
        "id": "B",
        "text": "802.11a"
      },
      {
        "id": "C",
        "text": "802.11g"
      },
      {
        "id": "D",
        "text": "802.11b"
      }
    ],
    "answers": [
      "C"
    ]
  },
  {
    "id": 68,
    "question": "Which wireless standard can reach transfer rates of up to 600 Mbps?",
    "options": [
      {
        "id": "A",
        "text": "802.11n"
      },
      {
        "id": "B",
        "text": "802.11a"
      },
      {
        "id": "C",
        "text": "802.11g"
      },
      {
        "id": "D",
        "text": "802.11b"
      }
    ],
    "answers": [
      "A"
    ]
  },
  {
    "id": 69,
    "question": "Which wireless security protocol changes the key using TKIP?",
    "options": [
      {
        "id": "A",
        "text": "WEP"
      },
      {
        "id": "B",
        "text": "WPA"
      },
      {
        "id": "C",
        "text": "WEP2"
      },
      {
        "id": "D",
        "text": "WPA5"
      }
    ],
    "answers": [
      "B"
    ]
  },
  {
    "id": 70,
    "question": "Which of the following is the name you assign to your wireless network?",
    "options": [
      {
        "id": "A",
        "text": "MAC address"
      },
      {
        "id": "B",
        "text": "Service Set Identifier (SSID)"
      },
      {
        "id": "C",
        "text": "WEP key"
      },
      {
        "id": "D",
        "text": "IP address"
      }
    ],
    "answers": [
      "B"
    ]
  },
  {
    "id": 71,
    "question": "What should you do with the wireless router to help hide the wireless network from unauthorized users?",
    "options": [
      {
        "id": "A",
        "text": "Turn it off when it is not being used."
      },
      {
        "id": "B",
        "text": "Enable WEP."
      },
      {
        "id": "C",
        "text": "Disable SSID broadcasting."
      },
      {
        "id": "D",
        "text": "Unplug the network cable from the router."
      }
    ],
    "answers": [
      "C"
    ]
  },
  {
    "id": 72,
    "question": "Which 802 project standard defines wireless at speeds of 54 Mbps and a frequency range of 2.4 GHz?",
    "options": [
      {
        "id": "A",
        "text": "802.11a"
      },
      {
        "id": "B",
        "text": "802.11b"
      },
      {
        "id": "C",
        "text": "802.11c"
      },
      {
        "id": "D",
        "text": "802.11g"
      }
    ],
    "answers": [
      "D"
    ]
  },
  {
    "id": 73,
    "question": "A wireless technician needs to deploy a single 802.11 standard that supports both 2.4GHz and 5GHz frequencies with up to 40MHz channel widths. Which of the following wireless standards should the technician configure?",
    "options": [
      {
        "id": "A",
        "text": "ac"
      },
      {
        "id": "B",
        "text": "b"
      },
      {
        "id": "C",
        "text": "g"
      },
      {
        "id": "D",
        "text": "n"
      }
    ],
    "answers": [
      "D"
    ]
  },
  {
    "id": 74,
    "question": "A network technician is working on a new wireless project. The network manager has a primary requirement of achieving speeds of at least 1 Gbps when connected. Which of the following standards would be appropriate for the technician to implement?",
    "options": [
      {
        "id": "A",
        "text": "802.11a"
      },
      {
        "id": "B",
        "text": "802.11ac"
      },
      {
        "id": "C",
        "text": "802.11b"
      },
      {
        "id": "D",
        "text": "802.11n"
      }
    ],
    "answers": [
      "B"
    ]
  },
  {
    "id": 75,
    "question": "Which 802 project standard defines Gigabit Ethernet using fiber-optic cabling?",
    "options": [
      {
        "id": "A",
        "text": "802.5"
      },
      {
        "id": "B",
        "text": "802.3z"
      },
      {
        "id": "C",
        "text": "802.3ab"
      },
      {
        "id": "D",
        "text": "802.11g"
      }
    ],
    "answers": [
      "B"
    ]
  },
  {
    "id": 76,
    "question": "Which 802 project standard defines Fast Ethernet?",
    "options": [
      {
        "id": "A",
        "text": "802.3u"
      },
      {
        "id": "B",
        "text": "802.3z"
      },
      {
        "id": "C",
        "text": "802.3ab"
      },
      {
        "id": "D",
        "text": "802.11g"
      }
    ],
    "answers": [
      "A"
    ]
  },
  {
    "id": 77,
    "question": "Which 802 project standard defines 10-Gigabit Ethernet?",
    "options": [
      {
        "id": "A",
        "text": "802.3z"
      },
      {
        "id": "B",
        "text": "802.3ae"
      },
      {
        "id": "C",
        "text": "802.3ab"
      },
      {
        "id": "D",
        "text": "802.11g"
      }
    ],
    "answers": [
      "B"
    ]
  },
  {
    "id": 78,
    "question": "What is the maximum distance of CAT 5 UTP cabling?",
    "options": [
      {
        "id": "A",
        "text": "100 meters"
      },
      {
        "id": "B",
        "text": "185 meters"
      },
      {
        "id": "C",
        "text": "250 meters"
      },
      {
        "id": "D",
        "text": "500 meters"
      }
    ],
    "answers": [
      "A"
    ]
  },
  {
    "id": 79,
    "question": "You wish to install a 100BaseT network. What type of cabling will you use?",
    "options": [
      {
        "id": "A",
        "text": "CAT 3 UTP"
      },
      {
        "id": "B",
        "text": "CAT 5 UTP"
      },
      {
        "id": "C",
        "text": "Thinnet"
      },
      {
        "id": "D",
        "text": "Fiber-optic"
      }
    ],
    "answers": [
      "B"
    ]
  },
  {
    "id": 80,
    "question": "Fiber-optic cabling uses which types of connectors? (Choose two.)",
    "options": [
      {
        "id": "A",
        "text": "SC"
      },
      {
        "id": "B",
        "text": "RJ-45"
      },
      {
        "id": "C",
        "text": "BNC"
      },
      {
        "id": "D",
        "text": "ST"
      }
    ],
    "answers": [
      "A",
      "D"
    ]
  },
  {
    "id": 81,
    "question": "What is the maximum distance of single-mode fiber (SMF)?",
    "options": [
      {
        "id": "A",
        "text": "300 meters"
      },
      {
        "id": "B",
        "text": "500 meters"
      },
      {
        "id": "C",
        "text": "2 kilometers"
      },
      {
        "id": "D",
        "text": "850 meters"
      }
    ],
    "answers": [
      "C"
    ]
  },
  {
    "id": 82,
    "question": "You want to create a crossover cable to connect two systems directly together. Which wires would you have to switch at one end of the cable?",
    "options": [
      {
        "id": "A",
        "text": "Wires 1 and 2 with wires 3 and 6"
      },
      {
        "id": "B",
        "text": "Wires 2 and 3 with wires 6 and 8"
      },
      {
        "id": "C",
        "text": "Wires 1 and 2 with wires 3 and 4"
      },
      {
        "id": "D",
        "text": "Wires 2 and 3 with wires 3 and 6"
      }
    ],
    "answers": [
      "A"
    ]
  },
  {
    "id": 83,
    "question": "Which network architecture uses single-mode fiber-optic cabling?",
    "options": [
      {
        "id": "A",
        "text": "1000BaseLX"
      },
      {
        "id": "B",
        "text": "1000BaseSX"
      },
      {
        "id": "C",
        "text": "1000BaseCX"
      },
      {
        "id": "D",
        "text": "1000BaseTX"
      }
    ],
    "answers": [
      "A"
    ]
  },
  {
    "id": 84,
    "question": "Which type of cabling is used in a 10BaseFL network?",
    "options": [
      {
        "id": "A",
        "text": "STP"
      },
      {
        "id": "B",
        "text": "CAT 3 UTP"
      },
      {
        "id": "C",
        "text": "Thinnet"
      },
      {
        "id": "D",
        "text": "Thicknet"
      },
      {
        "id": "E",
        "text": "Fiber-optic"
      }
    ],
    "answers": [
      "E"
    ]
  },
  {
    "id": 85,
    "question": "A technician recently ran a new cable over fluorescent lighting. Assuming the technician used the appropriate cables, which of the following connectors should be used to terminate it?",
    "options": [
      {
        "id": "A",
        "text": "RJ11"
      },
      {
        "id": "B",
        "text": "LC"
      },
      {
        "id": "C",
        "text": "BNC"
      },
      {
        "id": "D",
        "text": "F-type"
      }
    ],
    "answers": [
      "B"
    ]
  },
  {
    "id": 86,
    "question": "A network technician is installing a network printer in a factory setting. The connection from the switch contains an LC connector, yet the printer only supports an RJ45 connector. Which of the following should the technician use?",
    "options": [
      {
        "id": "A",
        "text": "Range extender"
      },
      {
        "id": "B",
        "text": "Media converter"
      },
      {
        "id": "C",
        "text": "Multilayer switch"
      },
      {
        "id": "D",
        "text": "Load balancer"
      }
    ],
    "answers": [
      "B"
    ]
  },
  {
    "id": 87,
    "question": "Which Gigabit architecture uses multimode fiber cabling?",
    "options": [
      {
        "id": "A",
        "text": "1000BaseLX"
      },
      {
        "id": "B",
        "text": "1000BaseSX"
      },
      {
        "id": "C",
        "text": "1000BaseCX"
      },
      {
        "id": "D",
        "text": "1000BaseTX"
      }
    ],
    "answers": [
      "B"
    ]
  },
  {
    "id": 88,
    "question": "Which of the following WAN transmission mediums is the fastest and can travel the longest distance?",
    "options": [
      {
        "id": "A",
        "text": "Satellite"
      },
      {
        "id": "B",
        "text": "Copper"
      },
      {
        "id": "C",
        "text": "Wireless"
      },
      {
        "id": "D",
        "text": "Fiber"
      }
    ],
    "answers": [
      "D"
    ]
  },
  {
    "id": 89,
    "question": "Which type of device is responsible for connecting dissimilar networking environments together?",
    "options": [
      {
        "id": "A",
        "text": "Router"
      },
      {
        "id": "B",
        "text": "Bridge"
      },
      {
        "id": "C",
        "text": "Gateway"
      },
      {
        "id": "D",
        "text": "Switch"
      }
    ],
    "answers": [
      "A"
    ]
  },
  {
    "id": 90,
    "question": "Which networking device is used to block unauthorized traffic from entering the network?",
    "options": [
      {
        "id": "A",
        "text": "Bridge"
      },
      {
        "id": "B",
        "text": "Gateway"
      },
      {
        "id": "C",
        "text": "Switch"
      },
      {
        "id": "D",
        "text": "Firewall"
      }
    ],
    "answers": [
      "D"
    ]
  },
  {
    "id": 91,
    "question": "You wish to enable the interface on the Cisco router; what command would you use?",
    "options": [
      {
        "id": "A",
        "text": "Shutdown"
      },
      {
        "id": "B",
        "text": "Enable"
      },
      {
        "id": "C",
        "text": "Disable"
      },
      {
        "id": "D",
        "text": "No shutdown"
      }
    ],
    "answers": [
      "D"
    ]
  },
  {
    "id": 92,
    "question": "What type of device analyzes packets that attempt to enter the network and then either allows or denies the traffic, based on rules?",
    "options": [
      {
        "id": "A",
        "text": "Encryption"
      },
      {
        "id": "B",
        "text": "Firewall"
      },
      {
        "id": "C",
        "text": "Router"
      },
      {
        "id": "D",
        "text": "None of the above"
      }
    ],
    "answers": [
      "B"
    ]
  },
  {
    "id": 93,
    "question": "A user believes a work email account has been compromised. A technician discovers that an email seeming to be from the user's bank shares the same origin IP address as the last login to the email account. Which of the following types of attack is described in this scenario?",
    "options": [
      {
        "id": "A",
        "text": "Spam"
      },
      {
        "id": "B",
        "text": "Ransomware"
      },
      {
        "id": "C",
        "text": "Man-in-the-middle"
      },
      {
        "id": "D",
        "text": "Phishing"
      }
    ],
    "answers": [
      "C"
    ]
  },
  {
    "id": 94,
    "question": "What type of attack involves the hacker altering the source address of a packet?",
    "options": [
      {
        "id": "A",
        "text": "Buffer overflow"
      },
      {
        "id": "B",
        "text": "Dictionary attack"
      },
      {
        "id": "C",
        "text": "Social engineering attack"
      },
      {
        "id": "D",
        "text": "Spoof attack"
      }
    ],
    "answers": [
      "D"
    ]
  },
  {
    "id": 95,
    "question": "What type of password attack involves using dictionary words and appending numbers to the end of those words?",
    "options": [
      {
        "id": "A",
        "text": "Brute-force"
      },
      {
        "id": "B",
        "text": "Dictionary"
      },
      {
        "id": "C",
        "text": "Hybrid"
      },
      {
        "id": "D",
        "text": "Buffer"
      }
    ],
    "answers": [
      "C"
    ]
  },
  {
    "id": 96,
    "question": "Which of the following symbols indicates that you are in priv exec mode?",
    "options": [
      {
        "id": "A",
        "text": ">"
      },
      {
        "id": "B",
        "text": "#"
      },
      {
        "id": "C",
        "text": "$"
      },
      {
        "id": "D",
        "text": "&"
      }
    ],
    "answers": [
      "B"
    ]
  },
  {
    "id": 97,
    "question": "Which of the following commands would you use to assign an IP address to an interface?",
    "options": [
      {
        "id": "A",
        "text": "Router (config-if)# ip address 10.0.0.1 255.0.0.0"
      },
      {
        "id": "B",
        "text": "Router (config)# ip address 10.0.0.1 255.0.0.0"
      },
      {
        "id": "C",
        "text": "Router# ip address 10.0.0.1 255.0.0.0"
      },
      {
        "id": "D",
        "text": "Router> ip address 10.0.0.1 255.0.0.0"
      }
    ],
    "answers": [
      "A"
    ]
  },
  {
    "id": 98,
    "question": "You want to ensure that the network interface on the router is using full duplex. What command would you use?",
    "options": [
      {
        "id": "A",
        "text": "Router (config)# duplex full"
      },
      {
        "id": "B",
        "text": "Router (config-if)# duplex half"
      },
      {
        "id": "C",
        "text": "Router(config-if)# duplex full"
      },
      {
        "id": "D",
        "text": "Router (config-if)# full duplex"
      }
    ],
    "answers": [
      "C"
    ]
  },
  {
    "id": 99,
    "question": "Which option of IPCONFIG is used to receive a new lease on your IP address?",
    "options": [
      {
        "id": "A",
        "text": "/all"
      },
      {
        "id": "B",
        "text": "/release"
      },
      {
        "id": "C",
        "text": "/obtain"
      },
      {
        "id": "D",
        "text": "/renew"
      }
    ],
    "answers": [
      "D"
    ]
  },
  {
    "id": 100,
    "question": "You are troubleshooting to determine why Sue's computer cannot connect to the Internet. What command would you type to view all of Sue's TCP/IP settings in a Windows command prompt?",
    "options": [
      {
        "id": "A",
        "text": "IPCONFIG"
      },
      {
        "id": "B",
        "text": "IPCONFIG /ALL"
      },
      {
        "id": "C",
        "text": "IPCONFIG /SHOWITALL"
      },
      {
        "id": "D",
        "text": "IPCONFIG /DISPLAYALL"
      }
    ],
    "answers": [
      "B"
    ]
  }
];
