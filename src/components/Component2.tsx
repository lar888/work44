import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Component2 = () => {
	const { users, loading, error } = useContext(AppContext)

  if (loading) return <p>Loading users...</p>
  if (error) return <p style={{ color: 'red' }}>{error}</p>

  return (
    <div>
			<h4>Component2</h4>
    	<ul className="list-group mb-4">
	      {users.map(({id, name, email}) => (
	        <li key={id} className="list-group-item">{name} ({email})</li>
	      ))}
	    </ul>
    </div>
  )
};

export default Component2;