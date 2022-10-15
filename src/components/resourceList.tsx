function ResourceList(props: any) {
  const { rice, workers } = props;

  return (
    <div>
      Resources <br></br>Rice: {rice} <br></br>
      Workers: {workers}
    </div>
  );
}

export default ResourceList;
