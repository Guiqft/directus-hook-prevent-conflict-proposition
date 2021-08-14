"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getArrayIntersection = exports.getIDs = void 0;
const getIDs = async (values, type, itemService, schema) => {
    if (values.length > 0) {
        let ids = [];
        const relationsIDs = values.filter((el) => typeof el === 'number');
        const propositionsIDs = values.filter((el) => typeof el === 'object').map((el) => el.proposicoes_id);
        const relationService = new itemService(`${type === 'single' ? 'ordem_do_dia_proposicoes' : 'ordem_do_dia_proposicoes_1'}`, { schema });
        const relationsData = await relationService.readMany(relationsIDs);
        relationsData.map((relation) => ids.push(relation.proposicoes_id));
        ids = [...ids, ...propositionsIDs];
        return ids;
    }
    else
        return [];
};
exports.getIDs = getIDs;
const getArrayIntersection = (array1, array2) => {
    return array1.filter((value) => array2.includes(value));
};
exports.getArrayIntersection = getArrayIntersection;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzcmMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR08sTUFBTSxNQUFNLEdBQUcsS0FBSyxFQUMxQixNQUFhLEVBQ2IsSUFBd0IsRUFDeEIsV0FBeUQsRUFDekQsTUFBdUMsRUFDdEMsRUFBRTtJQUNILElBQUksTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDdEIsSUFBSSxHQUFHLEdBQWEsRUFBRSxDQUFDO1FBRXZCLE1BQU0sWUFBWSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLE9BQU8sRUFBRSxLQUFLLFFBQVEsQ0FBQyxDQUFDO1FBQ25FLE1BQU0sZUFBZSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLE9BQU8sRUFBRSxLQUFLLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRXJHLE1BQU0sZUFBZSxHQUFHLElBQUksV0FBVyxDQUN0QyxHQUFHLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQyw0QkFBNEIsRUFBRSxFQUNsRixFQUFFLE1BQU0sRUFBRSxDQUNWLENBQUM7UUFFRixNQUFNLGFBQWEsR0FBRyxNQUFNLGVBQWUsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDbkUsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztRQUVuRSxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsRUFBRSxHQUFHLGVBQWUsQ0FBQyxDQUFDO1FBRW5DLE9BQU8sR0FBRyxDQUFDO0tBQ1g7O1FBQU0sT0FBTyxFQUFFLENBQUM7QUFDbEIsQ0FBQyxDQUFDO0FBeEJXLFFBQUEsTUFBTSxVQXdCakI7QUFFSyxNQUFNLG9CQUFvQixHQUFHLENBQUMsTUFBYSxFQUFFLE1BQWEsRUFBRSxFQUFFO0lBQ3BFLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQ3pELENBQUMsQ0FBQztBQUZXLFFBQUEsb0JBQW9CLHdCQUUvQiJ9