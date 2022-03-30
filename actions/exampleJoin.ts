import {
	ActionFn,
	Context,
	Event,
	TransactionEvent,
} from '@tenderly/actions';

import {ethers} from "ethers";

import TicTacToe from "./TicTacToe.json";

import {getBoard} from "./util";

export const gameJoin: ActionFn = async (context: Context, event: Event) => {
	let txEvent = event as TransactionEvent;

	let iface = new ethers.utils.Interface(TicTacToe.abi);

	const result = iface.decodeEventLog("PlayerJoinedGame", txEvent.logs[0].data, txEvent.logs[0].topics);

	console.log(result);

	const game = await getBoard(context, result.gameId.toString());

	const player = result.player.toLowerCase() as string;
	const playerNumber = result.playerNumber;

	game.players[player] = playerNumber;

	await context.storage.putJson(result.gameId.toString(), game);
}
