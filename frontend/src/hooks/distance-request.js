function useDistanceRequests () {
  const url = 'http://localhost:8080'

  const getTimeDistances = async (events, token) => {
    try {
      const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json', Authorization: `Bearer ${token}`},
        body: JSON.stringify(events)
      };

      const response = await fetch(`${url}/homes/distanceMatrix`, options);
      const scheduleViability = await response.json();

      return scheduleViability

    } catch (error) {
      console.log(error)
    }
  };

  return {
   getTimeDistances
  }
}

export default useDistanceRequests;