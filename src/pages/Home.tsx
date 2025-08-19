import { useAuth } from "../contexts/AuthContext";

function Home() {
  const { logout, user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-8">
            Bem-vindo ao ConectaMente
          </h1>
          <p className="text-gray-600 mb-8">
            Você está logado com sucesso na área protegida.
          </p>

          {
            user && (
              <p className="text-gray-600 mb-8">
                Olá, {user.name} pronto para explorar o ConectaMente!
              </p>
            )
          }


          <button
            onClick={logout}
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Logout
          </button>
        </div>
      </div>
    </div >
  );
};


export default Home