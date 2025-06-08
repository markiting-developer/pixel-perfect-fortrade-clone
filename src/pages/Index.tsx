
import Header from "../components/Header";
import SignupForm from "../components/SignupForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/lovable-uploads/96de624d-caa4-4c99-bd8b-90b27c254514.png')"
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-900/60" />
      
      {/* Header with Fortrade Logo */}
      <Header />
      
      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-end pr-8 lg:pr-16">
        <main className="w-full max-w-md">
          <SignupForm />
        </main>
      </div>
    </div>
  );
};

export default Index;
