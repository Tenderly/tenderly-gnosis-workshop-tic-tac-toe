import {
    Context
} from "@tenderly/actions";

export type Game = {
    players: {[address: string]: number};
    board: number[][];
}

export async function getBoard(context: Context, gameId: string): Promise<Game> {
    const game = await context.storage.getJson(gameId);

    return game as Game;
}