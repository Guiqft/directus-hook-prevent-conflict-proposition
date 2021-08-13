"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
const registerHook = ({ services, exceptions }) => {
    const { ItemsService } = services;
    const { ServiceUnavailableException, ForbiddenException, InvalidPayloadException } = exceptions;
    return {
        'items.update.before': async function (input, { collection, schema }) {
            if (collection !== 'ordem_do_dia')
                return input;
            const singlePropositions = input.proposicao || [];
            const blockPropositions = input.proposicao_bloco || [];
            if (blockPropositions.length > 0 && singlePropositions.length > 0) {
                try {
                    const singlePropositionsIDS = await utils_1.getIDs(singlePropositions, 'single', ItemsService, schema);
                    const blockPropositionsIDS = await utils_1.getIDs(blockPropositions, 'block', ItemsService, schema);
                    const intersection = utils_1.getArrayIntersection(singlePropositionsIDS, blockPropositionsIDS);
                    if (intersection.length > 0) {
                        throw new InvalidPayloadException('Existem proposições em votação por item e bloco ao mesmo tempo.');
                    }
                }
                catch (e) {
                    throw new ServiceUnavailableException(e, { service: 'prevent-conflict-propositions' });
                }
            }
            return input;
        },
    };
};
exports.default = registerHook;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxtQ0FBdUQ7QUFFdkQsTUFBTSxZQUFZLEdBQXlCLENBQUMsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRTtJQUN2RSxNQUFNLEVBQUUsWUFBWSxFQUFFLEdBQUcsUUFBUSxDQUFDO0lBQ2xDLE1BQU0sRUFBRSwyQkFBMkIsRUFBRSxrQkFBa0IsRUFBRSx1QkFBdUIsRUFBRSxHQUFHLFVBQVUsQ0FBQztJQUVoRyxPQUFPO1FBQ04scUJBQXFCLEVBQUUsS0FBSyxXQUFXLEtBQVUsRUFBRSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQXlCO1lBQy9GLElBQUksVUFBVSxLQUFLLGNBQWM7Z0JBQUUsT0FBTyxLQUFLLENBQUM7WUFFaEQsTUFBTSxrQkFBa0IsR0FBVSxLQUFLLENBQUMsVUFBVSxJQUFJLEVBQUUsQ0FBQztZQUN6RCxNQUFNLGlCQUFpQixHQUFVLEtBQUssQ0FBQyxnQkFBZ0IsSUFBSSxFQUFFLENBQUM7WUFFOUQsSUFBSSxpQkFBaUIsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLGtCQUFrQixDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ2xFLElBQUk7b0JBQ0gsTUFBTSxxQkFBcUIsR0FBRyxNQUFNLGNBQU0sQ0FBQyxrQkFBa0IsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLE1BQU0sQ0FBQyxDQUFDO29CQUMvRixNQUFNLG9CQUFvQixHQUFHLE1BQU0sY0FBTSxDQUFDLGlCQUFpQixFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxDQUFDLENBQUM7b0JBRTVGLE1BQU0sWUFBWSxHQUFHLDRCQUFvQixDQUFDLHFCQUFxQixFQUFFLG9CQUFvQixDQUFDLENBQUM7b0JBQ3ZGLElBQUksWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7d0JBQzVCLE1BQU0sSUFBSSx1QkFBdUIsQ0FBQyxpRUFBaUUsQ0FBQyxDQUFDO3FCQUNyRztpQkFDRDtnQkFBQyxPQUFPLENBQUMsRUFBRTtvQkFDWCxNQUFNLElBQUksMkJBQTJCLENBQUMsQ0FBQyxFQUFFLEVBQUUsT0FBTyxFQUFFLCtCQUErQixFQUFFLENBQUMsQ0FBQztpQkFDdkY7YUFDRDtZQUNELE9BQU8sS0FBSyxDQUFDO1FBQ2QsQ0FBQztLQUNELENBQUM7QUFDSCxDQUFDLENBQUM7QUFFRixrQkFBZSxZQUFZLENBQUMifQ==