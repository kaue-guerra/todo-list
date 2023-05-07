
export default function Home() {
  return (
    <div className="w-full h-screen bg-gray-100 pt-8">
      <div className="bg-white p-3 max-w-md mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-violet-800">ToDo App</h1>
          <div className="mt-4 flex">
            <input
              className="w-80 border-b-2 border-violet-700 text-violet-700 focus:outline-none placeholder:text-violet-300"
              type="text" placeholder="Tarefa"
            />
            <button
              className="ml-2 border-2 border-violet-700 p-2 text-violet-700 hover:text-white hover:bg-violet-700  rounded-lg flex"
            >
              <svg className="h-6 w-6" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <circle cx="12" cy="12" r="9" />  <line x1="9" y1="12" x2="15" y2="12" />  <line x1="12" y1="9" x2="12" y2="15" /></svg>
              <span>Adicionar</span>
            </button>
          </div>
        </div>
        <div className="mt-8">
          <ul>
            <li className="p-2 rounded-lg" >
              <div className="flex align-middle flex-row justify-between">
                <div className="p-2 ">
                  <input type="checkbox" className="h-6 w-6" />
                </div>
                <div className="p-2">
                  <p className="text-lg text-blue-600">Wash disc</p>
                </div>
                <button
                  className="flex text-red-500 border-2 border-red-500 p-2 rounded-lg">
                  <svg className="h-6 w-6 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <circle cx="12" cy="12" r="10" />  <line x1="15" y1="9" x2="9" y2="15" />  <line x1="9" y1="9" x2="15" y2="15" /></svg>
                  <span>Remove</span>
                </button>
              </div>
              <hr className="mt-2" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
