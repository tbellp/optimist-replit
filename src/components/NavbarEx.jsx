import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Modal, Button } from 'react-bootstrap';
import { useState } from 'react';
import '/src/components/NavbarEx.css';

export default function NavbarEx({ onSelect }) {
  const [expanded, setExpanded] = useState(false);
  const [showLogin, setShowLogin] = useState(false); // 🔹 controla el popup

  const handleSelect = (key) => {
    onSelect(key);
    setExpanded(false); // 🔹 Cierra el menú
  };

  const handleOpenLogin = () => setShowLogin(true);
  const handleCloseLogin = () => setShowLogin(false);

  return (
    <>
      <Navbar 
        bg="dark" 
        variant="dark" 
        expand="lg" 
        className="px-3"
        expanded={expanded} 
        onToggle={(nextExpanded) => setExpanded(nextExpanded)}
      >
        <Navbar.Brand
          href="#home"
          className="d-flex align-items-center"
          onClick={() => handleSelect('inicio')}
        >
          <img
          src="/src/img/logotr180.png"
            width="36"
            height="36"
            alt="Logo Optimist"
            className="me-2"
          />
          Optimist® | Enfría
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="nav-menu" />
        <Navbar.Collapse id="nav-menu">
          <Nav className="ms-auto align-items-center">
            <Nav.Link onClick={() => handleSelect('inicio')}>Inicio</Nav.Link>
            <Nav.Link onClick={() => handleSelect('aboutus')}>AboutUs</Nav.Link> 
            <Nav.Link onClick={() => handleSelect('agro')}>Agro</Nav.Link>
            <Nav.Link onClick={() => handleSelect('b2b')}>Crianza</Nav.Link>
            <Nav.Link onClick={() => handleSelect('comercial')}>Comercial</Nav.Link>
            <Nav.Link onClick={() => handleSelect('indust')}>Industrial</Nav.Link>
            <Nav.Link onClick={() => handleSelect('particular')}>Particular</Nav.Link>
            <Nav.Link onClick={() => handleSelect('contacto')}>Contacto</Nav.Link>

            {/* 🔹 Link de Login CRM en gris oscuro */}
            <Nav.Link 
              onClick={handleOpenLogin} 
              style={{ color: '#aaa', fontWeight: '500' }}
            >
              Log in CRM
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* 🔹 Popup con Modal */}
      <Modal show={showLogin} onHide={handleCloseLogin} centered>
        <Modal.Header closeButton>
          <Modal.Title>Iniciar sesión CRM</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Contraseña</label>
              <input type="password" className="form-control" />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseLogin}>
            Cancelar
          </Button>
          <Button 
            variant="primary" 
            onClick={() => {
              alert("Login enviado 🚀");
              handleCloseLogin();
            }}
          >
            Ingresar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
