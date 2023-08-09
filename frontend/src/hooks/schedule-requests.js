import { useDispatch } from 'react-redux';
import { fetchDataError } from '../reducers/actions';


function useScheduleRequests () {
  const dispatch = useDispatch();
  const url = 'http://localhost:3001'



  const saveSchedule = async (schedule) => {
    try {
      const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json',},
        body: JSON.stringify(schedule)
      };

      const response = await fetch(`${url}/schedule`, options);
      const data = await response.json();

    } catch (error) {
      dispatch(fetchDataError(error.message));
    }
  };

  return {
   saveSchedule
  }
}

export default useScheduleRequests;