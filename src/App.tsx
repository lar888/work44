import Provider from './components/Provider'
import UserList from './components/UserList'

const App = () => {
  return (
    <Provider>
      <div className="container">
        <div className="col-6 mx-auto">
          <h1 className="text-center my-5">React Context</h1>
          <UserList />
        </div>
      </div>
    </Provider>
  )
}

export default App
