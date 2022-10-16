import { Fragment, useState } from "react";

function WorkersTab(props: any) {
  const [peasants, setPeasants] = useState(0);

  const { setRice } = props;

  function hirePeasants(amount: number) {
    setPeasants(peasants + 1);
    setRice(5);
  }

  return (
    <Fragment>
      <button id="hire-peasants" type="button" onClick={() => hirePeasants(1)}>
        Hire peasants
      </button>
      <p>{peasants}</p>
    </Fragment>
  );
}

export default WorkersTab;
