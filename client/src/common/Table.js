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
  return (
    <React.Fragment>
      {desciplines.length ? (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Descipline</th>
              <th scope="col">Field Name</th>
              <th scope="col">Skills Needed</th>
              <th scope="col">Description</th>
              <th scope="col">Helpful Link</th>
            </tr>
          </thead>
          <tbody>
            {desciplines.map((data, index) => {
              return (
                <tr key={data._id}>
                  <th scope="row">{index + 1}</th>
                  <td>{data.descipline.name}</td>
                  {data.descipline.fields.map(field => (
                    <React.Fragment key={field._id}>
                      <td>{field.name} </td>
                      <td>{field.skills} </td>
                      <td>{field.description} </td>
                      <td>{field.link} </td>
                    </React.Fragment>
                  ))}
                  {/* <td>{data.grade.toUpperCase()}</td> */}
                </tr>
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
