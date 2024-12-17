/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "./common";

export interface HysteaksBatchSendInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "DEFAULT_ADMIN_ROLE"
      | "FEE_EXEMPT_ROLE"
      | "batchSetFeeExempt"
      | "calculateFee"
      | "fee"
      | "getRoleAdmin"
      | "grantRole"
      | "hasRole"
      | "isFeeExempt"
      | "renounceRole"
      | "revokeRole"
      | "sendERC20Batch"
      | "sendNativeBatch"
      | "setFee"
      | "setFeeExempt"
      | "supportsInterface"
      | "withdrawERC20Fees"
      | "withdrawNativeFees"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "BatchFeeExemptSet"
      | "ERC20BatchSent"
      | "ERC20FeesWithdrawn"
      | "FeeExemptSet"
      | "FeeSet"
      | "NativeBatchSent"
      | "NativeFeesWithdrawn"
      | "RoleAdminChanged"
      | "RoleGranted"
      | "RoleRevoked"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "FEE_EXEMPT_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "batchSetFeeExempt",
    values: [AddressLike[], boolean[]]
  ): string;
  encodeFunctionData(
    functionFragment: "calculateFee",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "fee", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getRoleAdmin",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "grantRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "hasRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isFeeExempt",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "sendERC20Batch",
    values: [AddressLike, AddressLike[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "sendNativeBatch",
    values: [AddressLike[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "setFee",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setFeeExempt",
    values: [AddressLike, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawERC20Fees",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawNativeFees",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "FEE_EXEMPT_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "batchSetFeeExempt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculateFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "fee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getRoleAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isFeeExempt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "sendERC20Batch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sendNativeBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setFee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setFeeExempt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawERC20Fees",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawNativeFees",
    data: BytesLike
  ): Result;
}

export namespace BatchFeeExemptSetEvent {
  export type InputTuple = [recipients: AddressLike[], isExempt: boolean[]];
  export type OutputTuple = [recipients: string[], isExempt: boolean[]];
  export interface OutputObject {
    recipients: string[];
    isExempt: boolean[];
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ERC20BatchSentEvent {
  export type InputTuple = [
    token: AddressLike,
    recipients: AddressLike[],
    amounts: BigNumberish[]
  ];
  export type OutputTuple = [
    token: string,
    recipients: string[],
    amounts: bigint[]
  ];
  export interface OutputObject {
    token: string;
    recipients: string[];
    amounts: bigint[];
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ERC20FeesWithdrawnEvent {
  export type InputTuple = [
    token: AddressLike,
    to: AddressLike,
    amount: BigNumberish
  ];
  export type OutputTuple = [token: string, to: string, amount: bigint];
  export interface OutputObject {
    token: string;
    to: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace FeeExemptSetEvent {
  export type InputTuple = [recipient: AddressLike, isExempt: boolean];
  export type OutputTuple = [recipient: string, isExempt: boolean];
  export interface OutputObject {
    recipient: string;
    isExempt: boolean;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace FeeSetEvent {
  export type InputTuple = [fee: BigNumberish];
  export type OutputTuple = [fee: bigint];
  export interface OutputObject {
    fee: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace NativeBatchSentEvent {
  export type InputTuple = [recipients: AddressLike[], amounts: BigNumberish[]];
  export type OutputTuple = [recipients: string[], amounts: bigint[]];
  export interface OutputObject {
    recipients: string[];
    amounts: bigint[];
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace NativeFeesWithdrawnEvent {
  export type InputTuple = [to: AddressLike, amount: BigNumberish];
  export type OutputTuple = [to: string, amount: bigint];
  export interface OutputObject {
    to: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RoleAdminChangedEvent {
  export type InputTuple = [
    role: BytesLike,
    previousAdminRole: BytesLike,
    newAdminRole: BytesLike
  ];
  export type OutputTuple = [
    role: string,
    previousAdminRole: string,
    newAdminRole: string
  ];
  export interface OutputObject {
    role: string;
    previousAdminRole: string;
    newAdminRole: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RoleGrantedEvent {
  export type InputTuple = [
    role: BytesLike,
    account: AddressLike,
    sender: AddressLike
  ];
  export type OutputTuple = [role: string, account: string, sender: string];
  export interface OutputObject {
    role: string;
    account: string;
    sender: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RoleRevokedEvent {
  export type InputTuple = [
    role: BytesLike,
    account: AddressLike,
    sender: AddressLike
  ];
  export type OutputTuple = [role: string, account: string, sender: string];
  export interface OutputObject {
    role: string;
    account: string;
    sender: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface HysteaksBatchSend extends BaseContract {
  connect(runner?: ContractRunner | null): HysteaksBatchSend;
  waitForDeployment(): Promise<this>;

  interface: HysteaksBatchSendInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  DEFAULT_ADMIN_ROLE: TypedContractMethod<[], [string], "view">;

  FEE_EXEMPT_ROLE: TypedContractMethod<[], [string], "view">;

  batchSetFeeExempt: TypedContractMethod<
    [recipients: AddressLike[], _isExempt: boolean[]],
    [void],
    "nonpayable"
  >;

  calculateFee: TypedContractMethod<[amount: BigNumberish], [bigint], "view">;

  fee: TypedContractMethod<[], [bigint], "view">;

  getRoleAdmin: TypedContractMethod<[role: BytesLike], [string], "view">;

  grantRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;

  hasRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [boolean],
    "view"
  >;

  isFeeExempt: TypedContractMethod<[arg0: AddressLike], [boolean], "view">;

  renounceRole: TypedContractMethod<
    [role: BytesLike, callerConfirmation: AddressLike],
    [void],
    "nonpayable"
  >;

  revokeRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;

  sendERC20Batch: TypedContractMethod<
    [token: AddressLike, recipients: AddressLike[], amounts: BigNumberish[]],
    [void],
    "nonpayable"
  >;

  sendNativeBatch: TypedContractMethod<
    [recipients: AddressLike[], amounts: BigNumberish[]],
    [void],
    "payable"
  >;

  setFee: TypedContractMethod<[_fee: BigNumberish], [void], "nonpayable">;

  setFeeExempt: TypedContractMethod<
    [recipient: AddressLike, _isExempt: boolean],
    [void],
    "nonpayable"
  >;

  supportsInterface: TypedContractMethod<
    [interfaceId: BytesLike],
    [boolean],
    "view"
  >;

  withdrawERC20Fees: TypedContractMethod<
    [token: AddressLike, to: AddressLike],
    [void],
    "nonpayable"
  >;

  withdrawNativeFees: TypedContractMethod<
    [to: AddressLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "DEFAULT_ADMIN_ROLE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "FEE_EXEMPT_ROLE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "batchSetFeeExempt"
  ): TypedContractMethod<
    [recipients: AddressLike[], _isExempt: boolean[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "calculateFee"
  ): TypedContractMethod<[amount: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "fee"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getRoleAdmin"
  ): TypedContractMethod<[role: BytesLike], [string], "view">;
  getFunction(
    nameOrSignature: "grantRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "hasRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "isFeeExempt"
  ): TypedContractMethod<[arg0: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "renounceRole"
  ): TypedContractMethod<
    [role: BytesLike, callerConfirmation: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "revokeRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "sendERC20Batch"
  ): TypedContractMethod<
    [token: AddressLike, recipients: AddressLike[], amounts: BigNumberish[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "sendNativeBatch"
  ): TypedContractMethod<
    [recipients: AddressLike[], amounts: BigNumberish[]],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "setFee"
  ): TypedContractMethod<[_fee: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setFeeExempt"
  ): TypedContractMethod<
    [recipient: AddressLike, _isExempt: boolean],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "supportsInterface"
  ): TypedContractMethod<[interfaceId: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "withdrawERC20Fees"
  ): TypedContractMethod<
    [token: AddressLike, to: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "withdrawNativeFees"
  ): TypedContractMethod<[to: AddressLike], [void], "nonpayable">;

  getEvent(
    key: "BatchFeeExemptSet"
  ): TypedContractEvent<
    BatchFeeExemptSetEvent.InputTuple,
    BatchFeeExemptSetEvent.OutputTuple,
    BatchFeeExemptSetEvent.OutputObject
  >;
  getEvent(
    key: "ERC20BatchSent"
  ): TypedContractEvent<
    ERC20BatchSentEvent.InputTuple,
    ERC20BatchSentEvent.OutputTuple,
    ERC20BatchSentEvent.OutputObject
  >;
  getEvent(
    key: "ERC20FeesWithdrawn"
  ): TypedContractEvent<
    ERC20FeesWithdrawnEvent.InputTuple,
    ERC20FeesWithdrawnEvent.OutputTuple,
    ERC20FeesWithdrawnEvent.OutputObject
  >;
  getEvent(
    key: "FeeExemptSet"
  ): TypedContractEvent<
    FeeExemptSetEvent.InputTuple,
    FeeExemptSetEvent.OutputTuple,
    FeeExemptSetEvent.OutputObject
  >;
  getEvent(
    key: "FeeSet"
  ): TypedContractEvent<
    FeeSetEvent.InputTuple,
    FeeSetEvent.OutputTuple,
    FeeSetEvent.OutputObject
  >;
  getEvent(
    key: "NativeBatchSent"
  ): TypedContractEvent<
    NativeBatchSentEvent.InputTuple,
    NativeBatchSentEvent.OutputTuple,
    NativeBatchSentEvent.OutputObject
  >;
  getEvent(
    key: "NativeFeesWithdrawn"
  ): TypedContractEvent<
    NativeFeesWithdrawnEvent.InputTuple,
    NativeFeesWithdrawnEvent.OutputTuple,
    NativeFeesWithdrawnEvent.OutputObject
  >;
  getEvent(
    key: "RoleAdminChanged"
  ): TypedContractEvent<
    RoleAdminChangedEvent.InputTuple,
    RoleAdminChangedEvent.OutputTuple,
    RoleAdminChangedEvent.OutputObject
  >;
  getEvent(
    key: "RoleGranted"
  ): TypedContractEvent<
    RoleGrantedEvent.InputTuple,
    RoleGrantedEvent.OutputTuple,
    RoleGrantedEvent.OutputObject
  >;
  getEvent(
    key: "RoleRevoked"
  ): TypedContractEvent<
    RoleRevokedEvent.InputTuple,
    RoleRevokedEvent.OutputTuple,
    RoleRevokedEvent.OutputObject
  >;

  filters: {
    "BatchFeeExemptSet(address[],bool[])": TypedContractEvent<
      BatchFeeExemptSetEvent.InputTuple,
      BatchFeeExemptSetEvent.OutputTuple,
      BatchFeeExemptSetEvent.OutputObject
    >;
    BatchFeeExemptSet: TypedContractEvent<
      BatchFeeExemptSetEvent.InputTuple,
      BatchFeeExemptSetEvent.OutputTuple,
      BatchFeeExemptSetEvent.OutputObject
    >;

    "ERC20BatchSent(address,address[],uint256[])": TypedContractEvent<
      ERC20BatchSentEvent.InputTuple,
      ERC20BatchSentEvent.OutputTuple,
      ERC20BatchSentEvent.OutputObject
    >;
    ERC20BatchSent: TypedContractEvent<
      ERC20BatchSentEvent.InputTuple,
      ERC20BatchSentEvent.OutputTuple,
      ERC20BatchSentEvent.OutputObject
    >;

    "ERC20FeesWithdrawn(address,address,uint256)": TypedContractEvent<
      ERC20FeesWithdrawnEvent.InputTuple,
      ERC20FeesWithdrawnEvent.OutputTuple,
      ERC20FeesWithdrawnEvent.OutputObject
    >;
    ERC20FeesWithdrawn: TypedContractEvent<
      ERC20FeesWithdrawnEvent.InputTuple,
      ERC20FeesWithdrawnEvent.OutputTuple,
      ERC20FeesWithdrawnEvent.OutputObject
    >;

    "FeeExemptSet(address,bool)": TypedContractEvent<
      FeeExemptSetEvent.InputTuple,
      FeeExemptSetEvent.OutputTuple,
      FeeExemptSetEvent.OutputObject
    >;
    FeeExemptSet: TypedContractEvent<
      FeeExemptSetEvent.InputTuple,
      FeeExemptSetEvent.OutputTuple,
      FeeExemptSetEvent.OutputObject
    >;

    "FeeSet(uint256)": TypedContractEvent<
      FeeSetEvent.InputTuple,
      FeeSetEvent.OutputTuple,
      FeeSetEvent.OutputObject
    >;
    FeeSet: TypedContractEvent<
      FeeSetEvent.InputTuple,
      FeeSetEvent.OutputTuple,
      FeeSetEvent.OutputObject
    >;

    "NativeBatchSent(address[],uint256[])": TypedContractEvent<
      NativeBatchSentEvent.InputTuple,
      NativeBatchSentEvent.OutputTuple,
      NativeBatchSentEvent.OutputObject
    >;
    NativeBatchSent: TypedContractEvent<
      NativeBatchSentEvent.InputTuple,
      NativeBatchSentEvent.OutputTuple,
      NativeBatchSentEvent.OutputObject
    >;

    "NativeFeesWithdrawn(address,uint256)": TypedContractEvent<
      NativeFeesWithdrawnEvent.InputTuple,
      NativeFeesWithdrawnEvent.OutputTuple,
      NativeFeesWithdrawnEvent.OutputObject
    >;
    NativeFeesWithdrawn: TypedContractEvent<
      NativeFeesWithdrawnEvent.InputTuple,
      NativeFeesWithdrawnEvent.OutputTuple,
      NativeFeesWithdrawnEvent.OutputObject
    >;

    "RoleAdminChanged(bytes32,bytes32,bytes32)": TypedContractEvent<
      RoleAdminChangedEvent.InputTuple,
      RoleAdminChangedEvent.OutputTuple,
      RoleAdminChangedEvent.OutputObject
    >;
    RoleAdminChanged: TypedContractEvent<
      RoleAdminChangedEvent.InputTuple,
      RoleAdminChangedEvent.OutputTuple,
      RoleAdminChangedEvent.OutputObject
    >;

    "RoleGranted(bytes32,address,address)": TypedContractEvent<
      RoleGrantedEvent.InputTuple,
      RoleGrantedEvent.OutputTuple,
      RoleGrantedEvent.OutputObject
    >;
    RoleGranted: TypedContractEvent<
      RoleGrantedEvent.InputTuple,
      RoleGrantedEvent.OutputTuple,
      RoleGrantedEvent.OutputObject
    >;

    "RoleRevoked(bytes32,address,address)": TypedContractEvent<
      RoleRevokedEvent.InputTuple,
      RoleRevokedEvent.OutputTuple,
      RoleRevokedEvent.OutputObject
    >;
    RoleRevoked: TypedContractEvent<
      RoleRevokedEvent.InputTuple,
      RoleRevokedEvent.OutputTuple,
      RoleRevokedEvent.OutputObject
    >;
  };
}
