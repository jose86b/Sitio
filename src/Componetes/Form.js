import React from 'react'
import './ComponetesCSS/Form.css';

function Form() {
  return (
    <div>
  <form className="main-header navbar navbar-expand navbar-white navbar-light">
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Titulo</label>
      <input type="titulo" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      <div id="emailHelp" className="form-text"></div>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">Contenido</label>
      <input type="contenido" className="form-control" id="exampleInputPassword1" />
    </div>
    <button type="submit" className="btn btn-primary">Guardar</button>
  </form>
</div>

  )
}

export default Form