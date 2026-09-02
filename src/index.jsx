import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Footer from './assets/Footer'
import Avatar from './assets/Avatar'
import Form from './components/Form'
import RedesSoc from './components/RedesSoc'
import OptimistMap from './components/OptimistMap'


ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
		{/*<Avatar /> contenido cambia segun origen*/}
		
		<Form />
		<RedesSoc />
		<OptimistMap />
		<Footer />
	</React.StrictMode>
)