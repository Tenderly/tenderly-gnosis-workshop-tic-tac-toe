# Tenderly and Gnosis Chain workshop. Build a game with Tenderly on Gnosis Chain: step up your Smart Contract development!

Building dApps can be challenging, but it shouldn’t be.

In this session, we’ll create a simple game that we’ll be deploying to Gnosis Chain and use the Tenderly tooling to debug, monitor, and automate it.

You will learn how to use Blockscout for that – an invaluable open-source tool for exploring, confirming and inspecting transactions on any EVM blockchain.

By the end of this session, you’ll know how to:

- Deploy your Smart Contract to Gnosis Chain
- Verify your Smart Contract on Blockscout
- Import that Smart Contract into Tenderly
- Monitor and debug the game in Tenderly
- Use Web3 Actions to automate the interactions with the game

To deploy the example you'll need to do a couple of things:
1. Login by running `tenderly login`
2. Change the project in `tenderly.yaml` from `habicbogdan/gnosis-workshop` to `<your-username>/<your-project-slug>`
3. Add the contract `0x5e15A2399f415E66b333177482df6260335527b3` to your project (you can interact with the contract [here](https://blockscout.com/xdai/mainnet/address/0x5e15A2399f415E66b333177482df6260335527b3/write-contract))
4. Deploy the actions by running `tenderly actions deploy`
