// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./IHysteaksBatchSend.sol";

/**
 * @title HYSTEAKS Batch Send Contract
 * @notice This contract allows you to send native and ERC20 tokens to multiple recipients in a single transaction.
 * Sending tokens to multiple addresses in a single transaction is a common use case for batch sending as it is more gas efficient.
 * Another benefit is that the tx will revert if any of the transfers fails so you don't need to worry about partial transfers.
 *
 * NOTE: A percentage fee is charged for each transaction that must be paid unless the sender is exempt from fees.
 * In order to avoid the fee, please purchase a HYSTEAKS Pro plan.
 * https://www.hysteaks.com
 */
contract HysteaksBatchSend is AccessControl, IHysteaksBatchSend {
    // Add a fee percentage variable (e.g., 0.1% = 1, 1% = 10, 2.5% = 25)
    uint256 public fee = 25;

    // Address that is used by the platform to update the fee exceptions based on the Pro plan status
    bytes32 public constant FEE_EXEMPT_ROLE = keccak256("FEE_EXEMPT_ROLE");

    // Is the address exempt from all fees?
    mapping(address => bool) public isFeeExempt;

    constructor() AccessControl() {
        _grantRole(DEFAULT_ADMIN_ROLE, _msgSender());
        _grantRole(FEE_EXEMPT_ROLE, _msgSender());
    }

    /**
     * Batch Sending
     */

    function sendNativeBatch(
        address[] memory recipients,
        uint256[] memory amounts
    ) external payable {
        require(recipients.length > 0, "Recipients array cannot be empty");
        require(
            recipients.length == amounts.length,
            "Recipients and amounts must have the same length"
        );

        if (fee > 0 && !isFeeExempt[_msgSender()]) {
            uint256 totalAmount = 0;

            for (uint256 i = 0; i < recipients.length; i++) {
                totalAmount += amounts[i];
            }

            require(
                msg.value == totalAmount + calculateFee(totalAmount),
                "Insufficient funds for fee"
            );
        }

        for (uint256 i = 0; i < recipients.length; i++) {
            (bool success, ) = payable(recipients[i]).call{value: amounts[i]}(
                ""
            );
            require(success, "Transfer failed");
        }

        emit NativeBatchSent(recipients, amounts);
    }

    function sendERC20Batch(
        address token,
        address[] memory recipients,
        uint256[] memory amounts
    ) external {
        require(recipients.length > 0, "Recipients array cannot be empty");
        require(
            recipients.length == amounts.length,
            "Recipients and amounts must have the same length"
        );

        if (fee > 0 && !isFeeExempt[_msgSender()]) {
            uint256 totalAmount = 0;

            for (uint256 i = 0; i < recipients.length; i++) {
                totalAmount += amounts[i];
            }

            uint256 _fee = calculateFee(totalAmount);

            require(
                IERC20(token).balanceOf(_msgSender()) >= totalAmount + _fee,
                "Insufficient funds for fee"
            );

            IERC20(token).transferFrom(_msgSender(), address(this), _fee);
        }

        for (uint256 i = 0; i < recipients.length; i++) {
            IERC20(token).transferFrom(_msgSender(), recipients[i], amounts[i]);
        }

        emit ERC20BatchSent(token, recipients, amounts);
    }

    function calculateFee(uint256 amount) public view returns (uint256) {
        return (amount * fee) / 1000;
    }

    /**
     * Fee Exempt Status
     */

    function setFeeExempt(
        address recipient,
        bool _isExempt
    ) external onlyRole(FEE_EXEMPT_ROLE) {
        isFeeExempt[recipient] = _isExempt;

        emit FeeExemptSet(recipient, _isExempt);
    }

    function setFeeExemptBatch(
        address[] memory recipients,
        bool[] memory _isExempt
    ) external onlyRole(FEE_EXEMPT_ROLE) {
        require(
            recipients.length == _isExempt.length,
            "Addresses and exemptions must have the same length"
        );

        for (uint256 i = 0; i < recipients.length; i++) {
            isFeeExempt[recipients[i]] = _isExempt[i];
        }

        emit BatchFeeExemptSet(recipients, _isExempt);
    }

    /**
     * Admin Fee Management
     */

    function setFee(uint256 _fee) external onlyRole(DEFAULT_ADMIN_ROLE) {
        fee = _fee;

        emit FeeSet(_fee);
    }

    function withdrawNativeFees(
        address to
    ) external onlyRole(DEFAULT_ADMIN_ROLE) {
        uint256 balance = address(this).balance;

        payable(to).transfer(balance);

        emit NativeFeesWithdrawn(to, balance);
    }

    function withdrawERC20Fees(
        address token,
        address to
    ) external onlyRole(DEFAULT_ADMIN_ROLE) {
        uint256 balance = IERC20(token).balanceOf(address(this));

        IERC20(token).transfer(to, balance);

        emit ERC20FeesWithdrawn(token, to, balance);
    }

    receive() external payable {}
}
