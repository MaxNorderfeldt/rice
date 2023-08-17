import { selectWorkers, selectFarmers } from "../slices/workersSlice";
import { selectRice, decrementRice } from "../slices/riceSlice";
import { useSelector } from "react-redux";
import WorkersList from "../components/workersList";
import { useDispatch } from "react-redux";
import {
  incrementWorkers,
  incrementFarmers,
  decreaseWorkers,
} from "../slices/workersSlice";

const workerCost = 5;

function Workers() {
  const dispatch = useDispatch();
  const workers = useSelector(selectWorkers);
  const farmers = useSelector(selectFarmers);
  const rice = useSelector(selectRice);

  function assignFarmer() {
    if (workers > 0) {
      dispatch(incrementFarmers(1));
      dispatch(decreaseWorkers(1));
    }
  }

  function hireWorker() {
    if (rice >= workerCost) {
      dispatch(incrementWorkers(1));
      dispatch(decrementRice(workerCost));
    }
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
