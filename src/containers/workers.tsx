import { selectWorkers, selectFarmers } from "../slices/workersSlice";
import { useSelector } from "react-redux";
import WorkersList from "../components/workersList";
import { useDispatch } from "react-redux";
import {
  incrementWorkersByAmount,
  incrementFarmersByAmount,
  decreaseWorkersByAmount,
} from "../slices/workersSlice";

function Workers() {
  const dispatch = useDispatch();
  const workers = useSelector(selectWorkers);
  const farmers = useSelector(selectFarmers);

  function assignFarmer() {
    if (workers > 0) {
      dispatch(incrementFarmersByAmount(1));
      dispatch(decreaseWorkersByAmount(1));
    }
  }

  function hireWorker() {
    dispatch(incrementWorkersByAmount(1));
  }

  return (
    <div>
      <button id="hire-peasants" type="button" onClick={hireWorker}>
        Hire workers
      </button>
      <p></p>

      <WorkersList
        workers={workers}
        farmers={farmers}
        incrementFarmer={assignFarmer}
      />
    </div>
  );
}

export default Workers;
