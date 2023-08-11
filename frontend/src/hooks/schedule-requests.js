import { useDispatch } from 'react-redux';
import { fetchDataError, fetchScheduleSuccsess } from '../reducers/actions';


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

      dispatch(fetchScheduleSuccsess(schedule));

    } catch (error) {
      dispatch(fetchDataError(error.message));
    }
  };

  const getSchedule = async () => {
    try {
      const response = await fetch(`${url}/schedule`);
      const scheduleData = await response.json();

      if(scheduleData === null) {
        return null;
      } else {
        dispatch(fetchScheduleSuccsess(scheduleData));
      }

      return scheduleData;

    } catch (error) {
      dispatch(fetchDataError(error.message));
    }
  }

  return {
   saveSchedule,
   getSchedule
  }
}

export default useScheduleRequests;