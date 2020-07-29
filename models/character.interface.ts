import { ECharacterStatus } from '~/models/character-status.enum';

export interface ICharacter {
	char_id: number;
	name: string;
	birthday: string;
	occupation: string[];
	img: string;
	status: ECharacterStatus;
	nickname: string;
	appearance: number[];
	portrayed: string;
	category: string;
	better_call_saul_appearance: number[];
}
