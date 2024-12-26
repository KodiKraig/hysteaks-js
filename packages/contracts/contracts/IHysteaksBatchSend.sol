// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

interface IHysteaksBatchSend {
    /**
     * Batch Sending
     */

    /**
     * @notice Send native tokens to multiple recipients
     * @param recipients The addresses of the recipients
     * @param amounts The amounts of native tokens to send to each recipient
     */
    function sendNativeBatch(
        address[] memory recipients,
        uint256[] memory amounts
    ) external payable;

    /**
     * @notice Event emitted when native tokens are sent to multiple recipients
     * @param recipients The addresses of the recipients
     * @param amounts The amounts of native tokens sent to each recipient
     */
    event NativeBatchSent(address[] recipients, uint256[] amounts);

    /**
     * @notice Send ERC20 tokens to multiple recipients
     * @param token The address of the ERC20 token
     * @param recipients The addresses of the recipients
     * @param amounts The amounts of ERC20 tokens to send to each recipient
     */
    function sendERC20Batch(
        address token,
        address[] memory recipients,
        uint256[] memory amounts
    ) external;

    /**
     * @notice Event emitted when ERC20 tokens are sent to multiple recipients
     * @param token The address of the ERC20 token
     * @param recipients The addresses of the recipients
     * @param amounts The amounts of ERC20 tokens sent to each recipient
     */
    event ERC20BatchSent(
        address indexed token,
        address[] recipients,
        uint256[] amounts
    );

    /**
     * @notice Calculate the fee for a transaction
     * @param amount The amount of tokens to send
     * @return The fee for the transaction
     */
    function calculateFee(uint256 amount) external view returns (uint256);

    /**
     * Fee Exempt Status
     */

    /**
     * @notice Set the fee exempt status for an address
     * @param recipient The address to set the fee exempt status for
     * @param _isExempt Whether the address is exempt from fees
     */
    function setFeeExempt(address recipient, bool _isExempt) external;

    /**
     * @notice Event emitted when the fee exempt status is set for an address
     * @param recipient The address that the fee exempt status is set for
     * @param isExempt Whether the address is exempt from fees
     */
    event FeeExemptSet(address indexed recipient, bool isExempt);

    /**
     * @notice Batch set the fee exempt status for multiple addresses
     * @param recipients The addresses to set the fee exempt status for
     * @param _isExempt Whether the addresses are exempt from fees
     */
    function setFeeExemptBatch(
        address[] memory recipients,
        bool[] memory _isExempt
    ) external;

    /**
     * @notice Event emitted when the fee exempt status is set for multiple addresses
     * @param recipients The addresses that the fee exempt status is set for
     * @param isExempt Whether the addresses are exempt from fees
     */
    event BatchFeeExemptSet(address[] recipients, bool[] isExempt);

    /**
     * Admin Fee Management
     */

    /**
     * @notice Get the fee per thousand
     * @return The fee per thousand
     */
    function fee() external view returns (uint256);

    /**
     * @notice Set the fee per thousand
     * @param _fee The fee per thousand to set
     */
    function setFee(uint256 _fee) external;

    /**
     * @notice Event emitted when the fee is set
     * @param fee The fee that is set
     */
    event FeeSet(uint256 fee);

    /**
     * @notice Withdraw fees
     * @param to The address to withdraw the fees to
     */
    function withdrawNativeFees(address to) external;

    /**
     * @notice Event emitted when native fees are withdrawn
     * @param to The address that the fees are withdrawn to
     * @param amount The amount of fees that are withdrawn
     */
    event NativeFeesWithdrawn(address indexed to, uint256 amount);

    /**
     * @notice Withdraw ERC20 fees
     * @param token The address of the ERC20 token
     * @param to The address to withdraw the fees to
     */
    function withdrawERC20Fees(address token, address to) external;

    /**
     * @notice Event emitted when ERC20 fees are withdrawn
     * @param token The address of the ERC20 token
     * @param to The address that the fees are withdrawn to
     * @param amount The amount of fees that are withdrawn
     */
    event ERC20FeesWithdrawn(
        address indexed token,
        address indexed to,
        uint256 amount
    );
}
