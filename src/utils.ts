import { ExtensionContext } from 'directus/dist/types';
import { EventHandlerArguments } from './types';

export const getIDs = async (
	values: any[],
	type: 'single' | 'block',
	itemService: ExtensionContext['services']['ItemsService'],
	schema: EventHandlerArguments['schema']
) => {
	let ids: string[] = [];

	const relationsIDs = values.filter((el) => typeof el === 'number');
	const propositionsIDs = values.filter((el) => typeof el === 'object').map((el) => el.proposicoes_id);

	const relationService = new itemService(
		`${type === 'single' ? 'ordem_do_dia_proposicoes' : 'ordem_do_dia_proposicoes_1'}`,
		{ schema }
	);

	const relationsData = await relationService.readMany(relationsIDs);
	relationsData.map((relation) => ids.push(relation.proposicoes_id));

	ids = [...ids, ...propositionsIDs];

	return ids;
};

export const getArrayIntersection = (array1: any[], array2: any[]) => {
	return array1.filter((value) => array2.includes(value));
};
