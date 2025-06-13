import { Routes, Route } from 'react-router-dom';

        {/* Ruta protegida para admin */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute role="admin">
              <div className="d-flex">
                <Aside />
                <div className="flex-grow-1">
                  <Header />
                  <Content />
                </div>
              </div>
            </ProtectedRoute>
          }
        />
        {/* Ruta protegida para cliente */}
        <Route
          path="/cliente"
          element={
            <ProtectedRoute role="cliente">
              <ClienteDashboard userName="Nombre del Cliente" />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;