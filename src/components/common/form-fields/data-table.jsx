export const Column = ({ children }) => {
  return <th>{children}</th>;
};

/* export const Cell = ({ children }) => {
  return <td>{children}</td>;
};

export const Row = ({ children }) => {
  return <tr>{children}</tr>;
};
 */

export const Row = ({ children }) => {
  return <tr>{children}</tr>;
};

export const Cell = ({ children }) => {
  return <td>{children}</td>;
};

const DataTable = (props) => {
  const { title, children, dataSource, dataKey } = props;

  if (!dataSource || !Array.isArray(dataSource))
    throw new Error("dataSources attribute is required");

  if (!dataKey) throw new Error("dataKey is required");

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
              {
                dataSource.map((row)=>(
                  <Row>
                    <Cell>
                      {row[dataKey]}
                    </Cell>
                  </Row>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
