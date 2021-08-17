"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
const registerHook = ({ services, exceptions }) => {
    const { ItemsService } = services;
    const { ServiceUnavailableException, InvalidPayloadException } = exceptions;
    return {
        'items.update.before': async function (input, { collection, schema, item }) {
            if (collection !== 'ordem_do_dia')
                return input;
            const singlePropositions = input.proposicao || [];
            const blockPropositions = input.proposicao_bloco || [];
            try {
                const singlePropositionsIDS = await utils_1.getIDs(item, singlePropositions, 'single', ItemsService, schema);
                const blockPropositionsIDS = await utils_1.getIDs(item, blockPropositions, 'block', ItemsService, schema);
                const intersection = utils_1.getArrayIntersection(singlePropositionsIDS, blockPropositionsIDS);
                if (intersection.length > 0) {
                    throw new InvalidPayloadException('Existem proposições em votação por item e bloco ao mesmo tempo.');
                }
            }
            catch (e) {
                throw new ServiceUnavailableException(e, { service: 'prevent-conflict-propositions' });
            }
            return input;
        },
    };
};
exports.default = registerHook;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxtQ0FBdUQ7QUFFdkQsTUFBTSxZQUFZLEdBQXlCLENBQUMsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRTtJQUN2RSxNQUFNLEVBQUUsWUFBWSxFQUFFLEdBQUcsUUFBUSxDQUFDO0lBQ2xDLE1BQU0sRUFBRSwyQkFBMkIsRUFBRSx1QkFBdUIsRUFBRSxHQUFHLFVBQVUsQ0FBQztJQUU1RSxPQUFPO1FBQ04scUJBQXFCLEVBQUUsS0FBSyxXQUFXLEtBQVUsRUFBRSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUF5QjtZQUNyRyxJQUFJLFVBQVUsS0FBSyxjQUFjO2dCQUFFLE9BQU8sS0FBSyxDQUFDO1lBRWhELE1BQU0sa0JBQWtCLEdBQVUsS0FBSyxDQUFDLFVBQVUsSUFBSSxFQUFFLENBQUM7WUFDekQsTUFBTSxpQkFBaUIsR0FBVSxLQUFLLENBQUMsZ0JBQWdCLElBQUksRUFBRSxDQUFDO1lBRTlELElBQUk7Z0JBQ0gsTUFBTSxxQkFBcUIsR0FBRyxNQUFNLGNBQU0sQ0FBQyxJQUFJLEVBQUUsa0JBQWtCLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxNQUFNLENBQUMsQ0FBQztnQkFDckcsTUFBTSxvQkFBb0IsR0FBRyxNQUFNLGNBQU0sQ0FBQyxJQUFJLEVBQUUsaUJBQWlCLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLENBQUMsQ0FBQztnQkFFbEcsTUFBTSxZQUFZLEdBQUcsNEJBQW9CLENBQUMscUJBQXFCLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztnQkFDdkYsSUFBSSxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtvQkFDNUIsTUFBTSxJQUFJLHVCQUF1QixDQUFDLGlFQUFpRSxDQUFDLENBQUM7aUJBQ3JHO2FBQ0Q7WUFBQyxPQUFPLENBQUMsRUFBRTtnQkFDWCxNQUFNLElBQUksMkJBQTJCLENBQUMsQ0FBQyxFQUFFLEVBQUUsT0FBTyxFQUFFLCtCQUErQixFQUFFLENBQUMsQ0FBQzthQUN2RjtZQUVELE9BQU8sS0FBSyxDQUFDO1FBQ2QsQ0FBQztLQUNELENBQUM7QUFDSCxDQUFDLENBQUM7QUFFRixrQkFBZSxZQUFZLENBQUMifQ==