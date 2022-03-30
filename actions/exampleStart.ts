import {
	ActionFn,
	Context,
	Event,
	TransactionEvent,
} from '@tenderly/actions';

import {ethers} from "ethers";

import TicTacToe from "./TicTacToe.json";

import {Game} from "./util";

export const gameStartFn: ActionFn = async (context: Context, event: Event) => {
	let txEvent = event as TransactionEvent;
	
	let iface = new ethers.utils.Interface(TicTacToe.abi);

	const result = iface.decodeEventLog("GameCreated", txEvent.logs[0].data, txEvent.logs[0].topics);

	console.log(result);

	await context.storage.putJson(result.gameId.toString(), createEmptyBoard());
}

function createEmptyBoard(): Game {
	return {
			players: {},
			board: [
					[0,0,0],
					[0,0,0],
					[0,0,0]
			]} as Game;
}