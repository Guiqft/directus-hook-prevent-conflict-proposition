"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getArrayIntersection = exports.getIDs = void 0;
const getIDs = async (values, type, itemService, schema) => {
    let ids = [];
    const relationsIDs = values.filter((el) => typeof el === 'number');
    const propositionsIDs = values.filter((el) => typeof el === 'object').map((el) => el.proposicoes_id);
    const relationService = new itemService(`${type === 'single' ? 'ordem_do_dia_proposicoes' : 'ordem_do_dia_proposicoes_1'}`, { schema });
    const relationsData = await relationService.readMany(relationsIDs);
    relationsData.map((relation) => ids.push(relation.proposicoes_id));
    ids = [...ids, ...propositionsIDs];
    return ids;
};
exports.getIDs = getIDs;
const getArrayIntersection = (array1, array2) => {
    return array1.filter((value) => array2.includes(value));
};
exports.getArrayIntersection = getArrayIntersection;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzcmMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR08sTUFBTSxNQUFNLEdBQUcsS0FBSyxFQUMxQixNQUFhLEVBQ2IsSUFBd0IsRUFDeEIsV0FBeUQsRUFDekQsTUFBdUMsRUFDdEMsRUFBRTtJQUNILElBQUksR0FBRyxHQUFhLEVBQUUsQ0FBQztJQUV2QixNQUFNLFlBQVksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxPQUFPLEVBQUUsS0FBSyxRQUFRLENBQUMsQ0FBQztJQUNuRSxNQUFNLGVBQWUsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxPQUFPLEVBQUUsS0FBSyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUVyRyxNQUFNLGVBQWUsR0FBRyxJQUFJLFdBQVcsQ0FDdEMsR0FBRyxJQUFJLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUMsNEJBQTRCLEVBQUUsRUFDbEYsRUFBRSxNQUFNLEVBQUUsQ0FDVixDQUFDO0lBRUYsTUFBTSxhQUFhLEdBQUcsTUFBTSxlQUFlLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ25FLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFFbkUsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLEVBQUUsR0FBRyxlQUFlLENBQUMsQ0FBQztJQUVuQyxPQUFPLEdBQUcsQ0FBQztBQUNaLENBQUMsQ0FBQztBQXRCVyxRQUFBLE1BQU0sVUFzQmpCO0FBRUssTUFBTSxvQkFBb0IsR0FBRyxDQUFDLE1BQWEsRUFBRSxNQUFhLEVBQUUsRUFBRTtJQUNwRSxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUN6RCxDQUFDLENBQUM7QUFGVyxRQUFBLG9CQUFvQix3QkFFL0IifQ==