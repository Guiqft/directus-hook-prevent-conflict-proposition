import { HookRegisterFunction, EventHandlerArguments } from './types';
import { getArrayIntersection, getIDs } from './utils';

const registerHook: HookRegisterFunction = ({ services, exceptions }) => {
	const { ItemsService } = services;
	const { ServiceUnavailableException, ForbiddenException, InvalidPayloadException } = exceptions;

	return {
		'items.update.before': async function (input: any, { collection, schema }: EventHandlerArguments) {
			if (collection !== 'ordem_do_dia') return input;

			const singlePropositions: any[] = input.proposicao || [];
			const blockPropositions: any[] = input.proposicao_bloco || [];

			if (blockPropositions.length > 0 && singlePropositions.length > 0) {
				try {
					const singlePropositionsIDS = await getIDs(singlePropositions, 'single', ItemsService, schema);
					const blockPropositionsIDS = await getIDs(blockPropositions, 'block', ItemsService, schema);

					const intersection = getArrayIntersection(singlePropositionsIDS, blockPropositionsIDS);
					if (intersection.length > 0) {
						throw new InvalidPayloadException('Existem proposições em votação por item e bloco ao mesmo tempo.');
					}
				} catch (e) {
					throw new ServiceUnavailableException(e, { service: 'prevent-conflict-propositions' });
				}
			}
			return input;
		},
	};
};

export default registerHook;
