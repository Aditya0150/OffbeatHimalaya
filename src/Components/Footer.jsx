const Footer = () => {
    return (
      <footer className="bg-primary text-white p-6 text-center">
        <img src="/Off Beat Himalya Logo.png" alt="Off Beat Himalaya Logo" className="h-10 mx-auto mb-2" />
        <p>&copy; {new Date().getFullYear()} Off Beat Himalaya. All Rights Reserved.</p>
      </footer>
    );
  };
  
  export default Footer;