import { HookRegisterFunction, EventHandlerArguments } from './types';
import { getArrayIntersection, getIDs } from './utils';

const registerHook: HookRegisterFunction = ({ services, exceptions }) => {
	const { ItemsService } = services;
	const { ServiceUnavailableException, InvalidPayloadException } = exceptions;

	return {
		'items.update.before': async function (input: any, { collection, schema, item }: EventHandlerArguments) {
			if (collection !== 'ordem_do_dia') return input;

			const singlePropositions: any[] = input.proposicao || [];
			const blockPropositions: any[] = input.proposicao_bloco || [];

			try {
				const singlePropositionsIDS = await getIDs(item, singlePropositions, 'single', ItemsService, schema);
				const blockPropositionsIDS = await getIDs(item, blockPropositions, 'block', ItemsService, schema);

				const intersection = getArrayIntersection(singlePropositionsIDS, blockPropositionsIDS);
				if (intersection.length > 0) {
					throw new InvalidPayloadException('Existem proposições em votação por item e bloco ao mesmo tempo.');
				}
			} catch (e) {
				throw new ServiceUnavailableException(e, { service: 'prevent-conflict-propositions' });
			}

			return input;
		},
	};
};

export default registerHook;
