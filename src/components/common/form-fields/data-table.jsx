export const Column = ({ children }) => {
  return <th>{children}</th>;
};

/* export const Cell = ({ children }) => {
  return <td>{children}</td>;
};

export const Row = ({ children }) => {
  return <tr>{children}</tr>;c--
};
 */

export const Row = ({ children }) => {
  return <tr>{children}</tr>;
};

export const Cell = ({ children }) => {
  return <td>{children}</td>;
};

const DataTable = (props) => {
  const {
    title,
    dataSource,
    dataKey,
    totalPages,
    currentPage,
    pageSize,
    children,
  } = props;

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
              {dataSource.map((row, rowIndex) => (
                <Row key={row[dataKey]}>
                  {children.map((cell) => {
                    const { dataField, index } = cell.props;
                    let cellData = "";

                    const cellKey = row[dataKey] + dataField + cellData;

                    if (index) {
                      cellData = pageSize * currentPage + rowIndex + 1;
                    } else if (dataField) {
                      cellData = row[dataField];
                    } else if (template) {
                      cellData = template(row);
                    }

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
