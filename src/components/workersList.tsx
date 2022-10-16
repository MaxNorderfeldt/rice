function WorkersList(props: any) {
  const { workers, farmers, incrementFarmer } = props;

  return (
    <div>
      <p>
        Workers: {workers}
        <br />
        Farmers: {farmers}
        <button id="assign-farmer" type="button" onClick={incrementFarmer}>
          +
        </button>
      </p>
    </div>
  );
}

export default WorkersList;
