import Header from './Header'
import { Bar, Line } from 'react-chartjs-2'
import { Chart, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'

Chart.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend);

export default function Content() {
  // Datos de ejemplo
  const ventasPorMes = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
    datasets: [
      {
        label: 'Libros vendidos',
        data: [120, 150, 180, 90, 200, 170],
        backgroundColor: '#3498db',
      },
    ],
  };

  const ventasPorSemana = {
    labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
    datasets: [
      {
        label: 'Ventas',
        data: [40, 55, 60, 45],
        fill: false,
        borderColor: '#e67e22',
        tension: 0.4,
      },
    ],
  };

  return (
    <>
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content" className="container-fluid">
          <h1 className="h3 mb-4 text-gray-800">Dashboard</h1>
          {/* Tarjetas resumen */}
          <div className="row mb-4">
            <div className="col-md-3 mb-3">
              <div className="card border-left-primary shadow h-100 py-2">
                <div className="card-body">
                  <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Ventas Totales</div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">1,200</div>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card border-left-success shadow h-100 py-2">
                <div className="card-body">
                  <div className="text-xs font-weight-bold text-success text-uppercase mb-1">Usuarios</div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">350</div>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card border-left-info shadow h-100 py-2">
                <div className="card-body">
                  <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Libros</div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">80</div>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card border-left-warning shadow h-100 py-2">
                <div className="card-body">
                  <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">Reseñas</div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">120</div>
                </div>
              </div>
            </div>
          </div>
          {/* Gráficas */}
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="card shadow mb-4">
                <div className="card-header py-3">
                  <h6 className="m-0 font-weight-bold text-primary">Libros más vendidos por mes</h6>
                </div>
                <div className="card-body">
                  <Bar data={ventasPorMes} />
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card shadow mb-4">
                <div className="card-header py-3">
                  <h6 className="m-0 font-weight-bold text-primary">Ventas por semana</h6>
                </div>
                <div className="card-body">
                  <Line data={ventasPorSemana} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

