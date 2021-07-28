const __waterHeaters = {
  dwh1: {
    model: "small water Heater",
    capacity: "20l",
    watts: "3000w",
    voltage: "120",
    height: "36in",
    diameter: "12in",
    weight: "70lbs",
  },
  dwh2: {
    model: "medium water Heater",
    capacity: "35l",
    watts: "3800w",
    voltage: "120",
    height: "52in",
    diameter: "18in",
    weight: "120lbs"
  },
  dwh3: {
    model: "large water Heater",
    capacity: "50l",
    watts: "4500w",
    voltage: "120",
    height: "63in",
    diameter: "2in",
    weight: "180lbs"
  },
};

const TableHeader = ({ headers }) => {
  return (
    <thead>
      <tr>
        {
          headers.map(header => (
            <th>{header}</th>
          )
          )
        }
      </tr>
    </thead>
  );
}

const TableRows = ({ waterHeater }) => {
  return (
    <tbody>
      {
        Object.values(waterHeater).map(heater => (
          <tr>
            <TableData heaterData={heater} />
          </tr>)
        )
      }
    </tbody>
  )
}

const TableData = ({ heaterData }) => {
  return (
    Object.values(heaterData).map(data => (
      <td>
        {data}
      </td>
    )))
}

const App = ({ waterHeater }) => {

  const waterHeaterItem = waterHeater.dwh1;
  const getHeaders = Object.keys(waterHeaterItem);
  console.log(getHeaders);
  return (
    <table>
      <TableHeader headers={getHeaders} />
      <TableRows waterHeater={waterHeater} />
    </table>
  )
};

ReactDOM.render(<App waterHeater={__waterHeaters} />, document.getElementById('app'))
