import React from "react";

export function ResultTable({ subjects, name, withGrade }) {
  return (
    <React.Fragment>
      <h3 className="text-muted text-center"> {name}</h3>
      <table className="table table-bordered">
        <thead>
          {withGrade ? (
            <tr>
              <th scope="col">#</th>
              <th scope="col">Subject</th>
              <th scope="col">Grade</th>
            </tr>
          ) : (
            <tr>
              <th scope="col">#</th>
              <th scope="col">Subject</th>
            </tr>
          )}
        </thead>
        <tbody>
          {subjects.length ? (
            subjects.map((data, index) => {
              if (withGrade)
                return (
                  <tr>
                    <th key={index} scope="row">
                      {index + 1}
                    </th>
                    <td>{data.name}</td>
                    <td>{data.grade.toUpperCase()}</td>
                  </tr>
                );
              else
                return (
                  <tr key={index + 1}>
                    <th scope="row">{index}</th>
                    <td>{data}</td>
                  </tr>
                );
            })
          ) : withGrade ? (
            <tr>
              <th scope="row">No Data</th>
              <td>No Data</td>
              <td>No Data</td>
            </tr>
          ) : (
            <tr>
              <th scope="row">No Data</th>
              <td>No Data</td>
            </tr>
          )}
        </tbody>
      </table>
    </React.Fragment>
  );
}

export function WorkTable({ data, notRiasec, name }) {
  return (
    <React.Fragment>
      <h3 className="text-muted text-center">{name}</h3>
      {/* </label> */}
      <table className="table table-bordered">
        <thead>
          {notRiasec ? (
            <tr>
              <th scope="col">#</th>
              <th scope="col">Course</th>
              <th scope="col">Faculty</th>
              <th scope="col">Description</th>
            </tr>
          ) : (
            <tr>
              <th scope="col">#</th>
              <th scope="col">Job</th>
              <th scope="col">Code</th>
            </tr>
          )}
        </thead>
        <tbody>
          {data.length ? (
            data.map((data, index) => {
              if (notRiasec)
                return (
                  <tr>
                    <th key={index} scope="row">
                      {index + 1}
                    </th>
                    <td className="text-capitalize">{data.name}</td>
                    <td className="text-capitalize">{data.faculty}</td>
                    <td>{data.description}</td>
                  </tr>
                );
              else
                return (
                  <tr>
                    <th key={index} scope="row">
                      {index + 1}
                    </th>
                    <td className="text-capitalize">{data.name}</td>
                    <td className="text-capitalize">{data.code}</td>
                  </tr>
                );
            })
          ) : notRiasec ? (
            <tr>
              <th scope="row">No Data</th>
              <td>No Data</td>
              <td>No Data</td>
              <td>No Data</td>
            </tr>
          ) : (
            <tr>
              <th scope="row">No Data</th>
              <td>No Data</td>
              <td>No Data</td>
            </tr>
          )}
        </tbody>
      </table>
    </React.Fragment>
  );
}

export const DesciplineTable = ({ desciplines }) => {
  const callHer = data => {
    let remaining = [];
    for (let i = 1; i < data.length; i++) {
      remaining.push(data[i]);
    }
    return remaining.map((data, index) => (
      <tr key={index}>
        <td>{data.name}</td>
        <td>{data.skills}</td>
        <td>{data.description}</td>
        <td>
          <a
            className="btn btn-info btn-md"
            target="_blank"
            href={
              data.link.includes("https://")
                ? data.link
                : `https://${data.link}`
            }
          >
            {data.link.replace("https://", "").replace("www.", "")}
          </a>
        </td>
      </tr>
    ));
  };
  return (
    <React.Fragment>
      {desciplines.length ? (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>Descipline</th>
              <th>Field Name</th>
              <th>Skills Needed</th>
              <th>Description</th>
              <th>Helpful Link</th>
            </tr>
          </thead>
          <tbody>
            {desciplines.map((data, index) => {
              console.log(data);
              return (
                <React.Fragment key={data._id}>
                  <tr>
                    <th scope="row" rowSpan={data.descipline.fields.length}>
                      {index + 1}
                    </th>
                    <td rowSpan={data.descipline.fields.length}>
                      {data.descipline.name}
                    </td>
                    <td>{data.descipline.fields[0].name}</td>
                    <td>{data.descipline.fields[0].skills}</td>
                    <td>{data.descipline.fields[0].description}</td>
                    <td>
                      <a
                        className="btn btn-info btn-md"
                        target="_blank"
                        href={
                          data.descipline.fields[0].link.includes("https://")
                            ? data.descipline.fields[0].link
                            : `https://${data.descipline.fields[0].link}`
                        }
                      >
                        {data.descipline.fields[0].link
                          .replace("https://", "")
                          .replace("www.", "")}
                      </a>
                    </td>
                  </tr>
                  {callHer(data.descipline.fields)}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      ) : (
        <h5 className="mb-3 text-center">Alfred Style</h5>
      )}
    </React.Fragment>
  );
};
