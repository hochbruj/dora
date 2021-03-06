### Reentrancy

Within the pickWinner function, the status is changed to "winner picked" before the transfer of the deposit occurs. The function cannot be executed again, because of the status check at beginning.

The withdrawal pattern is used for the transfer of the reward to the winner's account.

### Integer Over/Underflow

The SafeMath library is used for arithmetic operations.


### Force send ether

The contract balance is **not** used when the deposit is transferred back to the owner. Instead, the reward attribute of the contract determines the amount of the deposit.

Ethers can only be withdrawn from contract based on the status, but **not** based on the balance.
