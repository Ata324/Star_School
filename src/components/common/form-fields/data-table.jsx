export const Column = ({ children }) => {
  return <th>{children}</th>;
};

export const Cell = ({ children }) => {
  return <td>{children}</td>;
};

export const Row = ({ children }) => {
  return <tr>{children}</tr>;
};

const DataTable = (props) => {
  const { title, children, dataSource, dataKey } = props;

  console.log(children);

  if (!dataSource || !Array.isArray(dataSource))
    throw new Error("dataSources attribute is required");

  return (
    <div className="card">
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>{children}</tr>
            </thead>
            <tbody>
              {dataSource.map((row) => (
                <Row key={row[dataKey]}>
                  {children.map((cell) => {
                    const { dataField, index } = cell.props;
                    let cellData = "";
                    cellData = row[dataField];
                    const cellKey=row[dataKey]+dataField+cellData;
                    return <Cell key={cellKey}>{cellData}</Cell>;
                  })}
                </Row>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
