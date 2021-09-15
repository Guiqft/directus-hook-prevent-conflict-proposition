"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getArrayIntersection = exports.getIDs = void 0;
const getIDs = async (itemId, values, type, itemService, schema) => {
    const relationService = new itemService(`${type === 'single' ? 'ordem_do_dia_proposicoes' : 'ordem_do_dia_proposicoes_1'}`, { schema });
    if (values.length > 0) {
        let ids = [];
        const relationsIDs = values.filter((el) => typeof el === 'number');
        const propositionsIDs = values.filter((el) => typeof el === 'object').map((el) => el.proposicoes_id);
        if (relationsIDs.length > 0) {
            const relationsData = await relationService.readMany(relationsIDs);
            relationsData.map((relation) => ids.push(relation.proposicoes_id));
        }
        ids = [...ids, ...propositionsIDs];
        return ids;
    }
    else {
        const itemRelations = await relationService.readByQuery({ filter: { ordem_do_dia_id: { _eq: Number(itemId) } } });
        return itemRelations.map((relation) => relation.proposicoes_id);
    }
};
exports.getIDs = getIDs;
const getArrayIntersection = (array1, array2) => {
    return array1.filter((value) => array2.includes(value));
};
exports.getArrayIntersection = getArrayIntersection;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzcmMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR08sTUFBTSxNQUFNLEdBQUcsS0FBSyxFQUMxQixNQUF1QixFQUN2QixNQUFhLEVBQ2IsSUFBd0IsRUFDeEIsV0FBeUQsRUFDekQsTUFBdUMsRUFDdEMsRUFBRTtJQUNILE1BQU0sZUFBZSxHQUFHLElBQUksV0FBVyxDQUN0QyxHQUFHLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQyw0QkFBNEIsRUFBRSxFQUNsRixFQUFFLE1BQU0sRUFBRSxDQUNWLENBQUM7SUFFRixJQUFJLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBQ3RCLElBQUksR0FBRyxHQUFhLEVBQUUsQ0FBQztRQUV2QixNQUFNLFlBQVksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxPQUFPLEVBQUUsS0FBSyxRQUFRLENBQUMsQ0FBQztRQUNuRSxNQUFNLGVBQWUsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxPQUFPLEVBQUUsS0FBSyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUVyRyxJQUFJLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQzVCLE1BQU0sYUFBYSxHQUFHLE1BQU0sZUFBZSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUNuRSxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1NBQ25FO1FBRUQsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLEVBQUUsR0FBRyxlQUFlLENBQUMsQ0FBQztRQUVuQyxPQUFPLEdBQUcsQ0FBQztLQUNYO1NBQU07UUFDTixNQUFNLGFBQWEsR0FBRyxNQUFNLGVBQWUsQ0FBQyxXQUFXLENBQUMsRUFBRSxNQUFNLEVBQUUsRUFBRSxlQUFlLEVBQUUsRUFBRSxHQUFHLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDbEgsT0FBTyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUM7S0FDaEU7QUFDRixDQUFDLENBQUM7QUE5QlcsUUFBQSxNQUFNLFVBOEJqQjtBQUVLLE1BQU0sb0JBQW9CLEdBQUcsQ0FBQyxNQUFhLEVBQUUsTUFBYSxFQUFFLEVBQUU7SUFDcEUsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFDekQsQ0FBQyxDQUFDO0FBRlcsUUFBQSxvQkFBb0Isd0JBRS9CIn0=