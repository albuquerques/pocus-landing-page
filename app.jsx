/* App composition + mount */
function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Hero />
        <UrgencyBar />
        <Problema />
        <Solucao />
        <MetodoLeitura />
        <Metodo />
        <Professores />
        <Investimento />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
