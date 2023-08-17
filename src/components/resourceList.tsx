function ResourceList(props: any) {
  const { rice, incrementRiceBy } = props;

  return (
    <div>
      Resources <br></br>Rice: {rice}{" "}
      {incrementRiceBy ? "    " + incrementRiceBy + "/s" : null}
      <br></br>
    </div>
  );
}

export default ResourceList;
