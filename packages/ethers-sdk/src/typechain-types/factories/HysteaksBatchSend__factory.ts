/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../common";
import type {
  HysteaksBatchSend,
  HysteaksBatchSendInterface,
} from "../HysteaksBatchSend";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "AccessControlBadConfirmation",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "neededRole",
        type: "bytes32",
      },
    ],
    name: "AccessControlUnauthorizedAccount",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address[]",
        name: "recipients",
        type: "address[]",
      },
      {
        indexed: false,
        internalType: "bool[]",
        name: "isExempt",
        type: "bool[]",
      },
    ],
    name: "BatchFeeExemptSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address[]",
        name: "recipients",
        type: "address[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
    ],
    name: "ERC20BatchSent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "ERC20FeesWithdrawn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isExempt",
        type: "bool",
      },
    ],
    name: "FeeExemptSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
    ],
    name: "FeeSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address[]",
        name: "recipients",
        type: "address[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
    ],
    name: "NativeBatchSent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "NativeFeesWithdrawn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "FEE_EXEMPT_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "recipients",
        type: "address[]",
      },
      {
        internalType: "bool[]",
        name: "_isExempt",
        type: "bool[]",
      },
    ],
    name: "batchSetFeeExempt",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "calculateFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "fee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "isFeeExempt",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "callerConfirmation",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "recipients",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
    ],
    name: "sendERC20Batch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "recipients",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
    ],
    name: "sendNativeBatch",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_fee",
        type: "uint256",
      },
    ],
    name: "setFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_isExempt",
        type: "bool",
      },
    ],
    name: "setFeeExempt",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "withdrawERC20Fees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "withdrawNativeFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x608060405260196001553480156200001657600080fd5b506200003b6000801b6200002f6200008460201b60201c565b6200008c60201b60201c565b506200007d7f4b41dfcec163471e57d8e95736c9a1074b9e2d313632c33d95f024a46957265b620000716200008460201b60201c565b6200008c60201b60201c565b50620001f9565b600033905090565b6000620000a083836200018f60201b60201c565b6200018457600160008085815260200190815260200160002060000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550620001206200008460201b60201c565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a46001905062000189565b600090505b92915050565b600080600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6124af80620002096000396000f3fe60806040526004361061010d5760003560e01c806383544f6311610095578063a217fddf11610064578063a217fddf14610394578063af2a8b2e146103bf578063cff73ff2146103db578063d547741f14610404578063ddca3f431461042d57610114565b806383544f63146102c85780638ebfc796146102f157806391d148541461031a57806399a5d7471461035757610114565b80633f4218e0116100dc5780633f4218e0146101e55780633f91b153146102225780635187af2e1461024b5780635cfcf0aa1461027657806369fe0e2d1461029f57610114565b806301ffc9a714610119578063248a9ca3146101565780632f2ff15d1461019357806336568abe146101bc57610114565b3661011457005b600080fd5b34801561012557600080fd5b50610140600480360381019061013b919061152a565b610458565b60405161014d9190611572565b60405180910390f35b34801561016257600080fd5b5061017d600480360381019061017891906115c3565b6104d2565b60405161018a91906115ff565b60405180910390f35b34801561019f57600080fd5b506101ba60048036038101906101b59190611678565b6104f1565b005b3480156101c857600080fd5b506101e360048036038101906101de9190611678565b610513565b005b3480156101f157600080fd5b5061020c600480360381019061020791906116b8565b61058e565b6040516102199190611572565b60405180910390f35b34801561022e57600080fd5b506102496004803603810190610244919061192d565b6105ae565b005b34801561025757600080fd5b50610260610719565b60405161026d91906115ff565b60405180910390f35b34801561028257600080fd5b5061029d600480360381019061029891906116b8565b61073d565b005b3480156102ab57600080fd5b506102c660048036038101906102c191906119db565b6107e9565b005b3480156102d457600080fd5b506102ef60048036038101906102ea9190611a08565b610838565b005b3480156102fd57600080fd5b5061031860048036038101906103139190611a48565b6109ad565b005b34801561032657600080fd5b50610341600480360381019061033c9190611678565b610a81565b60405161034e9190611572565b60405180910390f35b34801561036357600080fd5b5061037e600480360381019061037991906119db565b610aeb565b60405161038b9190611a97565b60405180910390f35b3480156103a057600080fd5b506103a9610b0f565b6040516103b691906115ff565b60405180910390f35b6103d960048036038101906103d49190611b75565b610b16565b005b3480156103e757600080fd5b5061040260048036038101906103fd9190611bed565b610df8565b005b34801561041057600080fd5b5061042b60048036038101906104269190611678565b6111dc565b005b34801561043957600080fd5b506104426111fe565b60405161044f9190611a97565b60405180910390f35b60007f7965db0b000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806104cb57506104ca82611204565b5b9050919050565b6000806000838152602001908152602001600020600101549050919050565b6104fa826104d2565b6105038161126e565b61050d8383611282565b50505050565b61051b611373565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461057f576040517f6697b23200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610589828261137b565b505050565b60026020528060005260406000206000915054906101000a900460ff1681565b7f4b41dfcec163471e57d8e95736c9a1074b9e2d313632c33d95f024a46957265b6105d88161126e565b815183511461061c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161061390611cfb565b60405180910390fd5b60005b83518110156106c65782818151811061063b5761063a611d1b565b5b60200260200101516002600086848151811061065a57610659611d1b565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555080806106be90611d79565b91505061061f565b50826040516106d59190611e79565b60405180910390207f87b458d8dd3038555a361f5a6abb55a1f0e0016834aadda4765718f3542dc61b8360405161070c9190611f4e565b60405180910390a2505050565b7f4b41dfcec163471e57d8e95736c9a1074b9e2d313632c33d95f024a46957265b81565b6000801b61074a8161126e565b60004790508273ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050158015610795573d6000803e3d6000fd5b508273ffffffffffffffffffffffffffffffffffffffff167fcc0b44e3b0c65b15a22125b3fe1169945afed879ff86415c1d624226e3228244826040516107dc9190611a97565b60405180910390a2505050565b6000801b6107f68161126e565b816001819055507f20461e09b8e557b77e107939f9ce6544698123aad0fc964ac5cc59b7df2e608f8260405161082c9190611a97565b60405180910390a15050565b6000801b6108458161126e565b60008373ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016108809190611f7f565b602060405180830381865afa15801561089d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108c19190611faf565b90508373ffffffffffffffffffffffffffffffffffffffff1663a9059cbb84836040518363ffffffff1660e01b81526004016108fe929190611fdc565b6020604051808303816000875af115801561091d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610941919061201a565b508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fde81a62bde9cef0281f7e6b13ec299c02991d6cbcac81e4bdbd0bb07513c738d8360405161099f9190611a97565b60405180910390a350505050565b7f4b41dfcec163471e57d8e95736c9a1074b9e2d313632c33d95f024a46957265b6109d78161126e565b81600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508273ffffffffffffffffffffffffffffffffffffffff167f5a8cf666a272afd6dec6788d33967c676fffa92e289eee1b38172982c4b4914d83604051610a749190611572565b60405180910390a2505050565b600080600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60006103e860015483610afe9190612047565b610b0891906120b8565b9050919050565b6000801b81565b6000825111610b5a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b5190612135565b60405180910390fd5b8051825114610b9e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b95906121c7565b60405180910390fd5b6000600154118015610c01575060026000610bb7611373565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16155b15610ca6576000805b8351811015610c4e57828181518110610c2657610c25611d1b565b5b602002602001015182610c3991906121e7565b91508080610c4690611d79565b915050610c0a565b50610c5881610aeb565b81610c6391906121e7565b3414610ca4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c9b90612267565b60405180910390fd5b505b60005b8251811015610da6576000838281518110610cc757610cc6611d1b565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff16838381518110610cf857610cf7611d1b565b5b6020026020010151604051610d0c906122b8565b60006040518083038185875af1925050503d8060008114610d49576040519150601f19603f3d011682016040523d82523d6000602084013e610d4e565b606091505b5050905080610d92576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d8990612319565b60405180910390fd5b508080610d9e90611d79565b915050610ca9565b5081604051610db59190611e79565b60405180910390207fb70fc94b97887c4cdc001e7b12f0039a6913b1e6dd582339e0994bd55f3612fc82604051610dec91906123f7565b60405180910390a25050565b6000825111610e3c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e3390612135565b60405180910390fd5b8051825114610e80576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e77906121c7565b60405180910390fd5b6000600154118015610ee3575060026000610e99611373565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16155b15611097576000805b8351811015610f3057828181518110610f0857610f07611d1b565b5b602002602001015182610f1b91906121e7565b91508080610f2890611d79565b915050610eec565b506000610f3c82610aeb565b90508082610f4a91906121e7565b8573ffffffffffffffffffffffffffffffffffffffff166370a08231610f6e611373565b6040518263ffffffff1660e01b8152600401610f8a9190611f7f565b602060405180830381865afa158015610fa7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fcb9190611faf565b101561100c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161100390612267565b60405180910390fd5b8473ffffffffffffffffffffffffffffffffffffffff166323b872dd611030611373565b30846040518463ffffffff1660e01b815260040161105093929190612419565b6020604051808303816000875af115801561106f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611093919061201a565b5050505b60005b8251811015611172578373ffffffffffffffffffffffffffffffffffffffff166323b872dd6110c7611373565b8584815181106110da576110d9611d1b565b5b60200260200101518585815181106110f5576110f4611d1b565b5b60200260200101516040518463ffffffff1660e01b815260040161111b93929190612419565b6020604051808303816000875af115801561113a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061115e919061201a565b50808061116a90611d79565b91505061109a565b50816040516111819190611e79565b60405180910390208373ffffffffffffffffffffffffffffffffffffffff167fb0cdcd2a8740b93db3a4334845ebd0057991b5607b974dc24aa4fa0b753aadb8836040516111cf91906123f7565b60405180910390a3505050565b6111e5826104d2565b6111ee8161126e565b6111f8838361137b565b50505050565b60015481565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b61127f8161127a611373565b61146d565b50565b600061128e8383610a81565b61136857600160008085815260200190815260200160002060000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550611305611373565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a46001905061136d565b600090505b92915050565b600033905090565b60006113878383610a81565b1561146257600080600085815260200190815260200160002060000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506113ff611373565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a460019050611467565b600090505b92915050565b6114778282610a81565b6114ba5780826040517fe2517d3f0000000000000000000000000000000000000000000000000000000081526004016114b1929190612450565b60405180910390fd5b5050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b611507816114d2565b811461151257600080fd5b50565b600081359050611524816114fe565b92915050565b6000602082840312156115405761153f6114c8565b5b600061154e84828501611515565b91505092915050565b60008115159050919050565b61156c81611557565b82525050565b60006020820190506115876000830184611563565b92915050565b6000819050919050565b6115a08161158d565b81146115ab57600080fd5b50565b6000813590506115bd81611597565b92915050565b6000602082840312156115d9576115d86114c8565b5b60006115e7848285016115ae565b91505092915050565b6115f98161158d565b82525050565b600060208201905061161460008301846115f0565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006116458261161a565b9050919050565b6116558161163a565b811461166057600080fd5b50565b6000813590506116728161164c565b92915050565b6000806040838503121561168f5761168e6114c8565b5b600061169d858286016115ae565b92505060206116ae85828601611663565b9150509250929050565b6000602082840312156116ce576116cd6114c8565b5b60006116dc84828501611663565b91505092915050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611733826116ea565b810181811067ffffffffffffffff82111715611752576117516116fb565b5b80604052505050565b60006117656114be565b9050611771828261172a565b919050565b600067ffffffffffffffff821115611791576117906116fb565b5b602082029050602081019050919050565b600080fd5b60006117ba6117b584611776565b61175b565b905080838252602082019050602084028301858111156117dd576117dc6117a2565b5b835b8181101561180657806117f28882611663565b8452602084019350506020810190506117df565b5050509392505050565b600082601f830112611825576118246116e5565b5b81356118358482602086016117a7565b91505092915050565b600067ffffffffffffffff821115611859576118586116fb565b5b602082029050602081019050919050565b61187381611557565b811461187e57600080fd5b50565b6000813590506118908161186a565b92915050565b60006118a96118a48461183e565b61175b565b905080838252602082019050602084028301858111156118cc576118cb6117a2565b5b835b818110156118f557806118e18882611881565b8452602084019350506020810190506118ce565b5050509392505050565b600082601f830112611914576119136116e5565b5b8135611924848260208601611896565b91505092915050565b60008060408385031215611944576119436114c8565b5b600083013567ffffffffffffffff811115611962576119616114cd565b5b61196e85828601611810565b925050602083013567ffffffffffffffff81111561198f5761198e6114cd565b5b61199b858286016118ff565b9150509250929050565b6000819050919050565b6119b8816119a5565b81146119c357600080fd5b50565b6000813590506119d5816119af565b92915050565b6000602082840312156119f1576119f06114c8565b5b60006119ff848285016119c6565b91505092915050565b60008060408385031215611a1f57611a1e6114c8565b5b6000611a2d85828601611663565b9250506020611a3e85828601611663565b9150509250929050565b60008060408385031215611a5f57611a5e6114c8565b5b6000611a6d85828601611663565b9250506020611a7e85828601611881565b9150509250929050565b611a91816119a5565b82525050565b6000602082019050611aac6000830184611a88565b92915050565b600067ffffffffffffffff821115611acd57611acc6116fb565b5b602082029050602081019050919050565b6000611af1611aec84611ab2565b61175b565b90508083825260208201905060208402830185811115611b1457611b136117a2565b5b835b81811015611b3d5780611b2988826119c6565b845260208401935050602081019050611b16565b5050509392505050565b600082601f830112611b5c57611b5b6116e5565b5b8135611b6c848260208601611ade565b91505092915050565b60008060408385031215611b8c57611b8b6114c8565b5b600083013567ffffffffffffffff811115611baa57611ba96114cd565b5b611bb685828601611810565b925050602083013567ffffffffffffffff811115611bd757611bd66114cd565b5b611be385828601611b47565b9150509250929050565b600080600060608486031215611c0657611c056114c8565b5b6000611c1486828701611663565b935050602084013567ffffffffffffffff811115611c3557611c346114cd565b5b611c4186828701611810565b925050604084013567ffffffffffffffff811115611c6257611c616114cd565b5b611c6e86828701611b47565b9150509250925092565b600082825260208201905092915050565b7f41646472657373657320616e64206578656d7074696f6e73206d75737420686160008201527f7665207468652073616d65206c656e6774680000000000000000000000000000602082015250565b6000611ce5603283611c78565b9150611cf082611c89565b604082019050919050565b60006020820190508181036000830152611d1481611cd8565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611d84826119a5565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611db657611db5611d4a565b5b600182019050919050565b600081519050919050565b600081905092915050565b6000819050602082019050919050565b611df08161163a565b82525050565b6000611e028383611de7565b60208301905092915050565b6000602082019050919050565b6000611e2682611dc1565b611e308185611dcc565b9350611e3b83611dd7565b8060005b83811015611e6c578151611e538882611df6565b9750611e5e83611e0e565b925050600181019050611e3f565b5085935050505092915050565b6000611e858284611e1b565b915081905092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b611ec581611557565b82525050565b6000611ed78383611ebc565b60208301905092915050565b6000602082019050919050565b6000611efb82611e90565b611f058185611e9b565b9350611f1083611eac565b8060005b83811015611f41578151611f288882611ecb565b9750611f3383611ee3565b925050600181019050611f14565b5085935050505092915050565b60006020820190508181036000830152611f688184611ef0565b905092915050565b611f798161163a565b82525050565b6000602082019050611f946000830184611f70565b92915050565b600081519050611fa9816119af565b92915050565b600060208284031215611fc557611fc46114c8565b5b6000611fd384828501611f9a565b91505092915050565b6000604082019050611ff16000830185611f70565b611ffe6020830184611a88565b9392505050565b6000815190506120148161186a565b92915050565b6000602082840312156120305761202f6114c8565b5b600061203e84828501612005565b91505092915050565b6000612052826119a5565b915061205d836119a5565b925082820261206b816119a5565b9150828204841483151761208257612081611d4a565b5b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006120c3826119a5565b91506120ce836119a5565b9250826120de576120dd612089565b5b828204905092915050565b7f526563697069656e74732061727261792063616e6e6f7420626520656d707479600082015250565b600061211f602083611c78565b915061212a826120e9565b602082019050919050565b6000602082019050818103600083015261214e81612112565b9050919050565b7f526563697069656e747320616e6420616d6f756e7473206d757374206861766560008201527f207468652073616d65206c656e67746800000000000000000000000000000000602082015250565b60006121b1603083611c78565b91506121bc82612155565b604082019050919050565b600060208201905081810360008301526121e0816121a4565b9050919050565b60006121f2826119a5565b91506121fd836119a5565b925082820190508082111561221557612214611d4a565b5b92915050565b7f496e73756666696369656e742066756e647320666f7220666565000000000000600082015250565b6000612251601a83611c78565b915061225c8261221b565b602082019050919050565b6000602082019050818103600083015261228081612244565b9050919050565b600081905092915050565b50565b60006122a2600083612287565b91506122ad82612292565b600082019050919050565b60006122c382612295565b9150819050919050565b7f5472616e73666572206661696c65640000000000000000000000000000000000600082015250565b6000612303600f83611c78565b915061230e826122cd565b602082019050919050565b60006020820190508181036000830152612332816122f6565b9050919050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b61236e816119a5565b82525050565b60006123808383612365565b60208301905092915050565b6000602082019050919050565b60006123a482612339565b6123ae8185612344565b93506123b983612355565b8060005b838110156123ea5781516123d18882612374565b97506123dc8361238c565b9250506001810190506123bd565b5085935050505092915050565b600060208201905081810360008301526124118184612399565b905092915050565b600060608201905061242e6000830186611f70565b61243b6020830185611f70565b6124486040830184611a88565b949350505050565b60006040820190506124656000830185611f70565b61247260208301846115f0565b939250505056fea264697066735822122058f5b493081f7d20092a5c81d89577302530e6a2ff029519ccb3767f3e2bd96564736f6c63430008140033";

type HysteaksBatchSendConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: HysteaksBatchSendConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class HysteaksBatchSend__factory extends ContractFactory {
  constructor(...args: HysteaksBatchSendConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      HysteaksBatchSend & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): HysteaksBatchSend__factory {
    return super.connect(runner) as HysteaksBatchSend__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): HysteaksBatchSendInterface {
    return new Interface(_abi) as HysteaksBatchSendInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): HysteaksBatchSend {
    return new Contract(address, _abi, runner) as unknown as HysteaksBatchSend;
  }
}