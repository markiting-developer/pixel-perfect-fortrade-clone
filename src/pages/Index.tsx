
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
      
      {/* Content - Mobile optimized layout */}
      <div className="relative z-10 min-h-screen flex flex-col px-6 pt-20 md:pt-0 md:flex-row md:items-center md:justify-center md:px-8">
        <main className="w-full max-w-md mx-auto md:mx-0">
          <SignupForm />
        </main>
      </div>
    </div>
  );
};

export default Index;
