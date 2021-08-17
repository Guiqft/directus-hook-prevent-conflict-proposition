"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getArrayIntersection = exports.getIDs = void 0;
const getIDs = async (itemId, values, type, itemService, schema) => {
    const relationService = new itemService(`${type === 'single' ? 'ordem_do_dia_proposicoes' : 'ordem_do_dia_proposicoes_1'}`, { schema });
    if (values.length > 0) {
        let ids = [];
        const relationsIDs = values.filter((el) => typeof el === 'number');
        const propositionsIDs = values.filter((el) => typeof el === 'object').map((el) => el.proposicoes_id);
        const relationsData = await relationService.readMany(relationsIDs);
        relationsData.map((relation) => ids.push(relation.proposicoes_id));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzcmMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR08sTUFBTSxNQUFNLEdBQUcsS0FBSyxFQUMxQixNQUF1QixFQUN2QixNQUFhLEVBQ2IsSUFBd0IsRUFDeEIsV0FBeUQsRUFDekQsTUFBdUMsRUFDdEMsRUFBRTtJQUNILE1BQU0sZUFBZSxHQUFHLElBQUksV0FBVyxDQUN0QyxHQUFHLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQyw0QkFBNEIsRUFBRSxFQUNsRixFQUFFLE1BQU0sRUFBRSxDQUNWLENBQUM7SUFFRixJQUFJLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBQ3RCLElBQUksR0FBRyxHQUFhLEVBQUUsQ0FBQztRQUV2QixNQUFNLFlBQVksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxPQUFPLEVBQUUsS0FBSyxRQUFRLENBQUMsQ0FBQztRQUNuRSxNQUFNLGVBQWUsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxPQUFPLEVBQUUsS0FBSyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUVyRyxNQUFNLGFBQWEsR0FBRyxNQUFNLGVBQWUsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDbkUsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztRQUVuRSxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsRUFBRSxHQUFHLGVBQWUsQ0FBQyxDQUFDO1FBRW5DLE9BQU8sR0FBRyxDQUFDO0tBQ1g7U0FBTTtRQUNOLE1BQU0sYUFBYSxHQUFHLE1BQU0sZUFBZSxDQUFDLFdBQVcsQ0FBQyxFQUFFLE1BQU0sRUFBRSxFQUFFLGVBQWUsRUFBRSxFQUFFLEdBQUcsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNsSCxPQUFPLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQztLQUNoRTtBQUNGLENBQUMsQ0FBQztBQTVCVyxRQUFBLE1BQU0sVUE0QmpCO0FBRUssTUFBTSxvQkFBb0IsR0FBRyxDQUFDLE1BQWEsRUFBRSxNQUFhLEVBQUUsRUFBRTtJQUNwRSxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUN6RCxDQUFDLENBQUM7QUFGVyxRQUFBLG9CQUFvQix3QkFFL0IifQ==