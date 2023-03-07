import React from 'react';
import { useContext } from 'react';
import WorkoutContext from '../context/workoutContext';
import {
    Table,
    Header,
    HeaderRow,
    HeaderCell,
    Body,
    Row,
    Cell,
} from '@table-library/react-table-library/table'; // npm install @table-library/react-table-library @emotion/react
// https://www.robinwieruch.de/react-table-select/ to learn more about tables, also comes with more tutorials on how to
// do row selection and sorting stuff
function WorkoutLog()
{
    const { setActivePage } = useContext(WorkoutContext)
    const list = [ /* Insert priorworkout data */]
    const data = { nodes: list};
    return(
    
        <div className='priorWorkout'>
            <h1>Prior Workouts</h1>
            <Table data={data}>
                {(tableList) => (
                    <Header>
                        <HeaderRow>
                            <HeaderCell>Exercise Name</HeaderCell>
                            <HeaderCell>Sets</HeaderCell>
                            <HeaderCell>Reps</HeaderCell>
                            <HeaderCell>Category</HeaderCell>
                            <HeaderCell>Level</HeaderCell>
                        </HeaderRow>
                    </Header>
                )}
            </Table>
        </div>        
    )

    
}

export default WorkoutLog;