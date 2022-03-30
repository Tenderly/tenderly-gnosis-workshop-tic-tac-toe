import {
	ActionFn,
	Context,
	Event,
	TransactionEvent,
} from '@tenderly/actions';

import {ethers} from "ethers";

import TicTacToe from "./TicTacToe.json";

import {Game, getBoard} from "./util";

export const gameMove: ActionFn = async (context: Context, event: Event) => {
	let txEvent = event as TransactionEvent;

	let iface = new ethers.utils.Interface(TicTacToe.abi);

	const result = iface.decodeEventLog("PlayerMadeMove", txEvent.logs[0].data, txEvent.logs[0].topics);

	console.log(result);

	const game = await getBoard(context, result.gameId.toString());

	const player = result.player.toLowerCase() as string;

	game.board[result.yCoordinate][result.xCoordinate] = game.players[player];

	drawBoard(game);

	await context.storage.putJson(result.gameId.toString(), game);
}

function drawBoard(game: Game): void {
	let  board = "\n";

	game.board.forEach((row) => {
		row.forEach((field) => {
			if (field == 1) {
				board += "❎ ";
				return;
			}

			if (field == 2) {
				board += "🅾️ ";
				return;
			}

			board += "💜 ";
		});

		board += "\n";
	});

	console.log(board);
}