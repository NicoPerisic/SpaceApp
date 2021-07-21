import React from "react";

const Attendees = () => {
  return (
      <div>
          <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#modalAttendees">
      ver modal
    </button>
    
    <div className="modal fade" id="modalAttendees" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Lista de Asistentes</h5>
            <button type="button" id="btnCloseModal" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
                 <form id='modalAttendees'>
              <div className="form-row">
                <div className="col">
                  <input type="email" className="form-control" placeholder="Correo" />
                </div>
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre Completo"
                  />
                </div>
                <button className="btnClose">X</button>
              </div>
              <div className="form-row">
                <div className="col">
                  <input type="email" className="form-control" placeholder="Correo" />
                </div>
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre Completo"
                  />
                </div>
                <button className="btnClose">X</button>
              </div>
              <div className="form-row">
                <div className="col">
                  <input type="email" className="form-control" placeholder="Correo" />
                </div>
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre Completo"
                  />
                </div>
                <button className="btnClose">X</button>
              </div>
              <div className="form-row">
                <div className="col">
                  <input type="email" className="form-control" placeholder="Correo" />
                </div>
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre Completo"
                  />
                </div>
                <button className="btnClose">X</button>
              </div>
              <button className="btnPlus">Listo</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Attendees;
